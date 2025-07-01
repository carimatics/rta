import { Segment } from '@/lib/pokemon/la/fixtures';

/**
 * Type representing points earned across different game segments.
 * Maps each segment to the number of points earned in that segment.
 * 
 * @example
 * ```typescript
 * const points: PointsBySegments = {
 *   [Segment.Village1]: 20,
 *   [Segment.Fieldlands1]: 30,
 *   [Segment.Fieldlands2]: 15
 * };
 * ```
 */
export type PointsBySegments = Record<Segment, number>;
