import React from 'react';

export const ReferenceVideoTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-on-surface mb-4">参考記録動画</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          当チャートの参考記録の動画です。
          実際のプレイの参考にご活用ください。
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="bg-surface-container rounded-xl p-6 border border-outline/10">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1">
              <div className="aspect-video rounded-lg overflow-hidden bg-surface-container-high">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/i5aKk22exU4"
                  title="Pokémon LEGENDS アルセウス RTA Any% JPN"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            <div className="xl:w-80 flex flex-col gap-4">
              <div className="bg-surface-container-high rounded-lg p-4">
                <h3 className="font-bold text-on-surface mb-3">動画情報</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">カテゴリ:</span>
                    <span className="font-semibold text-on-surface">Any%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">タイム:</span>
                    <span className="font-semibold text-on-surface">3時間56分58秒</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">記録:</span>
                    <a 
                      href="https://www.speedrun.com/ja-JP/pkmnla/runs/y4nwovkm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:text-primary/80 transition-colors duration-200 underline decoration-primary/30 hover:decoration-primary/60"
                    >
                      Speedrun.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface-container-high rounded-lg p-4">
                <h3 className="font-bold text-on-surface mb-3">注目ポイント</h3>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>効率的なルート構築</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>図鑑タスクの優先順位</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>時短テクニックの実践</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>リスク管理の方法</span>
                  </li>
                </ul>
              </div>
              
              <a
                href="https://www.youtube.com/watch?v=i5aKk22exU4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-on-primary px-4 py-3 rounded-lg font-semibold text-center transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTubeで開く
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
