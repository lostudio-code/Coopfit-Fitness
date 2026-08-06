// About Charles + credentials marquee.

function About() {
  const ref = React.useRef(null);
  const imgRef = React.useRef(null);
  const [vis, setVis] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Parallax on portrait
  React.useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const r = imgRef.current.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const off = (window.innerHeight / 2 - center) * 0.12;
      imgRef.current.style.transform = `translate3d(0, ${off}px, 0) scale(1.08)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const credentials = [
  { abbr: "CFSC", full: "Certified Functional Strength Coach" },
  { abbr: "NFPT", full: "National Federation of Personal Trainers" },
  { abbr: "FRC", full: "Functional Range Conditioning" },
  { abbr: "RMP", full: "Restorative Mind & Performance" },
  { abbr: "PPN", full: "Pre & Postnatal Certified" }];


  return (
    <section id="about" ref={ref} style={{
      padding: "160px 0 0",
      background: "var(--bg-1)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div className="container">
        <div className="about-grid" style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
          gap: 80,
          alignItems: "center"
        }}>
          {/* Portrait */}
          <div className={`img-mask ${vis ? "in" : ""}`} style={{
            position: "relative",
            aspectRatio: "4 / 5",
            overflow: "hidden"
          }}>
            <img
              ref={imgRef}
              loading="lazy"
              decoding="async"
              src="assets/about-opt.jpg"
              alt="Charles Cooperman"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
                filter: "grayscale(0.15) contrast(1.05)",
                willChange: "transform"
              }} />
            
            {/* Name plate */}
            <div style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              right: 24,
              padding: "16px 20px",
              background: "rgba(10, 9, 8, 0.78)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--line-strong)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16
            }}>
              <div>
                <div style={{
                  fontFamily: "var(--ff-mono)",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--accent)"
                }}>Founder & Head Coach</div>
                <div className="display" style={{
                  marginTop: 4,
                  fontSize: 22,
                  textTransform: "none",
                  fontWeight: 600,
                  letterSpacing: "-0.01em"
                }}>Charles Cooperman</div>
              </div>
              <div style={{
                fontFamily: "var(--ff-mono)",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "var(--ink-mute)",
                textTransform: "uppercase",
                textAlign: "right"
              }}>
                <div>2002</div>
                <div style={{ color: "var(--accent)" }}>Active</div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className={`reveal-stagger ${vis ? "in" : ""}`} style={{
            display: "flex",
            flexDirection: "column",
            gap: 28
          }}>
            <h2 className="display" style={{
              margin: 0,
              fontSize: "clamp(40px, 5vw, 76px)",
              lineHeight: 0.92
            }}>
              Twenty-five years.<br />
              <em style={{ fontStyle: "italic", fontFamily: "\"Archivo Narrow\"", fontWeight: "700" }}>One craft.</em>
            </h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "var(--ink-mute)" }}>
              I have spent more than two decades coaching Manhattan's executives, entrepreneurs,
              and on-screen talent. They set a high bar for themselves and value their time, and
              I make sure our work together respects both.
            </p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "var(--ink-mute)" }}>
              Based in Tribeca, my reputation comes from showing up: focused, dependable,
              and fully present for every person I coach. No phones during sessions and no
              generic plans. Just a smart, sustainable approach that fits your life and keeps
              paying off for years to come.
            </p>

            {/* Quote */}
            <div style={{
              marginTop: 8,
              padding: "24px 28px",
              borderLeft: "2px solid var(--accent)",
              background: "var(--bg-1)",
              fontFamily: "var(--ff-display)",
              fontSize: 20,
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.4,
              letterSpacing: "-0.01em"
            }}>
              "Your health is the one investment that pays you back every single day.
              I am here to help you look after it on purpose."
              <div style={{
                marginTop: 14,
                fontFamily: "var(--ff-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
                fontStyle: "normal"
              }}>Charles Cooperman</div>
            </div>

            <div style={{ display: "flex", gap: 18, marginTop: 8, flexWrap: "wrap" }}>
              <a href="https://www.linkedin.com/in/charlescooperman" target="_blank" rel="noopener" className="btn btn-ghost">
                <span>LinkedIn</span>
                <span className="arrow">↗</span>
              </a>
              <a href="https://www.instagram.com/coopfit_fitness/" target="_blank" rel="noopener" className="btn btn-ghost">
                <span>Instagram</span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Credentials strip */}
        <div style={{
          marginTop: 120,
          paddingTop: 40,
          borderTop: "1px solid var(--line)",
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          gap: 48,
          alignItems: "start"
        }}>
          <div style={{
            fontFamily: "var(--ff-mono)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--accent)"
          }}>Certifications</div>
          <div className="creds-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 12
          }}>
            {credentials.map((c, i) =>
            <Cred key={i} {...c} />
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .creds-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>);

}

function Cred({ abbr, full }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "20px 18px",
        border: "1px solid " + (hover ? "var(--accent-lo)" : "var(--line)"),
        background: hover ? "var(--bg-1)" : "transparent",
        transition: "all 0.4s var(--ease-out)",
        position: "relative",
        overflow: "hidden",
        cursor: "default"
      }}>
      
      <div className="display" style={{
        fontSize: 24,
        color: hover ? "var(--accent)" : "var(--ink)",
        transition: "color 0.3s",
        letterSpacing: "0.02em"
      }}>{abbr}</div>
      <div style={{
        marginTop: 8,
        fontSize: 13.5,
        lineHeight: 1.45,
        color: "var(--ink-mute)",
        minHeight: 32
      }}>{full}</div>
    </div>);

}

Object.assign(window, { About, Cred });