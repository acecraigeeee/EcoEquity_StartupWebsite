import React, { useState } from "react";

function TargetMarketExplore() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.wrap}>
      <div style={styles.headerRow}>
        <div style={styles.badge}>
          <span style={styles.badgeDot} />
          Who We Serve
        </div>
      </div>

      <h1 style={styles.title}>
        Distribution Channels <span style={styles.accent}>and Acquisition Tactics</span>
      </h1>

      <p style={styles.body}>
        EcoEquity serves households and communities in the Philippines who are
        eager to achieve agricultural self-sufficiency through sustainable farming
        practices.
      </p>

      <div style={styles.cardRow}>
        {[
          { heading: "Digital Acquisition", text: "• Content Marketing: Create highly shareable content leveraging the AI Plant Doctor data for localized insights.\n\n• SEO/ASO: Target high-intent search terms related to urban farming, local crop diseases, and \"Plantito/Plantita\" guides in Tagalog and regional dialects.\n\n• Monetization Strategy: Offer the AI diagnosis and basic Canvas courses for free and convert users to the Paid Subscription Tier for Certification Tracks and advanced data." },
          { heading: "Physical & Community Engagement", text: "• LGU Partnership Integration: Partner with LGUs and Barangays to promote Event RSVP for official community training, instantly providing credibility and access to organized groups.\n\n• Specialist Workshops: Host high-value workshops via the Community Hub using verified local specialists. Heavily market these events in launch cities to drive physical platform adoption.\n\n• Word-of-Mouth: Encourage successful Novice users (via events) to become Micro-Vendors, showing a clear path from learning to earning." },
          { heading: "B2B & Sector Integration", text: "• Direct Sales to Institutions: Employ a small, specialized sales team to onboard hotels, restaurants, and food processors into the Institutional Buyer Network. The pitch is based on verifiable cost savings and Corporate Social Responsibility (CSR) impact (food waste reduction).\n\n• Farmer Outreach: Partner with provincial agricultural offices and farmer cooperatives in major producing regions (e.g., Benguet for vegetables) to demonstrate the immediate financial value of the Bulk Listing / Surplus Module in preventing spoilage losses." },
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

    </div>
  );
}

const styles = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "16px 16px 24px",
    maxWidth: "1100px",
    margin: "0 auto",
    animation: "fadeInUp 0.75s cubic-bezier(.22,1,.36,1) both",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    marginBottom: "12px",
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
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 8px",
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
    marginBottom: "0",
  },
  cardRow: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: "8px",
    width: "100%",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "20px",
    padding: "28px 24px",
    flex: "1 1 300px",
    maxWidth: "340px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    gap: "16px",
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
    fontSize: "16px",
    fontWeight: 700,
    color: "#fff",
    margin: 0,
    letterSpacing: "-0.2px",
  },
  cardText: {
    fontSize: "14px",
    color: "rgb(255, 255, 255)",
    lineHeight: 1.6,
    margin: 0,
    whiteSpace: "pre-line",
    textAlign: "left",
  },
};

export default TargetMarketExplore;