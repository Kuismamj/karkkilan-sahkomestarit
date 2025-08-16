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
    if (window.innerWidth <= 360) return "0.9rem"
    if (window.innerWidth <= 410) return "1.1rem"
    if (window.innerWidth <= 768) return "1.3rem"
    if (window.innerWidth <= 1509) return "1.5rem"
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

  const getLogoSize = () => {
    if (window.innerWidth <= 360) return "25px"
    if (window.innerWidth <= 410) return "35px"
    if (window.innerWidth <= 768) return "40px"
    if (window.innerWidth <= 1509) return "45px"
    if (isTablet) return "50px"
    return "60px"
  }

  const getCardPadding = () => {
    if (window.innerWidth <= 410) return "1rem"
    if (window.innerWidth <= 768) return "1.2rem"
    if (window.innerWidth <= 1509) return "1.3rem"
    return "1.5rem"
  }

  const getCardMinHeight = () => {
    if (window.innerWidth <= 410) return "100px"
    if (window.innerWidth <= 768) return "120px"
    if (window.innerWidth <= 1509) return "130px"
    return "150px"
  }

  const getCardGap = () => {
    if (window.innerWidth <= 410) return "1.2rem"
    if (window.innerWidth <= 768) return "1.5rem"
    if (window.innerWidth <= 1509) return "1.7rem"
    return "2rem"
  }

  const getCardTextSize = () => {
    if (window.innerWidth <= 410) return "0.8rem"
    if (window.innerWidth <= 768) return "0.9rem"
    if (window.innerWidth <= 1509) return "0.95rem"
    return "1rem"
  }

  const getLinkTextSize = () => {
    if (window.innerWidth <= 410) return "0.9rem"
    if (window.innerWidth <= 768) return "1rem"
    if (window.innerWidth <= 1509) return "1.05rem"
    return "1.1rem"
  }

  const getLogoMarginBottom = () => {
    if (window.innerWidth <= 410) return "0.8rem"
    if (window.innerWidth <= 768) return "1rem"
    if (window.innerWidth <= 1509) return "2rem"
    return "2.5rem"
  }

  const getHeroMarginBottom = () => {
    if (window.innerWidth <= 410) return "2.5rem"
    if (window.innerWidth <= 768) return "3rem"
    if (window.innerWidth <= 1509) return "3.5rem"
    return "5.5rem"
  }

  const getGridMarginTop = () => {
    if (window.innerWidth <= 768) return "0rem" // Mobiili/tablet: ei extra marginaalia
    if (window.innerWidth <= 1509) return "1rem" // Medium: hieman rakoa
    return "0rem"
  }

  const shouldShowIcons = () => {
    return !isMobile && window.innerWidth > 1509
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
          preload="auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          onLoadedData={(e) => {
            const video = e.currentTarget
            video.currentTime = 0.1
          }}
          onEnded={(e) => {
            const video = e.currentTarget
            video.currentTime = 0
            video.play()
          }}
          onTimeUpdate={(e) => {
            const video = e.currentTarget
            if (
              video.duration > 0 &&
              video.currentTime >= video.duration - 0.1
            ) {
              video.currentTime = 0
            }
          }}
          onCanPlayThrough={(e) => {
            e.currentTarget.play()
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
                marginBottom: getLogoMarginBottom(),
              }}
            >
              <img
                src="/logo2.png"
                alt="Karkkilan Sähkömestarit logo"
                style={{
                  height: getLogoSize(),
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
                marginBottom: getHeroMarginBottom(),
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
                gap: getCardGap(),
                marginBottom: isMobile ? "2rem" : "2rem",
                marginTop: getGridMarginTop(), // UUSI: Lisää rakoa ylhäältä
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
                    padding: getCardPadding(),
                    minHeight: getCardMinHeight(),
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
                      fontSize: getCardTextSize(),
                      color: "#e5e7eb",
                      fontWeight: 400,
                      lineHeight: "1.6",
                      textAlign: "left",
                      marginBottom:
                        window.innerWidth <= 410 ? "0.8rem" : "1rem",
                    }}
                  >
                    Luotettava sähköalan ammattilainen Uudellamaalla. Palvelemme
                    kotitalouksia ja yrityksiä vuodesta 2024.
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Link
                      to="/yritys"
                      style={{
                        color: "#ffe600",
                        fontWeight: 700,
                        fontSize: getLinkTextSize(),
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
                    padding: getCardPadding(),
                    minHeight: getCardMinHeight(),
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
                      fontSize: getCardTextSize(),
                      color: "#e5e7eb",
                      fontWeight: 400,
                      lineHeight: "1.6",
                      textAlign: "left",
                      marginBottom:
                        window.innerWidth <= 410 ? "0.8rem" : "1rem",
                    }}
                  >
                    Asennukset, huollot ja korjaukset ammattitaitoisesti.
                    Turvallisuus ja laatu ovat meille tärkeitä.
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Link
                      to="/palvelut"
                      style={{
                        color: "#ffe600",
                        fontWeight: 700,
                        fontSize: getLinkTextSize(),
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
                    padding: getCardPadding(),
                    minHeight: getCardMinHeight(),
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
                      fontSize: getCardTextSize(),
                      color: "#e5e7eb",
                      fontWeight: 400,
                      lineHeight: "1.6",
                      textAlign: "left",
                      marginBottom:
                        window.innerWidth <= 410 ? "0.8rem" : "1rem",
                    }}
                  >
                    Tarvitsetko sähköasentajaa? Ota yhteyttä ja saat
                    henkilökohtaisen tarjouksen nopeasti.
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Link
                      to="/yhteys"
                      style={{
                        color: "#ffe600",
                        fontWeight: 700,
                        fontSize: getLinkTextSize(),
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

            {/* Ikonit-osio - NÄKYY VAIN YLI 1509px */}
            {shouldShowIcons() && (
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
