import React, { useEffect, useState } from "react";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import ProductServices from "./pages/ProductServices";
import TargetMarket from "./pages/TargetMarket";
import GetInTouch from "./pages/GetInTouch";
import LearnMore from "./pages/LearnMore";
import BenefitsOfTheProject from "./pages/BenefitsOfTheProject"; // Import the new component
import ExploreMore from "./pages/ExploreMore";
import TargetMarketExplore from "./pages/TargetMarketExplore";
import AIChatInterface from "./AIChatInterface";
import SustainabilityAppMarket from "./pages/SustainabilityAppMarket";

const navItems = ["Home", "About Us", "Product & Services", "Target Market", "Our Team"];

function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [pressedButton, setPressedButton] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hoveredNav, setHoveredNav] = useState(null); // State for navigation buttons
  const [btnHovered, setBtnHovered] = useState(false); // State for 'Get in Touch' button (reverted from previous change)
  const [ghostHovered, setGhostHovered] = useState(false); // State for 'Learn More' button
  const [exploreHovered, setExploreHovered] = useState(false); // State for 'Explore more' button
  const [chatHovered, setChatHovered] = useState(false); // State for 'Chat with AI' button
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAIChat, setShowAIChat] = useState(false); // State for showing AI chat interface
  const [statsStripHovered, setStatsStripHovered] = useState(false); // State for the stats strip panel
  const [isTargetDropdownOpen, setIsTargetDropdownOpen] = useState(false); // State for Target Market dropdown
  const [hoveredDropdown, setHoveredDropdown] = useState(null); // State for hovering dropdown items
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false); // New state for Product & Services dropdown
  const [hoveredProductDropdown, setHoveredProductDropdown] = useState(null); // New state for Product & Services dropdown items

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.page}>
      {/* Video Background */}
      <video autoPlay loop muted playsInline style={styles.videoBackground}>
        <source src="/Green.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Background Scrim */}
      <div style={{
        ...styles.bgScrim,
        // Ensure the scrim is above the video but below other content
        zIndex: 1,
      }} />
      <div style={{ ...styles.shell, ...(isMobile ? styles.shellMobile : {}) }}>

        {/* ── NAVBAR ── */}
        <nav style={{ ...styles.navbar, ...(isMobile ? styles.navbarMobile : {}) }}>
          <div style={styles.logoWrap}>
            <img src="/Eco.png" alt="EcoEquity Inc Logo" style={styles.ecoLogo} />
            <span style={styles.logoText}>EcoEquity.Inc</span>
          </div>
          <div style={{ ...styles.navLinks, ...(isMobile ? styles.navLinksMobile : {}) }}>
            {navItems.map((item) => {
              if (item === "Target Market") {
                const isTargetMarketActive = activeNav === "Target Market" || activeNav === "Target Market Explore" || activeNav === "Sustainability App Market";
                let targetMarketLabel = item;
                if (activeNav === "Target Market Explore") targetMarketLabel = "Distribution Channels and Acquisition Tactics";
                else if (activeNav === "Sustainability App Market") targetMarketLabel = "Sustainability App Market";

                return (
                  <div
                    key={item}
                    style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
                    onMouseEnter={() => !isMobile && setIsTargetDropdownOpen(true)}
                    onMouseLeave={() => !isMobile && setIsTargetDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      style={{
                        ...styles.linkBtn,
                        ...(isTargetMarketActive ? styles.linkBtnActive : {}),
                        ...(hoveredNav === item && !isTargetMarketActive ? styles.linkBtnHover : {}),
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        padding: "4px 6px 4px 14px"
                      }}
                      onClick={() => {
                        setActiveNav(item);
                        if (isMobile && !isTargetDropdownOpen) {
                          setIsTargetDropdownOpen(true);
                        }
                      }}
                      onMouseEnter={() => setHoveredNav(item)}
                      onMouseLeave={() => setHoveredNav(null)}
                    >
                      {targetMarketLabel}
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsTargetDropdownOpen(!isTargetDropdownOpen);
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "6px",
                          marginLeft: "2px",
                          borderRadius: "50%",
                          background: isTargetDropdownOpen ? "rgba(255, 255, 255, 0.15)" : "transparent",
                          cursor: "pointer",
                          transition: "background 0.2s ease"
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: isTargetDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease"
                          }}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>

                    {isTargetDropdownOpen && (
                      <div style={{ position: isMobile ? "relative" : "absolute", top: isMobile ? "auto" : "100%", paddingTop: isMobile ? "0px" : "8px", zIndex: 100, width: "100%" }}>
                        <div style={{ ...styles.dropdownMenu, ...(isMobile ? styles.dropdownMenuMobile : {}) }}>
                        <button
                          type="button"
                          style={{
                            ...styles.dropdownItem,
                            ...(isMobile ? styles.dropdownItemMobile : {}),
                            ...(activeNav === "Target Market" ? styles.dropdownItemActive : {}),
                            ...(hoveredDropdown === "Overview" && activeNav !== "Target Market" ? styles.dropdownItemHover : {})
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveNav("Target Market");
                            setIsTargetDropdownOpen(false);
                          }}
                          onMouseEnter={() => setHoveredDropdown("Overview")}
                          onMouseLeave={() => setHoveredDropdown(null)}
                        >
                          Overview
                        </button>
                        <button
                          type="button"
                          style={{
                            ...styles.dropdownItem,
                            ...(isMobile ? styles.dropdownItemMobile : {}),
                            ...(activeNav === "Target Market Explore" ? styles.dropdownItemActive : {}),
                            ...(hoveredDropdown === "Distribution Channels and Acquisition Tactics" && activeNav !== "Target Market Explore" ? styles.dropdownItemHover : {})
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveNav("Target Market Explore");
                            setIsTargetDropdownOpen(false);
                          }}
                          onMouseEnter={() => setHoveredDropdown("Distribution Channels and Acquisition Tactics")}
                          onMouseLeave={() => setHoveredDropdown(null)}
                        >
                          Distribution Channels and Acquisition Tactics
                        </button>
                        <button
                          type="button"
                          style={{
                            ...styles.dropdownItem,
                            ...(isMobile ? styles.dropdownItemMobile : {}),
                            ...(activeNav === "Sustainability App Market" ? styles.dropdownItemActive : {}),
                            ...(hoveredDropdown === "Sustainability" && activeNav !== "Sustainability App Market" ? styles.dropdownItemHover : {})
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveNav("Sustainability App Market");
                            setIsTargetDropdownOpen(false);
                          }}
                          onMouseEnter={() => setHoveredDropdown("Sustainability")}
                          onMouseLeave={() => setHoveredDropdown(null)}
                        >
                          Sustainability App Market
                        </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else if (item === "Product & Services") { // New dropdown for Product & Services
                const isProductServicesActive = activeNav === "Product & Services" || activeNav === "Benefits of the Project";

                let productServicesLabel = item;
                if (activeNav === "Benefits of the Project") {
                  productServicesLabel = "Benefits of the Project";
                }
                return (
                  <div
                    key={item}
                    style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
                    onMouseEnter={() => !isMobile && setIsProductDropdownOpen(true)}
                    onMouseLeave={() => !isMobile && setIsProductDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      style={{
                        ...styles.linkBtn,
                        ...(isProductServicesActive ? styles.linkBtnActive : {}),
                        ...(hoveredNav === item && !isProductServicesActive ? styles.linkBtnHover : {}),
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        padding: "4px 6px 4px 14px"
                      }}
                      onClick={() => {
                        setActiveNav(item); // Default to the main Product & Services page
                        if (isMobile && !isProductDropdownOpen) {
                          setIsProductDropdownOpen(true);
                        }
                      }}
                      onMouseEnter={() => setHoveredNav(item)}
                      onMouseLeave={() => setHoveredNav(null)}
                    >
                      {productServicesLabel} {/* Display "Benefits of the Project" if active, otherwise "Product & Services" */}
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsProductDropdownOpen(!isProductDropdownOpen);
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "6px",
                          marginLeft: "2px",
                          borderRadius: "50%",
                          background: isProductDropdownOpen ? "rgba(255, 255, 255, 0.15)" : "transparent",
                          cursor: "pointer",
                          transition: "background 0.2s ease"
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: isProductDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease"
                          }}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>

                    {isProductDropdownOpen && (
                      <div style={{ position: isMobile ? "relative" : "absolute", top: isMobile ? "auto" : "100%", paddingTop: isMobile ? "0px" : "8px", zIndex: 100, width: "100%" }}>
                        <div style={{ ...styles.dropdownMenu, ...(isMobile ? styles.dropdownMenuMobile : {}) }}>
                          <button
                            type="button"
                            style={{
                              ...styles.dropdownItem,
                              ...(isMobile ? styles.dropdownItemMobile : {}),
                              ...(activeNav === "Product & Services" ? styles.dropdownItemActive : {}),
                              ...(hoveredProductDropdown === "Overview" && activeNav !== "Product & Services" ? styles.dropdownItemHover : {})
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveNav("Product & Services");
                              setIsProductDropdownOpen(false);
                            }}
                            onMouseEnter={() => setHoveredProductDropdown("Overview")}
                            onMouseLeave={() => setHoveredProductDropdown(null)}
                          >
                            Overview
                          </button>
                          <button
                            type="button"
                            style={{
                              ...styles.dropdownItem,
                              ...(isMobile ? styles.dropdownItemMobile : {}),
                              ...(activeNav === "Benefits of the Project" ? styles.dropdownItemActive : {}),
                              ...(hoveredProductDropdown === "Benefits of the Project" && activeNav !== "Benefits of the Project" ? styles.dropdownItemHover : {})
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveNav("Benefits of the Project");
                              setIsProductDropdownOpen(false);
                            }}
                            onMouseEnter={() => setHoveredProductDropdown("Benefits of the Project")}
                            onMouseLeave={() => setHoveredProductDropdown(null)}
                          >
                            Benefits of the Project
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item}
                  type="button"
                  style={{
                    ...styles.linkBtn,
                    ...(activeNav === item ? styles.linkBtnActive : {}),
                    ...(hoveredNav === item && activeNav !== item ? styles.linkBtnHover : {}),
                  }}
                  onClick={() => setActiveNav(item)}
                  onMouseEnter={() => setHoveredNav(item)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </nav>

        {/* ── PAGE CONTENT ── */}
        {activeNav === "Home" && (
          <div style={{ ...styles.hero, ...(isMobile ? styles.heroMobile : {}) }}>

            <div style={styles.badge}>
              <span style={styles.badgeDot} />
              Agricultural Innovation · Philippines
            </div>

            <h1 style={{ ...styles.title, ...(isMobile ? styles.titleMobile : {}) }}>
              Grow Food.{" "}
              <span style={styles.titleAccent}>Build Community.</span>
              {"\n"}Earn Sustainably.
            </h1>
            <p style={{ ...styles.body, ...(isMobile ? styles.bodyMobile : {}) }}> 
              EcoEquity is a digital-first, high-engagement platform designed to boost 
              agricultural self-sufficiency in the Philippines — starting at the household 
              and community level. 
            </p> 
            <div style={{ ...styles.ctaRow, ...(isMobile ? styles.ctaRowMobile : {}) }}>
              <button
                type="button"
                style={{
                  ...styles.primaryBtn,
                  ...(isMobile ? styles.responsiveBtnMobile : {}), // Apply responsive styles if mobile
                  ...(btnHovered ? styles.primaryBtnHov : {}), // Apply hover styles if button is hovered
                }}
                onClick={() => setActiveNav("Contact")}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
              >
                Get in Touch {/* Text for the button */}
              </button>
              <button
                type="button"
                style={{
                  ...styles.glassBtn,
                  ...(isMobile ? styles.responsiveBtnMobile : {}),
                  ...(ghostHovered ? styles.glassBtnHov : {}),
                }}
                onClick={() => setActiveNav("Learn More")}
                onMouseEnter={() => setGhostHovered(true)}
                onMouseLeave={() => setGhostHovered(false)}
              >
                Learn More
              </button>
            </div>
            <div style={styles.cardRow}>
              {[
                { icon: <img src="/2.png" alt="Organic Marketplace" style={{ width: '48px', height: '48px', display: 'block', margin: 'auto' }} />, heading: "Organic Edibles", text: "Organic Edibles: Local produce, herbs, organic kits. Floriculture, localized seeds." },
                { icon: <img src="/1.png" alt="AI Farming System" style={{ width: '48px', height: '48px', display: 'block', margin: 'auto' }} />, heading: "AI Plant Doctor", text: "24/7 AI Plant Doctor, localized care guides tailored to Philippine climate and native crops." },
                { icon: <img src="/3.png" alt="Community Hub" style={{ width: '48px', height: '48px', display: 'block', margin: 'auto' }} />, heading: "Community Hub", text: "Provides essential digital tools and localized data, supporting both urban farming and traditional farming centers during periods of oversupply." },
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
                  <span style={styles.cardIcon}>
                    {c.icon}
                  </span>
                  {c.heading && <h3 style={styles.cardHeading}>{c.heading}</h3>}
                  {c.text && <p style={styles.cardText}>{c.text}</p>}
                </div>
              ))}
            </div>
            {/* Horizontal Glass Panel with new stats */}
            <div
              style={{
                ...styles.statsStrip,
                marginTop: '20px',
                ...(isMobile ? styles.statsStripMobile : {}),
                ...(statsStripHovered ? styles.statsStripHov : {}) }}
              onMouseEnter={() => setStatsStripHovered(true)}
              onMouseLeave={() => setStatsStripHovered(false)}
            >
              {[
                { value: "98%", label: "Company Growth" },
                { value: "99+", label: "Partners" },
                { value: "1000+", label: "Customers" },
              ].map((s, i, arr) => (
                <div
                  key={s.label}
                  style={{
                    ...styles.statCell,
                    ...(i < arr.length - 1 ? styles.statCellDivider : {}),
                  }}
                >
                  <span style={styles.statVal}>{s.value}</span>
                  <span style={styles.statLbl}>{s.label}</span>
                </div>
              ))}
            </div>

          </div>
        )}
        {/* Chat with AI Button */}
        {activeNav === "Home" && (
          <button
            type="button"
            style={{
              ...styles.glassBtn,
              ...styles.chatWithAiBtn,
              ...(isMobile ? styles.chatWithAiBtnMobile : {}),
              ...(chatHovered ? styles.glassBtnHov : {}),
            }}
            onClick={() => setShowAIChat(true)}
            onMouseEnter={() => setChatHovered(true)}
            onMouseLeave={() => setChatHovered(false)}
          >
            Chat with AI
          </button>
        )}

        {activeNav !== "Home" && (
          <div
            style={{
              ...styles.pageContent,
              ...((activeNav === "Target Market" || activeNav === "Target Market Explore") && { overflowY: "hidden" }),
            }}
          >
            {activeNav === "About Us" && <AboutUs />}
            {activeNav === "Product & Services" && <ProductServices />}
            {activeNav === "Target Market" && <TargetMarket />}
            {activeNav === "Our Team" && <OurTeam />}
            {activeNav === "Contact" && <GetInTouch setActiveNav={setActiveNav} />}
            {activeNav === "Learn More" && <LearnMore setActiveNav={setActiveNav} />}
            {activeNav === "Explore More" && <ExploreMore setActiveNav={setActiveNav} />}
            {activeNav === "Target Market Explore" && <TargetMarketExplore />}
            {activeNav === "Sustainability App Market" && <SustainabilityAppMarket />}
            {activeNav === "Benefits of the Project" && <BenefitsOfTheProject />}
          </div>
        )}
        {showAIChat && (
          <AIChatInterface onClose={() => setShowAIChat(false)} isMobile={isMobile} />
        )}

        {activeNav === "Learn More" && (
          <button
            type="button"
            style={{
              ...styles.glassBtn,
              ...styles.exploreMoreBtn,
              ...(isMobile ? styles.exploreMoreBtnMobile : {}),
              ...(exploreHovered ? styles.glassBtnHov : {}),
            }}
            onClick={() => setActiveNav("Explore More")}
            onMouseEnter={() => setExploreHovered(true)}
            onMouseLeave={() => setExploreHovered(false)}
          >
            Explore more
          </button>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────── */
const styles = {
 
  page: {
    height: "100vh",
    padding: "20px",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
    color: "#fff",
    // Removed backgroundImage and backgroundSize as video will be used
    // backgroundImage: "url('/IMG_6223.jpeg')",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },

  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0, // Ensure video is behind other content
  },

  bgScrim: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.60) 100%)",
    pointerEvents: "none",
    // zIndex is set inline in the component to ensure it's above the video
    // but below the shell content.
  },

  shell: { 
    background: "rgba(255,255,255,0.10)",
    border: "none",
    boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
    maxWidth: "1160px",
    width: "100%",
    height: "calc(100vh - 40px)",
    margin: "0 auto",
    borderRadius: "30px",
    padding: "28px clamp(20px, 4vw, 52px)",
    position: "relative",
    zIndex: 2,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  shellMobile: {
    borderRadius: "22px",
    padding: "20px 16px",
  },

  navbar: { 
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "transparent",
    border: "none",
    boxShadow: "none",
    marginBottom: "0",
  },

  navbarMobile: {
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    borderRadius: "24px",
    padding: "14px 18px",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  logoLeaf: {
    fontSize: "19px",
    lineHeight: 1,
  },

  logoText: {
    fontSize: "26px", // Slightly reduced font size for a more refined look
    fontWeight: 600, // Lighter font weight for a professional feel
    letterSpacing: "-0.5px", // Tighter letter spacing for a modern aesthetic
    color: "#fff",
    textShadow: "0 1px 3px rgba(0,0,0,0.2)", // Added a subtle text shadow for depth
  },

  ecoLogo: {
    height: "60px", // Adjust height as needed to fit with the text
    width: "auto",
    // Removed marginRight as gap in logoWrap will handle spacing
  },

  navLinks: {
    display: "flex",
    gap: "2px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  navLinksMobile: { gap: "6px" },

  linkBtn: {
    cursor: "pointer", 
    fontSize: "13px", 
    fontWeight: 500,
    color: "rgba(255,255,255,0.62)",
    padding: "7px 14px",
    borderRadius: "999px",
    background: "transparent",
    border: "none",
    fontFamily: "inherit",
    transition: "color 0.15s ease, background 0.15s ease",
  },

  linkBtnActive: {
    background: "rgba(255,255,255,0.20)",
    color: "#fff",
    fontWeight: 600,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.30), 0 2px 8px rgba(0,0,0,0.14)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
  },

  linkBtnHover: {
    background: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.88)",
  },

  pageContent: { 
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
    marginTop: "16px",
    borderRadius: "20px",
  },

  hero: { 
    width: "100%",
    maxWidth: "720px",
    margin: "clamp(10px, 4vh, 50px) auto 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    animation: "fadeInUp 0.85s cubic-bezier(.22,1,.36,1) both",
  },

  heroMobile: { margin: "5px auto 0" },

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
    marginBottom: "22px",
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
    fontSize: "clamp(24px, 3.2vw, 38px)",
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 18px",
    lineHeight: 1.14,
    letterSpacing: "-1px",
    whiteSpace: "pre-line",
    textShadow: "0 2px 20px rgba(0,0,0,0.35)",
    animation: "titleReveal 0.9s cubic-bezier(.22,1,.36,1) 0.15s both",
  },

  titleMobile: {
    fontSize: "20px",
    letterSpacing: "-0.5px",
  },

  titleAccent: { 
    background: "linear-gradient(90deg, #4ade80, #86efac)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  body: {
    color: "rgb(255, 255, 255)",
    marginBottom: "32px",
    fontSize: "clamp(14px, 1.6vw, 17px)",
    fontWeight: 400,
    lineHeight: 1.72,
    maxWidth: "580px",
  },

  bodyMobile: {
    fontSize: "13.5px",
    marginBottom: "26px",
  },

  ctaRow: { 
    display: "flex",
    gap: "10px",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "44px",
  },

  ctaRowMobile: {
    flexDirection: "column",
    gap: "12px",
    width: "100%",
  },

  primaryBtn: { 
    padding: "12px 30px",
    borderRadius: "999px",
    border: "none", // No border for the button
    background: "linear-gradient(145deg, #87CEEB 0%, #6495ED 100%)", // Pastel skyblue gradient
    color: "#fff",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "inherit",
    letterSpacing: "0.2px",
    boxShadow: "0 6px 20px rgba(135, 206, 235, 0.38), inset 0 1px 0 rgba(255,255,255,0.18)", // Shadow to match new gradient
    transition: "transform 0.16s ease, box-shadow 0.16s ease",
  },

  primaryBtnHov: {
    background: "linear-gradient(145deg, #6495ED 0%, #4169E1 100%)", // Darker pastel skyblue gradient on hover
    transform: "translateY(-2px) scale(1.015)",
    boxShadow: "0 12px 28px rgba(100, 149, 237, 0.45), inset 0 1px 0 rgba(255,255,255,0.22)", // Shadow to match new gradient
  },

  responsiveBtnMobile: {
    width: "100%",
    maxWidth: "320px",
  },

  glassBtn: { 
    padding: "12px 28px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.12)",
    border: "none",
    color: "rgba(255,255,255,0.88)",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    transform: "scale(1)", // Default scale for transition
    fontFamily: "inherit",
    letterSpacing: "0.2px",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), 0 4px 16px rgba(0,0,0,0.12)",
    transition: "background 0.16s ease, border-color 0.16s ease, transform 0.16s ease",
  },

  glassBtnHov: {
    background: "rgba(255,255,255,0.18)",
    borderColor: "rgba(255,255,255,0.35)", // Keep existing hover styles
    transform: "scale(1.05)", // Add zoom effect on hover
  },

  exploreMoreBtn: {
    position: "absolute",
    bottom: "28px",
    right: "clamp(20px, 4vw, 52px)",
    zIndex: 10,
  },

  exploreMoreBtnMobile: {
    bottom: "20px",
    right: "16px",
    padding: "10px 20px",
    fontSize: "13px",
  },

  chatWithAiBtn: {
    position: "absolute",
    bottom: "28px",
    right: "clamp(20px, 4vw, 52px)",
    zIndex: 10,
  },

  chatWithAiBtnMobile: {
    bottom: "20px",
    right: "16px",
    padding: "10px 20px",
    fontSize: "13px",
  },

  statsStrip: { 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 40px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.08)",
    border: "none",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.18), 0 8px 32px rgba(0,0,0,0.15)",
    transition:
      "transform 0.22s cubic-bezier(.34,1.56,.64,1), " +
      "background 0.18s ease, box-shadow 0.22s ease",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
  },
  statsStripHov: {
    background: "rgba(255,255,255,0.12)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.22), 0 12px 40px rgba(0,0,0,0.2)", 
    transform: "translateY(-2px) scale(1.005)",
  },
  statsStripMobile: {
    padding: "20px 25px",
  },

  statCell: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 18px",
  },

  statCellDivider: {
    borderRight: "1px solid rgba(255,255,255,0.12)",
  },

  statVal: {
    fontSize: "24px", // Made bigger
    fontWeight: 700,
    color: "#ffffff", 
    letterSpacing: "-0.5px",
    lineHeight: 1.1,
    marginBottom: "3px", // Adjusted spacing
  },

  statLbl: {
    fontSize: "12px", // Made bigger
    fontWeight: 500,
    color: "rgba(255,255,255,0.45)",
    letterSpacing: "0.9px",
    textTransform: "uppercase",
  },

  cardRow: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "-10px",
    width: "100%",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    border: "none",
    borderRadius: "16px",
    padding: "16px 12px",
    flex: "1 1 150px",
    maxWidth: "180px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 16px rgba(0,0,0,0.1)",
    cursor: "default",
    transition:
      "transform 0.22s cubic-bezier(.34,1.56,.64,1), " +
      "background 0.18s ease, " +
      "box-shadow 0.22s ease, " +
      "border-color 0.18s ease",
  },
  cardHov: {
    transform: "translateY(-4px) scale(1.02)",
    background: "rgba(255,255,255,0.12)",
    border: "none",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.15), " +
      "0 8px 24px rgba(0,0,0,0.18)",
  },

  cardIcon: {
    fontSize: "30px",
    lineHeight: 1,
  },
  cardHeading: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#fff",
    margin: 0,
    letterSpacing: "-0.2px",
  },
  cardText: {
    fontSize: "10.5px",
    color: "rgb(255, 255, 255)",
    lineHeight: 1.6,
    margin: 0,
    textAlign: "left",
  },

  dropdownMenu: {
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    borderRadius: "14px",
    padding: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    minWidth: "150px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.18)",
  },
  dropdownMenuMobile: {
    marginTop: "6px",
    background: "rgba(255,255,255,0.05)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
    border: "none",
    minWidth: "100%",
    width: "100%",
    alignItems: "center",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
  },
  dropdownItem: {
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 500,
    color: "rgba(255,255,255,0.75)",
    padding: "8px 14px",
    borderRadius: "10px",
    background: "transparent",
    border: "none",
    fontFamily: "inherit",
    textAlign: "left",
    transition: "color 0.15s ease, background 0.15s ease",
    width: "100%",
  },
  dropdownItemMobile: {
    textAlign: "center",
  },
  dropdownItemActive: {
    background: "rgba(255,255,255,0.20)",
    color: "#fff",
    fontWeight: 600,
  },
  dropdownItemHover: {
    background: "rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.95)",
  },
};

export default App;
