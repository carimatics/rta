import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carimatics Chart (2025/05/05) | Pokémon LEGENDS アルセウス RTA',
  description: 'CarmaticsによるPokémon LEGENDS アルセウス Any%カテゴリの4時間切り目標の初心者用RTAチャート。参考記録: 3時間56分58秒。',
  keywords: ['ポケモン', 'LEGENDS', 'アルセウス', 'RTA', 'チャート', 'Any%', 'carimatics', '初心者'],
  authors: [{ name: 'carimatics', url: 'https://github.com/carimatica' }],
  creator: 'carimatics',
  openGraph: {
    title: 'Carimatics Chart (2025/05/05) | Pokémon LEGENDS アルセウス RTA',
    description: 'CarmaticsによるPokémon LEGENDS アルセウス Any%カテゴリの4時間切り目標の初心者用RTAチャート。参考記録: 3時間56分58秒。',
    url: 'https://carimatics.github.io/rta/pokemon/la/charts/carimatics/20250505',
    siteName: 'Pokémon LEGENDS アルセウス RTA',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/rta/pokemon/la/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Carimatics Chart - Pokémon LEGENDS アルセウス RTA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carimatics Chart (2025/05/05) | Pokémon LEGENDS アルセウス RTA',
    description: 'CarmaticsによるPokémon LEGENDS アルセウス Any%カテゴリの4時間切り目標の初心者用RTAチャート',
    creator: '@carimatica',
    images: ['/rta/pokemon/la/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CarmaticsChart20250505Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
