import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useWindowSize } from "../hooks/useWindowSize"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { isMobile, isTablet } = useWindowSize()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const getHeroTextSize = () => {
    if (isMobile) return "1.3rem"
    if (isTablet) return "1.6rem"
    return "1.9rem"
  }

  const getGridColumns = () => {
    if (isMobile) return "1fr"
    if (isTablet) return "1fr"
    return "1fr 1fr 1fr"
  }

  const getIconGap = () => {
    if (isMobile) return "2rem"
    if (isTablet) return "4rem"
    return "8rem"
  }

  const getIconSize = () => {
    if (isMobile) return "50px"
    if (isTablet) return "60px"
    return "70px"
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      {/* Hero-osio videolla */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Taustavideo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/background.mp4" type="video/mp4" />
          Selaimesi ei tue videota.
        </video>

        {/* Hero-sisältö */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: "rgba(14, 34, 58, 0.7)",
            zIndex: 1,
            position: "relative",
            paddingTop: isMobile ? "90px" : "80px",
          }}
        >
          <header
            style={{
              color: "white",
              textAlign: "center",
              padding: isMobile ? "1rem" : "2rem",
              width: "100%",
              maxWidth: "2000px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: isMobile ? "calc(100vh - 120px)" : "auto",
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: isMobile ? "1rem" : "2.5rem",
              }}
            >
              <img
                src="/logo2.png"
                alt="Karkkilan Sähkömestarit logo"
                style={{
                  height: isMobile ? "40px" : isTablet ? "50px" : "60px",
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                  display: "block",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                }}
              />
            </div>

            {/* Animoitu otsikko */}
            <p
              style={{
                fontSize: getHeroTextSize(),
                marginBottom: isMobile ? "3rem" : "4.5rem",
                fontWeight: "100",
                color: "#ffe600",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 0.3s",
                padding: isMobile ? "0 1rem" : "0",
                lineHeight: isMobile ? "1.4" : "1.3",
                maxWidth: isMobile ? "95%" : "100%",
                textAlign: "center",
              }}
            >
              Sähköasennukset alusta loppuun – helposti ja luotettavasti
            </p>

            {/* Animoidut grid boxit - responsiivinen */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: getGridColumns(),
                gap: isMobile ? "1.5rem" : "2rem",
                marginBottom: isMobile ? "2rem" : "2rem", // SÄILYTETÄÄN: sama
                maxWidth: isMobile ? "100%" : isTablet ? "800px" : "1200px",
                width: "100%",
                padding: isMobile ? "0 1rem" : "0",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                transition: "all 1s ease-out 0.6s",
              }}
            >
              {/* 1. Boxi */}
              <div
                style={{
                  transform: isLoaded ? "translateX(0)" : "translateX(-100px)",
                  opacity: isLoaded ? 1 : 0,
                  transition: "all 0.8s ease-out 0.9s",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: "18px",
                    border: "1.5px solid #7da0c8",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    padding: isMobile ? "1.2rem" : "1.5rem",
                    minHeight: isMobile ? "120px" : "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "translateY(-5px)"
                      e.currentTarget.style.boxShadow =
                        "0 8px 32px rgba(0,0,0,0.4)"
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow =
                        "0 4px 24px rgba(0,0,0,0.3)"
                    }
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      color: "#e5e7eb",
                      fontWeight: 400,
                      lineHeight: "1.6",
                      textAlign: "left",
                      marginBottom: "1rem",
                    }}
                  >
                    Luotettava sähköalan ammattilainen Uudellamaalla. Palvelemme
                    kotitalouksia ja yrityksiä vuodesta 2024.
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Link
                      to="/about"
                      style={{
                        color: "#ffe600",
                        fontWeight: 700,
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#ffd700")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "#ffe600")
                      }
                    >
                      Yrityksemme &nbsp;→
                    </Link>
                  </div>
                </div>
              </div>

              {/* 2. Boxi */}
              <div
                style={{
                  transform: isLoaded ? "translateY(0)" : "translateY(100px)",
                  opacity: isLoaded ? 1 : 0,
                  transition: "all 0.8s ease-out 1.2s",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: "18px",
                    border: "1.5px solid #7da0c8",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    padding: isMobile ? "1.2rem" : "1.5rem",
                    minHeight: isMobile ? "120px" : "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "translateY(-5px)"
                      e.currentTarget.style.boxShadow =
                        "0 8px 32px rgba(0,0,0,0.4)"
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow =
                        "0 4px 24px rgba(0,0,0,0.3)"
                    }
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      color: "#e5e7eb",
                      fontWeight: 400,
                      lineHeight: "1.6",
                      textAlign: "left",
                      marginBottom: "1rem",
                    }}
                  >
                    Asennukset, huollot ja korjaukset ammattitaitoisesti.
                    Turvallisuus ja laatu ovat meille tärkeitä.
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Link
                      to="/services"
                      style={{
                        color: "#ffe600",
                        fontWeight: 700,
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#ffd700")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "#ffe600")
                      }
                    >
                      Palvelumme &nbsp;→
                    </Link>
                  </div>
                </div>
              </div>

              {/* 3. Boxi */}
              <div
                style={{
                  transform: isLoaded ? "translateX(0)" : "translateX(100px)",
                  opacity: isLoaded ? 1 : 0,
                  transition: "all 0.8s ease-out 1.5s",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: "18px",
                    border: "1.5px solid #7da0c8",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    padding: isMobile ? "1.2rem" : "1.5rem",
                    minHeight: isMobile ? "120px" : "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "translateY(-5px)"
                      e.currentTarget.style.boxShadow =
                        "0 8px 32px rgba(0,0,0,0.4)"
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow =
                        "0 4px 24px rgba(0,0,0,0.3)"
                    }
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      color: "#e5e7eb",
                      fontWeight: 400,
                      lineHeight: "1.6",
                      textAlign: "left",
                      marginBottom: "1rem",
                    }}
                  >
                    Tarvitsetko sähköasentajaa? Ota yhteyttä ja saat
                    henkilökohtaisen tarjouksen nopeasti.
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Link
                      to="/contact"
                      style={{
                        color: "#ffe600",
                        fontWeight: 700,
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#ffd700")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "#ffe600")
                      }
                    >
                      Ota yhteyttä&nbsp;→
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Ikonit-osio - PIILOTETTU MOBIILISSA */}
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: getIconGap(),
                  marginTop: "5rem",
                  maxWidth: "1000px",
                  margin: "5rem auto 0 auto",
                  padding: "0 2rem",
                  paddingLeft: "6rem",
                  flexWrap: "nowrap",
                }}
              >
                {/* Shield ikoni + teksti */}
                <div
                  style={{
                    textAlign: "center",
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s ease-out 1.8s",
                    flex: "0 1 auto",
                    minWidth: "auto",
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      margin: "0 0 1rem 0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Turvallisuus
                  </p>
                  <img
                    src="/shield.png"
                    alt="Turvallisuus"
                    style={{
                      width: getIconSize(),
                      height: getIconSize(),
                      filter:
                        "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
                {/* Badge ikoni + teksti */}
                <div
                  style={{
                    textAlign: "center",
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s ease-out 2.0s",
                    flex: "0 1 auto",
                    minWidth: "auto",
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      margin: "0 0 1rem 0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Ammattitaito
                  </p>
                  <img
                    src="/badge.png"
                    alt="Ammattitaito"
                    style={{
                      width: getIconSize(),
                      height: getIconSize(),
                      filter:
                        "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>

                {/* Customer-review ikoni + teksti */}
                <div
                  style={{
                    textAlign: "center",
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s ease-out 2.2s",
                    flex: "0 1 auto",
                    minWidth: "auto",
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      margin: "0 0 1rem 0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Asiakaslähtöisyys
                  </p>
                  <img
                    src="/customer-review.png"
                    alt="Asiakaslähtöisyys"
                    style={{
                      width: getIconSize(),
                      height: getIconSize(),
                      filter:
                        "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </div>
            )}
          </header>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "0rem",
          width: "100%",
          backgroundColor: "#1f2937",
          padding: isMobile ? "1.5rem 1rem" : "2rem",
          fontSize: isMobile ? "0.8rem" : "0.9rem",
          color: "#e5e7eb",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "center" : "flex-start",
            maxWidth: "1200px",
            margin: "0 auto",
            gap: isMobile ? "1.5rem" : "3rem",
            textAlign: isMobile ? "center" : "center",
          }}
        >
          <div style={{ flex: "1" }}>
            <h4
              style={{
                color: "#fff",
                fontSize: isMobile ? "1rem" : "1.1rem",
                fontWeight: 600,
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Karkkilan Sähkömestarit Oy
            </h4>
            <div style={{ lineHeight: "1.6" }}>
              <div>Siikalantie 14, 03600 Karkkila</div>
              <div>Y-tunnus: 3496184-6</div>
            </div>
          </div>

          <div style={{ flex: "1" }}>
            <h4
              style={{
                color: "#fff",
                fontSize: isMobile ? "1rem" : "1.1rem",
                fontWeight: 600,
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Aukioloajat
            </h4>
            <div style={{ lineHeight: "1.6" }}>
              <div>Ma - Pe: 7:00 - 16:00</div>
              <div>La - Su: Suljettu</div>
            </div>
          </div>

          <div style={{ flex: "1" }}>
            <h4
              style={{
                color: "#fff",
                fontSize: isMobile ? "1rem" : "1.1rem",
                fontWeight: 600,
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Puh: 050 5299650
            </h4>
            <div style={{ lineHeight: "1.6" }}>
              <a
                href="mailto:karkkilansahko@gmail.com"
                style={{
                  color: "#e5e7eb",
                  textDecoration: "none",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ffe600")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#e5e7eb")}
              >
                karkkilansahko@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #374151",
            marginTop: "2rem",
            paddingTop: "1.5rem",
            textAlign: "center",
            fontSize: isMobile ? "0.75rem" : "0.85rem",
            color: "#9ca3af",
          }}
        >
          © 2025 Karkkilan Sähkömestarit Oy
          <br />
          <span
            style={{
              fontSize: isMobile ? "0.7rem" : "0.75rem",
              marginTop: "0.5rem",
              display: "inline-block",
            }}
          >
            Sivujen toteutus:{" "}
            <a
              href="https://www.linkedin.com/in/kuismamj/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffe600",
                textDecoration: "none",
                fontWeight: 500,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              Kuisma Mäki-Jussila
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
