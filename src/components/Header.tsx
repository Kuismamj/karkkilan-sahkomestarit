import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { useWindowSize } from "../hooks/useWindowSize"
import "../styles/Navigation.css"

const Header: React.FC = () => {
  const location = useLocation()
  const { isMobile, isTablet } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const needsBurgerMenu = () => {
    return window.innerWidth < 1300
  }

  const getNavFontSize = () => {
    if (window.innerWidth <= 1510) return "1.2rem"
    return "1.4rem"
  }

  const getPhoneFontSize = () => {
    if (window.innerWidth <= 1510) return "1.2rem"
    return "1.5rem"
  }

  const getPhonePadding = () => {
    if (window.innerWidth <= 1100) return "0.5rem"
    if (window.innerWidth <= 1510) return "0.4rem 1rem"
    return "0.5rem 1.2rem"
  }

  const getPhoneWidth = () => {
    if (window.innerWidth <= 1100) return "auto"
    if (window.innerWidth <= 1510) return "320px"
    return "400px"
  }

  const getPhoneIconSize = () => {
    if (window.innerWidth <= 1510) return "22px"
    return "28px"
  }

  const showPhoneText = () => {
    return window.innerWidth > 1100
  }

  const getLinkStyle = (path: string): React.CSSProperties => ({
    textDecoration: "none",
    textShadow: "none",
    transition: "color 0.1s ease, background 0.2s",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    fontSize: getNavFontSize(),
    ...(location.pathname === path && {
      color: "#ffe600",
      background: "#2d3748",
    }),
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setTimeout(() => window.scrollTo(0, 0), 0)
  }

  const burgerLineStyle: React.CSSProperties = {
    width: "25px",
    height: "3px",
    backgroundColor: "#ffe600",
    margin: "3px 0",
    transition: "0.3s",
    borderRadius: "2px",
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 50,
        backgroundColor: "#1f2937",
        color: "#1f2937",
        padding: isMobile ? "0.5rem 1rem" : "1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        margin: 0,
      }}
    >
      <nav
        className="navbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: isMobile ? "1.2rem" : "2rem",
          position: "relative",
          marginRight: "0rem",
        }}
      >
        <Link
          to="/"
          style={{
            marginLeft: isMobile ? "0" : "1rem",
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: isMobile ? "5px" : "5px",
          }}
          onClick={closeMenu}
        >
          <img
            src="/logo2.png"
            alt="Logo"
            style={{
              height: isMobile ? "35px" : isTablet ? "40px" : "50px",
              width: isMobile ? "200px" : isTablet ? "250px" : "400px",
              objectFit: "contain",
              borderRadius: "8px",
              display: "block",
              transition: "box-shadow 0.2s",
              transform: "translateY(0px)",
            }}
          />
        </Link>

        {/* Desktop navigaatio - näkyy kun EI tarvita burger-menua (≥1300px) */}
        {!needsBurgerMenu() && (
          <div style={{ display: "flex", gap: "4rem", alignItems: "center" }}>
            <Link
              to="/"
              style={getLinkStyle("/")}
              className="nav-link"
              onClick={() => {
                setTimeout(() => window.scrollTo(0, 0), 0)
              }}
            >
              Etusivu
            </Link>
            <Link
              to="/palvelut"
              style={getLinkStyle("/palvelut")}
              className="nav-link"
              onClick={() => {
                setTimeout(() => window.scrollTo(0, 0), 0)
              }}
            >
              Palvelut
            </Link>
            <Link
              to="/yhteys"
              style={getLinkStyle("/yhteys")}
              className="nav-link"
              onClick={() => {
                setTimeout(() => window.scrollTo(0, 0), 0)
              }}
            >
              Yhteys
            </Link>
            <Link
              to="/yritys"
              style={getLinkStyle("/yritys")}
              className="nav-link"
              onClick={() => {
                setTimeout(() => window.scrollTo(0, 0), 0)
              }}
            >
              Yritys
            </Link>
          </div>
        )}

        {/* Desktop puhelinnumero - näkyy kun EI tarvita burger-menua (≥1300px) */}
        {!needsBurgerMenu() && (
          <a
            href="tel:0505299650"
            style={{
              marginRight: "1.5rem",
              color: "#ffe600",
              fontSize: getPhoneFontSize(), // KÄYTTÄÄ SKAALATTUA KOKOA
              fontWeight: 600,
              letterSpacing: "1px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: getPhoneWidth(), // KÄYTTÄÄ SKAALATTUA LEVEYTTÄ
              background: "#2d3748",
              padding: getPhonePadding(), // KÄYTTÄÄ SKAALATTUA PADDINGIA
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#374151"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#2d3748"
            }}
          >
            <img
              src="/phone-call.png"
              alt="Puhelin"
              style={{
                width: getPhoneIconSize(), // KÄYTTÄÄ SKAALATTUA KOKOA
                height: getPhoneIconSize(), // KÄYTTÄÄ SKAALATTUA KOKOA
                objectFit: "contain",
                marginRight: showPhoneText() ? "0.7rem" : "0", // CONDITIONAL MARGIN
                display: "block",
                filter: "brightness(0) invert(1)",
              }}
            />
            {/* CONDITIONAL: Näytä numero vain yli 1100px */}
            {showPhoneText() && (
              <span
                style={{
                  color: "#ffe600",
                  fontWeight: 500,
                  fontSize: getPhoneFontSize(),
                  letterSpacing: "1px",
                }}
              >
                050 5299650
              </span>
            )}
          </a>
        )}

        {/* Burger-menu ja puhelinnumero - näkyy alle 1300px */}
        {needsBurgerMenu() && (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Puhelinnumero piilossa ≤340px leveydessä */}
            {window.innerWidth > 340 && (
              <a
                href="tel:0505299650"
                style={{
                  color: "#ffe600",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: window.innerWidth <= 768 ? "1rem" : "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#2d3748",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "8px",
                }}
              >
                <img
                  src="/phone-call.png"
                  alt="Puhelin"
                  style={{
                    width: window.innerWidth <= 768 ? "18px" : "22px",
                    height: window.innerWidth <= 768 ? "18px" : "22px",
                    filter: "brightness(0) invert(1)",
                  }}
                />
                {/* Näytä numero tablet/medium-kooissa */}
                {window.innerWidth > 768 &&
                  window.innerWidth < 1300 &&
                  "050 5299650"}
              </a>
            )}
            <button
              onClick={toggleMenu}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
              }}
              aria-label="Toggle menu"
            >
              <div
                style={{
                  ...burgerLineStyle,
                  transform: isMenuOpen
                    ? "rotate(-45deg) translate(-5px, 6px)"
                    : "none",
                }}
              />
              <div
                style={{
                  ...burgerLineStyle,
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <div
                style={{
                  ...burgerLineStyle,
                  transform: isMenuOpen
                    ? "rotate(45deg) translate(-5px, -6px)"
                    : "none",
                }}
              />
            </button>
          </div>
        )}

        {/* Mobile/Tablet menu overlay - näkyy alle 1300px */}
        {needsBurgerMenu() && isMenuOpen && (
          <>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 998,
              }}
              onClick={closeMenu}
            />
            <div
              style={{
                position: "fixed",
                top: window.innerWidth <= 768 ? "70px" : "80px",
                right: "1rem",
                backgroundColor: "#1f2937",
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                border: "1px solid #374151",
                zIndex: 999,
                minWidth: window.innerWidth <= 768 ? "200px" : "250px",
                animation: "slideDown 0.3s ease-out",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem 0",
                }}
              >
                <Link
                  to="/"
                  style={{
                    ...getLinkStyle("/"),
                    padding: "1rem 1.5rem",
                    borderRadius: "0",
                    fontSize: window.innerWidth <= 768 ? "1.1rem" : "1.3rem",
                    color: location.pathname === "/" ? "#ffe600" : "#e5e7eb",
                    borderBottom: "1px solid #374151",
                  }}
                  className="nav-link"
                  onClick={closeMenu}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#2d3748"
                    e.currentTarget.style.color = "#ffe600"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color =
                      location.pathname === "/" ? "#ffe600" : "#e5e7eb"
                  }}
                >
                  Etusivu
                </Link>
                <Link
                  to="/palvelut"
                  style={{
                    ...getLinkStyle("/palvelut"),
                    padding: "1rem 1.5rem",
                    borderRadius: "0",
                    fontSize: window.innerWidth <= 768 ? "1.1rem" : "1.3rem",
                    color:
                      location.pathname === "/palvelut" ? "#ffe600" : "#e5e7eb",
                    borderBottom: "1px solid #374151",
                  }}
                  className="nav-link"
                  onClick={closeMenu}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#2d3748"
                    e.currentTarget.style.color = "#ffe600"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color =
                      location.pathname === "/palvelut" ? "#ffe600" : "#e5e7eb"
                  }}
                >
                  Palvelut
                </Link>
                <Link
                  to="/yhteys"
                  style={{
                    ...getLinkStyle("/yhteys"),
                    padding: "1rem 1.5rem",
                    borderRadius: "0",
                    fontSize: window.innerWidth <= 768 ? "1.1rem" : "1.3rem",
                    color:
                      location.pathname === "/yhteys" ? "#ffe600" : "#e5e7eb",
                    borderBottom: "1px solid #374151",
                  }}
                  className="nav-link"
                  onClick={closeMenu}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#2d3748"
                    e.currentTarget.style.color = "#ffe600"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color =
                      location.pathname === "/yhteys" ? "#ffe600" : "#e5e7eb"
                  }}
                >
                  Yhteys
                </Link>
                <Link
                  to="/yritys"
                  style={{
                    ...getLinkStyle("/yritys"),
                    padding: "1rem 1.5rem",
                    borderRadius: "0",
                    fontSize: window.innerWidth <= 768 ? "1.1rem" : "1.3rem",
                    color:
                      location.pathname === "/yritys" ? "#ffe600" : "#e5e7eb",
                  }}
                  className="nav-link"
                  onClick={closeMenu}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#2d3748"
                    e.currentTarget.style.color = "#ffe600"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color =
                      location.pathname === "/yritys" ? "#ffe600" : "#e5e7eb"
                  }}
                >
                  Yritys
                </Link>
                {/* Puhelinnumero näkyy AINA mobiilimenussa */}
                {window.innerWidth <= 768 && (
                  <div
                    style={{
                      padding: "1rem 1.5rem",
                      borderTop: "1px solid #374151",
                      marginTop: "0.5rem",
                    }}
                  >
                    <a
                      href="tel:0505299650"
                      style={{
                        color: "#ffe600",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                      }}
                      onClick={closeMenu}
                    >
                      <img
                        src="/phone-call.png"
                        alt="Puhelin"
                        style={{
                          width: "20px",
                          height: "20px",
                          filter:
                            "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                        }}
                      />
                      050 5299650
                    </a>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </nav>
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  )
}

export default Header
