'use client';

import React from 'react';

import chartData from './data.json';

import { ChartData, ChartViewer } from '@/lib/pokemon/la/charts';
import { Language } from '@/lib/pokemon/la/fixtures';

export default function CarimeticsChart20250505Page() {
  return (
    <ChartViewer
      chartData={chartData as unknown as ChartData}
      language={Language.Ja}
      readonly={true}
    />
  );
}
