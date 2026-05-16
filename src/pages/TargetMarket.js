import React, { useState } from "react";

function TargetMarket() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.wrap}>
      <div style={styles.badge}>
        <span style={styles.badgeDot} />
        Who We Serve
      </div>

      <h1 style={styles.title}>
        Target <span style={styles.accent}>Market</span>
      </h1>

      <p style={styles.body}>
        EcoEquity serves households and communities in the Philippines who are
        eager to achieve agricultural self-sufficiency through sustainable farming
        practices.
      </p>

      <div style={styles.cardRow}>
        {[
          { heading: "Urban Novice", text: "AI-Guided Success: Market the 24/7 AI Plant Doctor as the indispensable tool for overcoming planting failure,leading to initial app download." },
          { heading: "Micro-Vendor", text: "Livelihood Creation: Market the Local Marketplace as the zero-friction platform to instantly monetize garden excess and florals.." },
          { heading: "Institutional Buyer (B2B)", text: "Cost & Supply Chain Efficiency:Market the B2B Surplus Module as the exclusive source for high-volume, below-market surplus produce (e.g., Baguio vegetables)." },
        ].map((c) => (
          <div
            key={c.heading}
            style={{
              ...styles.card,
              ...(hoveredCard === c.heading ? styles.cardHov : {}),
            }}
            onMouseEnter={() => setHoveredCard(c.heading)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={styles.cardHeading}>{c.heading}</h3>
            <p style={styles.cardText}>{c.text}</p>
          </div>
        ))}
      </div>

      <p style={{ ...styles.body, marginTop: "28px" }}>
        To achieve 150,000+ Active Monthly Users, onboard 3,500+ Active Micro-
        Vendors generating ₱63M in annual commerce fees, and successfully
        integrate the B2B network to mitigate critical food waste, thus
        validating VerdeVersity as the Philippines'scalable solution for food
        security and livelihood.
      </p>
    </div>
  );
}

const styles = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "32px 16px 24px",
    maxWidth: "820px",
    margin: "0 auto",
    animation: "fadeInUp 0.75s cubic-bezier(.22,1,.36,1) both",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    padding: "5px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.13)",
    border: "none",
    fontSize: "11px",
    fontWeight: 600,
    color: "rgba(255,255,255,0.80)",
    letterSpacing: "0.6px",
    textTransform: "uppercase",
    marginBottom: "20px",
  },
  badgeDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#4ade80",
    boxShadow: "0 0 5px rgba(74,222,128,0.9)",
    display: "inline-block",
  },
  title: {
    fontSize: "clamp(32px, 4.5vw, 50px)",
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 16px",
    lineHeight: 1.15,
    letterSpacing: "-0.8px",
    textShadow: "0 2px 20px rgba(0,0,0,0.35)",
    animation: "titleReveal 0.9s cubic-bezier(.22,1,.36,1) 0.15s both",
  },
  accent: {
    background: "linear-gradient(90deg, #4ade80, #86efac)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  body: {
    color: "rgb(255, 255, 255)",
    fontSize: "clamp(14px, 1.5vw, 16px)",
    fontWeight: 400,
    lineHeight: 1.72,
    maxWidth: "580px",
    marginBottom: "14px",
  },
  cardRow: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "28px",
    width: "100%",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "20px",
    padding: "24px 20px",
    flex: "1 1 160px",
    maxWidth: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 24px rgba(0,0,0,0.15)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    cursor: "default",
    transition:
      "transform 0.22s cubic-bezier(.34,1.56,.64,1), " +
      "background 0.18s ease, " +
      "box-shadow 0.22s ease, " +
      "border-color 0.18s ease",
  },
  cardHov: {
    transform: "translateY(-6px) scale(1.03)",
    background: "rgba(255,255,255,0.18)",
    border: "1px solid rgba(255,255,255,0.30)",
    boxShadow:
      "inset 0 1.5px 0 rgba(255,255,255,0.35), " +
      "0 20px 48px rgba(0,0,0,0.30), " +
      "0 0 0 0.5px rgba(255,255,255,0.14)",
  },
  cardHeading: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#fff",
    margin: 0,
    letterSpacing: "-0.2px",
  },
  cardText: {
    fontSize: "13px",
    color: "rgb(255, 255, 255)",
    lineHeight: 1.6,
    margin: 0,
  },
};

export default TargetMarket;
