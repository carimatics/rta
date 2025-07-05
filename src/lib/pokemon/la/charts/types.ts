import { Language } from '@/lib/pokemon/la/fixtures';
import { PokedexState } from '@/lib/pokemon/la/tasks-simulator/pokemon-state';

export interface ChartData {
  version: string;
  timestamp: string;
  targetPoints: number;
  pokedexState: PokedexState;
  metadata?: {
    title?: string;
    author?: string;
  };
}

export interface ChartViewerProps {
  chartData: ChartData;
  language?: Language;
  readonly?: boolean;
}

export type ChartTabType = 'overview' | 'tasks' | 'task-timeline' | 'export';
