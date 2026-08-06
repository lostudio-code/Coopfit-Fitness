// Main app — composes everything + hosts Tweaks.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#c8a96a", "#e3c896", "#8c7848"],
  "heroLayout": "video",
  "headline": "transform"
}/*EDITMODE-END*/;

const PALETTES = {
  champagne: { name: "Champagne Gold", colors: ["#c8a96a", "#e3c896", "#8c7848"], accentInk: "#0a0908" },
  brass:     { name: "Rich Brass",     colors: ["#b88a3e", "#d4a85a", "#7a5a26"], accentInk: "#0a0908" },
  signal:    { name: "Signal Red",     colors: ["#d1252e", "#e85a62", "#8a1a20"], accentInk: "#f5f0e6" },
  platinum:  { name: "Platinum",       colors: ["#d8d4c8", "#f0ecdf", "#9a9486"], accentInk: "#0a0908" },
  electric:  { name: "Electric Blue",  colors: ["#3b82f6", "#7aa9ff", "#1d4ed8"], accentInk: "#f5f0e6" },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply palette to CSS vars
  React.useEffect(() => {
    const p = t.palette || PALETTES.champagne.colors;
    document.documentElement.style.setProperty("--accent", p[0]);
    document.documentElement.style.setProperty("--accent-hi", p[1]);
    document.documentElement.style.setProperty("--accent-lo", p[2]);
    // Determine accent-ink contrast
    const dark = isDark(p[0]);
    document.documentElement.style.setProperty("--accent-ink", dark ? "#f5f0e6" : "#0a0908");
  }, [t.palette]);

  return (
    <>
      <Nav />
      <Hero layout={t.heroLayout} headlineKey={t.headline} />
      <Marquee />
      <Method />
      <Services />
      <Stats />
      <Testimonials />
      <About />
      <Contact />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Palette" />
        <TweakColor
          label="Accent"
          value={t.palette}
          options={Object.values(PALETTES).map(p => p.colors)}
          onChange={(v) => setTweak("palette", v)}
        />
        <TweakSection label="Hero" />
        <TweakRadio
          label="Layout"
          value={t.heroLayout}
          options={["video", "split", "photo"]}
          onChange={(v) => setTweak("heroLayout", v)}
        />
        <TweakSelect
          label="Headline"
          value={t.headline}
          options={[
            { value: "transform", label: "Transform your body / Elevate your life" },
            { value: "operator",  label: "Train like an operator" },
            { value: "edge",      label: "The edge your peers don't have" },
          ]}
          onChange={(v) => setTweak("headline", v)}
        />
      </TweaksPanel>
    </>
  );
}

function isDark(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substr(0, 2), 16);
  const g = parseInt(h.substr(2, 2), 16);
  const b = parseInt(h.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq < 145;
}

// Mount
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
