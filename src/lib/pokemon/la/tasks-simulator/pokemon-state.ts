import { Move, MoveType, Pokemon, Segment, Task } from '@/lib/pokemon/la/fixtures';
import { PointsBySegments } from '@/lib/pokemon/la/tasks-simulator/points-by-segments';

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
