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
          <p className="text-sm text-muted-foreground italic">ABOUT</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[1fr_320px] gap-12">

          {/* ================= LEFT ================= */}
          <div className="space-y-12">

            {/* Intro */}
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8">
              <div className="absolute top-6 left-6 text-5xl text-gray-200 font-serif">"</div>

              <div className="relative space-y-4 text-base text-foreground leading-relaxed pl-8">
                <p>Hi，我是 Fresh —— 流著會計血液、著迷於數據，卻始終對世界保持新鮮感的數位行銷人。</p>
                <p>五年多的行銷生涯裡，我習慣用數字說話，也始終相信行銷的本質，是創造價值。</p>
              </div>

              <div className="absolute bottom-4 right-6 text-5xl text-gray-200 font-serif">"</div>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Fresh —— 不只是名字，更是自我定位</h2>

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  很多人聽到我叫 Fresh，第一個反應通常覺得很奇怪，但其實這源自我的中文名字「欣萱」。高中時，某位摯友在一次玩笑中說：「欣萱念很快就變成新鮮耶！可以叫妳 Fresh 嗎？」那一刻成了我成長過程中很重要的轉捩點，也讓我開始思考自己想成為什麼樣的人。
                </p>

                <p>
                  Fresh 在劍橋詞典中的意思是 <strong>" new or different "</strong>，也是至今我仍覺得最貼切的自我定位。
                </p>

                <p>
                  高中念商業經營科，大學就讀企業管理系，前前後後學了將近 7 年會計，本來可以順理成章走進穩定的財會領域。但大學畢業後，我選擇去美國與澳洲 GAP YEAR，那段時間讓我意識到：人生或許可以擁抱更多可能。
                </p>

                <p>
                  帶著這樣的心態回台，我踏上了從藝文標案、傳統出版，到互聯網新創、再到電動車產業的「跨界之旅」。
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">從內容出發，用數據賦能</h2>

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  我在 <a href="https://www.sanmin.com.tw/" target="_blank" rel="noopener noreferrer" className="underline">三民書局</a> 學會內容行銷；在 <a href="https://www.vpon.com/zh-hant/" target="_blank" rel="noopener noreferrer" className="underline">Vpon 威朋</a> 理解數據與投放；並在 <a href="https://vocus.cc/become_creator" target="_blank" rel="noopener noreferrer" className="underline">方格子 vocus</a> 建立數據導向策略。
                </p>

                <p>
                  我逐漸發現：最好的行銷不是盲目投放，而是透過數據持續優化，讓每一分預算都發揮最大價值。
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">現階段：在納智捷（LUXGEN）實踐數位轉型</h2>

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  我的現職品牌雖屬傳統產業，卻販售最前沿的科技產品 —— 電動車。
                </p>

                <p>
                  在過程中，我專注於全線上購車與試駕流程優化，透過流程設計與數據分析提升轉換效率。
                </p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="space-y-6">

            <div className="rounded-2xl overflow-hidden">
              <img src={`${base}fresh-lifestyle-photo.jpg`} className="w-full" />
            </div>

            {/* MBTI */}
            <button onClick={() => setMbtiOpen(!mbtiOpen)} className="w-full p-4 border rounded-lg">
              關於我的 MBTI
            </button>

            {mbtiOpen && (
              <div className="p-4 border rounded-lg">
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>具體、實事求是</li>
                  <li>利他主義者</li>
                  <li>重視團隊合作</li>
                </ul>
              </div>
            )}

          </div>

        </div>

        {/* CTA */}
        <div className="pt-8 border-t mt-12 text-sm">
          聯絡：yuam94058@gmail.com
        </div>

      </div>

      <footer className="py-6 text-center text-xs">
        © 2026 Fresh Lin
      </footer>
    </div>
  );
}
