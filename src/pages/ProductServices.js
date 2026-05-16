import React, { useState } from "react";

const cards = [
  { heading: "Product", text: "• Organic Edibles: Local produce, herbs, organic kits. Floriculture, localized seeds.\n\n• AI Data Subscription: Premium 24/7 predictive diagnostics and localized weather alerts. Specialist Certification: Paid access to comprehensive courses.\n\n• Urban Starter Kits & Toolsets: Themed kits (e.g., Balcony Herb Garden, Tomato Success Kit), customized soil mixes, localized seeds, and basic tool sets." },
  { heading: "Services", text: "• 24/7 AI Plant Doctor, localized care guides tailored to Philippine climate and native crops.\n\n• Real-world event management, allowing users to RSVP to specialist workshops, trainings, and local venue gatherings.\n\n• Dedicated system for commercial farmers to list large-volume oversupply (surplus). Notifies institutional buyers (hotels, processors) for immediate purchase." },
  { heading: "Sector", text: "• Provides essential digital tools and localized data, supporting both urban farming and traditional farming centers during periods of oversupply.\n\n• Creates supplementary income streams for micro-vendors, directly addressing high unemployment/underemployment rates.\n\n• Offers a platform for standardized LGU urban farming training curricula and facilitates the distribution and tracking of native seed bank programs." },
];

function ProductServices() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.wrap}>
      <div style={styles.badge}>
        <span style={styles.badgeDot} />
        What We Offer
      </div>

      <h1 style={styles.title}>
        Product &amp; <span style={styles.accent}>Services</span>
      </h1>

      <p style={styles.body}>
        EcoEquity offers a comprehensive suite of digital tools and resources
        to help you grow food, build community, and earn sustainably.
      </p>

<div style={styles.cardRow}>
        {cards.map((c) => (
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
    maxWidth: "1100px",
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
    maxWidth: "680px",
    marginBottom: "24px",
  },
  cardRow: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: "16px",
    width: "100%",
  },
  card: {
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "20px",
    padding: "28px 24px",
    flex: "1 1 300px",
    maxWidth: "340px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    gap: "12px",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    boxShadow:
      "inset 0 1.5px 0 rgba(255,255,255,0.22), " +
      "0 8px 32px rgba(0,0,0,0.22), " +
      "0 0 0 0.5px rgba(255,255,255,0.08)",
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
    fontSize: "18px",
    fontWeight: 700,
    color: "#fff",
    margin: "0",
    letterSpacing: "-0.2px",
  },
  cardText: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 1.7,
    margin: "0",
    textAlign: "left",
    whiteSpace: "pre-line",
  },
};

export default ProductServices;
