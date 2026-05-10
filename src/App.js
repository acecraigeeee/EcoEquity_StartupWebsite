import React, { useEffect, useState } from "react";

function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [pressedButton, setPressedButton] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.bgOrbOne} />
      <div style={styles.bgOrbTwo} />
      <div style={styles.bgOrbThree} />

      <div style={styles.shell}>
        {/* NAVBAR */}
        <div style={{ ...styles.navbar, ...(isMobile ? styles.navbarMobile : {}) }}>
          <h2 style={styles.logo}>VerdeVersity</h2>
          <div
            style={{
              ...styles.navLinks,
              ...(isMobile ? styles.navLinksMobile : {}),
            }}
          >
            <button
              type="button"
              style={{
                ...styles.linkButton,
                ...(activeNav === "Home" ? styles.activeLinkButton : {}),
                ...(pressedButton === "Home" ? styles.linkButtonPressed : {}),
              }}
              onClick={() => setActiveNav("Home")}
              onMouseDown={() => setPressedButton("Home")}
              onMouseUp={() => setPressedButton(null)}
              onMouseLeave={() => setPressedButton(null)}
            >
              Home
            </button>
            <button
              type="button"
              style={{
                ...styles.linkButton,
                ...(activeNav === "About Us" ? styles.activeLinkButton : {}),
                ...(pressedButton === "About Us" ? styles.linkButtonPressed : {}),
              }}
              onClick={() => setActiveNav("About Us")}
              onMouseDown={() => setPressedButton("About Us")}
              onMouseUp={() => setPressedButton(null)}
              onMouseLeave={() => setPressedButton(null)}
            >
              About Us
            </button>
            <button
              type="button"
              style={{
                ...styles.linkButton,
                ...(activeNav === "Product & Services" ? styles.activeLinkButton : {}),
                ...(pressedButton === "Product & Services" ? styles.linkButtonPressed : {}),
              }}
              onClick={() => setActiveNav("Product & Services")}
              onMouseDown={() => setPressedButton("Product & Services")}
              onMouseUp={() => setPressedButton(null)}
              onMouseLeave={() => setPressedButton(null)}
            >
              Product & Services
            </button>
            <button
              type="button"
              style={{
                ...styles.linkButton,
                ...(activeNav === "Target Market" ? styles.activeLinkButton : {}),
                ...(pressedButton === "Target Market" ? styles.linkButtonPressed : {}),
              }}
              onClick={() => setActiveNav("Target Market")}
              onMouseDown={() => setPressedButton("Target Market")}
              onMouseUp={() => setPressedButton(null)}
              onMouseLeave={() => setPressedButton(null)}
            >
              Target Market
            </button>
            <button
              type="button"
              style={{
                ...styles.linkButton,
                ...(activeNav === "Our Team" ? styles.activeLinkButton : {}),
                ...(pressedButton === "Our Team" ? styles.linkButtonPressed : {}),
              }}
              onClick={() => setActiveNav("Our Team")}
              onMouseDown={() => setPressedButton("Our Team")}
              onMouseUp={() => setPressedButton(null)}
              onMouseLeave={() => setPressedButton(null)}
            >
              Our Team
            </button>
          </div>
        </div>

        {/* HERO */}
        <div style={styles.heroGroup}>
          <h1 style={{ ...styles.title, ...(isMobile ? styles.titleMobile : {}), whiteSpace: "pre-line" }}>
            {"Grow Food. Build Community.\nEarn Sustainably."}
          </h1>
        </div>

      </div>
    </div>
  );
}

const glassPanel = {
  backdropFilter: "blur(2px)",
  WebkitBackdropFilter: "blur(2px)",
  background: "rgba(120, 130, 145, 0.30)",
  border: "1px solid rgba(200, 205, 215, 0.30)",
  boxShadow: "0 8px 20px rgba(26, 35, 52, 0.08)",
};

const styles = {
  page: {
    height: "100vh",
    padding: "20px",
    textAlign: "center",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
    backgroundImage: "url('/IMG_6223.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#ffffff",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },

  bgOrbOne: {
    position: "absolute",
    width: "380px",
    height: "380px",
    borderRadius: "50%",
    top: "-120px",
    left: "-130px",
    background:
      "radial-gradient(circle, rgba(188, 234, 197, 0.45), rgba(223, 244, 228, 0.18) 58%, rgba(255,255,255,0) 78%)",
    filter: "blur(22px)",
    pointerEvents: "none",
  },

  bgOrbTwo: {
    position: "absolute",
    width: "340px",
    height: "340px",
    borderRadius: "50%",
    bottom: "-130px",
    right: "-90px",
    background:
      "radial-gradient(circle, rgba(174, 225, 186, 0.36), rgba(210, 240, 217, 0.15) 60%, rgba(255,255,255,0) 80%)",
    filter: "blur(26px)",
    pointerEvents: "none",
  },

  bgOrbThree: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    top: "24%",
    right: "18%",
    background:
      "radial-gradient(circle, rgba(201, 240, 208, 0.3), rgba(234, 248, 237, 0.12) 62%, rgba(255,255,255,0) 82%)",
    filter: "blur(24px)",
    pointerEvents: "none",
  },

  shell: {
    ...glassPanel,
    maxWidth: "1200px",
    width: "100%",
    height: "calc(100vh - 40px)",
    margin: "0 auto",
    borderRadius: "34px",
    padding: "24px clamp(16px, 4vw, 40px) 24px",
    position: "relative",
    zIndex: 2,
    boxSizing: "border-box",
    overflow: "hidden",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    padding: "6px 4px 14px",
    marginBottom: "22px",
    borderBottom: "1px solid rgba(255,255,255,0.35)",
  },

  navbarMobile: {
    flexDirection: "column",
    alignItems: "center",
  },

  logo: {
    fontWeight: "700",
    letterSpacing: "0.2px",
    margin: 0,
  },

  navLinks: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  navLinksMobile: {
    marginTop: "8px",
    gap: "12px",
  },

  linkButton: {
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 600,
    color: "#ffffff",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "transparent",
    border: "none",
    fontFamily: "inherit",
    transition: "transform 0.15s ease, background 0.15s ease, color 0.15s ease",
  },

  activeLinkButton: {
    background: "rgba(255,255,255,0.12)",
    color: "#ffffff",
  },

  linkButtonPressed: {
    transform: "scale(0.96)",
  },

  heroGroup: {
    width: "100%",
    maxWidth: "760px",
    margin: "160px auto 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  title: {
    fontSize: "30px",
    fontFamily: "Didot, Georgia, serif",
    fontWeight: "700",
    color: "#ffffff",
    margin: "10px 0 8px",
    textAlign: "center",
    textShadow: "0 3px 14px rgba(0,0,0,0.35)",
    animation: "fadeIn 1s ease-in-out",
  },

  titleMobile: {
    lineHeight: 1.1,
  },

  subtitle: {
    color: "#ffffff",
    marginBottom: "22px",
    fontSize: "1rem",
    textAlign: "center",
  },

  searchBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "8px auto 34px",
  },

  searchInput: {
    width: "min(560px, 82vw)",
    padding: "14px 22px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.58)",
    outline: "none",
    fontSize: "15px",
    color: "#ffffff",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    background: "linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.35))",
    boxShadow:
      "0 10px 28px rgba(59,84,116,0.14), inset 0 1px 0 rgba(255,255,255,0.65)",
  },

  searchInputMobile: {
    width: "100%",
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "16px",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "920px",
    margin: "0 auto 0",
  },

  card: {
    ...glassPanel,
    width: "min(260px, 100%)",
    padding: "18px 16px",
    borderRadius: "24px",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    cursor: "pointer",
  },

  cardHover: {
    transform: "translateY(-8px)",
    boxShadow:
      "0 20px 50px rgba(26, 35, 52, 0.15), inset 0 1px 0 rgba(255,255,255,0.48)",
  },

  cardTitle: {
    margin: "0 0 10px",
    fontSize: "1.2rem",
    color: "#ffffff",
  },

  button: {
    marginTop: "6px",
    padding: "10px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.6)",
    background:
      "linear-gradient(180deg, rgba(34,197,94,0.95), rgba(22,163,74,0.9))",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(22,163,74,0.32)",
    transition: "transform 0.2s ease",
  },

  buttonHover: {
    transform: "scale(1.05)",
    boxShadow: "0 10px 22px rgba(22,163,74,0.4)",
  },

  popupOverlay: {
    position: "fixed",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.12), rgba(9, 18, 32, 0.08))",
    backdropFilter: "blur(2px) saturate(110%)",
    WebkitBackdropFilter: "blur(2px) saturate(110%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 30,
  },

  revealPanel: {
    ...glassPanel,
    width: "fit-content",
    minWidth: "min(240px, 84vw)",
    maxWidth: "min(680px, 90vw)",
    margin: 0,
    padding: "18px 20px",
    borderRadius: "24px",
    textAlign: "left",
    border: "1px solid rgba(255,255,255,0.62)",
    cursor: "pointer",
    fontFamily: "inherit",
    color: "inherit",
    display: "inline-block",
    boxShadow:
      "0 20px 40px rgba(20, 36, 58, 0.16), inset 0 1px 0 rgba(255,255,255,0.6)",
  },

  revealPanelMobile: {
    textAlign: "center",
  },

  revealTitle: {
    margin: "0 0 8px",
    color: "#ffffff",
  },

  revealText: {
    margin: 0,
    lineHeight: 1.6,
    color: "#ffffff",
    wordBreak: "break-word",
  },

};

export default App;
