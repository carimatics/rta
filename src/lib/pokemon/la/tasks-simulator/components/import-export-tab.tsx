import React, { useCallback, useState } from 'react';

import { PrimaryContainer } from './primary-container';

import { Button } from '@/lib/components';
import { PokedexState } from '@/lib/pokemon/la/tasks-simulator/pokemon-state';


interface ImportExportTabProps {
  targetPoints: number;
  setTargetPoints: (points: number) => void;
  pokedexState: PokedexState;
  importPokedexState: (state: PokedexState) => void;
}

interface ExportData {
  version: string;
  timestamp: string;
  targetPoints: number;
  pokedexState: PokedexState;
}

export function ImportExportTab({
  targetPoints,
  setTargetPoints,
  pokedexState,
  importPokedexState,
}: ImportExportTabProps) {
  const [importText, setImportText] = useState('');
  const [exportText, setExportText] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleExport = useCallback(() => {
    try {
      const exportData: ExportData = {
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        targetPoints,
        pokedexState,
      };

      const jsonString = JSON.stringify(exportData, null, 2);
      setExportText(jsonString);
      setMessage({ type: 'success', text: 'Export data generated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: `Export failed: ${error instanceof Error ? error.message : 'Unknown error'}` });
    }
  }, [targetPoints, pokedexState]);

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
      link.download = `pokemon-la-tasks-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setMessage({ type: 'success', text: 'File downloaded successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: `Download failed: ${error instanceof Error ? error.message : 'Unknown error'}` });
    }
  }, [exportText]);

  const handleImport = useCallback(() => {
    if (!importText.trim()) {
      setMessage({ type: 'error', text: 'Please paste JSON data to import.' });
      return;
    }

    try {
      const data = JSON.parse(importText) as ExportData;

      // Basic validation
      if (!data.version || !data.pokedexState || typeof data.targetPoints !== 'number') {
        throw new Error('Invalid export data format');
      }

      // Import data
      setTargetPoints(data.targetPoints);
      importPokedexState(data.pokedexState);
      
      setMessage({ 
        type: 'success', 
        text: `Import successful! Loaded data from ${data.timestamp ? new Date(data.timestamp).toLocaleDateString() : 'unknown date'}` 
      });
      setImportText('');
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: `Import failed: ${error instanceof Error ? error.message : 'Invalid JSON format'}` 
      });
    }
  }, [importText, setTargetPoints, importPokedexState]);

  const handleFileImport = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setImportText(content);
    };
    reader.onerror = () => {
      setMessage({ type: 'error', text: 'Failed to read file' });
    };
    reader.readAsText(file);
  }, []);

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
          <h2 className="text-xl font-bold text-on-surface mb-4">Export Data</h2>
          <p className="text-sm text-on-surface-variant mb-6">
            Export your current progress including target points and all Pokemon task progress.
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

      {/* Import Section */}
      <PrimaryContainer>
        <div className="p-6">
          <h2 className="text-xl font-bold text-on-surface mb-4">Import Data</h2>
          <p className="text-sm text-on-surface-variant mb-6">
            Import previously exported data to restore your progress. This will overwrite your current data.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-2">
                Import from File:
              </label>
              <input
                type="file"
                accept=".json"
                onChange={handleFileImport}
                className="block w-full text-sm text-on-surface file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-on-primary hover:file:bg-primary/90"
              />
            </div>

            <div className="text-sm text-on-surface-variant text-center">or</div>

            <div>
              <label className="block text-sm font-medium text-on-surface mb-2">
                Paste JSON Data:
              </label>
              <textarea
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                className="w-full h-32 p-3 border border-outline/20 rounded-lg bg-surface-container text-on-surface text-xs font-mono resize-none focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Paste your exported JSON data here..."
              />
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={handleImport}
                disabled={!importText.trim()}
                color={importText.trim() ? 'primary' : 'secondary'}
              >
                Import Data
              </Button>
              <Button 
                onClick={() => setImportText('')}
                color="secondary"
                disabled={!importText}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      </PrimaryContainer>

      {/* Current Stats */}
      <PrimaryContainer>
        <div className="p-6">
          <h2 className="text-xl font-bold text-on-surface mb-4">Current Data Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        </div>
      </PrimaryContainer>
    </div>
  );
};
