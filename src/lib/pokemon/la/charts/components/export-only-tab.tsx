import React, { useCallback, useState } from 'react';

import { Button } from '@/lib/components';
import { PrimaryContainer } from '@/lib/pokemon/la/tasks-simulator/components/primary-container';
import { PokedexState } from '@/lib/pokemon/la/tasks-simulator/pokemon-state';

interface ExportOnlyTabProps {
  targetPoints: number;
  pokedexState: PokedexState;
  metadata?: {
    title?: string;
    description?: string;
    author?: string;
  };
}

interface ExportData {
  version: string;
  timestamp: string;
  targetPoints: number;
  pokedexState: PokedexState;
  metadata?: {
    title?: string;
    description?: string;
    author?: string;
  };
}

export const ExportOnlyTab: React.FC<ExportOnlyTabProps> = ({
  targetPoints,
  pokedexState,
  metadata,
}) => {
  const [exportText, setExportText] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const filteredPokedexState = pokedexState.pages.filter(p => p.points > 0);

  const handleExport = useCallback(() => {
    try {
      const exportData: ExportData = {
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        targetPoints,
        pokedexState: {
          ...pokedexState,
          pages: filteredPokedexState, // Only include pages with points
        },
        metadata,
      };

      const jsonString = JSON.stringify(exportData, null, 2);
      setExportText(jsonString);
      setMessage({ type: 'success', text: 'Export data generated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: `Export failed: ${error instanceof Error ? error.message : 'Unknown error'}` });
    }
  }, [targetPoints, pokedexState, metadata, filteredPokedexState]);

  const handleDownload = useCallback(() => {
    if (!exportText) {
      setMessage({ type: 'error', text: 'No export data to download. Please generate export data first.' });
      return;
    }

    try {
      const blob = new Blob([exportText], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `pokemon-la-chart-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setMessage({ type: 'success', text: 'File downloaded successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: `Download failed: ${error instanceof Error ? error.message : 'Unknown error'}` });
    }
  }, [exportText]);

  const clearMessage = useCallback(() => {
    setMessage(null);
  }, []);

  return (
    <div className="space-y-6">
      {/* Message */}
      {message && (
        <div className={`p-4 rounded-lg border ${
          message.type === 'success' 
            ? 'bg-tertiary/10 border-tertiary/20 text-tertiary' 
            : 'bg-error/10 border-error/20 text-error'
        }`}>
          <div className="flex justify-between items-start">
            <span>{message.text}</span>
            <button
              onClick={clearMessage}
              className="ml-4 text-current hover:opacity-70"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Export Section */}
      <PrimaryContainer>
        <div className="p-6">
          <h2 className="text-xl font-bold text-on-surface mb-4">Export Chart Data</h2>
          <p className="text-sm text-on-surface-variant mb-6">
            Export this chart&apos;s data including target points, Pokemon progress, and metadata.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button onClick={handleExport}>
                Generate Export Data
              </Button>
              <Button 
                onClick={handleDownload}
                disabled={!exportText}
                color={exportText ? 'primary' : 'secondary'}
              >
                Download JSON File
              </Button>
            </div>

            {exportText && (
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">
                  Export Data (Copy this text or download as file):
                </label>
                <textarea
                  value={exportText}
                  readOnly
                  className="w-full h-32 p-3 border border-outline/20 rounded-lg bg-surface-container text-on-surface text-xs font-mono resize-none"
                  placeholder="Export data will appear here..."
                />
              </div>
            )}
          </div>
        </div>
      </PrimaryContainer>

      {/* Current Stats */}
      <PrimaryContainer>
        <div className="p-6">
          <h2 className="text-xl font-bold text-on-surface mb-4">Chart Data Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{targetPoints.toLocaleString()}</div>
              <div className="text-xs text-on-surface-variant">Target Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{pokedexState.points.toLocaleString()}</div>
              <div className="text-xs text-on-surface-variant">Current Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {pokedexState.pages.filter(p => p.completed).length}
              </div>
              <div className="text-xs text-on-surface-variant">Completed Pokemon</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {pokedexState.pages.filter(p => p.points > 0).length}
              </div>
              <div className="text-xs text-on-surface-variant">Pokemon with Points</div>
            </div>
          </div>

          {metadata && (
            <div className="border-t border-outline/20 pt-4">
              <h3 className="text-lg font-semibold text-on-surface mb-3">Chart Metadata</h3>
              <div className="space-y-2 text-sm">
                {metadata.title && (
                  <div><span className="font-medium">Title:</span> {metadata.title}</div>
                )}
                {metadata.description && (
                  <div><span className="font-medium">Description:</span> {metadata.description}</div>
                )}
                {metadata.author && (
                  <div><span className="font-medium">Author:</span> {metadata.author}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </PrimaryContainer>
    </div>
  );
};
