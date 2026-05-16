import React, { useState } from "react";

function OurTeam() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const team = [
    { name: "JHUN RUSSEL D. CLEMENTE", role: "ROLE", img: "Russel.jpeg" },
    { name: "NAME", role: "ROLE", img: "Rus3.jpeg" },
    { name: "NAME", role: "ROLE", img: "Rus4.jpeg" },
    { name: "NAME", role: "ROLE", img: "Rus5.jpeg" },
  ];

  return (
    <div style={styles.wrap}>
      {/* Inject styles to hide scrollbar while keeping functionality */}
      <style>
        {`
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <div style={styles.badge}>
        <span style={styles.badgeDot} />
        The People
      </div>

      <h1 style={styles.title}>
        Our <span style={styles.accent}>Team</span>
      </h1>

      <p style={styles.body}>
        VerdeVersity is built by a passionate team dedicated to transforming
        agriculture in the Philippines through innovation and community-driven
        solutions.
      </p>

      <div style={styles.cardRow} className="hide-scroll">
        {team.map((c, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(hoveredCard === index ? styles.cardHov : {}),
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src={c.img} alt={c.name} style={styles.cardImage} />
            <h3 style={styles.cardHeading}>{c.name}</h3>
            <p style={styles.cardRole}>{c.role}</p>
          </div>
        ))}
      </div>
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
    color: "rgba(255,255,255,0.62)",
    fontSize: "clamp(14px, 1.5vw, 16px)",
    fontWeight: 400,
    lineHeight: 1.72,
    maxWidth: "580px",
    marginBottom: "14px",
  },
  cardRow: {
    display: "flex",
    flexWrap: "nowrap",
    gap: "24px",
    justifyContent: "flex-start",
    marginTop: "32px",
    padding: "16px 8px 32px 8px", // Padding allows box-shadows to show without clipping
    width: "100%",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "20px",
    padding: "32px 24px",
    flex: "0 0 240px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 24px rgba(0,0,0,0.15)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    scrollSnapAlign: "center",
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
  cardImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
    marginBottom: "8px",
  },
  cardHeading: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#fff",
    margin: 0,
    letterSpacing: "-0.3px",
  },
  cardRole: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#4ade80",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.8px",
  },
};

export default OurTeam;
