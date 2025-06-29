import { Move, MoveType, Place, Pokemon, Segment, Task } from '../fixtures';

export interface Dictionary {
  move(id: Move): string;

  moveType(id: MoveType): string;

  place(id: Place): string;

  pokemon(id: Pokemon): string;

  segment(id: Segment): string;

  task(id: Task, option?: number): string;
}
