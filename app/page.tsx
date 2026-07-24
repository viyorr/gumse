const qualityFactors = [
  { en: "ORIGINAL", ko: "원본성", desc: "복사·재조합이 아닌 실제 경험과 새로운 정보" },
  { en: "HELPFUL", ko: "유용성", desc: "검색한 사람이 궁금해하는 내용을 충분히 해결" },
  { en: "EXPERTISE", ko: "전문성", desc: "한 분야를 꾸준히 다루며 쌓아가는 주제 신뢰도" },
  { en: "TRUST", ko: "신뢰성", desc: "직접 촬영한 사진과 구체적인 설명, 일관된 정보" },
  { en: "FRESH", ko: "최신성", desc: "변화하는 시장과 고객 질문에 맞춘 꾸준한 업데이트" },
];

const operationAxes = [
  {
    no: "01",
    title: "콘텐츠 품질",
    label: "CONTENT",
    desc: "정보성·홍보성 콘텐츠를 균형 있게 설계하고, 검색 의도에 맞는 제목과 첫 문단, 문맥을 구성합니다.",
    items: ["주제 전문성", "원본 콘텐츠", "정기 발행"],
  },
  {
    no: "02",
    title: "방문 흐름",
    label: "TRAFFIC",
    desc: "새 콘텐츠가 발행될 때 블로그가 멈춰 있지 않도록 꾸준한 방문 흐름과 콘텐츠 소비 환경을 관리합니다.",
    items: ["꾸준한 유입", "콘텐츠 소비", "활성도 관리"],
  },
  {
    no: "03",
    title: "소통 기반",
    label: "NETWORK",
    desc: "이웃 관계와 재방문, 사용자 반응이 자연스럽게 이어지는 운영 기반을 만듭니다.",
    items: ["이웃 확장", "소통 흐름", "재방문 기반"],
  },
  {
    no: "04",
    title: "체류 환경",
    label: "ENGAGEMENT",
    desc: "읽을 이유가 있는 구성과 콘텐츠 연결로 방문자가 글을 충분히 소비할 수 있는 환경을 설계합니다.",
    items: ["읽기 구조", "체류 환경", "연관 콘텐츠"],
  },
];

const basicPlans = [
  { name: "일반형", traffic: "일 300명+", price: "10만원", tone: "lime" },
  { name: "프리미엄형", traffic: "일 1,000명+", price: "16만원", tone: "orange", featured: true },
  { name: "그랜드형", traffic: "일 2,000명+", price: "28만원", tone: "violet" },
];

const dwellPlans = [
  { name: "엘리트형", traffic: "방문 + 이웃 + 체류", price: "13만원", tone: "lime" },
  { name: "노블형", traffic: "방문 + 이웃 + 체류", price: "22만원", tone: "orange", featured: true },
  { name: "로얄형", traffic: "방문 + 이웃 + 체류", price: "40만원", tone: "violet" },
];

const process = [
  ["01", "현황 진단", "현재 발행 주제, 운영 빈도, 방문 흐름과 블로그 상태를 확인합니다."],
  ["02", "운영 설계", "업종과 목표 키워드에 맞춰 콘텐츠와 활성화 강도를 설계합니다."],
  ["03", "콘텐츠·운영", "정기 포스팅과 방문·이웃·체류 관리를 함께 진행합니다."],
  ["04", "변화 확인", "운영 데이터와 검색 노출 변화를 확인하며 방향을 보완합니다."],
];

const faqs = [
  {
    q: "방문자나 이웃이 많으면 무조건 상위노출되나요?",
    a: "아닙니다. 검색노출은 콘텐츠의 원본성·유용성·전문성 등 다양한 요소가 함께 작동합니다. 방문자와 이웃 관리는 블로그가 꾸준히 소비되고 운영되는 환경을 만드는 한 축이며, 콘텐츠 품질 관리와 함께 진행해야 합니다.",
  },
  {
    q: "AI로 작성한 글도 괜찮나요?",
    a: "AI 사용 자체보다 결과물의 품질이 중요합니다. 반복 표현이나 정보가 없는 장문을 피하고, 실제 경험·원본 사진·업종 전문 정보를 더해 사람이 읽을 가치가 있는 콘텐츠로 완성해야 합니다.",
  },
  {
    q: "얼마나 진행해야 변화를 볼 수 있나요?",
    a: "블로그 상태와 경쟁도에 따라 차이가 있어 특정 기간이나 순위를 보장하지 않습니다. 단발성 작업보다 최소 3개월 이상 콘텐츠와 운영 데이터를 쌓으며 방향을 점검하는 방식을 권장합니다.",
  },
  {
    q: "포스팅만 별도로 맡길 수 있나요?",
    a: "가능합니다. 전문 작가 포스팅은 최소 10건부터 진행하며, 정보성 글은 당사 이미지 지원이 가능하고 홍보성 글은 고객사의 실제 사진과 간단한 현장 정보가 필요합니다.",
  },
  {
    q: "작업을 멈추면 블로그가 바로 나빠지나요?",
    a: "기존 콘텐츠와 이웃이 사라지는 것은 아닙니다. 다만 발행과 소통, 방문 흐름이 멈추면 성장 속도와 최신성이 둔화될 수 있어 꾸준한 운영을 권장합니다.",
  },
];

export default function Home() {
  return (
    <main>
      <a
        className="placeProposalWidget"
        href="https://gumse-place-growth.viyorr.chatgpt.site"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="금새인터랙티브 플레이스 활성관리 제안서 새 창으로 열기"
      >
        <span className="placeWidgetIcon">P</span>
        <span className="placeWidgetCopy">
          <small>GUMSE PLACE SOLUTION</small>
          <b>블로그로 신뢰를 쌓았다면,<br/>이제는 플레이스에서 선택받을 차례입니다.</b>
          <em>플레이스 활성관리 알아보기 →</em>
        </span>
        <i aria-hidden="true">↗</i>
      </a>

      <nav className="nav">
        <a className="brand" href="#top" aria-label="금새인터랙티브 제안서 처음으로">
          <img src="/gumse-logo-transparent.png" alt="금새인터랙티브" />
        </a>
        <div className="nav-meta">
          <span>BLOG GROWTH PROPOSAL</span>
          <b>2026</b>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow"><i /> GUMSE BLOG GROWTH SYSTEM</p>
          <h1>
            글만 쓰는 블로그는<br />
            <span>오래가지 못합니다.</span>
          </h1>
          <p className="hero-desc">
            좋은 콘텐츠와 건강한 운영이 함께 쌓여야 검색 경쟁력이 자랍니다.
            금새인터랙티브는 글 한 편이 아니라 <strong>블로그 전체의 성장 흐름</strong>을 관리합니다.
          </p>
          <div className="proof-chips" aria-label="콘텐츠 품질 핵심 요소">
            <span>원본성</span><i>×</i><span>전문성</span><i>×</i><span>신뢰성</span><i>×</i><span>최신성</span>
          </div>
        </div>

        <div className="hero-dashboard" aria-label="블로그 성장 흐름 예시">
          <div className="dash-top">
            <div>
              <small>BLOG HEALTH INDEX</small>
              <h2>성장 흐름</h2>
            </div>
            <span><i /> 꾸준한 우상향 구조</span>
          </div>
          <div className="chart">
            <div className="chart-grid" />
            <svg viewBox="0 0 620 260" role="img" aria-label="콘텐츠와 운영이 함께 쌓이는 성장 곡선">
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ff8a1e" stopOpacity=".28" />
                  <stop offset="1" stopColor="#ff8a1e" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="chart-area" d="M10 230 C80 218 110 205 155 184 S245 150 298 126 S390 92 446 65 S545 35 610 14 L610 250 L10 250Z" />
              <path className="chart-line" d="M10 230 C80 218 110 205 155 184 S245 150 298 126 S390 92 446 65 S545 35 610 14" />
              {[["10","230"],["155","184"],["298","126"],["446","65"],["610","14"]].map(([cx,cy])=><circle key={cx} cx={cx} cy={cy} r="7" />)}
            </svg>
            <div className="months"><span>START</span><span>01</span><span>02</span><span>03</span><span>GROW</span></div>
          </div>
          <div className="dash-metrics">
            <div><small>콘텐츠 완성도</small><b>QUALITY</b><strong>UP</strong></div>
            <div><small>운영 안정성</small><b>HEALTH</b><strong>UP</strong></div>
            <div className="metric-accent"><small>검색 경쟁력</small><b>BLOG INDEX</b><strong>GROW</strong></div>
          </div>
        </div>
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          <span>CONTENT QUALITY</span><i>✦</i><span>BLOG HEALTH</span><i>✦</i>
          <span>SEARCH INTENT</span><i>✦</i><span>CONSISTENT OPERATION</span><i>✦</i>
          <span>CONTENT QUALITY</span><i>✦</i><span>BLOG HEALTH</span><i>✦</i>
          <span>SEARCH INTENT</span><i>✦</i><span>CONSISTENT OPERATION</span><i>✦</i>
        </div>
      </div>

      <section className="section intro">
        <p className="section-no">01 / WHY NOW</p>
        <div className="intro-grid">
          <div>
            <p className="eyebrow"><i /> 2026 SEARCH DIRECTION</p>
            <h2 className="section-title">
              이제 검색은<br />
              <span>키워드 개수보다</span><br />
              콘텐츠의 이유를 봅니다.
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              같은 키워드를 반복하고 글 수만 늘리는 방식은 오래가기 어렵습니다.
              지금은 사용자가 찾는 답을 얼마나 자연스럽고 깊이 있게 제공하는지가 중요합니다.
            </p>
            <blockquote>
              검색을 위해 만든 글이 아니라,<br />
              <strong>사람이 읽을 가치가 있는 글.</strong>
            </blockquote>
            <small>
              네이버는 검색 알고리즘의 세부 반영 비율을 공개하지 않습니다.
              본 제안서는 공개 검색 가이드와 운영 경험을 바탕으로 구성했습니다.
            </small>
          </div>
        </div>
        <div className="factor-grid">
          {qualityFactors.map((factor, index) => (
            <article key={factor.en}>
              <span>0{index + 1}</span>
              <small>{factor.en}</small>
              <h3>{factor.ko}</h3>
              <p>{factor.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contrast">
        <p className="section-no">02 / THE GAP</p>
        <div className="contrast-head">
          <h2 className="section-title">글을 올리는 것과<br />블로그를 키우는 것은 다릅니다.</h2>
          <p>좋은 글은 기본입니다. 그 글이 꾸준히 쌓이고 읽히며, 한 분야의 전문 자산으로 연결되도록 운영해야 합니다.</p>
        </div>
        <div className="contrast-board">
          <article className="only-content">
            <small>CONTENT ONLY</small>
            <h3>포스팅만 반복</h3>
            <ul>
              <li>발행 직후만 잠깐 노출</li>
              <li>주제와 문맥이 매번 달라짐</li>
              <li>방문·소통·재방문 흐름 부족</li>
              <li>콘텐츠가 개별 문서로 끝남</li>
            </ul>
            <div className="flat-line"><i /><i /><i /><i /><i /></div>
            <b>성장 흐름이 끊기기 쉽습니다.</b>
          </article>
          <div className="plus-mark">+</div>
          <article className="full-growth">
            <small>CONTENT + OPERATION</small>
            <h3>콘텐츠와 지수관리</h3>
            <ul>
              <li>검색 의도에 맞춘 콘텐츠 설계</li>
              <li>한 분야에 축적되는 전문성</li>
              <li>꾸준한 방문·이웃·체류 환경</li>
              <li>블로그 전체가 브랜드 자산화</li>
            </ul>
            <div className="rise-bars">{[28,42,53,68,84,100].map((h)=><i key={h} style={{height:`${h}%`}} />)}</div>
            <b>콘텐츠가 성장 기반으로 쌓입니다.</b>
          </article>
        </div>
      </section>

      <section className="section system">
        <p className="section-no light">03 / OUR SYSTEM</p>
        <div className="system-head">
          <div>
            <p className="eyebrow light"><i /> GUMSE BLOG ACTIVATION</p>
            <h2 className="section-title">블로그 성장의 네 축을<br /><span>하나의 흐름으로.</span></h2>
          </div>
          <p>숫자 하나를 인위적으로 키우는 방식이 아니라, 콘텐츠가 발행되고 소비되고 다시 방문되는 운영 흐름을 함께 설계합니다.</p>
        </div>
        <div className="axis-grid">
          {operationAxes.map((axis) => (
            <article key={axis.no}>
              <div><span>{axis.no}</span><small>{axis.label}</small></div>
              <h3>{axis.title}</h3>
              <p>{axis.desc}</p>
              <ul>{axis.items.map((x)=><li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section signals">
        <p className="section-no">04 / CHECK SIGNAL</p>
        <div className="signals-grid">
          <div className="signal-sticky">
            <p className="eyebrow"><i /> BLOG HEALTH CHECK</p>
            <h2 className="section-title">이런 상태라면<br />지수관리가 필요합니다.</h2>
            <p>포스팅을 더 쓰기 전에, 블로그가 콘텐츠를 쌓을 수 있는 상태인지 먼저 점검해야 합니다.</p>
          </div>
          <div className="signal-list">
            {[
              "꾸준히 글을 올려도 검색 유입이 거의 없다",
              "발행 직후 잠깐 보이다가 금방 사라진다",
              "블로그 주제가 섞여 전문성이 모호하다",
              "방문자와 이웃, 사용자 반응이 정체돼 있다",
              "사진은 많지만 검색 의도에 맞는 설명이 부족하다",
              "담당자가 바뀔 때마다 발행과 운영이 멈춘다",
            ].map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p><b>CHECK</b></div>)}
          </div>
        </div>
      </section>

      <section className="section plans">
        <p className="section-no">05 / ACTIVATION PLAN</p>
        <div className="plan-head">
          <div>
            <p className="eyebrow"><i /> 3 MONTH BASIC PACKAGE</p>
            <h2 className="section-title">현재 블로그 상태에 맞춰<br />운영 강도를 선택하세요.</h2>
          </div>
          <p>모든 활성화 상품은 기본 3개월 기준이며, VAT는 별도입니다. 6개월 진행 시 1개월, 12개월 진행 시 3개월을 추가 제공합니다.</p>
        </div>

        <div className="plan-block">
          <div className="plan-label">
            <small>PACKAGE A</small>
            <h3>방문자 + 이웃</h3>
            <p>기본 활성화 흐름을 만들고 싶은 블로그</p>
          </div>
          <div className="price-grid">
            {basicPlans.map((plan)=><article key={plan.name} className={`${plan.tone} ${plan.featured?"featured":""}`}>
              {plan.featured && <em>가장 많이 선택</em>}
              <small>{plan.traffic}</small>
              <h4>{plan.name}</h4>
              <div><strong>{plan.price}</strong><span>/ 월</span></div>
              <p>방문 흐름 관리<br />활성 이웃 확장</p>
            </article>)}
          </div>
        </div>

        <div className="plan-block">
          <div className="plan-label">
            <small>PACKAGE B</small>
            <h3>방문자 + 이웃 + 체류</h3>
            <p>콘텐츠 소비 환경까지 함께 관리하고 싶은 블로그</p>
          </div>
          <div className="price-grid">
            {dwellPlans.map((plan)=><article key={plan.name} className={`${plan.tone} ${plan.featured?"featured":""}`}>
              {plan.featured && <em>균형 추천</em>}
              <small>{plan.traffic}</small>
              <h4>{plan.name}</h4>
              <div><strong>{plan.price}</strong><span>/ 월</span></div>
              <p>방문·이웃 활성화<br />150초 이상 체류 환경</p>
            </article>)}
          </div>
        </div>
        <p className="price-note">* 방문 수와 체류시간은 선택한 상품 유형에 따라 달라집니다. 특정 키워드 순위와 매출은 보장하지 않습니다.</p>
      </section>

      <section className="section content-service">
        <p className="section-no light">06 / CONTENT SERVICE</p>
        <div className="content-layout">
          <div>
            <p className="eyebrow light"><i /> PROFESSIONAL WRITING</p>
            <h2 className="section-title">운영할 콘텐츠가 없다면,<br /><span>전문 작가팀이 채웁니다.</span></h2>
            <p>검색용 문장을 늘리는 것이 아니라 업종의 실제 정보와 고객의 궁금증을 읽기 좋은 콘텐츠로 만듭니다.</p>
          </div>
          <div className="content-cards">
            <article><span>01</span><h3>최소 10건부터</h3><p>업로드 계획을 세울 수 있도록 묶음 단위로 진행합니다.</p></article>
            <article><span>02</span><h3>정보성 + 홍보성</h3><p>신뢰를 쌓는 정보와 서비스를 알리는 콘텐츠를 균형 있게 구성합니다.</p></article>
            <article><span>03</span><h3>3~5영업일</h3><p>10건 기준 작성 기간이며, 자료와 일정에 따라 달라질 수 있습니다.</p></article>
            <article><span>04</span><h3>전문 작가팀 발행</h3><p>접수 후 작성·검수·업로드 스케줄에 맞춰 순차 발행합니다.</p></article>
          </div>
        </div>
        <div className="design-strip">
          <div><small>OPTION</small><h3>홈페이지형 블로그 디자인</h3><p>첫 화면에서 브랜드와 서비스를 한눈에 이해하도록 메인 스킨과 바로가기 위젯을 구성합니다.</p></div>
          <div className="design-price"><small>기본 디자인</small><strong>18만원</strong><span>VAT 별도 · 위젯 추가 개당 3만원</span></div>
        </div>
      </section>

      <section className="section process">
        <p className="section-no">07 / PROCESS</p>
        <div className="process-head">
          <h2 className="section-title">블로그를 대신 움직이는<br />명확한 운영 과정.</h2>
          <p>한 번 세팅하고 방치하지 않습니다. 콘텐츠와 운영 흐름을 함께 확인하며 누적합니다.</p>
        </div>
        <div className="process-grid">
          {process.map(([no,title,desc])=><article key={no}>
            <span>{no}</span><i/><h3>{title}</h3><p>{desc}</p>
          </article>)}
        </div>
      </section>

      <section className="section faq">
        <p className="section-no">08 / FAQ</p>
        <div className="faq-layout">
          <div>
            <p className="eyebrow"><i /> BEFORE START</p>
            <h2 className="section-title">시작 전,<br />가장 많이 묻는 질문</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item,index)=><details key={item.q} open={index===0}>
              <summary><span>0{index+1}</span><b>{item.q}</b><i>+</i></summary>
              <p>{item.a}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="closing">
        <p>GUMSE BLOG GROWTH SYSTEM</p>
        <h2>좋은 글이 쌓이고,<br /><span>좋은 블로그가 남습니다.</span></h2>
        <div>
          <span>2014 — 2026</span>
          <span>SEO CONTENT · BLOG OPERATION · BRAND ASSET</span>
        </div>
      </section>

      <footer>
        <img src="/gumse-logo-transparent.png" alt="금새인터랙티브" />
        <p>본 자료는 블로그 운영 상품 안내를 위한 온라인 제안서입니다.</p>
        <span>© 2026 GUMSE INTERACTIVE</span>
      </footer>
    </main>
  );
}
