// Testimonials carousel.

function Testimonials() {
  const items = [
  {
    quote: "Charles is the best. I've worked with him for specific film roles which required me to be that guy \"…in great shape for his age\" and the results were excellent (and viewable onscreen). His combination of broad-based yet specific knowledge, good humor, adaptability and motivation is everything I need.",
    name: "J. K. Simmons",
    role: "Academy Award-winning actor",
    img: "https://coopfitfitness.com/wp-content/uploads/2021/09/JK.png"
  },
  {
    quote: "I had not set foot in a gym for over ten years. Charles immediately put me at ease. I never felt pushed beyond a healthy limit, yet I knew I was getting a good workout. He has a vast knowledge of the body's functionality and knows how to tailor an exercise to the individual.",
    name: "Scott Carlton",
    role: "Owner, Scott Carlton Voice Studio",
    img: "https://coopfitfitness.com/wp-content/uploads/2016/07/Scott_C.png"
  },
  {
    quote: "I started working out for the first time in my fifties. He pushed me just the right amount, harder than I ever would have, but not beyond my limits. He will not be distracted by his cell phone, only focusing on you and your training. A full 5-star guy.",
    name: "Stan Arkow, MD",
    role: "Associate Professor, Columbia University Irving Medical Center",
    img: "https://coopfitfitness.com/wp-content/uploads/2020/12/Stan.png"
  },
  {
    quote: "He assessed my fitness level, strengths, and weaknesses and came up with a program that works for me. He explains and communicates clearly throughout. He's patient, friendly, personable, and hilarious, making working out more fun and less of a chore.",
    name: "Linh N V Tran",
    role: "Senior Account Manager, WebMD",
    img: "https://coopfitfitness.com/wp-content/uploads/2020/12/Linh.png"
  },
  {
    quote: "Charles is a thoughtful and encouraging trainer. I had worked with a few other trainers previously, but Charles was the best at understanding my fitness goals and how to obtain them. I enjoy his enthusiasm and sense of humor, and I always look forward to seeing him.",
    name: "Robert Luzzi",
    role: "Former WW Executive Creative Director, Estée Lauder",
    img: "https://coopfitfitness.com/wp-content/uploads/2016/07/Robert_L.png"
  }];


  const [idx, setIdx] = React.useState(0);
  const total = items.length;
  const go = (d) => setIdx((i) => (i + d + total) % total);

  // Auto-advance
  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 9000);
    return () => clearInterval(t);
  }, [total]);

  const t = items[idx];

  return (
    <section style={{ padding: "140px 0", background: "var(--bg-1)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 60
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            paddingBottom: 32,
            borderBottom: "1px solid var(--line)"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="eyebrow" style={{ display: "none" }}>Word of Mouth</span>
              <h2 className="display" style={{ margin: 0, fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1 }}>
                What clients <em style={{ fontStyle: "italic", fontFamily: "\"Archivo Narrow\"", fontWeight: "700" }}>say.</em>
              </h2>
            </div>
            <div style={{
              fontFamily: "var(--ff-mono)",
              fontSize: 12,
              letterSpacing: "0.18em",
              color: "var(--ink-mute)"
            }}>
              <span style={{ color: "var(--accent)" }}>{String(idx + 1).padStart(2, "0")}</span>
              <span> / {String(total).padStart(2, "0")}</span>
            </div>
          </div>

          <div className="testimonial-row" style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.7fr) minmax(0, 1fr)",
            gap: 80,
            alignItems: "center",
            minHeight: 320
          }}>
            {/* Quote */}
            <blockquote key={idx} style={{
              margin: 0,
              animation: "fadeUp 0.7s var(--ease-out)"
            }}>
              <div style={{
                fontFamily: "var(--ff-display)",
                fontSize: 84,
                color: "var(--accent)",
                lineHeight: 0.5,
                marginBottom: 16
              }}>“</div>
              <p style={{
                margin: 0,
                fontSize: "clamp(20px, 2vw, 28px)",
                lineHeight: 1.4,
                color: "var(--ink)",
                fontWeight: 300,
                letterSpacing: "-0.005em"
              }}>{t.quote}</p>
              <footer style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 18 }}>
                <img src={t.img} alt={t.name} style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  objectFit: "cover",
                  filter: "grayscale(0.3)",
                  border: "1px solid var(--line-strong)"
                }} />
                <div>
                  <div className="display" style={{
                    fontSize: 18,
                    textTransform: "none",
                    fontWeight: 600,
                    letterSpacing: "-0.005em"
                  }}>{t.name}</div>
                  <div style={{
                    fontFamily: "var(--ff-mono)",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--ink-mute)",
                    marginTop: 4
                  }}>{t.role}</div>
                </div>
              </footer>
            </blockquote>

            {/* Controls + thumbs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", gap: 12 }}>
                <CarouselBtn onClick={() => go(-1)} dir="left" />
                <CarouselBtn onClick={() => go(1)} dir="right" />
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 0
              }}>
                {items.map((it, i) =>
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  style={{
                    background: "transparent",
                    border: "none",
                    borderTop: "1px solid var(--line)",
                    padding: "16px 0",
                    textAlign: "left",
                    color: i === idx ? "var(--ink)" : "var(--ink-dim)",
                    fontFamily: "var(--ff-mono)",
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    transition: "color 0.3s",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    cursor: "pointer"
                  }}>
                  
                    <span style={{
                    width: 18,
                    height: 1,
                    background: i === idx ? "var(--accent)" : "var(--line-strong)",
                    transition: "all 0.3s"
                  }} />
                    {it.name}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .testimonial-row {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>);

}

function CarouselBtn({ onClick, dir }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 56,
        height: 56,
        border: "1px solid " + (hover ? "var(--accent)" : "var(--line-strong)"),
        background: hover ? "var(--accent)" : "transparent",
        color: hover ? "var(--accent-ink)" : "var(--ink)",
        transition: "all 0.3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18
      }}>
      
      {dir === "left" ? "←" : "→"}
    </button>);

}

Object.assign(window, { Testimonials, CarouselBtn });