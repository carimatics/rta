import { clamp, closedRange, range } from '@/lib/utils/range';
import { Pokemon, Segment } from '../fixtures';

export function clampPokemon(value: Pokemon): Pokemon {
  return clamp(value, Pokemon.Rowlet, Pokemon.Darkrai);
}

export function clampSegment(value: Segment): Segment {
  return clamp(value, Segment.Village1, Segment.Highlands3);
}

export function closedRangePokemons(first: Pokemon = Pokemon.Rowlet, last: Pokemon = Pokemon.Darkrai): Pokemon[] {
  const _first = clampPokemon(first);
  const _last = clampPokemon(last);
  return _first <= _last ? (closedRange(_first, _last) as Pokemon[]) : [];
}

export function rangeSegments(begin: Segment = Segment.Village1, end: Segment = Segment.Highlands3): Segment[] {
  const _begin = clampSegment(begin);
  const _end = clampSegment(end);
  return _begin <= _end ? (range(_begin, _end) as Segment[]) : [];
}

export function closedRangeSegments(first: Segment = Segment.Village1, last: Segment = Segment.Highlands3): Segment[] {
  const _first = clampSegment(first);
  const _last = clampSegment(last);
  return _first <= _last ? (closedRange(_first, _last) as Segment[]) : [];
}
