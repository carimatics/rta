import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokémon LEGENDS アルセウス RTA | ポケモンLA RTA情報サイト',
  description: 'Pokémon LEGENDS アルセウスのRTA（リアルタイムアタック）情報サイト。Tasks Simulator、チャート、参考記録などRTAに必要な情報をまとめています。',
  keywords: ['ポケモン', 'LEGENDS', 'アルセウス', 'RTA', 'リアルタイムアタック', 'Any%', 'スピードラン'],
  authors: [{ name: 'carimatics', url: 'https://github.com/carimatica' }],
  creator: 'carimatics',
  openGraph: {
    title: 'Pokémon LEGENDS アルセウス RTA',
    description: 'Pokémon LEGENDS アルセウスのRTA（リアルタイムアタック）情報サイト。Tasks Simulator、チャート、参考記録などRTAに必要な情報をまとめています。',
    url: 'https://carimatics.github.io/rta/pokemon/la',
    siteName: 'Pokémon LEGENDS アルセウス RTA',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://carimatics.github.io/rta/pokemon/la/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pokémon LEGENDS アルセウス RTA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokémon LEGENDS アルセウス RTA',
    description: 'Pokémon LEGENDS アルセウスのRTA（リアルタイムアタック）情報サイト',
    creator: '@carimatica',
    images: ['https://carimatics.github.io/rta/pokemon/la/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PokemonLegendsArceusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
