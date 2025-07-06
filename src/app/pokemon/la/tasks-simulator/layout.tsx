import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tasks Simulator | Pokémon LEGENDS アルセウス RTA',
  description: 'Pokémon LEGENDS アルセウスの図鑑タスクをシミュレートできるツール。ポイント計算や進捗管理を効率的に行い、RTAチャートの作成をサポートします。',
  keywords: ['ポケモン', 'LEGENDS', 'アルセウス', 'RTA', 'タスク', 'シミュレーター', '図鑑', 'ポイント計算'],
  authors: [{ name: 'carimatics', url: 'https://github.com/carimatica' }],
  creator: 'carimatics',
  openGraph: {
    title: 'Tasks Simulator | Pokémon LEGENDS アルセウス RTA',
    description: 'Pokémon LEGENDS アルセウスの図鑑タスクをシミュレートできるツール。ポイント計算や進捗管理を効率的に行い、RTAチャートの作成をサポートします。',
    url: 'https://carimatics.github.io/rta/pokemon/la/tasks-simulator',
    siteName: 'Pokémon LEGENDS アルセウス RTA',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://carimatics.github.io/rta/pokemon/la/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tasks Simulator - Pokémon LEGENDS アルセウス RTA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tasks Simulator | Pokémon LEGENDS アルセウス RTA',
    description: 'Pokémon LEGENDS アルセウスの図鑑タスクをシミュレートできるツール',
    creator: '@carimatica',
    images: ['https://carimatics.github.io/rta/pokemon/la/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TasksSimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
