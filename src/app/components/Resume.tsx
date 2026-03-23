import { Download, TrendingUp, Database, Award, Users, Globe, GraduationCap, Wrench } from 'lucide-react';
import { WorkExperience } from './WorkExperience';

export function Resume() {
  const base = import.meta.env.BASE_URL;
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl text-foreground mb-4 font-semibold">履歷</h1>
          <p className="text-sm text-muted-foreground italic">RESUME</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16 space-y-16">
        {/* Quick Navigation - Compact */}
        <section className="border-t border-b border-gray-200 py-4 bg-white rounded-2xl mt-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm justify-center">
            <button
              onClick={() => scrollToSection('key-strengths')}
              className="text-primary hover:underline font-medium"
            >
              Key Strengths
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => scrollToSection('luxgen')}
              className="text-primary hover:underline font-medium"
            >
              納智捷
            </button>
            <button
              onClick={() => scrollToSection('vocus')}
              className="text-primary hover:underline font-medium"
            >
              方格子
            </button>
            <button
              onClick={() => scrollToSection('vpon')}
              className="text-primary hover:underline font-medium"
            >
              Vpon
            </button>
            <button
              onClick={() => scrollToSection('sanmin')}
              className="text-primary hover:underline font-medium"
            >
              三民
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-primary hover:underline font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-primary hover:underline font-medium"
            >
              Education
            </button>
          </div>
        </section>

        {/* PDF Download */}
        <section className="bg-muted border border-gray-200 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <Download className="w-5 h-5 text-foreground mt-1" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-4">
                網站的內容無法完整帶走？圖文並茂，履歷 PDF 格式版本歡迎直接下載外帶 ↓
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-muted-foreground" />
                  <a
                    href="https://drive.google.com/file/d/1EZlb8OvRwViEAvt8Tb2Al_v5FNp_7iWc/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline hover:no-underline text-sm"
                  >
                    中文履歷｜Resume (Chinese)
                  </a>
                  <span className="text-xs text-muted-foreground">2.8 MiB</span>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-muted-foreground" />
                  <a
                    href="https://drive.google.com/file/d/1h1BCZCEDa0gGl_qr-llUWtoHotzFVyUG/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline hover:no-underline text-sm"
                  >
                    英文履歷｜Resume (English)
                  </a>
                  <span className="text-xs text-muted-foreground">1.5 MiB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Section - Centered */}
        <section className="text-center pb-12 border-b border-gray-200">
          <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border border-gray-200">
            <img
              src={`${base}fresh-profile.jpeg`}
              alt="Fresh Lin Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl text-foreground mb-2 font-semibold">林欣萱</h2>
          <p className="text-xl text-muted-foreground mb-3">Digital Marketing</p>
          <p className="text-sm text-muted-foreground">New Taipei City, Taiwan</p>
        </section>

        {/* Key Strengths */}
        <section className="space-y-6" id="key-strengths">
          <h2 className="text-2xl text-foreground font-semibold mb-6">Key Strengths</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-2">5年+ 數位行銷與營運經驗</h3>
                  <p className="text-sm text-muted-foreground">
                    橫跨出版業、訂閱制內容平台與電動車產業，熟悉不同商業模式下的數位行銷 know-how。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                  <Database className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-2">數據導向思維</h3>
                  <p className="text-sm text-muted-foreground">
                    熟練 GA4、Meta Ads Manager、Google Ads 等，能透過數據分析洞察問題並優化關鍵指標成效。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-2">關鍵成效實績</h3>
                  <p className="text-sm text-muted-foreground">
                    曾推動平台單月不重複訪客（UU）由 700 萬成長至 1,000 萬，並於電商節慶檔期創造百萬級營收。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-2">跨職能整合與商業思維</h3>
                  <p className="text-sm text-muted-foreground">
                    具會計背景，擅長預算控管、收益預估，並能有效協作開發、營運、設計團隊推進策略落地。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="space-y-8" id="work-experience">
          <h2 className="text-2xl text-foreground font-semibold mb-6">工作經歷</h2>
          <div className="space-y-12">
            <div id="luxgen">
              {/* LUXGEN */}
              <WorkExperience
                company="納智捷汽車股份有限公司（LUXGEN）"
                logo="/public/logo-luxgen.jpeg"
                position="數位行銷管理師"
                period="七月 2024 - 迄今"
                location="New Taipei, Taiwan"
                responsibilities={[
                  {
                    title: '數位購車／試駕流程設計與轉換優化 (User Journey & Conversion)',
                    items: [
                      '斷點洞察與流程簡化：透過 GA4 分析定位「會員登入」為線上試駕報名的主要流失點；主導「去會員化」改版與表單欄位精簡，將平均報名完成時間由 14 小時縮短至 2.5 小時，並將舊會員轉換率提升至 5.0%。',
                      '數位銷售規劃：負責新車型上市之線上銷售流程設計，包含 Landing Page、預購流程與數據追蹤報表規劃，確保銷售環節可追蹤、可迭代、可優化。'
                    ]
                  },
                  {
                    title: '電商平台從 0 到 1 建置與營運 (E-commerce & Operations)',
                    items: [
                      '平台建置與 SOP 導入：主導品牌電商 LUXSHOP 上線，建立供應商開發、商品導入與上架、金流核銷等標準化作業流程。',
                      '節慶行銷與營收實績：規劃並執行雙 11／雙 12 檔期活動，整合品牌行銷資源，兩個月內創造百萬級營收。'
                    ]
                  },
                  {
                    title: '數據追蹤與決策支持 (Data Analytics & Business Intelligence)',
                    items: [
                      '數據追蹤架構：主導 GA4 事件埋設與第一方數據追蹤維度規劃，建立跨情境的成效追蹤基礎。',
                      '管理決策支援：定期產出跨維度數據報告（會員行為、流量來源、訂單歸因等），將複雜數據轉化為可執行的優化建議，支持管理層精準決策。'
                    ]
                  }
                ]}
                showcases={[
                  {
                    title: '新車型上市｜數位購車頁面規劃',
                    highlight: '規劃下訂流程與追蹤報表，支援迭代優化',
                    image: '/public/showcase-luxgen-order-flow.jpg'
                  },
                  {
                    title: '線上試駕流程優化｜去會員化 × 欄位精簡',
                    highlight: '平均報名 14 → 2.5 小時，會員轉換達 5.0%',
                    image: '/public/showcase-luxgen-testdrive.jpg'
                  },
                  {
                    title: 'LUXSHOP｜雙 11／雙 12 檔期活動',
                    highlight: '整合品牌行銷與供應商資源，創造百萬營收',
                    image: '/public/showcase-luxshop-campaign.jpg'
                  }
                ]}
              />
            </div>

            <div id="vocus">
              {/* Vocus */}
              <WorkExperience
                company="新銳數位股份有限公司（方格子 vocus）"
                logo="/public/logo-vocus.jpeg"
                position="Creator Acquisition & Launch Manager"
                period="三月 2022 - 十月 2023"
                location="Remotely"
                responsibilities={[
                  {
                    title: '數據驅動的成長策略與廣告漏斗優化 (Growth & Ad-Performance)',
                    items: [
                      '千萬級流量獲取：主導 Google、Meta 廣告之長期增長漏斗建立，透過 A/B Test 持續優化受眾分眾與再行銷名單，帶領平台單月不重複訪客（UU）由 700 萬突破至 1,000 萬。',
                      '預算管理與轉化提升：負責行銷預算分配與 CPC/CPA/ROAS 監控，在維持獲客成本的前提下，實現 ROAS > 100% 的有利投放成效。'
                    ]
                  },
                  {
                    title: '創作者獲取、孵化與 0-1 挖掘系統 (Creator Acquisition & Launch)',
                    items: [
                      '潛力標的挖掘系統（0 to 1）：建立創作者分級與評估機制，將主觀判斷轉化為可執行的數據 SOP；透過早期成長率與受眾黏著指標，識別高潛力素人，提升孵化效率。',
                      '爆發式增長實績：策劃「財經主題展」等 Bundle 主題展企劃，以最小資源達成規模綜效；成功帶領素人創作者「邏輯投資」於 1 個月內達成訂閱營收 +7,310% 成長。'
                    ]
                  },
                  {
                    title: '跨部門協作、異業合作與團隊領導 (Leadership & Collaboration)',
                    items: [
                      '團隊領導與 OKR 推進：帶領 2–3 人行銷團隊，制定季度 OKR，並負責行銷預算控管與成效追蹤，確保策略落地與目標達成。',
                      'B2B 異業合作：跨產業策略合作專案，與「臺灣吧」共同推出《BEERU NFT》，打造最有臺味的 NFT，預售 30 分鐘內售出目標一半，成功引爆話題與轉換。'
                    ]
                  }
                ]}
                showcases={[
                  {
                    title: 'Potential IP｜邏輯投資',
                    highlight: '行銷介入後，單月訂閱 GMV 成長 +7,310%',
                    image: '/public/showcase-vocus-logic-invest.jpg',
                    link: 'https://vocus.cc/salon/6453433ffd897800018c4efa/about',
                    linkText: '邏輯投資'
                  },
                  {
                    title: '主題展｜叮咚！你的財務小幫手已上線',
                    highlight: '策劃主題展與流量配置，參展 SKU 平均 GMV 成長 > 200%',
                    image: '/public/showcase-vocus-financial-event.jpg',
                    link: 'https://vocus.cc/event/financial-bot',
                    linkText: '叮咚！你的財務小幫手已上線'
                  },
                  {
                    title: 'B2B 異業合作｜方格子 × 臺灣吧《BEERU NFT》',
                    highlight: '打造最有臺味 NFT，預售 30 分鐘內售出目標 50%',
                    image: '/public/showcase-vocus-beeru-nft.jpg',
                    link: 'https://vocus.cc/vocuverse/collections/BEERU',
                    linkText: 'BEERU NFT'
                  }
                ]}
                additionalLinks={[
                  {
                    text: 'SEO 文章 - 如何成為人氣 blogger：Blogger 經營方法大公開',
                    url: 'https://vocus.cc/article/624d2ae0fd89780001aa03da'
                  },
                  {
                    text: '聯名懶人包說明文章 - 方格子把臺灣吧黑啤 NFT 化了！限量 500 個 1/1 BEERU NFT，超 Q 畫風與滿滿臺味元素！',
                    url: 'https://vocus.cc/article/628668defd89780001274586'
                  },
                  {
                    text: '策展活動頁 - 小資財經月｜精百元以下優質財經專題，擺脫窮忙，學習聰明投資術！',
                    url: 'https://vocus.cc/article/6413ea0bfd89780001be31b4'
                  },
                  {
                    text: '官方線上工作坊（主講人） -【 vocus 創作者工作坊 #2 】透過數位工具，經營更不費力！',
                    url: 'https://www.youtube.com/watch?v=AaSkTK3tmmY'
                  }
                ]}
              />
            </div>

            <div id="vpon">
              {/* Vpon */}
              <WorkExperience
                company="Vpon 威朋大數據集團"
                logo="/public/logo-vpon.jpeg"
                position="Creative Planner"
                period="十一月 2021 - 二月 2022"
                location="Taipei, Taiwan"
                responsibilities={[
                  {
                    title: '數據導向行銷策略與廣告方案提案 (Data-Driven Strategy)',
                    items: [
                      '品牌數位廣告提案：針對杜蕾斯、ABC-MART 等國際品牌，深入分析行銷目標與痛點，將大數據洞察轉化為可執行的投放策略與受眾規劃，提供從 TA 定義、溝通策略到成效預估的整合型方案建議。'
                    ]
                  },
                  {
                    title: '提案視覺化與業務開發支援 (Sales Enablement)',
                    items: [
                      'Sales Kit / Pitch 支援：負責將數位廣告方案的策略重點結構化、視覺化，產出可直接用於對客簡報的提案內容，協助業務團隊有效溝通方案價值與預期成效、提升提案效率與說服力。'
                    ]
                  }
                ]}
                showcases={[
                  {
                    title: '台灣大幸（加護靈）｜數位行銷提案',
                    highlight: '洞察產品核心價值，將大數據轉化為可落地的投放策略與受眾規劃',
                    image: '/public/showcase-vpon-kakulym.jpg'
                  },
                  {
                    title: 'ABC-MART｜電商數據解決方案服務提案',
                    highlight: '以 GA4 應用情境切入溝通，整合 TA 定義、策略規劃與成效預估',
                    image: '/public/showcase-vpon-abcmart.jpg'
                  },
                  {
                    title: '利潔時（杜蕾斯）｜Data Segments 提案',
                    highlight: '運用第三方數據拆解品牌痛點，分析受眾並收斂出高轉換『黃金 TA』',
                    image: '/public/showcase-vpon-durex.jpg'
                  }
                ]}
              />
            </div>

            <div id="sanmin">
              {/* Sanmin */}
              <WorkExperience
                company="三民書局股份有限公司"
                logo="/public/logo-sanmin.jpeg"
                position="行銷企劃"
                period="六月 2020 - 十一月 2021"
                location="Taipei, Taiwan"
                responsibilities={[
                  {
                    title: '內容行銷 (Content Marketing)',
                    items: [
                      '行銷企劃與落地：針對新書進行內容行銷規劃，拆解賣點與溝通主軸，完成行銷佈局與推廣落地，提升書籍曝光與銷售轉換。'
                    ]
                  },
                  {
                    title: '通路營運與銷量增長 (E-commerce & Channel Management)',
                    items: [
                      '通路經營與營收成長：負責 momo、讀冊等大型電商通路經營與採購溝通，包含曝光資源爭取與銷售推進，帶動兩大通路隔年同期業績皆達 30%+ 成長。',
                      '通路議價與獨佈局：爭取通路獨家合作版本，透過專屬贈品與版位交換最大化銷量。案例：《李洋－夢想前場》momo／博客來雙通路合作，於預購階段即鎖定總印刷量 8 成訂單。'
                    ]
                  },
                  {
                    title: '品牌整合行銷與異業資源交換 (Partnership & Integrated Marketing)',
                    items: [
                      '異業合作開發：創下公司首例「互惠行銷」模式，以書腰版面資源交換「得恩堂眼鏡」等品牌有價商品贊助，有效降低行銷成本並擴大品牌觸及。'
                    ]
                  }
                ]}
                showcases={[
                  {
                    title: '《夢想前場：李洋》｜李洋',
                    highlight: '預購階段即鎖定總印刷量 80% 訂單，並談成 momo／博客來獨家合作版本',
                    image: '/public/showcase-sanmin-liyang.jpg'
                  },
                  {
                    title: '《與山的一支獨舞》｜林雋',
                    highlight: '素人作家新書上市首週登上博客來分類榜 Top 4，並完成全台巡迴 5 場活動＋2 場展覽落地',
                    image: '/public/showcase-sanmin-mountain-book.jpg'
                  },
                  {
                    title: '《保養，從肌本做起》｜趙昭明',
                    highlight: '聚焦女性／健康媒體投放策略，創造大量 Earned Media 曝光，並與熱門 KOL：Astor、朱家瑜、柳燕、小日刀口 合作宣傳擴散聲量',
                    image: '/public/showcase-sanmin-skincare-book.jpg'
                  }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-6" id="skills">
          <h2 className="text-2xl text-foreground font-semibold mb-6">Skills</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">Languages</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span><strong className="text-foreground">中文</strong> - 母語者</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span><strong className="text-foreground">臺語</strong> - 母語者</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span><strong className="text-foreground">英文</strong> - 精通，在英語系國家生活一年</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">Certifications</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>丙級會計事務技術士</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span>會計事務資訊技術士</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span>Google Analytics (分析) 認證</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">Tools</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-foreground font-medium mb-1">行銷工具</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">GA4</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Meta Ads</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Google Ads</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">SEO</span>
                  </div>
                </div>
                <div>
                  <div className="text-foreground font-medium mb-1">文書處理</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">Google Workplace</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">MS Office</span>
                  </div>
                </div>
                <div>
                  <div className="text-foreground font-medium mb-1">AI 應用</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs">ChatGPT</span>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs">Claude</span>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs">Gemini</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6" id="education">
          <h2 className="text-2xl text-foreground font-semibold mb-6">Education</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">國立虎尾科技大學</h3>
                  <p className="text-sm text-muted-foreground mb-1">企業管理系</p>
                  <p className="text-xs text-muted-foreground">2014 年 9 月 ~ 2018 年 6 月</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">臺中市立臺中家商</h3>
                  <p className="text-sm text-muted-foreground mb-1">商業經營科</p>
                  <p className="text-xs text-muted-foreground">2011 年 9 月 ~ 2014 年 6 月</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-xs text-muted-foreground border-t border-gray-200 italic">
        © 2026 Fresh Lin
      </footer>
    </div>
  );
}
