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
  
  const [pokedexAtom, setPokedexAtom] = useState(createPokedexStateAtom(_fixture, _dictionary));
  const [pokedex, setPokedex] = useAtom(pokedexAtom);

  const getPokemon = useCallback((pokemon: Pokemon): PokedexPokemonState | undefined => {
    return pokedex.pages.find((page) => page.id === pokemon);
  }, [pokedex]);

  const doTask: (props: TasksSimulatorDoTaskProps) => void = useCallback(({ pokemon, taskNo, segment, progress }) => {
    setPokedex((draft) => {
      const poke = draft.pages.find((page) => page.id === pokemon);

      // check pokemon
      if (!poke) {
        return;
      }

      const normalTasks = poke.tasks.slice(0, poke.tasks.length - 1);

      // check taskNo
      if (taskNo < 0 || taskNo >= normalTasks.length) {
        return;
      }

      // update target task
      const targetTask = normalTasks[taskNo];

      const updateTask = (task: typeof targetTask, progress: number, segment: Segment) => {
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
      updateTask(targetTask, progress, segment);

      const catchTask = poke.tasks[0];
      poke.caught = catchTask.progress > 0;

      const calcSegmentArceusCaught = (task: typeof catchTask) => {
        if (!poke.isArceus) {
          return undefined;
        }
        const segment = Object.keys(task.progresses);
        if (segment.length === 1) {
          return parseInt(segment[0]) as Segment;
        }
        return undefined;
      };
      const calcSegmentCompleted = (tasks: typeof normalTasks) => {
        let totalPoints = 0;
        for (const seg of closedRangeSegments()) {
          totalPoints += tasks.reduce((acc, task) => acc + (task.pointsBySegments[seg] ?? 0), 0);
          if (totalPoints >= 100) {
            return seg;
          }
        }
        return undefined;
      };
      poke.segmentCompleted = calcSegmentArceusCaught(catchTask) ?? calcSegmentCompleted(normalTasks);

      poke.completed = poke.caught && poke.segmentCompleted !== undefined;
      const completeTask = poke.tasks[poke.tasks.length - 1];
      if (poke.completed) {
        updateTask(completeTask, 1, poke.segmentCompleted!);
      } else {
        updateTask(completeTask, 0, Segment.Highlands3);
      }

      // update points
      poke.points = poke.caught
        ? poke.tasks.reduce((acc, task) => acc + task.points, 0)
        : 0;

      // update pointsBySegments
      poke.pointsBySegments = {} as PointsBySegments;
      if (poke.caught) {
        for (const seg of closedRangeSegments()) {
          const points = poke.tasks.reduce((acc, task) => acc + (task.pointsBySegments[seg] ?? 0), 0);
          if (points > 0) {
            poke.pointsBySegments[seg] = points;
          }
        }
      }

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
    });
  }, [setPokedex]);

  const resetTask = useCallback(({ pokemon, taskNo }: TasksSimulatorResetTaskProps) => {
    doTask({ pokemon, taskNo, segment: Segment.Highlands3, progress: 0 });
  }, [doTask]);

  const resetPokemon = useCallback(({ pokemon }: TasksSimulatorResetPokemonProps) => {
    const poke = pokedex.pages.find((page) => page.id === pokemon);
    if (!poke) {
      return;
    }
    for (let taskNo = 0; taskNo < poke.tasks.length - 1; taskNo++) {
      resetTask({ pokemon, taskNo });
    }
  }, [resetTask, pokedex.pages]);

  const resetAll = useCallback(() => {
    setPokedexAtom(createPokedexStateAtom(_fixture, _dictionary));
  }, [setPokedexAtom, _fixture, _dictionary]);

  // updaters
  useEffect(() => {
    setPokedexAtom(createPokedexStateAtom(_fixture, _dictionary));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_fixture, setPokedexAtom]);
  useEffect(() => {
    setPokedex((draft) => {
      draft.pages.forEach((page) => {
        page.name = _dictionary.pokemon(page.id);
        page.tasks.forEach((task) => {
          task.name = _dictionary.task(task.id, task.option);
        });
      });
    });
  }, [_dictionary, setPokedex]);

  return {
    pokedex,
    doTask,
    getPokemon,
    resetTask,
    resetPokemon,
    resetAll,
  };
}
