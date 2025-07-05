import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { Segment } from '@/lib/pokemon/la/fixtures';
import { PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator';

export interface SegmentPointsDisplayProps extends ComponentProps<'div'> {
  pokemon: PokedexPokemonState,
  segments: { id: Segment; name: string }[];
}

export function SegmentPointsDisplay({
  pokemon,
  segments,
  className,
  ...props
}: SegmentPointsDisplayProps) {
  // Filter out segments with 0 points and sort by segment order
  const segmentsWithPoints = segments.map((segment) => ({
    id: segment.id,
    name: segment.name,
    points: pokemon.pointsBySegments[segment.id] ?? 0,
  }))
    .filter((segment) => segment.points > 0);

  if (segmentsWithPoints.length === 0) {
    return (
      <div className={twMerge('text-sm text-on-surface-variant', className)} {...props}>
        No points earned yet
      </div>
    );
  }

  return (
    <div className={className} {...props}>
      <div className="text-sm font-semibold text-on-surface mb-2">
        Points by Segment
      </div>
      <div className="space-y-1">
        {segmentsWithPoints.map(({ id, points, name }) => (
          <div
            key={id}
            className="flex justify-between items-center text-sm bg-surface-container-high rounded px-2 py-1"
          >
            <span className="text-on-surface-variant">
              {name}
            </span>
            <span className="font-semibold text-primary">
              {points}
            </span>
          </div>
        ))}
        <div className="border-t border-outline/20 pt-1 mt-2">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-on-surface">Total</span>
            <span className="text-primary">
              {segmentsWithPoints.reduce((sum, { points }) => sum + points, 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
