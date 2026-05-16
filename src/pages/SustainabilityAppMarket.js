import React, { useState } from "react";

function SustainabilityAppMarket() {
  const [hoveredTableIndex, setHoveredTableIndex] = useState(null);

  const tamData = [
    {
      components: "Philippine Consumer Spending",
      description: "Total annual consumer spending on food,wellness, home goods, and agriculture in the Philippines. This reflects the total budget addressable by local organic sustenance.",
      estimatedSize: "₱10+ Trillion PHP (Approx. $170 Billion USD)",
    },
    {
      components: "Internet-Connected Population",
      description: "The total population actively engaging in or interested in urban farming, local sustainability initiatives, and the digital learning space (the \"Plantito/Plantita\"movement).",
      estimatedSize: "85 Million+ (Total internet users in the Philippines)",
    },
  ];

  const samData = [
    {
      components: "Metro Manila & Key Urban Households",
      description: "Households in highly connected, high-density metropolitan areas (Metro Manila, Cebu, Davao) with disposable income for events, specialized learning, and engaging in micro-commerce.",
      estimatedSize: "15 Million (Urban Households/Targeted User Base)",
    },
    {
      components: "Sustainability Active Users",
      description: "Users who currently spend on mobile learning, digital wellness, and e-commerce for home/garden supplies. This defines the current appetite for digital-first sustainability solutions..",
      estimatedSize: "₱5 Billion PHP (Total estimated annual spending on related wellness, education, and eco-friendly apps/services)",
    },
  ];

  const somData = [
    {
      components: "Core Engaged Users",
      description: "Individuals actively utilizing the 24/7 AI guidance (for native crops, florals), attending RSVPed events/workshops, and regularly engaging with the Instructor/Specialist Canvas.",
      estimatedSize: "150,000+ Active Monthly Users (AMU)",
    },
    {
      components: "E-Commerce/Income Generators",
      description: "Individuals who transition from learners to micro-entrepreneurs using the app to sell their locally grown produce or high-demand florals (e.g., Sampaguita, Orchids)..",
      estimatedSize: "3,500+ Active Micro-Vendors",
    },
    {
      components: "Community Impact",
      description: "The total number of people guided toward self-sufficiency in accessible organic sustenance, lessening reliance on imported or market goods.",
      estimatedSize: "500,000+ Organic Meals Supplemented Annually (based on user reporting)",
    },
  ];

  const renderTable = (data, index) => (
    <div
      key={index}
      style={{ ...styles.tableWrapper, ...(hoveredTableIndex === index ? styles.tableWrapperHov : {}) }}
      onMouseEnter={() => setHoveredTableIndex(index)}
      onMouseLeave={() => setHoveredTableIndex(null)}
    >
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Components</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Estimated Size (Conceptual)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td style={styles.td}>{row.components}</td>
              <td style={styles.td}>{row.description}</td>
              <td style={styles.td}>{row.estimatedSize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={styles.wrap}>
      <div style={styles.badge}>
        <span style={styles.badgeDot} />
        Who We Serve
      </div>

      <h1 style={styles.title}>
        Sustainability App Market Sizing:  <span style={styles.accent}>TAM, SAM, SOM (Philippines Focus)</span>
      </h1>

      <h2 style={styles.subtitle}>1. TAM (Total Available Market) - The Philippine Opportunity</h2>
      <p style={styles.body}>The entire market within the Philippines that could potentially use the product, driven by the shift towards self-sufficiency, wellness, and reducing the cost of living through organic produce.</p>
      {renderTable(tamData, 0)}

      <h2 style={styles.subtitle}>2. SAM (Serviceable Available Market) - Our Reach in Major Urban Centers</h2>
      <p style={styles.body}>The portion of the TAM that our services can realistically reach, constrained by high-density urban areas, consistent internet connectivity, and mobile-first users.</p>
      {renderTable(samData, 1)}

      <h2 style={styles.subtitle}>3. SOM (Serviceable Obtainable Market) - Our Initial Focus (Year 3 Goals)</h2>
      <p style={styles.body}>The realistic market share we can capture in the first 3 years of operation, focusing on highly engaged early adopters and community builders in our primary launch cities.</p>
      {renderTable(somData, 2)}
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
  subtitle: {
    fontSize: "clamp(18px, 2.2vw, 24px)",
    fontWeight: 600,
    color: "#ffffff",
    margin: "24px 0 16px",
    lineHeight: 1.25,
    letterSpacing: "-0.3px",
  },
  body: {
    color: "rgb(255, 255, 255)",
    fontSize: "clamp(14px, 1.5vw, 16px)",
    fontWeight: 400,
    lineHeight: 1.72,
    maxWidth: "580px",
    marginBottom: "14px",
  },
  tableWrapper: {
    width: "100%",
    marginTop: "24px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "20px",
    padding: "16px",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 24px rgba(0,0,0,0.15)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    overflowX: "auto",
    cursor: "default",
    transition:
      "transform 0.22s cubic-bezier(.34,1.56,.64,1), " +
      "background 0.18s ease, " +
      "box-shadow 0.22s ease, " +
      "border-color 0.18s ease",
  },
  tableWrapperHov: {
    transform: "translateY(-6px) scale(1.03)",
    background: "rgba(255,255,255,0.18)",
    border: "1px solid rgba(255,255,255,0.30)",
    boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.35), 0 20px 48px rgba(0,0,0,0.30), 0 0 0 0.5px rgba(255,255,255,0.14)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  th: {
    padding: "14px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    color: "#4ade80",
    fontSize: "14px",
    fontWeight: 700,
  },
  td: {
    padding: "14px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.85)",
    fontSize: "14px",
    lineHeight: 1.6,
  },
};

export default SustainabilityAppMarket;