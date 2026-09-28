import { useCallback, useEffect, useMemo, useState } from "react"

type Tone = "light" | "dark" | "photo"

type SlideFrameProps = {
  children: React.ReactNode
  tone?: Tone
  eyebrow?: string
  section?: string
  className?: string
}

const agenda = [
  ["01", "جواد قبلاوي", "CSE Club"],
  ["02", "عمرو جرار", "Our digital world"],
  ["03", "دعاء خلف", "Computer Engineering"],
  ["04", "حنان والكوتشات", "آلية الدورة"],
  ["05", "نادين شديد", "Problem Solving · PCPC"],
  ["06", "لجنة العلاقات", "People · Connection"],
]

const offerings = [
  ["ورشات", "WORKSHOPS", "⌁"],
  ["فعاليات", "EVENTS", "✦"],
  ["دعم أكاديمي", "ACADEMIC", "＋"],
  ["تلاخيص", "RESOURCES", "≡"],
  ["مجتمع طلابي", "COMMUNITY", "◎"],
  ["دعم السنة الأولى", "FIRST YEAR", "01"],
]

const platforms = [
  ["Website", "فعاليات · دورات · مصادر", "web"],
  ["Discord", "أسئلة · نقاش · مشاركة معرفة", "chat"],
  ["Facebook Page", "الأخبار والإعلانات", "fb"],
  ["Facebook Group", "خبرات · مساعدة · تواصل", "2013"],
  ["Instagram", "محتوى · فعاليات", "ig"],
  ["LinkedIn", "فرص · مجتمع مهني", "in"],
  ["YouTube", "محتوى مرئي", "play"],
]

const hwItems = [
  ["RAM", "HARDWARE"],
  ["Keyboard", "HARDWARE"],
  ["Instagram", "SOFTWARE"],
  ["Operating System", "SOFTWARE"],
  ["Arduino", "BOTH"],
  ["Smart Watch", "BOTH"],
]

const builds = [
  ["Robot", "ROBOTICS"],
  ["Website / Application", "PRODUCT"],
  ["AI System", "INTELLIGENCE"],
  ["Smart Car", "MOBILITY"],
  ["Smart Watch", "WEARABLE"],
  ["Smart Home", "IOT"],
  ["Game", "INTERACTIVE"],
  ["Embedded System", "SYSTEMS"],
  ["Cybersecurity System", "SECURITY"],
]

const skills = [
  "C++",
  "Data Structures",
  "Algorithms",
  "Computer Architecture",
  "Operating Systems",
  "Embedded Systems",
  "Networks",
  "AI",
]

function SlideFrame({
  children,
  tone = "light",
  eyebrow,
  section,
  className = "",
}: SlideFrameProps) {
  return (
    <div className={`slide slide--${tone} ${className}`} dir="rtl">
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <div className="grid-overlay" />
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {section && <div className="section-tag">{section}</div>}
      <div className="slide-content">{children}</div>
    </div>
  )
}

function CseMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`cse-mark ${compact ? "cse-mark--compact" : ""}`}>
      <div className="mark-chip">
        <span>CSE</span>
      </div>
      <div className="mark-copy">
        <b>COMPUTER ENGINEERING</b>
        <span>CLUB · JUST</span>
      </div>
    </div>
  )
}

function CircuitChip() {
  return (
    <div className="chip-scene" aria-hidden="true">
      <div className="chip-lines chip-lines--x" />
      <div className="chip-lines chip-lines--y" />
      <div className="chip-core">
        <span>CSE</span>
        <small>0101 · CLUB</small>
      </div>
      {Array.from({ length: 12 }).map((_, index) => (
        <i key={index} style={{ "--i": index } as React.CSSProperties} />
      ))}
    </div>
  )
}

function BuildVisual({ index }: { index: number }) {
  const shared = {
    className: "mb-auto h-16 w-16 self-center text-blue-600",
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  }

  const visuals = [
    <svg {...shared}>
      <path d="M32 8V15M28 8H36" />
      <rect
        x="13"
        y="15"
        width="38"
        height="29"
        rx="10"
        fill="currentColor"
        stroke="none"
      />
      <path d="M21 44H43L48 56H16L21 44Z" fill="currentColor" opacity=".18" />
      <circle cx="25" cy="29" r="4" fill="white" stroke="none" />
      <circle cx="39" cy="29" r="4" fill="white" stroke="none" />
      <path d="M25 37C29 40 35 40 39 37" stroke="white" strokeWidth="2" />
    </svg>,
    <svg {...shared}>
      <rect x="8" y="11" width="48" height="39" rx="7" />
      <path d="M8 21H56M17 16H18M24 16H25M31 16H32" />
      <path d="M19 31H34M19 38H45" opacity=".45" />
      <path d="M25 56H39M32 50V56" />
    </svg>,
    <svg {...shared}>
      <circle cx="32" cy="32" r="9" fill="currentColor" opacity=".16" />
      <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
      <circle cx="15" cy="18" r="4" />
      <circle cx="49" cy="18" r="4" />
      <circle cx="15" cy="47" r="4" />
      <circle cx="49" cy="47" r="4" />
      <path d="M19 20L27 27M45 20L37 27M19 45L27 37M45 45L37 37" />
    </svg>,
    <svg {...shared}>
      <path d="M12 38L18 26C20 22 24 20 29 20H39C44 20 48 23 50 28L54 38" />
      <path
        d="M9 38H56V47C56 50 54 52 51 52H14C11 52 9 50 9 47V38Z"
        fill="currentColor"
        opacity=".16"
      />
      <circle cx="19" cy="47" r="5" fill="white" />
      <circle cx="46" cy="47" r="5" fill="white" />
      <path d="M23 27H42L47 37H18L23 27Z" />
      <path d="M32 10V17M26 13H38" opacity=".5" />
    </svg>,
    <svg {...shared}>
      <path d="M25 13L27 6H37L39 13M25 51L27 58H37L39 51" />
      <rect
        x="19"
        y="13"
        width="26"
        height="38"
        rx="10"
        fill="currentColor"
        opacity=".14"
      />
      <rect x="24" y="19" width="16" height="25" rx="6" />
      <path d="M29 31L32 34L37 27" />
    </svg>,
    <svg {...shared}>
      <path d="M8 30L32 10L56 30" />
      <path d="M14 27V54H50V27" fill="currentColor" opacity=".12" />
      <path d="M27 54V39H37V54M21 30V24M43 30V24" />
      <circle cx="47" cy="16" r="5" fill="currentColor" opacity=".22" />
    </svg>,
    <svg {...shared}>
      <path
        d="M20 23H44C50 23 55 28 55 35V42C55 48 50 51 46 47L40 41H24L18 47C14 51 9 48 9 42V35C9 28 14 23 20 23Z"
        fill="currentColor"
        opacity=".14"
      />
      <path d="M19 32V40M15 36H23M43 33H44M48 38H49" />
      <path d="M28 18H36" opacity=".5" />
    </svg>,
    <svg {...shared}>
      <rect
        x="15"
        y="15"
        width="34"
        height="34"
        rx="6"
        fill="currentColor"
        opacity=".14"
      />
      <rect x="22" y="22" width="20" height="20" rx="3" />
      <path d="M22 8V15M32 8V15M42 8V15M22 49V56M32 49V56M42 49V56M8 22H15M8 32H15M8 42H15M49 22H56M49 32H56M49 42H56" />
      <path d="M27 27H37V37H27Z" opacity=".45" />
    </svg>,
    <svg {...shared}>
      <path
        d="M32 7L51 15V29C51 42 43 52 32 57C21 52 13 42 13 29V15L32 7Z"
        fill="currentColor"
        opacity=".14"
      />
      <path d="M24 32L29 37L41 24" />
      <path d="M32 13V18M19 20L23 23M45 20L41 23" opacity=".45" />
    </svg>,
  ]

  return visuals[index]
}

function Reveal({
  show,
  children,
  className = "",
}: {
  show: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`reveal ${show ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  )
}

function SlideCounter({ current, total }: { current: number total: number }) {
  return (
    <div className="slide-counter" dir="ltr">
      <span>{String(current + 1).padStart(2, "0")}</span>
      <i />
      <span>{String(total).padStart(2, "0")}</span>
    </div>
  )
}

export default function App() {
  const [current, setCurrent] = useState(0)
  const [reveal, setReveal] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [imageError, setImageError] = useState(false)

  const revealCounts = useMemo(
    () => [
      1, 3, 2, 3, 6, 4, 1, 4, 2, 1, 6, 0, 2, 8, 9, 1, 2, 3, 5, 2, 4, 5, 0, 2, 2,
      0,
    ],
    [],
  )

  const goTo = useCallback(
    (next: number) => {
      const bounded = Math.max(0, Math.min(revealCounts.length - 1, next))
      if (bounded === current) return
      setTransitioning(true)
      window.setTimeout(() => {
        setCurrent(bounded)
        setReveal(0)
        setTransitioning(false)
      }, 230)
    },
    [current, revealCounts.length],
  )

  const next = useCallback(() => {
    if (reveal < revealCounts[current]) {
      setReveal((value) => value + 1)
    } else {
      goTo(current + 1)
    }
  }, [current, goTo, reveal, revealCounts])

  const previous = useCallback(() => {
    if (reveal > 0) {
      setReveal((value) => value - 1)
    } else {
      goTo(current - 1)
    }
  }, [current, goTo, reveal])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(event.key)) {
        event.preventDefault()
        next()
      }
      if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) {
        event.preventDefault()
        previous()
      }
      if (event.key === "Home") goTo(0)
      if (event.key === "End") goTo(revealCounts.length - 1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [goTo, next, previous, revealCounts.length])

  const choose = (key: string, value: string) => {
    setAnswers((state) => ({ ...state, [key]: value }))
  }

  const slides = [
    <SlideFrame key="opening" className="opening">
      <div className="opening-copy">
        <div className="micro-label">UNIVERSITY TECH EVENT · 2025</div>
        <div className="display display--hero">
          نبدأها
          <br />
          <span>سوا.</span>
        </div>
        <p className="lead">
          مساحة بتجمع الفضول، المعرفة، والناس اللي بدهم يبنوا المستقبل.
        </p>
        <Reveal show={reveal >= 1}>
          <div className="opening-prompt">
            اضغط للبدء <span>←</span>
          </div>
        </Reveal>
      </div>
      <div className="opening-art">
        <CseMark />
        <div className="orbit orbit--one" />
        <div className="orbit orbit--two" />
        <div className="signal-dot signal-dot--one" />
        <div className="signal-dot signal-dot--two" />
      </div>
      <div className="vertical-word">CSE · CLUB · JUST</div>
    </SlideFrame>,

    <SlideFrame key="agenda" eyebrow="رحلتنا اليوم" section="AGENDA">
      <div className="title-row">
        <div className="display">
          شو رح
          <br />
          <span>نعيش؟</span>
        </div>
        <p className="lead">
          ست محطات. رحلة واحدة.
          <br />
          وكل محطة بتفتح باب جديد.
        </p>
      </div>
      <div className="agenda-track">
        {agenda.map(([number, name, topic], index) => (
          <Reveal
            key={number}
            show={reveal >= Math.ceil((index + 1) / 2)}
            className="agenda-item"
          >
            <span className="agenda-number">{number}</span>
            <div>
              <b>{name}</b>
              <small>{topic}</small>
            </div>
          </Reveal>
        ))}
      </div>
    </SlideFrame>,

    <SlideFrame key="who" eyebrow="جواد قبلاوي" section="CSE CLUB">
      <div className="who-layout">
        <div>
          <div className="display display--xl who-title">
            مين
            <br />
            <span>إحنا؟</span>
          </div>
          <Reveal show={reveal >= 1}>
            <p className="lead">
              ----{">"} مجتمع طلابي تقني، بنكبر بالمعرفة
              <br />
              وبنقوى ببعض.
            </p>
          </Reveal>
        </div>
        <div className="community-map">
          <div className="community-center">
            <CseMark compact />
          </div>
          {["نتعلّم", "نشارك", "نبني", "نتواصل", "نجرّب", "نتطوّر"].map(
            (text, index) => (
              <Reveal
                key={text}
                show={reveal >= 2}
                className={`node node--${index + 1}`}
              >
                {text}
              </Reveal>
            ),
          )}
          <div className="connection-lines" />
        </div>
      </div>
    </SlideFrame>,

    <SlideFrame
      key="numbers"
      tone="dark"
      eyebrow="النادي بالأرقام"
      section="CSE CLUB"
    >
      <div className="numbers-heading">
        <span>الأرقام بتحكي.</span>
        <div className="display">
          والأثر
          <br />
          <em>أكبر.</em>
        </div>
      </div>
      <div className="stats-grid">
        {[
          ["+600", "طالب وطالبة"],
          ["+40", "ورشة"],
          ["+15", "سنة من الاستمرارية"],
        ].map(([number, label], index) => (
          <Reveal key={label} show={reveal > index} className="stat">
            <strong>{number}</strong>
            <span>{label}</span>
            <small>وأكثر</small>
          </Reveal>
        ))}
      </div>
    </SlideFrame>,

    <SlideFrame key="offers" eyebrow="CSE CLUB" section="شو بنقدملكم؟">
      <div className="offer-heading">
        <div className="display">
          كل اللي
          <br />
          <span>بتحتاجوه.</span>
        </div>
        <p className="lead">
          من أول يوم بالجامعة،
          <br />
          لأول مشروع بتفتخروا فيه.
        </p>
      </div>
      <div className="offer-grid">
        {offerings.map(([title, english, icon], index) => (
          <Reveal key={title} show={reveal > index} className="offer-card">
            <span className="offer-icon">{icon}</span>
            <div>
              <small>{english}</small>
              <b>{title}</b>
            </div>
          </Reveal>
        ))}
      </div>
    </SlideFrame>,

    <SlideFrame
      key="year"
      eyebrow="من أول أسبوع لآخر امتحان"
      section="CSE CLUB"
    >
      <div className="display display--wide">
        معكم
        <br />
        <span>طول السنة.</span>
      </div>
      <div className="yearline">
        {[
          "بداية الفصل",
          "ورشات",
          "منتصف الفصل",
          "دعم أكاديمي",
          "مشاريع",
          "النهائيات",
        ].map((item, index) => (
          <Reveal
            key={item}
            show={reveal >= Math.ceil((index + 1) / 2)}
            className="year-stop"
          >
            <i />
            <span>{item}</span>
          </Reveal>
        ))}
      </div>
      <Reveal show={reveal >= 4} className="future-note">
        <span>والمرحلة الجاية؟</span>
        <b>أقرب. أكبر. وأثرها أوضح.</b>
      </Reveal>
    </SlideFrame>,

    <SlideFrame
      key="findus"
      tone="dark"
      className="question-slide"
      section="OUR DIGITAL WORLD"
    >
      <div className="tiny-presenter">عمرو جرار</div>
      <div className="display display--center">
        وين
        <br />
        <span>تلاقونا؟</span>
        <em>👀</em>
      </div>
      <Reveal show={reveal >= 1} className="tap-hint">
        خلينا نفتح الخريطة الرقمية
      </Reveal>
    </SlideFrame>,

    <SlideFrame
      key="ecosystem"
      eyebrow="CSE DIGITAL ECOSYSTEM"
      section="كل الطرق بتوصلنا"
    >
      <div className="ecosystem">
        <div className="eco-center">
          <CseMark compact />
          <span>YOUR COMMUNITY</span>
        </div>
        {platforms.map(([name, detail, mark], index) => (
          <Reveal
            key={name}
            show={reveal >= Math.ceil((index + 1) / 2)}
            className={`platform platform--${index + 1}`}
          >
            <i>{mark}</i>
            <b>{name}</b>
            <small>{detail}</small>
          </Reveal>
        ))}
        <div className="eco-orbit" />
      </div>
    </SlideFrame>,

    <SlideFrame key="everywhere" className="everywhere">
      <div className="platform-cloud">
        {platforms.map(([name], index) => (
          <span key={name} className={`cloud cloud--${index + 1}`}>
            {name}
          </span>
        ))}
      </div>
      <div className="display display--center">
        وين ما تكونوا...
        <br />
        <span>CSE Club معكم.</span> 💙
      </div>
      <Reveal show={reveal >= 2} className="center-logo">
        <CseMark />
      </Reveal>
    </SlideFrame>,

    <SlideFrame
      key="ce-question"
      tone="dark"
      className="ce-question"
      section="COMPUTER ENGINEERING"
    >
      <div className="tiny-presenter">دعاء خلف</div>
      <div className="ce-copy">
        <div className="display">
          مين فيكم
          <br />
          مهندس حاسوب...
        </div>
        <Reveal show={reveal >= 1}>
          <div className="display accent-line">من غير ما يعرف؟ 👀</div>
        </Reveal>
      </div>
      <CircuitChip />
    </SlideFrame>,

    <SlideFrame
      key="hardware-game"
      tone="dark"
      eyebrow="جاهزين للاختبار؟ 👀"
      section="HARDWARE ولا SOFTWARE؟"
    >
      <div className="game-layout">
        <div className="game-title">
          <span>اختاروا:</span>
          <b>HARDWARE</b>
          <em>SOFTWARE</em>
          <strong>BOTH</strong>
        </div>
        <div className="object-grid">
          {hwItems.map(([item, answer], index) => {
            const selected = answers[item]
            return (
              <Reveal
                key={item}
                show={reveal >= index + 1}
                className="object-card"
              >
                <div className="object-name">{item}</div>
                {!selected ? (
                  <div className="choice-row">
                    {["H", "S", "B"].map((choice) => (
                      <div
                        key={choice}
                        role="button"
                        tabIndex={0}
                        className="mini-choice"
                        onClick={() => choose(item, choice)}
                      >
                        {choice}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`answer ${
                      selected === answer[0] ? "correct" : ""
                    }`}
                  >
                    {selected === answer[0] ? answer : "جرّبوا مرة ثانية"}
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </SlideFrame>,

    <SlideFrame key="car" tone="dark" className="car-slide" section="ONE MORE">
      <div className="car-copy">
        <div className="display">
          طيب
          <br />
          <span>هاي؟ 👀</span>
        </div>
      </div>
      <div className="car-visual">
        <div className="car-beam" />
        <div className="car-body">
          <i />
          <i />
        </div>
        <div className="lidar">◎</div>
        <div className="road-lines" />
      </div>
      <div className="car-options">
        {["HARDWARE?", "SOFTWARE?", "BOTH?"].map((option) => (
          <div
            key={option}
            role="button"
            tabIndex={0}
            onClick={() => choose("car", option)}
            className={answers.car === option ? "selected" : ""}
          >
            {option}
          </div>
        ))}
      </div>
      {answers.car && (
        <div className="car-result">
          {answers.car === "BOTH?"
            ? "بالضبط. الاثنين مع بعض."
            : "لسّا في جزء ناقص…"}
        </div>
      )}
    </SlideFrame>,

    <SlideFrame
      key="merge"
      tone="dark"
      className="merge-slide"
      section="THE REVEAL"
    >
      <div className="merge-side merge-side--hardware">
        <div className="processor">
          CPU<small>PHYSICAL</small>
        </div>
        <b>HARDWARE</b>
      </div>
      <div className="merge-side merge-side--software">
        <div className="code-rain">
          101
          <br />
          C++
          <br />
          011
        </div>
        <b>SOFTWARE</b>
      </div>
      <Reveal show={reveal >= 1} className="merge-plus">
        ＋
      </Reveal>
      <Reveal show={reveal >= 2} className="merge-center">
        <small>THIS IS</small>
        <strong>
          COMPUTER
          <br />
          ENGINEERING.
        </strong>
        <p>مش Hardware لحاله. ومش Software لحاله.</p>
        <b>إحنا بنخليهم يشتغلوا مع بعض.</b>
      </Reveal>
    </SlideFrame>,

    <SlideFrame
      key="skilltree"
      tone="dark"
      className="terminal-slide"
      section="LEVEL 01"
    >
      <div className="terminal-window">
        <div className="terminal-bar">
          <i />
          <i />
          <i />
          <span>first_program.cpp</span>
        </div>
        <div className="typed">
          <span>cout</span> &lt;&lt; <b>"Hello World"</b>;<i>_</i>
        </div>
        <p>كل القصة ممكن تبدأ من هون.</p>
      </div>
      <div className="skill-tree">
        {skills.map((skill, index) => (
          <Reveal key={skill} show={reveal > index} className="skill-node">
            <i>{String(index + 1).padStart(2, "0")}</i>
            <span>{skill}</span>
          </Reveal>
        ))}
      </div>
    </SlideFrame>,

    <SlideFrame
      key="build"
      eyebrow="THE POSSIBILITIES"
      section="COMPUTER ENGINEERING"
    >
      <div className="build-heading">
        <div className="display">
          طيب...
          <br />
          <span>شو ممكن أبني؟</span>
        </div>
      </div>
      <div className="build-grid">
        {builds.map(([name, category], index) => (
          <Reveal
            key={name}
            show={reveal > index}
            className={`build-card build-card--${index + 1}`}
          >
            <BuildVisual index={index} />
            <small>{category}</small>
            <b>{name}</b>
            <i>↗</i>
          </Reveal>
        ))}
      </div>
    </SlideFrame>,

    <SlideFrame
      key="quiz"
      tone="dark"
      className="quiz-slide"
      section="ENGINEER LIFE · 01"
    >
      <div className="quiz-status">
        <i /> REALITY CHECK
      </div>
      <div className="quiz-question">
        لما يعرفوا إنك
        <br />
        <span>مهندس حاسوب... شو آخرِتك تنسأل؟</span>
      </div>
      <div className="quiz-options">
        {[
          ["A", "صلّح الريموت"],
          ["B", "شوف النت ليه قطع"],
          ["C", "فرمتلي اللابتوب"],
          ["D", "كلهم طبعًا 👀"],
        ].map(([letter, text]) => (
          <div
            key={letter}
            role="button"
            tabIndex={0}
            onClick={() => choose("quiz", letter)}
            className={answers.quiz === letter ? "selected" : ""}
          >
            <i>{letter}</i>
            <span>{text}</span>
          </div>
        ))}
      </div>
      <Reveal
        show={reveal >= 1 && !!answers.quiz}
        className={`quiz-feedback ${answers.quiz === "D" ? "success" : ""}`}
      >
        {answers.quiz === "D"
          ? "للأسف... إجابة صحيحة 😂"
          : "استنّى بس... الطلبات أكثر من هيك."}
      </Reveal>
    </SlideFrame>,

    <SlideFrame key="all" className="all-slide" section="ANSWER · D">
      <div className="all-title">
        ALL OF THEM.<span>🔥</span>
      </div>
      <Reveal show={reveal >= 1} className="question-one">
        السؤال مش: <b>شو بقدر يعمل مهندس الحاسوب؟</b>
      </Reveal>
      <Reveal show={reveal >= 2} className="question-two">
        <small>السؤال هو...</small>
        <strong>إنت شو حابب تبني؟</strong>
      </Reveal>
    </SlideFrame>,

    <SlideFrame
      key="initialize"
      tone="dark"
      className="initialize"
      section="SYSTEM TRANSITION"
    >
      <div className="prompt">
        &gt; <i>_</i>
      </div>
      <Reveal show={reveal >= 1} className="init-copy">
        كل هالعالم...
        <br />
        <span>ببلش من أول سطر Code.</span>
      </Reveal>
      <Reveal show={reveal >= 2} className="ready-line">
        جاهزين نكتب أول سطر؟ 👀
      </Reveal>
      <Reveal show={reveal >= 3} className="loader">
        <div>
          <span>C++ INITIALIZING...</span>
          <b>100%</b>
        </div>
        <i>
          <em />
        </i>
        <small>NEXT · حنان والكوتشات</small>
      </Reveal>
    </SlideFrame>,

    <SlideFrame key="mechanism" eyebrow="حنان والكوتشات" section="آلية الدورة">
      <div className="title-row">
        <div className="display">
          خطوة
          <br />
          <span>بخطوة.</span>
        </div>
        <p className="lead">
          كيف رح نمشي معكم
          <br />
          من أول لقاء لأول إنجاز؟
        </p>
      </div>
      <div className="course-roadmap">
        {[
          ["01", "نبدأ سوا", "FOUNDATION"],
          ["02", "نطبّق بإيدنا", "PRACTICE"],
          ["03", "نسأل ونناقش", "SUPPORT"],
          ["04", "نبني بثقة", "BUILD"],
        ].map(([n, ar, en], index) => (
          <Reveal key={n} show={reveal > index} className="roadmap-step">
            <i>{n}</i>
            <div>
              <b>{ar}</b>
              <small>{en}</small>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal show={reveal >= 5} className="roadmap-end">
        مش سباق. رحلة مصممة عشان الكل يوصل.
      </Reveal>
    </SlideFrame>,

    <SlideFrame
      key="coaches-who"
      tone="dark"
      className="coaches-who"
      eyebrow="حنان والكوتشات"
      section="WHO ARE WE?"
    >
      <div className="coaches-question">
        <small>قبل ما نكمل...</small>
        <div className="display">
          مين
          <br />
          <span>إحنا؟</span>
        </div>
      </div>
      <Reveal show={reveal >= 1} className="coaches-answer">
        <span className="relative z-10 block text-center text-4xl font-bold text-white">
          عمر ميس لؤي
        </span>
      </Reveal>
      <Reveal show={reveal >= 2} className="coaches-tags">
        {["خبرة بنشاركها", "أسئلة بنجاوبها", "رحلة بنمشيها سوا"].map((item) => (
          <b key={item}>{item}</b>
        ))}
      </Reveal>
    </SlideFrame>,

    <SlideFrame
      key="coaches-role"
      className="coaches-role"
      eyebrow="حنان والكوتشات"
      section="OUR ROLE"
    >
      <div className="role-heading">
        <div className="display">
          إيش
          <br />
          <span>دورنا؟</span>
        </div>
        <p className="lead">نكون جنبكم في كل خطوة، من أول سؤال لأول مشروع.</p>
      </div>
      <div className="role-orbit">
        <div className="role-center">معكم</div>
        {[
          ["01", "نشرح", "بوضوح"],
          ["02", "نطبّق", "سوا"],
          ["03", "نتابع", "تقدّمكم"],
          ["04", "ندعم", "أسئلتكم"],
        ].map(([number, title, detail], index) => (
          <Reveal
            key={number}
            show={reveal > index}
            className={`role-card role-card--${index + 1}`}
          >
            <i>{number}</i>
            <b>{title}</b>
            <small>{detail}</small>
          </Reveal>
        ))}
      </div>
    </SlideFrame>,

    <SlideFrame key="trainers" className="trainers" section="حنان والكوتشات">
      <div className="display display--center">
        مش بس دورة...
        <br />
        <span>إحنا معكم خلال الفصل.</span> 💙
      </div>
      <div className="journey">
        {["LEARN", "PRACTICE", "ASK", "IMPROVE", "BUILD"].map((item, index) => (
          <Reveal key={item} show={reveal > index} className="journey-step">
            <i>{String(index + 1).padStart(2, "0")}</i>
            <b>{item}</b>
          </Reveal>
        ))}
      </div>
    </SlideFrame>,

    <SlideFrame
      key="pcpc"
      tone="photo"
      className="pcpc-slide"
      section="نادين شديد · PCPC"
    >
      <img src="/src/imports/PCPC.png" alt="PCPC competition" />
      <div className="photo-fallback">
        <div className="competition-grid" />
        <span>PCPC</span>
      </div>
      <div className="photo-wash" />
      <div className="pcpc-copy">
        <small>THINK. SOLVE. COMPETE.</small>
        <div>
          PROBLEM
          <br />
          <span>SOLVING.</span>
        </div>
        <p>من حل المسألة... لجوّ المسابقة 🔥</p>
      </div>
      <div className="pcpc-badge">
        PCPC <i>↗</i>
      </div>
    </SlideFrame>,

    <SlideFrame
      key="interact-poll"
      className="interact-poll"
      eyebrow="مع لين"
      section="يلا نتفاعل"
    >
      <div className="poll-heading">
        <div className="display">
          يلا
          <br />
          <span>نتفاعل.</span>
        </div>
        <p className="lead">
          استطلاع سريع.
          <br />
          ارفعوا إيديكم وشاركونا.
        </p>
      </div>
      <div className="poll-cards">
        <Reveal show={reveal >= 1} className="poll-card">
          <i>01</i>
          <small>سؤال للجمهور</small>
          <b>مين جرّب يكتب Code قبل؟</b>
          <span>ارفعوا إيديكم</span>
        </Reveal>
        <Reveal show={reveal >= 2} className="poll-card poll-card--blue">
          <i>02</i>
          <small>اختاروا بسرعة</small>
          <b>شو أكثر إشي متحمسين تتعلموه؟</b>
          <span>شاركوا إجاباتكم</span>
        </Reveal>
      </div>
    </SlideFrame>,

    <SlideFrame
      key="interact-booth"
      tone="dark"
      className="booth-slide"
      eyebrow="مع بيلسان"
      section="يلا نتفاعل"
    >
      <div className="booth-date">
        <span>الثلاثاء</span>
        <b>يوم إرشادي</b>
        <small>للسنافر · كلية الهندسة</small>
      </div>
      <div className="booth-main">
        <div className="booth-title">
          <small>CSE CLUB BOOTH</small>
          <div className="display">
            تعالوا
            <br />
            <span>نتعرّف.</span>
          </div>
        </div>
        <Reveal show={reveal >= 1} className="booth-activities">
          {["فعاليات", "أنشطة", "أسئلتكم", "عن النادي والتخصص"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </Reveal>
      </div>
      <Reveal show={reveal >= 2} className="booth-quote">
        <small>والمهم...</small>
        <b>لا تمروا من جنب البوث بدون ما تسلّموا علينا!</b>
      </Reveal>
    </SlideFrame>,

    <SlideFrame key="closing" tone="dark" className="closing">
      <div className="closing-mark">
        <CseMark />
      </div>
      <div className="closing-copy">
        <span>SEE YOU ON THE OTHER SIDE</span>
        <div className="display">هاي مش نهاية الفعالية...</div>
        <div className="display accent-line">هاي بداية رحلتكم معنا. 💙</div>
      </div>
      <div className="closing-footer">
        <b>CSE CLUB</b>
        <span>LEARN · CONNECT · BUILD</span>
      </div>
    </SlideFrame>,
  ]

  return (
    <main className="presentation-shell">
      <div className={`stage ${transitioning ? "is-transitioning" : ""}`}>
        {slides[current]}
      </div>
      <div className="controls">
        <div
          role="button"
          tabIndex={0}
          aria-label="Previous slide"
          onClick={previous}
          className="nav-button"
        >
          ←
        </div>
        <SlideCounter current={current} total={slides.length} />
        <div
          role="button"
          tabIndex={0}
          aria-label="Next slide or reveal"
          onClick={next}
          className="nav-button nav-button--next"
        >
          →
        </div>
      </div>
      <div className="progress">
        <i style={{ transform: `scaleX(${(current + 1) / slides.length})` }} />
      </div>
    </main>
  )
}
