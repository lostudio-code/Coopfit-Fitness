// Contact form + Calendly link + footer.

function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", goals: "" });
  const [submitted, setSubmitted] = React.useState(false);
  const [focus, setFocus] = React.useState(null);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const ref = React.useRef(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} style={{
      padding: "160px 0 120px",
      background: "var(--bg-1)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.4) contrast(1.05) saturate(0.85)",
          pointerEvents: "none"
        }}>
        <source src="assets/consultation-bg.mp4" type="video/mp4" />
      </video>
      {/* Veil over video for legibility */}
      <div aria-hidden style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(17,16,14,0.82) 0%, rgba(17,16,14,0.62) 45%, rgba(17,16,14,0.86) 100%)",
        pointerEvents: "none"
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div className="contact-grid" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 680,
          margin: "0 auto"
        }}>
          {/* Copy + Calendly link */}
          <div className={`reveal-stagger ${vis ? "in" : ""}`} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
            width: "100%"
          }}>
            <h2 className="display" style={{
              margin: 0,

              fontWeight: "700", lineHeight: "0.92", fontSize: "clamp(40px, 5vw, 76px)"
            }}>
              Book a<br />
              <em style={{ fontStyle: "italic", fontWeight: "600", lineHeight: "0.92", fontSize: "clamp(40px, 5vw, 76px)" }}>consultation.</em>
            </h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: "var(--ink-mute)", maxWidth: 480 }}>
              A relaxed, no-pressure call to talk through your goals, your schedule,
              and the format that fits you best. If we are a good match, we will get
              started. If not, you will still walk away with a clearer plan.
            </p>

            {/* Calendly card */}
            <a
              href="https://calendly.com/coopfit78/new-meeting"
              target="_blank"
              rel="noopener"
              className="calendly-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "24px 28px",
                background: "var(--accent)",
                border: "1px solid var(--accent)",
                marginTop: 8,
                width: "100%",
                maxWidth: 460,
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.4s, border-color 0.4s"
              }}>
              
              <div style={{
                width: 48,
                height: 48,
                flex: "none",
                border: "1px solid var(--accent-ink)",
                display: "grid",
                placeItems: "center",
                color: "var(--accent-ink)"
              }}>
                <CalendarIcon />
              </div>
              <div style={{ flex: 1 }}>
                <div className="display" style={{
                  fontSize: 18,
                  textTransform: "none",
                  fontWeight: 600,
                  letterSpacing: "-0.005em",
                  color: "var(--accent-ink)"
                }}>Book directly via Calendly</div>
              </div>
              <span className="arrow-lg" style={{
                fontSize: 22,
                color: "var(--accent-ink)",
                transition: "transform 0.4s var(--ease-out)"
              }}>→</span>
            </a>

            {/* Contact details */}
            <div style={{
              marginTop: 16,
              paddingTop: 32,
              borderTop: "1px solid var(--line)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              width: "100%",
              maxWidth: 460,
              textAlign: "left"
            }}>
              <div>
                <div style={{
                  fontFamily: "var(--ff-mono)",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 8
                }}>Studio</div>
                <div style={{ fontSize: 15.5, color: "var(--ink)", lineHeight: 1.55 }}>
                  Tribeca, NYC<br />
                  By appointment
                </div>
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--ff-mono)",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 8
                }}>Reply window</div>
                <div style={{ fontSize: 15.5, color: "var(--ink)", lineHeight: 1.55 }}>
                  Within 24 hours<br />
                  Monday to Saturday
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .calendly-card { position: relative; }
        .calendly-card:hover { background: var(--accent-hi) !important; border-color: var(--accent-hi) !important; }
        .calendly-card:hover .arrow-lg { transform: translateX(6px); }
        @property --beam-angle { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
        .calendly-card::after {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          background: conic-gradient(from var(--beam-angle), transparent 0%, var(--accent-ink) 12%, var(--accent-ink) 20%, transparent 34%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s var(--ease-out);
          pointer-events: none;
          z-index: 3;
        }
        .calendly-card:hover::after {
          opacity: 1;
          animation: beamspin 2.6s linear infinite;
        }
        @keyframes beamspin { to { --beam-angle: 360deg; } }
        @media (prefers-reduced-motion: reduce) {
          .calendly-card:hover::after { animation: none; }
        }
      `}</style>
    </section>);

}

function Field({ label, value, onChange, type = "text", required, textarea, focus, setFocus, name, placeholder }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="field">
      <label htmlFor={name}>{label}{required && <span style={{ color: "var(--accent)", marginLeft: 4 }}>*</span>}</label>
      <Tag
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocus(name)}
        onBlur={() => setFocus(null)}
        rows={textarea ? 3 : undefined} />
      
    </div>);

}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>);

}

// === Footer ===
function Footer() {
  return (
    <footer style={{
      background: "var(--bg-1)",
      borderTop: "1px solid var(--line)",
      padding: "80px 0 36px"
    }}>
      <div className="container">
        <div className="foot-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 64,
          borderBottom: "1px solid var(--line)"
        }}>
          {/* Brand */}
          <div>
            <Wordmark />
            <p style={{
              marginTop: 20,
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "var(--ink-mute)",
              maxWidth: 320
            }}>
              Private fitness coaching for Manhattan's professionals, and for clients
              wherever their work takes them.
            </p>
          </div>

          {/* Sitemap */}
          <FootCol title="Site" links={[
          ["Method", "#method"],
          ["Services", "#services"],
          ["About", "#about"],
          ["Contact", "#contact"]]
          } />

          {/* Connect */}
          <FootCol title="Connect" links={[
          ["Calendly", "https://calendly.com/coopfit78/new-meeting"],
          ["Instagram", "https://www.instagram.com/coopfit_fitness/"],
          ["LinkedIn", "https://www.linkedin.com/in/charlescooperman"]]
          } ext />

          {/* Studio */}
          <FootCol title="Studio">
            <div style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-mute)" }}>
              Tribeca, NYC<br />
              By appointment<br />
              <span style={{ color: "var(--accent)" }}>Now accepting · 2026</span>
            </div>
          </FootCol>
        </div>

        {/* Bottom strip */}
        <div className="foot-bot" style={{
          marginTop: 32,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          fontFamily: "var(--ff-mono)",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--ink-dim)"
        }}>
          <div>© 2026 Coopfit Fitness, Inc.</div>
          <div>NYC · Worldwide · Private</div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; }
          .foot-bot { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </footer>);

}

function FootCol({ title, links, children, ext }) {
  return (
    <div>
      <div style={{
        fontFamily: "var(--ff-mono)",
        fontSize: 10,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: 18
      }}>{title}</div>
      {links ?
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
          {links.map(([l, h]) =>
        <li key={l}>
              <a
            href={h}
            target={ext ? "_blank" : undefined}
            rel={ext ? "noopener" : undefined}
            className="foot-link"
            style={{
              fontSize: 15,
              color: "var(--ink)",
              transition: "color 0.3s"
            }}>
            {l}{ext && <span style={{ marginLeft: 6, color: "var(--ink-dim)" }}>↗</span>}</a>
            </li>
        )}
        </ul> :
      children}
      <style>{`.foot-link:hover { color: var(--accent); }`}</style>
    </div>);

}

Object.assign(window, { Contact, Field, CalendarIcon, Footer, FootCol });