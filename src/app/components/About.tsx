import { useState } from 'react';

export function About() {
  const base = import.meta.env.BASE_URL;
  const [mbtiOpen, setMbtiOpen] = useState(false);
  const [pointsOpen, setPointsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl text-foreground mb-4 font-semibold">關於我</h1>
          <p className="text-sm text-muted-foreground italic">ABOUT / 關於我 /</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[1fr_320px] gap-12">
          {/* Main Content - Left on desktop, Top on mobile */}
          <div className="space-y-12 order-1 md:order-1">
            {/* Intro Text */}
            <div className="space-y-6">
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8">
                {/* Top left quote mark */}
                <div className="absolute top-6 left-6 text-5xl text-gray-200 font-serif leading-none">"</div>
                
                <div className="relative space-y-4 text-base text-foreground leading-relaxed pl-8">
                  <p>
                    Hi，我是 Fresh —— 流著會計血液、著迷於數據，卻始終對世界保持新鮮感的數位行銷人。
                  </p>
                  <p>
                    五年多的行銷生涯裡，我習慣用數字說話，也始終相信行銷的本質，是創造價值。
                  </p>
                </div>
                
                {/* Bottom right quote mark */}
                <div className="absolute bottom-4 right-6 text-5xl text-gray-200 font-serif leading-none">"</div>
              </div>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Fresh —— 不只是名字，更是自我定位</h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  很多人第一次聽到我叫 Fresh，第一個反應通常覺得很奇怪，但其實這個名字源自我的中文名字「欣萱」。高中時，某位摯友在一次玩笑中說：「欣萱念很快就變成新鮮耶！可以叫妳 Fresh 嗎？」那一刻成了我成長過程中很重要的轉捩點，也讓我開始思考自己想成為什麼樣的人。
                </p>
                <p>
                  Fresh 在劍橋詞典中的意思是 <strong>" new or different "</strong>，也是至今我仍覺得最貼切的自我定位。
                </p>
                <p>
                  高中念商業經營科，大學就讀企業管理系，前前後後學了將近 7 年會計，本來可以順理成章走進穩定的財會領域。但大學畢業後，我選擇去美國與澳洲 GAP YEAR，那段時間讓我意識到：人生或許可以擁抱更多可能。也因此回台後，我踏上了從藝文標案、傳統出版，到互聯網新創、再到電動車產業的「跨界之旅」。
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">從內容出發，用數據賦能</h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  我在 <a href="https://www.sanmin.com.tw/" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:no-underline">三民書局</a> 學會如何為一本好書「定錨」，並透過內容行銷擴散作者與書籍知名度，進而帶動銷量；在 <a href="https://www.vpon.com/zh-hant/" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:no-underline">Vpon 威朋</a> 看見大數據背後的廣告運作邏輯，也開始建立對數據與投放之間關係的理解；並在 <a href="https://vocus.cc/become_creator" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:no-underline">方格子 vocus</a> 迎來職涯的關鍵跳躍——學會以數據導向思維推進數位行銷策略，並帶領團隊實現單月 GMV 成長與千萬級流量。我逐漸發現：最好的行銷不是盲目投放，而是像投資精準標的一樣，透過數據持續優化，讓每一分預算都發揮最大價值。
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">現階段：在納智捷（LUXGEN）實踐數位轉型</h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  我的現職品牌雖屬傳統產業，卻販售最前沿的科技產品——電動車。這樣的交界碰撞，使數位轉型成為必然；而我所屬團隊也成功落地全線上購車下訂模式，並推動精品配件線上購的實績。在過程中，我專注於全線上購車與試駕流程的轉換與優化，透過流程設計與數據分析，降低使用者的決策門檻，提升整體轉換效率。
                </p>
              </div>
            </div>
          </div>

            {/* Right Sidebar - Right on desktop, After autobiography on mobile */}
            <div className="space-y-6 order-2 md:order-2">
              {/* Lifestyle Photo */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={`${base}fresh-lifestyle-photo.jpg`}
                  alt="Fresh Lin Lifestyle"
                  className="w-full h-auto object-cover"
              />
            </div>

            {/* Intro */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>更多打開 Fresh 的方式（?!）</span>
              </div>

              {/* MBTI Collapsible */}
              <button
                onClick={() => setMbtiOpen(!mbtiOpen)}
                className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-left"
              >
                <span className="text-sm font-medium text-foreground">關於我的 MBTI</span>
                <svg
                  className={`w-4 h-4 text-muted-foreground transition-transform ${mbtiOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {mbtiOpen && (
                <div className="p-4 bg-white border border-gray-200 rounded-lg space-y-3">
                  <div className="inline-block px-3 py-1 bg-foreground text-white rounded-full text-sm font-semibold">
                    ESFJ
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 具體、實事求是，信賴詳盡而實際的資料。</li>
                    <li>• 利他主義者，天生熱情而禮貌。</li>
                    <li>• 注重團隊協作，與同事、客戶和上下游供應鏈保持友好、互助、相互鼓勵的合作共贏關係。</li>
                  </ul>
                </div>
              )}

              {/* Points Collapsible */}
              <button
                onClick={() => setPointsOpen(!pointsOpen)}
                className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-left"
              >
                <span className="text-sm font-medium text-foreground">關於我可能讓你很意外的 Point！</span>
                <svg
                  className={`w-4 h-4 text-muted-foreground transition-transform ${pointsOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {pointsOpen && (
                <div className="p-4 bg-white border border-gray-200 rounded-lg space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-foreground text-white rounded-full text-sm font-semibold">
                      流著會計血液的行銷腦
                    </div>
                    <p className="text-sm text-muted-foreground">
                      學了 7 年會計，曾任上市櫃公司會計助理。對「錢」與「數字」特別敏感，也因此習慣用數據拆解行銷成效。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-foreground text-white rounded-full text-sm font-semibold">
                      簡報 & Pitch 專業戶
                    </div>
                    <p className="text-sm text-muted-foreground">
                      大學時曾受邀開設常態性簡報課；也曾製作過知名廣告代理商的年度 Sales Kit，擅長把複雜資訊整理成一頁就懂的提案。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-foreground text-white rounded-full text-sm font-semibold">
                      有點失敗的連任公關（？）
                    </div>
                    <p className="text-sm text-muted-foreground">
                      大學連任四年班上公關，辦了無數場大型聯誼，卻沒有湊成任何一對（誤），但至少活動執行與協調能力，是真材實料練出來的。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-foreground text-white rounded-full text-sm font-semibold">
                      運動白痴，卻打敗奧運冠軍李洋
                    </div>
                    <p className="text-sm text-muted-foreground">
                      出版社時期曾協助李洋行銷自傳，拍攝行銷素材時臨時起意比賽「疊羽毛球」，獲得壓倒性勝利，大概是我人生少數運動成就。
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact CTA - Below all content */}
        <div className="pt-8 border-t border-gray-200 mt-12">
          <p className="text-sm text-muted-foreground leading-relaxed">
            如果您正在尋找數位行銷的合作夥伴，或想進一步了解我的專案經歷，歡迎透過 <a href="mailto:yuam94058@gmail.com" className="text-foreground underline hover:no-underline font-medium">yuam94058@gmail.com</a> 與我聯繫——也可以前往 Resume 頁面深入認識我的工作經驗。
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-xs text-muted-foreground border-t border-gray-200 italic">
        © 2026 Fresh Lin
      </footer>
    </div>
  );
}
