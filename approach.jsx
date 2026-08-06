// Marquee, Method/pillars, Services, Stats sections.

function Marquee() {
  const items = [
  "Tribeca, NYC",
  "Est. 2002",
  "Private Coaching",
  "22+ Years Experience",
  "200+ Clients",
  "5 Certifications",
  "Now Accepting · 2026"];

  // duplicate so the marquee can loop
  const list = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {list.map((it, i) =>
        <span key={i} className="marquee-item">
            {it}
            <span className="dot" />
          </span>
        )}
      </div>
    </div>);

}

// === The Method: 4 pillars ===
function Method() {
  const pillars = [
  {
    n: "01",
    title: "Strategy",
    body: "Your program is built around your calendar, not the other way around. Travel weeks, board meetings, late nights, we plan for all of it so you can stay consistent.",
    kw: "Goal mapping · Periodization · Travel protocols"
  },
  {
    n: "02",
    title: "Movement",
    body: "Strength, mobility, and conditioning tailored to keep you feeling capable and confident, whether that is in the boardroom or on the court.",
    kw: "FRC · Strength · Conditioning · Mobility"
  },
  {
    n: "03",
    title: "Nutrition",
    body: "Simple, sustainable fueling for a demanding schedule. No fad diets and no complicated spreadsheets, just habits you can actually keep.",
    kw: "Intake design · Recovery · Body composition"
  },
  {
    n: "04",
    title: "Accountability",
    body: "Regular check-ins, video form reviews, and a coach who picks up the phone. You bring the effort, and we handle the follow-through together.",
    kw: "WhatsApp · Weekly Zoom · Form review"
  }];


  return (
    <section id="method" style={{ padding: "160px 0 140px", background: "var(--bg-1)" }}>
      <div className="container">
        <SectionHead

          title={<>Four pillars.<br /><em style={{ fontStyle: "italic", fontWeight: "700", fontFamily: "\"Archivo Narrow\"" }}>One operator.</em></>}
          sub="Every program starts from the same foundation. What changes is you: your goals, your schedule, and how your body responds." />
        

        <div className="pillars-grid" style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          borderTop: "1px solid var(--line)"
        }}>
          {pillars.map((p, i) =>
          <Pillar key={i} {...p} />
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .pillars-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>);

}

function Pillar({ n, title, body, kw }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "40px 28px 36px",
        borderRight: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.5s var(--ease-out)",
        background: hover ? "var(--bg-1)" : "transparent",
        cursor: "default"
      }}>
      
      {/* Top sweep */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        width: "100%",
        background: "var(--accent)",
        transform: hover ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.7s var(--ease-out)"
      }} />
      <div style={{
        fontFamily: "var(--ff-mono)",
        fontSize: 11,
        letterSpacing: "0.22em",
        color: "var(--accent)",
        marginBottom: 24
      }}>{n}</div>
      <h3 className="display" style={{
        margin: "0 0 18px",
        fontSize: 38,
        lineHeight: 0.95
      }}>{title}</h3>
      <p style={{
        margin: "0 0 28px",
        fontSize: 16,
        lineHeight: 1.6,
        color: "var(--ink-mute)",
        minHeight: 88
      }}>{body}</p>
    </div>);

}

function SectionHead({ eyebrow, title, sub, align = "left" }) {
  const ref = React.useRef(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`tr reveal-stagger ${vis ? "in" : ""}`} style={{
      maxWidth: align === "center" ? 760 : 880,
      margin: align === "center" ? "0 auto" : "0",
      textAlign: align,
      display: "flex",
      flexDirection: "column",
      gap: 28
    }}>
      {eyebrow && <span className="eyebrow" style={{ alignSelf: align === "center" ? "center" : "flex-start" }}>{eyebrow}</span>}
      <h2 className="display" style={{
        margin: 0,
        fontSize: "clamp(44px, 6.5vw, 92px)",
        lineHeight: 0.92
      }}>{title}</h2>
      {sub &&
      <p style={{
        margin: 0,
        maxWidth: 580,
        fontSize: 17,
        lineHeight: 1.55,
        color: "var(--ink-mute)",
        alignSelf: align === "center" ? "center" : "flex-start", width: "580px"
      }}>{sub}</p>
      }
    </div>);

}

// === Services: 3 offerings ===
function Services() {
  const services = [
  {
    tag: "01 / Flagship",
    title: "In-Person 1:1",
    kicker: "Private sessions, Tribeca & client studios",
    body: "A private, hour-long session built around your goals, your schedule, and how you like to train. The room is yours, phone-free and fully focused on you.",
    bullets: [
    "Initial assessment & goal mapping",
    "Strength · Mobility · Conditioning",
    "Tribeca, midtown, or your private space"],

    img: "assets/davidharbor-opt.jpg"
  },
  {
    tag: "02 / Anywhere",
    title: "Virtual Training",
    kicker: "Hotel rooms, home gyms, board retreats",
    body: "Live sessions that work wherever you are. Traveling with no equipment is never a problem, because every workout is designed around what you have on hand.",
    bullets: [
    "Live Zoom sessions, any timezone",
    "Bodyweight or equipment-equipped",
    "Travel-week protocols included"],

    img: "assets/jksimmons3-opt.jpg"
  },
  {
    tag: "03 / Program",
    title: "90-Day Transformation",
    kicker: "Full-stack remote coaching",
    body: "Training, nutrition, and weekly accountability come together in a focused ninety-day plan to help you build real, lasting results.",
    bullets: [
    "Custom training & nutrition plan",
    "Daily WhatsApp + bi-weekly Zoom",
    "Form review & progress tracking"],

    img: "assets/Blake-opt.jpg",
    imgPos: "center 18%"
  }];


  return (
    <section id="services" style={{ padding: "160px 0 140px", background: "var(--bg-1)" }}>
      <div className="container">
        <SectionHead

          title={<>Three ways<br />to <em style={{ fontStyle: "italic", fontFamily: "\"Archivo Narrow\"", fontWeight: "700" }}>work together.</em></>}
          sub="One coach, three formats, wherever you are." />
        

        <div className="services-grid" style={{
          marginTop: 96,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32
        }}>
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @property --beam-angle { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
        .svc-card::after {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          background: conic-gradient(from var(--beam-angle), transparent 0%, var(--accent-hi) 12%, var(--accent) 20%, transparent 34%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s var(--ease-out);
          pointer-events: none;
          z-index: 3;
        }
        .svc-card.is-hover::after {
          opacity: 1;
          animation: beamspin 2.6s linear infinite;
        }
        @keyframes beamspin { to { --beam-angle: 360deg; } }
        @media (prefers-reduced-motion: reduce) {
          .svc-card.is-hover::after { animation: none; }
        }
      `}</style>
    </section>);

}

function ServiceCard({ tag, title, kicker, body, bullets, img, imgPos }) {
  const ref = React.useRef(null);
  const [vis, setVis] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`reveal svc-card ${hover ? "is-hover" : ""} ${vis ? "in" : ""}`}
      style={{
        background: hover ? "var(--bg-2)" : "var(--bg-1)",
        border: "1px solid var(--line)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
        transition: "background 0.5s var(--ease-out), border-color 0.5s, transform 0.6s var(--ease-out)",
        ...(hover ? { borderColor: "var(--accent-lo)" } : {})
      }}>
      
      {/* Image with mask reveal */}
      <div className={`img-mask ${vis ? "in" : ""}`} style={{
        aspectRatio: "4 / 3",
        position: "relative",
        overflow: "hidden"
      }}>
        <img src={img} alt={title} loading="lazy" decoding="async" style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: imgPos || "center 25%",
          filter: hover ? "grayscale(0)" : "grayscale(0.4) contrast(1.05)",
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "all 0.8s var(--ease-out)"
        }} />
        <div style={{
          position: "absolute",
          inset: 0, background: "linear-gradient(transparent 50%, rgba(10, 9, 8, 0.85)) center top / contain"

        }} />
        <div style={{
          position: "absolute",
          left: 20,
          bottom: 18,
          fontFamily: "var(--ff-mono)",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)"
        }}>{tag}</div>
      </div>

      {/* Body */}
      <div style={{ padding: "32px 28px 36px", display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
        <div>
          <h3 className="display" style={{
            margin: "0 0 6px",
            fontSize: 34,
            lineHeight: 0.98
          }}>{title}</h3>
          <div style={{
            fontSize: 14.5,
            color: "var(--ink-mute)",
            fontStyle: "italic",
            fontFamily: "var(--ff-body)"
          }}>{kicker}</div>
        </div>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-mute)" }}>{body}</p>

        <ul style={{
          margin: "8px 0 0",
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          paddingTop: 18,
          borderTop: "1px solid var(--line)"
        }}>
          {bullets.map((b, i) =>
          <li key={i} style={{
            fontSize: 14.5,
            color: "var(--ink)",
            display: "flex",
            alignItems: "flex-start",
            gap: 12
          }}>
              <span style={{
              width: 4,
              height: 4,
              background: "var(--accent)",
              marginTop: 7,
              flex: "none"
            }} />
              {b}
            </li>
          )}
        </ul>

        <a href="#contact" style={{
          marginTop: "auto",
          paddingTop: 24,
          fontFamily: "var(--ff-mono)",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: hover ? "var(--accent)" : "var(--ink)",
          transition: "color 0.3s, gap 0.3s",
          display: "inline-flex",
          alignItems: "center",
          gap: hover ? 14 : 10
        }}>
          Get Started
          <span>→</span>
        </a>
      </div>
    </article>);

}

// === Stats with animated counters ===
function Stats() {
  const items = [
  { v: 22, suffix: "+", label: "Years coaching", sub: "Manhattan & worldwide" },
  { v: 200, suffix: "+", label: "Clients & counting", sub: "Executives, founders, talent" },
  { v: 5, suffix: "", label: "Certifications", sub: "CFSC · NFPT · FRC · RMP · Pre/Post" },
  { v: 100, suffix: "%", label: "Phone-free sessions", sub: "Eyes on you, every minute" }];


  return (
    <section style={{
      padding: "120px 0",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
      background: "var(--bg-1)"
    }}>
      <div className="container">
        <div className="stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0
        }}>
          {items.map((it, i) => <Stat key={i} {...it} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>);

}

function Stat({ v, suffix, label, sub }) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1600;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(v * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [v]);

  return (
    <div ref={ref} style={{
      padding: "32px 24px",
      borderRight: "1px solid var(--line)",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }}>
      <div className="display" style={{
        fontSize: "clamp(56px, 7vw, 96px)",
        lineHeight: 0.95,
        color: "var(--ink)"
      }}>
        {n}<span style={{ color: "var(--accent)" }}>{suffix}</span>
      </div>
      <div style={{
        fontFamily: "var(--ff-mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--ink)",
        marginTop: 12
      }}>{label}</div>
      <div style={{
        fontSize: 14.5,
        color: "var(--ink-mute)"
      }}>{sub}</div>
    </div>);

}

Object.assign(window, { Marquee, Method, Pillar, SectionHead, Services, ServiceCard, Stats, Stat });