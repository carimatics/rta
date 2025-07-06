'use client';

import Link from 'next/link';
import React from 'react';

export default function PokemonLegendsArceusPage() {
  return (
    <div data-theme="pokemon-la" className="min-h-screen bg-gradient-to-b from-surface-container to-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-on-surface mb-6">
              Pokémon <span className="text-primary">LEGENDS</span> アルセウス
            </h1>
            <p className="text-xl sm:text-2xl text-on-surface-variant mb-8 max-w-3xl mx-auto">
              シンオウ地方の過去を舞台にした革新的なポケモンゲームの
              <span className="text-primary font-semibold">RTA（リアルタイムアタック）</span>
              の世界へようこそ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pokemon/la/tasks-simulator"
                className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Task Simulator を使う
              </Link>
              <Link
                href="/pokemon/la/charts/carimatics/20250505"
                className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 border border-outline"
              >
                チャートを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-on-surface mb-6">
              ゲーム概要
            </h2>
            <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
              ポケモン LEGENDS アルセウスは、従来のポケモンシリーズとは異なる革新的なゲームプレイを特徴としています。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container rounded-xl p-8 shadow-sm border border-outline/10">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">オープンワールド</h3>
              <p className="text-on-surface-variant">
                広大なヒスイ地方を自由に探索し、効率的なルート構築がRTAの鍵となります。
              </p>
            </div>
            
            <div className="bg-surface-container rounded-xl p-8 shadow-sm border border-outline/10">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">図鑑タスク</h3>
              <p className="text-on-surface-variant">
                ポケモンの図鑑タスクシステムが特徴的で、効率的なタスク管理が重要です。
              </p>
            </div>
            
            <div className="bg-surface-container rounded-xl p-8 shadow-sm border border-outline/10">
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">新しいバトル</h3>
              <p className="text-on-surface-variant">
                素早さシステムの変更により、従来とは異なる戦略が求められます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RTA Categories */}
      <section className="py-16 lg:py-24 bg-surface-container/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-on-surface mb-6">
              RTAカテゴリ
            </h2>
            <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
              ポケモン LEGENDS アルセウスの主要なRTAカテゴリをご紹介します。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-surface-container rounded-xl p-8 shadow-sm border border-outline/10">
              <h3 className="text-2xl font-bold text-on-surface mb-4">Any%</h3>
              <p className="text-on-surface-variant mb-6">
                エンディングまでの最速クリアを目指すカテゴリ。最も人気があり、競技人口も多いカテゴリです。
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">目標時間:</span>
                  <span className="font-semibold text-on-surface">4-6時間</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-8 shadow-sm border border-outline/10">
              <h3 className="text-2xl font-bold text-on-surface mb-4">Catch &apos;em All</h3>
              <p className="text-on-surface-variant mb-6">
                全てのポケモンの図鑑完成を目指すカテゴリ。タスク管理とルート最適化が重要になります。
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">目標時間:</span>
                  <span className="font-semibold text-on-surface">15-25時間</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-on-surface mb-6">
              RTA支援ツール
            </h2>
            <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
              効率的なRTAを支援するツールをご利用ください。
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-on-surface mb-4">Task Simulator</h3>
              <p className="text-on-surface-variant mb-6">
                リサーチタスクの進行状況をシミュレートし、最適なルートを見つけることができます。
                ポイント計算や進捗管理を効率的に行えます。
              </p>
              <Link
                href="/pokemon/la/tasks-simulator"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Task Simulator を開く
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-16 lg:py-24 bg-surface-container/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-on-surface mb-6">
              RTAチャート
            </h2>
            <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
              実際のRTA記録に基づいたチャートで、セグメント別の進行状況やタスクの達成状況を確認できます。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface-container hover:bg-surface-container-high rounded-xl p-6 transition-all duration-200 hover:scale-105 shadow-sm border border-outline/10 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-on-surface">Carimatics Chart</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  2025/05/05
                </span>
              </div>
              <p className="text-on-surface-variant text-sm mb-4">
                Any%カテゴリの4時間切り目標の初心者用チャート
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-on-surface-variant">
                  <div>カテゴリ: Any%</div>
                  <div>参考記録: 3時間56分58秒</div>
                </div>
                <Link
                  href="/pokemon/la/charts/carimatics/20250505"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group-hover:translate-x-1"
                >
                  表示
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Placeholder for future charts */}
            <div className="bg-surface-container/50 rounded-xl p-6 border border-outline/10 border-dashed flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-on-surface-variant">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-on-surface-variant mb-2">新しいチャート</h3>
              <p className="text-sm text-on-surface-variant">
                今後、新しいRTAチャートが追加される予定です
              </p>
            </div>

            <div className="bg-surface-container/50 rounded-xl p-6 border border-outline/10 border-dashed flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-on-surface-variant">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-on-surface-variant mb-2">統計チャート</h3>
              <p className="text-sm text-on-surface-variant">
                コミュニティ統計や分析チャートの追加を検討中
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-on-surface mb-6">
              攻略リソース
            </h2>
            <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
              RTA攻略に役立つ外部リソースをご紹介します。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.speedrun.com/pkmnla"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container hover:bg-surface-container-high rounded-xl p-6 transition-all duration-200 hover:scale-105 shadow-sm border border-outline/10"
            >
              <h3 className="text-lg font-bold text-on-surface mb-2">Speedrun.com</h3>
              <p className="text-on-surface-variant text-sm">
                公式リーダーボードと記録投稿
              </p>
            </a>

            <a
              href="https://docs.google.com/spreadsheets/d/1S5bCmVr9k_oQOlF_KBx-0zLKzQ1R-_6ZUQ9J_3xqQXc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container hover:bg-surface-container-high rounded-xl p-6 transition-all duration-200 hover:scale-105 shadow-sm border border-outline/10"
            >
              <h3 className="text-lg font-bold text-on-surface mb-2">RTA ガイド</h3>
              <p className="text-on-surface-variant text-sm">
                詳細な攻略チャートとルート解説
              </p>
            </a>

            <a
              href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Legends:_Arceus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container hover:bg-surface-container-high rounded-xl p-6 transition-all duration-200 hover:scale-105 shadow-sm border border-outline/10"
            >
              <h3 className="text-lg font-bold text-on-surface mb-2">Bulbapedia</h3>
              <p className="text-on-surface-variant text-sm">
                ゲーム情報とデータベース
              </p>
            </a>

            <a
              href="https://www.serebii.net/legendsarceus/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container hover:bg-surface-container-high rounded-xl p-6 transition-all duration-200 hover:scale-105 shadow-sm border border-outline/10"
            >
              <h3 className="text-lg font-bold text-on-surface mb-2">Serebii.net</h3>
              <p className="text-on-surface-variant text-sm">
                包括的なゲーム攻略情報
              </p>
            </a>

            <a
              href="https://github.com/Lincoln-LM/pla-reverse-gui"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container hover:bg-surface-container-high rounded-xl p-6 transition-all duration-200 hover:scale-105 shadow-sm border border-outline/10"
            >
              <h3 className="text-lg font-bold text-on-surface mb-2">PLA Tools</h3>
              <p className="text-on-surface-variant text-sm">
                RTA支援ツールとリソース
              </p>
            </a>

            <a
              href="https://www.youtube.com/results?search_query=pokemon+legends+arceus+speedrun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container hover:bg-surface-container-high rounded-xl p-6 transition-all duration-200 hover:scale-105 shadow-sm border border-outline/10"
            >
              <h3 className="text-lg font-bold text-on-surface mb-2">YouTube</h3>
              <p className="text-on-surface-variant text-sm">
                RTA動画とチュートリアル
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 lg:py-24 bg-surface-container/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-on-surface mb-6">
              コミュニティ
            </h2>
            <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
              PLA RTAコミュニティに参加して、情報交換や質問をしましょう。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://discord.gg/pokemonspeedruns"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#5865F2]/10 to-[#5865F2]/20 hover:from-[#5865F2]/20 hover:to-[#5865F2]/30 rounded-xl p-6 transition-all duration-200 hover:scale-105 border border-[#5865F2]/30 text-center"
            >
              <div className="w-12 h-12 bg-[#5865F2] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">D</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Discord</h3>
              <p className="text-on-surface-variant text-sm">
                ポケモンRTAコミュニティ
              </p>
            </a>

            <a
              href="https://twitter.com/search?q=pokemon%20legends%20arceus%20speedrun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#1DA1F2]/10 to-[#1DA1F2]/20 hover:from-[#1DA1F2]/20 hover:to-[#1DA1F2]/30 rounded-xl p-6 transition-all duration-200 hover:scale-105 border border-[#1DA1F2]/30 text-center"
            >
              <div className="w-12 h-12 bg-[#1DA1F2] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">𝕏</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">X (Twitter)</h3>
              <p className="text-on-surface-variant text-sm">
                RTA記録とニュース
              </p>
            </a>

            <a
              href="https://www.twitch.tv/directory/game/Pok%C3%A9mon%20Legends%3A%20Arceus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#9146FF]/10 to-[#9146FF]/20 hover:from-[#9146FF]/20 hover:to-[#9146FF]/30 rounded-xl p-6 transition-all duration-200 hover:scale-105 border border-[#9146FF]/30 text-center"
            >
              <div className="w-12 h-12 bg-[#9146FF] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">T</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Twitch</h3>
              <p className="text-on-surface-variant text-sm">
                ライブ配信とVOD
              </p>
            </a>

            <a
              href="https://www.reddit.com/r/speedrun/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#FF4500]/10 to-[#FF4500]/20 hover:from-[#FF4500]/20 hover:to-[#FF4500]/30 rounded-xl p-6 transition-all duration-200 hover:scale-105 border border-[#FF4500]/30 text-center"
            >
              <div className="w-12 h-12 bg-[#FF4500] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">R</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Reddit</h3>
              <p className="text-on-surface-variant text-sm">
                ディスカッションとTips
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-surface-container-high">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-on-surface-variant">
            このサイトは任天堂株式会社とは一切関係ありません。
            <br />
            Pokémon LEGENDS アルセウスのRTAコミュニティによって作成された非公式ツールです。
          </p>
        </div>
      </footer>
    </div>
  );
}
