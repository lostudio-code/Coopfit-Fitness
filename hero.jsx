// Hero — video bg / split / full-bleed photo variants.
// Headlines: 3 variations toggled via tweaks.

const HEADLINES = {
  "transform": {
    render:
    <>
        <span style={{ display: "block" }}>Transform</span>
        <span style={{ display: "block" }}>your <em style={{ fontFamily: "\"Archivo Narrow\"", fontWeight: "700" }}>body.</em></span>
        <span style={{ display: "block" }}>Elevate <em style={{ fontFamily: "\"Archivo Narrow\"", fontWeight: "700" }}>your life.</em></span>
      </>,

    sub: "Private coaching for busy professionals who expect a lot of themselves. We build the strength, energy, and resilience that keep you at your best."
  },
  "operator": {
    render:
    <>
        <span style={{ display: "block" }}>Train</span>
        <span style={{ display: "block" }}>like an</span>
        <span style={{ display: "block" }}><em>operator.</em></span>
      </>,

    sub: "For more than twenty years, executives, founders, and on-screen talent have trusted Charles to keep them strong, sharp, and ready for anything."
  },
  "edge": {
    render:
    <>
        <span style={{ display: "block" }}>The <em>edge</em></span>
        <span style={{ display: "block" }}>your peers</span>
        <span style={{ display: "block" }}>don't have.</span>
      </>,

    sub: "Private training in Tribeca and tailored remote programs for people who take their health as seriously as their work."
  }
};

function Hero({ layout, headlineKey }) {
  const h = HEADLINES[headlineKey] || HEADLINES["transform"];
  // Force-remount on layout/headline change so animations replay
  const [animKey, setAnimKey] = React.useState(0);
  React.useEffect(() => {setAnimKey((k) => k + 1);}, [layout, headlineKey]);

  // Parallax on hero media
  const mediaRef = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      if (!mediaRef.current) return;
      const y = window.scrollY;
      mediaRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(${1 + y * 0.0003})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const HERO_VIDEO = "assets/Coop_Edit_2bit.mp4";
  const HERO_POSTER = "assets/hero.jpg";
  const HERO_PHOTO = "assets/hero.jpg";
  const SPLIT_PHOTO = "assets/jksimmons3.jpg";

  // --- Media element by layout ---
  let mediaEl = null;
  if (layout === "video") {
    mediaEl =
    <video
      ref={mediaRef}
      autoPlay
      muted
      loop
      playsInline
      poster={HERO_POSTER}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "brightness(0.55) contrast(1.05) saturate(0.85)"
      }}>
      
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>;

  } else if (layout === "photo") {
    mediaEl =
    <img
      ref={mediaRef}
      src={HERO_PHOTO}
      alt="Charles Cooperman"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "brightness(0.55) contrast(1.05) saturate(0.8) grayscale(0.15)"
      }} />;


  }

  // SPLIT layout: text left, image right
  if (layout === "split") {
    return (
      <section id="top" style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "var(--bg-0)",
        overflow: "hidden"
      }}>
        {/* Left: text */}
        <div key={animKey} style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "140px 64px 80px",
          gap: 32
        }}>
          <span className="eyebrow hero-anim" style={{ display: "none" }}>
            Tribeca · NYC · Worldwide
          </span>
          <HeroHeadline h={h} sizeBase={94} />
          <p className="hero-anim d3" style={{
            maxWidth: 460,
            fontSize: 17,
            lineHeight: 1.55,
            color: "var(--ink-mute)"
          }}>{h.sub}</p>
          <div className="hero-anim d4" style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap"
          }}>
            <a href="https://calendly.com/coopfit78/new-meeting" target="_blank" rel="noopener" className="btn">
              <span>Book Free Consultation</span>
              <span className="arrow">→</span>
            </a>
            <a href="#method" className="hover-fade" style={{
              fontFamily: "var(--ff-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ink-mute)"
            }}>↓ Explore the method</a>
          </div>
        </div>

        {/* Right: image */}
        <div className="img-mask in" style={{ position: "relative", overflow: "hidden" }}>
          <img
            ref={mediaRef}
            src={SPLIT_PHOTO}
            alt="Training session"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(0.1) contrast(1.05)"
            }} />
          
          {/* Subtle gradient on image */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(10,9,8,0.0) 60%, rgba(10,9,8,0.4) 100%)",
            pointerEvents: "none"
          }} />
          {/* Floating tag */}
          <div style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            background: "rgba(10, 9, 8, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid var(--line-strong)",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: 14
          }}>
            <span style={{ width: 8, height: 8, background: "var(--accent)", borderRadius: "50%", animation: "pulse 2s ease-in-out infinite" }} />
            <span style={{
              fontFamily: "var(--ff-mono)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink)"
            }}>Now accepting clients · 2026</span>
          </div>
        </div>
        <HeroMeta />
        <style>{`
          @media (max-width: 900px) {
            section#top { grid-template-columns: 1fr !important; }
            section#top > div:first-child { padding: 120px 24px 60px !important; }
            section#top .img-mask { height: 60vh; }
          }
        `}</style>
      </section>);

  }

  // VIDEO or PHOTO layout: fullbleed media + centered text
  return (
    <section id="top" style={{
      position: "relative",
      minHeight: "100vh",
      overflow: "hidden",
      background: "var(--bg-0)"
    }}>
      {/* Background media */}
      <div style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        {mediaEl}
      </div>

      {/* Gradient veils */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(10,9,8,0.45) 0%, rgba(10,9,8,0.25) 40%, rgba(10,9,8,0.85) 100%)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 50% 60%, transparent 0%, rgba(10,9,8,0.5) 90%)",
        pointerEvents: "none"
      }} />

      {/* Side rails — luxe detail */}
      <div className="hero-rail" style={{
        position: "absolute",
        top: 100, bottom: 100,
        left: 48,
        width: 1,
        background: "linear-gradient(180deg, transparent, var(--line-strong) 30%, var(--line-strong) 70%, transparent)"
      }} />
      <div className="hero-rail" style={{
        position: "absolute",
        top: 100, bottom: 100,
        right: 48,
        width: 1,
        background: "linear-gradient(180deg, transparent, var(--line-strong) 30%, var(--line-strong) 70%, transparent)"
      }} />

      {/* Content */}
      <div key={animKey} className="container hero-content" style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 120,
        paddingBottom: 80,
        gap: 32
      }}>
        <span className="eyebrow hero-anim" style={{ display: "none" }}>
          Tribeca · NYC · Worldwide
        </span>

        <HeroHeadline h={h} sizeBase={140} />

        <p className="hero-anim d3" style={{
          maxWidth: 520,
          fontSize: 18,
          lineHeight: 1.55,
          color: "var(--ink-mute)"
        }}>{h.sub}</p>

        <div className="hero-anim d4" style={{
          display: "flex",
          gap: 20,
          alignItems: "center",
          flexWrap: "wrap"
        }}>
          <a href="https://calendly.com/coopfit78/new-meeting" target="_blank" rel="noopener" className="btn">
            <span>Book Free Consultation</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <HeroMeta />
    </section>);

}

function HeroHeadline({ h, sizeBase }) {
  return (
    <h1 className="display hero-anim d2" style={{
      margin: 0,
      fontSize: `clamp(54px, ${sizeBase * 0.07}vw, ${sizeBase}px)`,
      lineHeight: 0.9
    }}>
      {h.render}
    </h1>);

}

function HeroMeta() {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </>);

}

Object.assign(window, { Hero, HeroHeadline, HeroMeta, HEADLINES });