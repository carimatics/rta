import React, { useMemo } from 'react';

import { getDictionary } from '@/lib/pokemon/la/dictionaries';
import { Language, Segment } from '@/lib/pokemon/la/fixtures';
import { PokedexState } from '@/lib/pokemon/la/tasks-simulator/pokemon-state';
import { closedRangeSegments } from '@/lib/pokemon/la/utils/la-range';

interface PointsTrendChartProps {
  pokedexState: PokedexState;
  language?: Language;
  className?: string;
}

interface SegmentData {
  segment: Segment;
  name: string;
  points: number;
  cumulativePoints: number;
}

export const PointsTrendChart: React.FC<PointsTrendChartProps> = ({
  pokedexState,
  language = Language.Ja,
  className = ''
}) => {
  const dictionary = getDictionary(language);

  const segmentData: SegmentData[] = useMemo(() => {
    const data: SegmentData[] = [];
    let cumulativePoints = 0;

    // セグメント1から順番に処理
    for (const segment of closedRangeSegments()) {
      const points = pokedexState.pointsBySegments[segment] || 0;
      cumulativePoints += points;

      if (points > 0 || cumulativePoints > 0) { // ポイントがある場合のみ表示
        data.push({
          segment: segment,
          name: dictionary.segment(segment),
          points,
          cumulativePoints
        });
      }
    }

    return data;
  }, [pokedexState.pointsBySegments, dictionary]);

  const maxPoints = Math.max(...segmentData.map(d => d.cumulativePoints), 1);
  const chartHeight = 200;

  if (segmentData.length === 0) {
    return (
      <div className={`${className}`}>
        <h3 className="text-lg font-bold text-on-surface mb-4">Points Trend</h3>
        <div className="text-center py-8 text-on-surface-variant">
          No points data available yet
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-bold text-on-surface mb-4">Points Trend</h3>
      
      <div className="bg-surface-container-high rounded-lg p-4">
        <div className="flex items-end justify-between gap-1 h-48 mb-4">
          {segmentData.map((data) => {
            const height = (data.cumulativePoints / maxPoints) * chartHeight;
            const segmentPoints = data.points;
            
            return (
              <div key={data.segment} className="flex flex-col items-center flex-1 min-w-0">
                <div 
                  className="w-full bg-primary rounded-t transition-all duration-300 hover:bg-primary/80 cursor-pointer group relative"
                  style={{ height: Math.max(height, segmentPoints > 0 ? 4 : 0) }}
                  title={`${data.name}: +${segmentPoints} pts (Total: ${data.cumulativePoints})`}
                >
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-surface text-on-surface text-xs rounded shadow-lg whitespace-nowrap z-10">
                    <div className="font-semibold">{data.name}</div>
                    <div>+{segmentPoints} pts</div>
                    <div>Total: {data.cumulativePoints}</div>
                  </div>
                </div>
                
                {/* Segment number label */}
                <div className="text-xs text-on-surface-variant mt-1 truncate w-full text-center">
                  {data.segment}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Y-axis labels */}
        <div className="flex justify-between text-xs text-on-surface-variant border-t border-outline/20 pt-2">
          <span>0</span>
          <span className="text-center">Segments</span>
          <span>{maxPoints.toLocaleString()}</span>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded"></div>
            <span>Cumulative Points</span>
          </div>
        </div>
      </div>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div className="text-center">
          <div className="text-xl font-bold text-on-surface">{segmentData.length}</div>
          <div className="text-xs text-on-surface-variant">Active Segments</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-on-surface">
            {segmentData.length > 0 ? Math.round(pokedexState.points / segmentData.length) : 0}
          </div>
          <div className="text-xs text-on-surface-variant">Avg Points/Segment</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-on-surface">
            {Math.max(...segmentData.map(d => d.points), 0)}
          </div>
          <div className="text-xs text-on-surface-variant">Highest Segment</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-on-surface">
            {segmentData[segmentData.length - 1]?.segment || 0}
          </div>
          <div className="text-xs text-on-surface-variant">Latest Segment</div>
        </div>
      </div>
    </div>
  );
};
