// Top navigation — transparent at top, gains background on scroll.
// Desktop: inline links. Mobile/tablet (≤900px): hamburger → full-screen drawer.
function Nav({ accent }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    ["Method", "#method"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "all 0.5s var(--ease-out)",
    backdropFilter: scrolled || open ? "blur(20px) saturate(180%)" : "none",
    background: scrolled || open ? "rgba(10, 9, 8, 0.82)" : "transparent",
    borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
  };

  return (
    <nav style={navStyle}>
      <div className="nav-bar container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "14px 48px" : "22px 48px",
        transition: "padding 0.5s var(--ease-out)",
      }}>
        {/* Logo */}
        <a href="#top" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: 12, position: "relative", zIndex: 2 }}>
          <Wordmark accent={accent} />
        </a>

        {/* Center links (desktop) */}
        <div className="nav-links" style={{
          display: "flex",
          gap: 36,
          fontFamily: "var(--ff-mono)",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link" style={{
              position: "relative",
              padding: "8px 0",
              color: "var(--ink)",
              transition: "color 0.3s",
            }}>
              <span style={{ position: "relative", zIndex: 1 }}>{label}</span>
              <span className="nav-underline" style={{
                position: "absolute",
                left: 0,
                bottom: 4,
                height: 1,
                width: "100%",
                background: "var(--accent)",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.4s var(--ease-out)",
              }} />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className="btn nav-cta" style={{ padding: "12px 22px", fontSize: 11 }}>
          <span>Book Consultation</span>
          <span className="arrow">→</span>
        </a>

        {/* Hamburger (mobile/tablet) */}
        <button
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`burger-box ${open ? "is-open" : ""}`}>
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Full-screen mobile drawer */}
      <div className={`nav-drawer ${open ? "is-open" : ""}`}>
        <div className="nav-drawer-inner">
          <div className="nav-drawer-links">
            {links.map(([label, href], i) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="nav-drawer-link"
                style={{ transitionDelay: `${0.08 + i * 0.06}s` }}
              >
                <span className="ddl-index">0{i + 1}</span>
                <span className="ddl-label">{label}</span>
                <span className="ddl-arrow">→</span>
              </a>
            ))}
          </div>

          <div className="nav-drawer-foot">
            <a
              href="https://calendly.com/coopfit78/new-meeting"
              target="_blank"
              rel="noopener"
              className="btn"
              onClick={() => setOpen(false)}
              style={{ width: "100%", justifyContent: "center", padding: "20px 28px" }}
            >
              <span>Book Free Consultation</span>
              <span className="arrow">→</span>
            </a>
            <div className="nav-drawer-social">
              <a href="https://www.instagram.com/coopfit_fitness/" target="_blank" rel="noopener">Instagram ↗</a>
              <a href="https://www.linkedin.com/in/charlescooperman" target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
            <div className="nav-drawer-meta">Tribeca, NYC · Est. 2002</div>
          </div>
        </div>
      </div>

      <style>{`
        .nav-link:hover { color: var(--accent); }
        .nav-link:hover .nav-underline { transform: scaleX(1); }

        /* Hamburger hidden on desktop */
        .nav-burger {
          display: none;
          width: 48px;
          height: 48px;
          margin: -8px -12px -8px 0;
          background: transparent;
          border: none;
          position: relative;
          z-index: 2;
          -webkit-tap-highlight-color: transparent;
        }
        .burger-box {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 26px;
          height: 14px;
          display: block;
        }
        .burger-box span {
          position: absolute;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: var(--ink);
          transition: transform 0.45s var(--ease-out), opacity 0.3s, background 0.3s;
        }
        .burger-box span:nth-child(1) { top: 0; }
        .burger-box span:nth-child(2) { bottom: 0; }
        .burger-box.is-open span { background: var(--accent); }
        .burger-box.is-open span:nth-child(1) { transform: translateY(6.25px) rotate(45deg); }
        .burger-box.is-open span:nth-child(2) { transform: translateY(-6.25px) rotate(-45deg); }

        /* Drawer */
        .nav-drawer {
          position: fixed;
          inset: 0;
          z-index: 90;
          background: var(--bg-0);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-12px);
          transition: opacity 0.5s var(--ease-out), transform 0.5s var(--ease-out), visibility 0.5s;
          display: flex;
        }
        .nav-drawer.is-open { opacity: 1; visibility: visible; transform: translateY(0); }
        .nav-drawer-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 120px 28px 40px;
          max-width: 560px;
        }
        .nav-drawer-links { display: flex; flex-direction: column; }
        .nav-drawer-link {
          display: flex;
          align-items: baseline;
          gap: 18px;
          padding: 22px 0;
          border-top: 1px solid var(--line);
          font-family: var(--ff-display);
          font-weight: 700;
          font-size: clamp(38px, 11vw, 56px);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1;
          color: var(--ink);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s var(--ease-out), transform 0.5s var(--ease-out), color 0.3s;
        }
        .nav-drawer-link:last-of-type { border-bottom: 1px solid var(--line); }
        .nav-drawer.is-open .nav-drawer-link { opacity: 1; transform: translateY(0); }
        .nav-drawer-link:active { color: var(--accent); }
        .ddl-index {
          font-family: var(--ff-mono);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--accent);
          flex: none;
        }
        .ddl-label { flex: 1; }
        .ddl-arrow { font-size: 24px; color: var(--ink-dim); }
        .nav-drawer-foot { display: flex; flex-direction: column; gap: 24px; }
        .nav-drawer-social {
          display: flex;
          gap: 28px;
          font-family: var(--ff-mono);
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }
        .nav-drawer-social a:active { color: var(--accent); }
        .nav-drawer-meta {
          font-family: var(--ff-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-dim);
        }

        @media (max-width: 900px) {
          .nav-links, .nav-cta { display: none !important; }
          .nav-burger { display: block; }
        }
        @media (max-width: 720px) {
          .nav-bar { padding-left: 20px !important; padding-right: 20px !important; }
        }
        @media (min-width: 901px) {
          .nav-drawer { display: none; }
        }
      `}</style>
    </nav>
  );
}

function Wordmark({ accent }) {
  return (
    <div style={{
      fontFamily: "var(--ff-display)",
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "var(--ink)",
      lineHeight: 1,
      display: "inline-block"
    }}>
      COOPFIT
    </div>
  );
}

Object.assign(window, { Nav, Wordmark });
