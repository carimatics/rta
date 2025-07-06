'use client';

import Link from 'next/link';
import React from 'react';

import { Language } from '@/lib/pokemon/la/fixtures';

interface ChartHeaderProps {
  title: string;
  subtitle?: string;
  metadata?: {
    author?: string;
    timestamp?: string;
  };
  language: Language;
  onLanguageChange: (language: Language) => void;
  readonly?: boolean;
}

export const ChartHeader: React.FC<ChartHeaderProps> = ({
  title,
  subtitle,
  metadata,
  language,
  onLanguageChange,
  readonly = false,
}) => {
  return (
    <header className="bg-surface border-b border-outline/20 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">📊</span>
              <Link 
                href="/pokemon/la"
                className="text-xl font-bold text-on-surface hover:text-primary transition-colors"
              >
                {title}
              </Link>
            </div>
            {subtitle && (
              <>
                <span className="text-on-surface-variant">|</span>
                <Link
                  href="/pokemon/la"
                  className="hidden sm:inline-block text-sm text-on-surface-variant hover:text-on-surface bg-surface-container-high hover:bg-surface-container-highest px-3 py-1 rounded-full transition-colors"
                >
                  {subtitle}
                </Link>
              </>
            )}
            {readonly && (
              <span className="text-xs text-on-surface-variant bg-error/10 border border-error/20 px-2 py-1 rounded-full">
                Read Only
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {metadata && (
              <div className="hidden md:flex items-center gap-2 text-sm text-on-surface-variant">
                {metadata.author && (
                  <span>by {metadata.author}</span>
                )}
                {metadata.timestamp && (
                  <span>• {new Date(metadata.timestamp).toLocaleDateString()}</span>
                )}
              </div>
            )}
            
            <select
              value={language}
              onChange={(e) => onLanguageChange(parseInt(e.target.value) as Language)}
              className="text-sm bg-surface-container-high text-on-surface border border-outline/30 rounded px-3 py-1"
            >
              <option value={Language.Ja}>日本語</option>
              <option value={Language.En}>English</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
