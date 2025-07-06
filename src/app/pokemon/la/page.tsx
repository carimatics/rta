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
              シンオウ地方の過去を舞台にした革新的なポケモン作品の<br />
              <span className="text-primary font-semibold">RTA（リアルタイムアタック）</span>
              の世界へようこそ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pokemon/la/tasks-simulator"
                className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Tasks Simulator を使う
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
              Pokémon LEGENDS アルセウスは、従来のポケモンシリーズとは異なる革新的な<br />ゲームプレイを特徴としています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container rounded-xl p-8 shadow-sm border border-outline/10">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⛰️</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">オープンワールド</h3>
              <p className="text-on-surface-variant">
                広大なヒスイ地方を自由に探索でき、効率的なルート構築がRTAの鍵となります。
              </p>
            </div>

            <div className="bg-surface-container rounded-xl p-8 shadow-sm border border-outline/10">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">図鑑タスク</h3>
              <p className="text-on-surface-variant">
                ポケモン図鑑のタスクシステムが特徴的で、効率的なタスク管理が重要です。
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
              Pokémon LEGENDS アルセウスの主要なRTAカテゴリをご紹介します。
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
                  <span className="text-on-surface-variant">所要時間:</span>
                  <span className="font-semibold text-on-surface">約4時間</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-8 shadow-sm border border-outline/10">
              <h3 className="text-2xl font-bold text-on-surface mb-4">Catch &apos;em All</h3>
              <p className="text-on-surface-variant mb-6">
                全てのポケモンの捕獲を目指すカテゴリ。基礎動作精度、効率的なルート管理、リソース管理だけでなく豪運が必要です。
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">所要時間:</span>
                  <span className="font-semibold text-on-surface">約8時間</span>
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
              <h3 className="text-2xl font-bold text-on-surface mb-4">Tasks Simulator</h3>
              <p className="text-on-surface-variant mb-6">
                図鑑タスクの進行状況をシミュレートし、簡単にチャートを作成することができます。
                ポイント計算や進捗管理を効率的に行えます。
              </p>
              <Link
                href="/pokemon/la/tasks-simulator"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Tasks Simulator を開く
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
              区間ごとの大まかな進行状況や達成するタスクの一覧を確認できます。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="bg-surface-container hover:bg-surface-container-high rounded-xl p-6 transition-all duration-200 hover:scale-105 shadow-sm border border-outline/10 group">
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
            <div
              className="bg-surface-container/50 rounded-xl p-6 border border-outline/10 border-dashed flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-on-surface-variant">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-on-surface-variant mb-2">新しいチャート</h3>
              <p className="text-sm text-on-surface-variant">
                今後、新しいチャートが追加されるかもしれません
              </p>
            </div>

            <div
              className="bg-surface-container/50 rounded-xl p-6 border border-outline/10 border-dashed flex flex-col items-center justify-center text-center">
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

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            <a
              href="https://www.speedrun.com/pkmnla"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container hover:bg-surface-container-high rounded-xl p-6 transition-all duration-200 hover:scale-105 shadow-sm border border-outline/10"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏃</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Speedrun.com</h3>
              <p className="text-on-surface-variant text-sm">
                公式リーダーボードと記録投稿
              </p>
            </a>

            <a
              href="https://w.atwiki.jp/pokemonrta/pages/185.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container hover:bg-surface-container-high rounded-xl p-6 transition-all duration-200 hover:scale-105 shadow-sm border border-outline/10"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">ポケットモンスターRTAwiki</h3>
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
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📖</span>
              </div>
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
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Serebii.net</h3>
              <p className="text-on-surface-variant text-sm">
                包括的なゲーム攻略情報
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
              RTAコミュニティに参加して、情報交換や質問をしましょう。
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8">
            <a
              href="https://discord.gg/cd67NmWM"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-[#5865F2]/5 to-[#5865F2]/10 hover:from-[#5865F2]/10 hover:to-[#5865F2]/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#5865F2]/20 hover:border-[#5865F2]/30 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#5865F2] to-[#4752C4] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-[#5865F2] transition-colors duration-300">Discord</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-[#5865F2]">
                    pokemonRTA
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    RTAコミュニティのDiscordサーバー<br/>
                    質問や情報共有はこちらで！
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://twitter.com/carimatics"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-[#1DA1F2]/5 to-[#1DA1F2]/10 hover:from-[#1DA1F2]/10 hover:to-[#1DA1F2]/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#1DA1F2]/20 hover:border-[#1DA1F2]/30 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1DA1F2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1DA1F2] to-[#0D8BD9] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-[#1DA1F2] transition-colors duration-300">X (Twitter)</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-[#1DA1F2]">
                    @carimatics
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    当サイトの作者<br/>
                    質問などありましたらお気軽にご連絡ください
                  </p>
                </div>
              </div>
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
            Pokémon LEGENDS アルセウスの走者によって個人的に作成された趣味サイトです。
          </p>
        </div>
      </footer>
    </div>
  );
}
