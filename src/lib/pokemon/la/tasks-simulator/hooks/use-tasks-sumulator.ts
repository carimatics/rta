import { Move, MoveType, PokedexFixture, Pokemon, Segment, Task } from '@/lib/pokemon/la/fixtures';
import { PointsBySegments } from '@/lib/pokemon/la/tasks-simulator';
import { Dictionary } from '@/lib/pokemon/la/dictionaries';
import { atomWithImmer } from 'jotai-immer';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAtom } from 'jotai';
import { clamp } from '@/lib/utils/range';
import { closedRangeSegments } from '@/lib/pokemon/la/utils/la-range';

export type PokedexPokemonTaskProgress = Record<Segment, number>;

export interface PokedexPokemonTaskState {
  readonly id: Task;
  readonly option?: Move | MoveType;
  readonly name: string;
  readonly points: number;
  readonly pointsBySegments: PointsBySegments;
  readonly reward: number;
  readonly achievedCount: number;
  readonly requirements: number[];
  readonly progress: number;
  readonly progresses: PokedexPokemonTaskProgress;
  readonly min: number;
  readonly max: number;
  readonly first: number;
  readonly last: number;
}

export interface PokedexPokemonState {
  readonly id: Pokemon;
  readonly name: string;
  readonly isArceus: boolean;
  readonly completed: boolean;
  readonly segmentCompleted: Segment | undefined;
  readonly caught: boolean;
  readonly points: number;
  readonly pointsBySegments: PointsBySegments;
  readonly tasks: PokedexPokemonTaskState[];
}

export interface PokedexState {
  readonly pages: PokedexPokemonState[];
  readonly points: number;
  readonly pointsBySegments: PointsBySegments;
}

function createPokedexStateAtom(
  fixture: PokedexFixture,
  dictionary: Dictionary,
) {
  return atomWithImmer<PokedexState>({
    pages: Object.keys(fixture)
      .map((id) => parseInt(id) as Pokemon)
      .sort((a, b) => a - b)
      .map((pokemon) => ({
        id: pokemon,
        name: dictionary.pokemon(pokemon),
        isArceus: pokemon === Pokemon.Arceus,
        completed: false,
        segmentCompleted: undefined as Segment | undefined,
        caught: false,
        points: 0,
        pointsBySegments: {} as PointsBySegments,
        tasks: fixture[pokemon].tasks.map((task) => ({
          id: task.id,
          option: task.option,
          name: dictionary.task(task.id, task.option),
          points: 0,
          pointsBySegments: {} as PointsBySegments,
          reward: task.reward,
          achievedCount: 0,
          requirements: task.requirements,
          progress: 0,
          progresses: {} as PokedexPokemonTaskProgress,
          min: 0,
          max: task.requirements[task.requirements.length - 1],
          first: task.requirements[0],
          last: task.requirements[task.requirements.length - 1],
        })),
      })),
    points: 0,
    pointsBySegments: {} as PointsBySegments,
  });
}

export type TasksSimulatorDoTaskProps = {
  pokemon: Pokemon;
  taskNo: number;
  segment: Segment;
  progress: number;
};

export type TasksSimulatorResetTaskProps = {
  pokemon: Pokemon;
  taskNo: number;
};

export type TasksSimulatorResetPokemonProps = {
  pokemon: Pokemon;
};

export function useTasksSimulator(
  fixture: PokedexFixture,
  dictionary: Dictionary,
) {
  const _fixture = useMemo(() => fixture, [fixture]);
  const _dictionary = useMemo(() => dictionary, [dictionary]);
  
  const [pokedexStateAtom, setPokedexStateAtom] = useState(createPokedexStateAtom(_fixture, _dictionary));
  const [pokedexState, setPokedexState] = useAtom(pokedexStateAtom);

  const getPokemon = useCallback((pokemon: Pokemon): PokedexPokemonState | undefined => {
    return pokedexState.pages.find((page) => page.id === pokemon);
  }, [pokedexState]);

  const doTask: (props: TasksSimulatorDoTaskProps) => void = useCallback(({ pokemon: p, taskNo, segment, progress }) => {
    setPokedexState((draft) => {
      const pokemon = draft.pages.find((page) => page.id === p);
      if (!pokemon) {
        return;
      }

      const normalTasks = pokemon.tasks.slice(0, pokemon.tasks.length - 1);
      if (taskNo < 0 || taskNo >= normalTasks.length) {
        return;
      }

      const updateTask = (task: typeof pokemon.tasks[number], progress: number, segment: Segment) => {
        const newProgress = clamp(progress, task.min, task.max);

        // update progresses
        if (newProgress === 0) {
          delete task.progresses[segment];
        } else {
          task.progresses[segment] = newProgress;
        }
        // fix integrity of progresses
        for (const seg of closedRangeSegments()) {
          const progress = task.progresses[seg];
          if (!progress) {
            continue;
          }
          if (seg < segment && progress >= newProgress) {
            delete task.progresses[seg];
          }
          if (seg > segment && progress <= newProgress) {
            delete task.progresses[seg];
          }
        }

        // update progress
        const progressValues = Object.values(task.progresses);
        task.progress = progressValues.length > 0 ? Math.max(...progressValues) : 0;

        // update achievedCount
        task.achievedCount = task.requirements.findLastIndex((req) => req <= task.progress) + 1;

        // update points
        task.points = task.achievedCount * task.reward;

        // update pointsBySegments
        let previousPoints = 0;
        task.pointsBySegments = {} as PointsBySegments;
        for (const seg of Object.keys(task.progresses).map((s) => parseInt(s) as Segment).sort((a, b) => a - b)) {
          const currentProgress = task.progresses[seg];
          const currentAchievedCount = task.requirements.findLastIndex((req) => req <= currentProgress) + 1;
          const currentPoints = currentAchievedCount * task.reward;
          const increasedPoints = currentPoints - previousPoints;
          if (increasedPoints > 0) {
            task.pointsBySegments[seg] = increasedPoints;
          }
          previousPoints = currentPoints;
        }
      };
      updateTask(normalTasks[taskNo], progress, segment);

      const updatePokemon = () => {
        const catchTask = pokemon.tasks[0];

        // update caught
        pokemon.caught = catchTask.progress > 0;

        // update completed
        const calcSegmentArceusCaught = () => {
          if (!pokemon.isArceus) {
            return undefined;
          }
          const segments = Object.keys(catchTask.progresses);
          if (segments.length === 1) {
            return parseInt(segments[0]) as Segment;
          }
          return undefined;
        };
        const calsSegmentCompleted = () => {
          let totalPoints = 0;
          for (const segment of closedRangeSegments()) {
            totalPoints += normalTasks.reduce(
              (acc, task) => acc + (task.pointsBySegments[segment] ?? 0),
              0
            );
            if (totalPoints >= 100) {
              return segment;
            }
          }
          return undefined;
        };
        pokemon.segmentCompleted = calcSegmentArceusCaught() ?? calsSegmentCompleted();
        pokemon.completed = pokemon.caught && pokemon.segmentCompleted !== undefined;

        // update complete task
        const completeTask = pokemon.tasks[pokemon.tasks.length - 1];
        if (pokemon.completed) {
          updateTask(completeTask, 1, pokemon.segmentCompleted!);
        } else {
          updateTask(completeTask, 0, Segment.Highlands3);
        }

        // update points
        pokemon.points = pokemon.caught
          ? pokemon.tasks.reduce((acc, task) => acc + task.points, 0)
          : 0;

        // update pointsBySegments
        pokemon.pointsBySegments = {} as PointsBySegments;
        if (pokemon.caught) {
          for (const seg of closedRangeSegments()) {
            const points = pokemon.tasks.reduce((acc, task) => acc + (task.pointsBySegments[seg] ?? 0), 0);
            if (points > 0) {
              pokemon.pointsBySegments[seg] = points;
            }
          }
        }
      };
      updatePokemon();

      const updatePokedex = () => {
        // update total points
        draft.points = draft.pages.reduce((acc, page) => acc + page.points, 0);

        // update total pointsBySegments
        draft.pointsBySegments = {} as PointsBySegments;
        for (const seg of closedRangeSegments()) {
          const points = draft.pages.reduce((acc, page) => acc + (page.pointsBySegments[seg] ?? 0), 0);
          if (points > 0) {
            draft.pointsBySegments[seg] = points;
          }
        }
      };
      updatePokedex();
    });
  }, [setPokedexState]);

  const resetTask = useCallback(({ pokemon, taskNo }: TasksSimulatorResetTaskProps) => {
    doTask({ pokemon, taskNo, segment: Segment.Highlands3, progress: 0 });
  }, [doTask]);

  const resetPokemon = useCallback(({ pokemon }: TasksSimulatorResetPokemonProps) => {
    const poke = pokedexState.pages.find((page) => page.id === pokemon);
    if (!poke) {
      return;
    }
    for (let taskNo = 0; taskNo < poke.tasks.length - 1; taskNo++) {
      resetTask({ pokemon, taskNo });
    }
  }, [resetTask, pokedexState.pages]);

  const resetAll = useCallback(() => {
    setPokedexStateAtom(createPokedexStateAtom(_fixture, _dictionary));
  }, [setPokedexStateAtom, _fixture, _dictionary]);

  // updaters
  useEffect(() => {
    setPokedexStateAtom(createPokedexStateAtom(_fixture, _dictionary));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_fixture, setPokedexStateAtom]);
  useEffect(() => {
    setPokedexState((draft) => {
      draft.pages.forEach((page) => {
        page.name = _dictionary.pokemon(page.id);
        page.tasks.forEach((task) => {
          task.name = _dictionary.task(task.id, task.option);
        });
      });
    });
  }, [_dictionary, setPokedexState]);

  return {
    pokedexState,
    doTask,
    getPokemon,
    resetTask,
    resetPokemon,
    resetAll,
  };
}
