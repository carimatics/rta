import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { Segment } from '@/lib/pokemon/la/fixtures';

export interface SegmentSelectProps extends ComponentProps<'div'> {
  segments: { id: Segment; name: string }[];
  currentSegment: Segment;
  updateSegment: (segment: Segment) => void;
}

export function SegmentSelect({
  segments,
  currentSegment,
  updateSegment,
  className,
  ...props
}: SegmentSelectProps) {
  return (
    <div className={twMerge('flex items-center gap-2', className)} {...props}>
      <select
        className="border-outline rounded-md border-1 px-1 py-2 shadow-md"
        value={currentSegment}
        onChange={(e) => updateSegment(parseInt(e.target.value) as Segment)}
      >
        {segments.map((segment) => (
          <option key={segment.id} value={segment.id}>
            {segment.name}
          </option>
        ))}
      </select>
    </div>
  );
}
