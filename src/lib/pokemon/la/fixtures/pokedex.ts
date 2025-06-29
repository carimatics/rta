import { Move } from './move';
import { MoveType } from './move-type';
import { Pokemon } from './pokemon';
import { Task } from './task';

export interface PokedexTask {
  readonly id: Task;
  readonly option?: Move | MoveType;
  readonly reward: number;
  readonly requirements: number[];
}

export type Pokedex = Record<
  Pokemon,
  {
    tasks: PokedexTask[];
  }
>;

export const pokedex: Pokedex = {
  [Pokemon.Rowlet]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Leafage,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Roost,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AerialAce,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Dartrix]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Leafage,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Roost,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AerialAce,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Decidueye]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.TripleArrows,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.LeafBlade,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.LeafStorm,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Cyndaquil]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Ember,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.QuickAttack,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FlameWheel,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Quilava]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Ember,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.QuickAttack,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FlameWheel,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Typhlosion]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.InfernalParade,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Flamethrower,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Overheat,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Oshawott]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AquaJet,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaterPulse,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Slash,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Dewott]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AquaJet,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaterPulse,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Slash,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Samurott]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.CeaselessEdge,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AquaTail,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.HydroPump,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Bidoof]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Bidoof,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Bibarel]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bite,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AquaTail,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Starly]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Staravia]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AerialAce,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Staraptor]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtInTheAir,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Rock,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AirSlash,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BraveBird,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Shinx]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.QuickAttack,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bite,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Luxio]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bite,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ThunderFang,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Luxray]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ThunderFang,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Crunch,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WildCharge,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Wurmple]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PoisonSting,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Silcoon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtDaylight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Flying,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PoisonSting,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Beautifly]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtDaylight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Rock,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.StunSpore,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Cascoon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 20],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PoisonSting,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Cascoon,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Dustox]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Psychic,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PoisonPowder,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Ponyta]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Water,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Ember,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Ponyta,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Rapidash]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Water,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FireBlast,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Eevee]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.QuickAttack,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3, 5, 10],
      },
      {
        id: Task.Eevee,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Vaporeon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AquaTail,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Jolteon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Thunderbolt,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Flareon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Flamethrower,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Espeon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Psychic,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Umbreon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DarkPulse,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Leafeon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.LeafBlade,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Glaceon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IceBeam,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Sylveon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FairyWind,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Zubat]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtDaylight,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Rock,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Gust,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Zubat,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Golbat]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ice,
        reward: 20,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Psychic,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bite,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AirCutter,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Crobat]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.CaughtInTheAir,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ice,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.CrossPoison,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.LeechLife,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Drifloon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ghost,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Confusion,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Hypnosis,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Drifloon,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Drifblim]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Dark,
        reward: 20,
        requirements: [1, 3, 10, 25, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MysticalFire,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SelfDestruct,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Kricketot]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Kricketune]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Slash,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.XScissor,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Buizel]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AquaJet,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Floatzel]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaterPulse,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Burmy]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Flying,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.StruggleBug,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 20,
        requirements: [3],
      },
      {
        id: Task.LeapOutTree,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Wormadam]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Confusion,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BugBuzz,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.LeapOutTree,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 20,
        requirements: [3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Mothim]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Rock,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SilverWind,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BugBuzz,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Geodude]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Rollout,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Water,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.LeapOutOre,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Graveler]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.RockSlide,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.LeapOutOre,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Golem]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Steel,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.StealthRock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Stantler]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PsyshieldBash,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Wrydeer]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PsyshieldBash,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Extrasensory,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Munchlax]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Rest,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 5, 10, 15, 20],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Snorlax]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 10, 20, 30, 50],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Paras]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Absorb,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.StunSpore,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Parasect]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Flying,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Spore,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Venoshock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Parasect,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Pichu]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtSmall,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.CaughtDaylight,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Pikachu]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ThunderShock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Thunderbolt,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Raichu]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IronTail,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Thunder,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Abra]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Teleport,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Scared,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Kadabra]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Bug,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.CalmMind,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PsychoCut,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Alakazam]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Dark,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Recover,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Psychic,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Chimchar]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Ember,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Monferno]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FlameWheel,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Flamethrower,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Infernape]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FlareBlitz,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.RagingFury,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Buneary]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Lopunny]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DrainingKiss,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.CloseCombat,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Cherubi]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 5, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Absorb,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.LeapOutTree,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Cherrim]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtDaylight,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PetalDance,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.LeapOutTree,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Psyduck]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Confusion,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Golduck]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ZenHeadbutt,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AquaTail,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Stunned,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Scared,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Combee]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Rock,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Gust,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.LeapOutTree,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Combee,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Vespiquen]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AirSlash,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BugBuzz,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.LeapOutTree,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Scyther]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Rock,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AirSlash,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.XScissor,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Kleavor]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.StoneAxe,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.XScissor,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Scizor]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleHit,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.XScissor,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Heracross]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLarge,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.LeapOutTree,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.MimeJr]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Mimic,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.MrMime]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Mimic,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Scared,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.MrMime,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Aipom]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleHit,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.LeapOutTree,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Ambipom]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleHit,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IronTail,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Magikarp]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Splash,
        reward: 20,
        requirements: [1, 5, 20, 50, 100],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3, 5, 10],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Gyarados]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtInTheAir,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bite,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Hurricane,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Shellos]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtSmall,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaterPulse,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.DifferentForms,
        reward: 20,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Gastrodon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MudBomb,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 20,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Qwilfish]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BarbBarrage,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Overqwil]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BarbBarrage,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DarkPulse,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Happiny]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Chansey]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SoftBoiled,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 5, 10, 15, 20],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Blissey]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DrainingKiss,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Blissey,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Budew]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.CaughtDaylight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Absorb,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Roselia]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtDaylight,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Psychic,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PoisonPowder,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Roserade]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Flying,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.EnergyBall,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PetalDance,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Carnivine]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Flying,
        reward: 20,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AcidSpray,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Stunned,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Petilil]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtSmall,
        reward: 20,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PoisonPowder,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Lilligant]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PetalDance,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.VictoryDance,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Tangela]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AncientPower,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Tangrowth]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Poison,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleHit,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.EnergyBall,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Barboach]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MudSlap,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MudBomb,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Whiscash]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MudBomb,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AquaTail,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Croagunk]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Psychic,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MudBomb,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Scared,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Croagunk,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Toxicroak]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Psychic,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Venoshock,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.NastyPlot,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Scared,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Ralts]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtSmall,
        reward: 20,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Hypnosis,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Kirlia]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtSmall,
        reward: 20,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DrainingKiss,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Gardevoir]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Steel,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DazzlingGleam,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Psychic,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Gallade]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ghost,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SwordsDance,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.CloseCombat,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Yanma]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtEvening,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Rock,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AncientPower,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Yanmega]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Flying,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AncientPower,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BugBuzz,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Hippopotas]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bite,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Hippowdon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ice,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MudBomb,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Pachirisu]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Spark,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.LeapOutTree,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Pachirisu,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Stunky]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PoisonGas,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AcidSpray,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Skuntank]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Venoshock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Flamethrower,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Stunned,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Teddiursa]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BabyDollEyes,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Ursaring]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bulldoze,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Slash,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Scared,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Ursaluna]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.HeadlongRush,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Goomy]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AcidSpray,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AcidArmor,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Sliggoo]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaterPulse,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IronHead,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Goodra]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DragonPulse,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Shelter,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Onix]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Water,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.RockSlide,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.StealthRock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Steelix]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.StealthRock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IronTail,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Rhyhorn]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.StealthRock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Stunned,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Rhydon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Water,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.RockSlide,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Rhyperior]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ice,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.RockSlide,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Bonsly]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Mimic,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.LeapOutOre,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Sudowoodo]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Water,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Mimic,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Scared,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Sudowoodo,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Lickitung]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Rollout,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 10, 20, 30, 50],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Lickilicky]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ZenHeadbutt,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.GigaImpact,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Togepi]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtSmall,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DrainingKiss,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Togetic]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtInTheAir,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FairyWind,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AirSlash,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Togekiss]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.CaughtInTheAir,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AirSlash,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Extrasensory,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Moonblast,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Turtwig]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Leafage,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Grotle]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bite,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.LeafBlade,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Torterra]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ice,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WoodHammer,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.HeadlongRush,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Porygon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Tackle,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.TriAttack,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Porygon2]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Thunderbolt,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Recover,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.PorygonZ]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Thunderbolt,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Recover,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.HyperBeam,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Gastly]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ghost,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Astonish,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Scared,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Haunter]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Dark,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Venoshock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Scared,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Gengar]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Hypnosis,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ShadowBall,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Spiritomb]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Hex,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DarkPulse,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Murkrow]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Rock,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Roost,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Honchkrow]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.CaughtInTheAir,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fairy,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Snarl,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DarkPulse,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Unown]: {
    tasks: [
      {
        id: Task.DifferentForms,
        reward: 20,
        requirements: [1, 5, 10, 15, 28],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Spheal]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Rollout,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.Scared,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Sealeo]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Rock,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Liquidation,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Walrein]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IceBeam,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Blizzard,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Remoraid]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ChargeBeam,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IceBeam,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Octillery]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.HydroPump,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.HyperBeam,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Skorupi]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtSmall,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PoisonSting,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Drapion]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Venoshock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.CrossPoison,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Growlithe]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Water,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FireFang,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Arcanine]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.RockSlide,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.RagingFury,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FlareBlitz,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Glameow]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.NastyPlot,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Purugly]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PlayRough,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 5, 10, 15, 20],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Machop]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Flying,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.RockSmash,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Machoke]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Psychic,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BulletPunch,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Machamp]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fairy,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BulkUp,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.CloseCombat,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Chatot]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtDaylight,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AirCutter,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Duskull]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ghost,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Hex,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Scared,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Dusclops]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ghost,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DarkPulse,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ShadowBall,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Dusknoir]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Dark,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DarkPulse,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ShadowBall,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Piplup]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bubble,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Prinplup]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaterPulse,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Roost,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Empoleon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.HydroPump,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaveCrash,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Mantyke]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtSmall,
        reward: 20,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaterPulse,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Mantine]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AirSlash,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Basculin]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaveCrash,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Basculegion]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaveCrash,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ShadowBall,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Vulpix]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Ember,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Vulpix,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Ninetales]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Water,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Flamethrower,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FireBlast,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Tentacool]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bubble,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Tentacruel]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PoisonJab,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.HydroPump,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Finneon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Bubble,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Lumineon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SilverWind,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Magby]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FlameWheel,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Magmar]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Water,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Flamethrower,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FireBlast,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Magmortar]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FirePunch,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Flamethrower,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FireBlast,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Magnemite]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ThunderShock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ThunderWave,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Magneton]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Spark,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.TriAttack,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Magnezone]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtInTheAir,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FlashCannon,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Thunderbolt,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Bronzor]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Confusion,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.LeapOutOre,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Bronzong]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 20,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ghost,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FlashCannon,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Extrasensory,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Elekid]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Spark,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Electabuzz]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ThunderPunch,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Thunder,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Electivire]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ThunderWave,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ThunderPunch,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Gligar]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ice,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MudBomb,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Gliscor]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Water,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MudBomb,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.XScissor,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Stunned,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Gible]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ice,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Twister,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Slash,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Gabite]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Dragon,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DragonClaw,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Garchomp]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fairy,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DragonClaw,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Outrage,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 5, 20, 50, 100],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Nosepass]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IronDefense,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.LeapOutOre,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Nosepass,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Probopass]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Ground,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PowerGem,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.EarthPower,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Stunned,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Voltorb]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Spark,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Scared,
        reward: 20,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Electrode]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Thunder,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Chloroblast,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SelfDestruct,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Rotom]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ThunderShock,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DifferentForms,
        reward: 20,
        requirements: [2, 4, 6],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Chingling]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Confusion,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Scared,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Chimecho]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.OminousWind,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Extrasensory,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Chimecho,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Misdreavus]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 20,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Hex,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Mismagius]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Dark,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Hex,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PowerGem,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Cleffa]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtSmall,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtSleeping,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Clefairy]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DrainingKiss,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Clefairy,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Clefable]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Poison,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Psychic,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Moonblast,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Sneasel]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Slash,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 4, 6, 8],
      },
      {
        id: Task.DifferentForms,
        reward: 20,
        requirements: [4],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Sneaslar]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DireClaw,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SwordsDance,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Weavile]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Slash,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SwordsDance,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Snorunt]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IceFang,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Glalie]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtHeavy,
        reward: 20,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Steel,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IceFang,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Crunch,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Froslass]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IcicleCrash,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.GivenFood,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Cranidos]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AncientPower,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Rampardos]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IronHead,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DoubleEdge,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.HeadSmash,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Shieldon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtHeavy,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AncientPower,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Bastiodon]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IronDefense,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.EarthPower,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.StealthRock,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Swinub]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.CaughtWithoutSpotted,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IceShard,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Swinub,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Piloswine]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 20,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Grass,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AncientPower,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Mamoswine]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.CaughtAlpha,
        reward: 20,
        requirements: [1, 2, 3],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.HighHorsepower,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Blizzard,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Bergmite]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IceShard,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.LeapOutOre,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Avalugg]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtHeavy,
        reward: 10,
        requirements: [1, 2, 3, 5, 7],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fighting,
        reward: 10,
        requirements: [1, 2, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MountainGale,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Blizzard,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Snover]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtLarge,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.PowderSnow,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Abomasnow]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Blizzard,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WoodHammer,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.DifferentForms,
        reward: 10,
        requirements: [2],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Zorua]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtNight,
        reward: 10,
        requirements: [1, 2, 5, 10, 20],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Dark,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Snarl,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Zoroark]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Dark,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BitterMalice,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.NastyPlot,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Rufflet]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.CaughtLight,
        reward: 10,
        requirements: [1, 2, 5, 7, 10],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Electric,
        reward: 20,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AirSlash,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Roost,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Braviary]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtInTheAir,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.SeenUseMove,
        option: Move.EsperWing,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BraveBird,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Riolu]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Flying,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.RockSmash,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.GivenFood,
        reward: 20,
        requirements: [1, 2, 3, 4, 5],
      },
      {
        id: Task.Stunned,
        reward: 10,
        requirements: [1, 3, 5, 7, 10],
      },
      {
        id: Task.Evolved,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Lucario]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.CaughtAlpha,
        reward: 10,
        requirements: [1],
      },
      {
        id: Task.Defeated,
        reward: 10,
        requirements: [1, 2, 4, 10, 15],
      },
      {
        id: Task.DefeatedWithMoveType,
        option: MoveType.Fire,
        reward: 10,
        requirements: [1, 2, 4, 6, 10],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AuraSphere,
        reward: 20,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.SeenUseMove,
        option: Move.CloseCombat,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Stunned,
        reward: 20,
        requirements: [1, 5, 10, 15, 20],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Uxie]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MysticalPower,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.CalmMind,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Mesprit]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MysticalPower,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Recover,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Azelf]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MysticalPower,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SelfDestruct,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 10, 30, 70],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Heatran]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.FireFang,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.MagmaStorm,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Regigigas]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IronHead,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.GigaImpact,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Cresselia]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Moonblast,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.LunarBlessing,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Tornadus]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Extrasensory,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.BleakwindStorm,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Thundurus]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Extrasensory,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WildboltStorm,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Landorus]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Extrasensory,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SandsearStorm,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Enamorus]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Extrasensory,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SpringtideStorm,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Dialga]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.IronTail,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.RoarOfTime,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Palkia]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.AquaTail,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SpacialRend,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Giratina]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ShadowClaw,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ShadowForce,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Arceus]: {
    tasks: [
      {
        id: Task.Arceus,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Phione]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.WaterPulse,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ZenHeadbutt,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Manaphy]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.Moonblast,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.TakeHeart,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Shaymin]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.EarthPower,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.SeedFlare,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
  [Pokemon.Darkrai]: {
    tasks: [
      {
        id: Task.Caught,
        reward: 20,
        requirements: [1],
      },
      {
        id: Task.SeenUseMove,
        option: Move.ShadowBall,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseMove,
        option: Move.DarkVoid,
        reward: 20,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.SeenUseStrongStyleMove,
        reward: 20,
        requirements: [1, 3, 8, 20, 40],
      },
      {
        id: Task.SeenUseAgileStyleMove,
        reward: 10,
        requirements: [1, 3, 6, 12, 25],
      },
      {
        id: Task.Complete,
        reward: 100,
        requirements: [1],
      },
    ],
  },
} as const;
