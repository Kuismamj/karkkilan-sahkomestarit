import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useWindowSize } from "../hooks/useWindowSize"
import ContactForm from "../components/ContactForm"

const Contact: React.FC = () => {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  const { isMobile, isTablet } = useWindowSize()

  useEffect(() => {
    window.scrollTo(0, 0)

    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    if (location.state?.scrollTo === "contact-form") {
      setTimeout(() => {
        const element = document.getElementById("contact-form")
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          })
          setTimeout(() => {
            window.scrollBy({
              top: isMobile ? -80 : -150,
              behavior: "smooth",
            })
          }, 300)
        }
      }, 100)
    }

    return () => clearTimeout(timer)
  }, [location, isMobile])

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0e223a",
        paddingBottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: isMobile ? "2rem" : "5rem",
          width: "100vw",
          padding: isMobile ? "2rem 1rem" : "4rem 2rem",
          paddingTop: isMobile ? "4rem" : "8rem",
          backgroundImage: "url('/hanska.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: isMobile ? "40vh" : "45vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(14, 34, 58, 0.85)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "100%",
            paddingBottom: isMobile ? "2rem" : "3rem",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "2rem" : isTablet ? "2.8rem" : "4rem",
              fontWeight: 900,
              color: "#fff",
              marginBottom: isMobile ? "1rem" : "1rem",
              letterSpacing: isMobile ? "-1px" : "-2px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              lineHeight: isMobile ? "1.2" : "1.1",
              padding: isMobile ? "0 0.5rem" : "0",
              textAlign: "center",
              maxWidth: "100%",
              marginTop: isMobile ? "5rem" : "7rem",
            }}
          >
            Ota yhteyttä <span style={{ color: "#ffe600" }}>helposti</span>
          </h1>
          <p
            style={{
              color: "#e6e6e6",
              fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.4rem",
              maxWidth: isMobile ? "90%" : 800,
              margin: "0 auto",
              marginTop: isMobile ? "0rem" : "0rem",
              fontWeight: 400,
              lineHeight: 1.6,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              padding: isMobile ? "0 0.5rem" : "0",
              textAlign: "center",
            }}
          >
            {isMobile
              ? "Tarvitsetko sähköasentajaa? Meiltä saat nopeaa ja luotettavaa palvelua kaikissa sähkötöissä – pienistä korjauksista suuriin projekteihin."
              : "Tarvitsetko sähköasentajaa? Meiltä saat nopeaa ja luotettavaa palvelua kaikissa sähkötöissä – pienistä korjauksista suuriin projekteihin."}
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: isMobile ? "0 1rem" : "0 2rem",
          marginBottom: isMobile ? "2rem" : "4rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "2rem" : "4rem",
            marginTop: isMobile ? "0" : "-2rem",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.6s",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                ? "1fr"
                : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: isMobile ? "1.5rem" : "3rem",
              marginBottom: isMobile ? "1rem" : "2rem",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: isMobile ? "16px" : "20px",
                border: "1.5px solid #7da0c8",
                padding: isMobile ? "1.5rem 1rem" : "2.5rem 2rem",
                textAlign: "center",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.6s ease-out 0.8s",
              }}
            >
              <div
                style={{
                  width: isMobile ? "60px" : "80px",
                  height: isMobile ? "60px" : "80px",
                  background: "rgba(255,230,0,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: isMobile ? "0 auto 1rem auto" : "0 auto 1.5rem auto",
                  border: isMobile ? "2px solid #ffe600" : "3px solid #ffe600",
                }}
              >
                <img
                  src="/phone-call.png"
                  alt="Puhelin"
                  style={{
                    width: isMobile ? "30px" : "40px",
                    height: isMobile ? "30px" : "40px",
                    filter:
                      "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? "1.2rem" : "1.4rem",
                  color: "#fff",
                  marginBottom: isMobile ? "0.8rem" : "1rem",
                  fontWeight: 600,
                }}
              >
                Soita suoraan
              </h3>
              <p
                style={{
                  color: "#e5e7eb",
                  fontSize: isMobile ? "0.9rem" : "1.1rem",
                  marginBottom: isMobile ? "1rem" : "1.5rem",
                  lineHeight: 1.5,
                }}
              >
                {isMobile
                  ? "Nopein tapa saada apua"
                  : "Nopein tapa saada apua akuutteihin ongelmiin"}
              </p>
              <div
                style={{
                  fontSize: isMobile ? "1.2rem" : "1.3rem",
                  color: "#ffe600",
                  fontWeight: 700,
                  marginBottom: isMobile ? "1rem" : "1.5rem",
                }}
              >
                050 5299650
              </div>
              <a
                href="tel:0505299650"
                style={{
                  background: "#ffe600",
                  color: "#1a2e47",
                  border: "none",
                  borderRadius: isMobile ? "8px" : "12px",
                  padding: isMobile ? "0.7rem 1.5rem" : "0.8rem 2rem",
                  fontWeight: 700,
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  width: isMobile ? "auto" : "auto",
                }}
                onMouseOver={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = "#ffd700"
                    e.currentTarget.style.transform = "translateY(-2px)"
                  }
                }}
                onMouseOut={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = "#ffe600"
                    e.currentTarget.style.transform = "translateY(0)"
                  }
                }}
              >
                Soita nyt
              </a>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: isMobile ? "16px" : "20px",
                border: "1.5px solid #7da0c8",
                padding: isMobile ? "1.5rem 1rem" : "2.5rem 2rem",
                textAlign: "center",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.6s ease-out 1.0s",
              }}
            >
              <div
                style={{
                  width: isMobile ? "60px" : "80px",
                  height: isMobile ? "60px" : "80px",
                  background: "rgba(255,230,0,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: isMobile ? "0 auto 1rem auto" : "0 auto 1.5rem auto",
                  border: isMobile ? "2px solid #ffe600" : "3px solid #ffe600",
                }}
              >
                <img
                  src="/mail.png"
                  alt="Sähköposti"
                  style={{
                    width: isMobile ? "30px" : "40px",
                    height: isMobile ? "30px" : "40px",
                    filter:
                      "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: isMobile ? "1.2rem" : "1.4rem",
                  color: "#fff",
                  marginBottom: isMobile ? "0.8rem" : "1rem",
                  fontWeight: 600,
                }}
              >
                Lähetä sähköposti
              </h3>
              <p
                style={{
                  color: "#e5e7eb",
                  fontSize: isMobile ? "0.9rem" : "1.1rem",
                  marginBottom: isMobile ? "1rem" : "1.5rem",
                  lineHeight: 1.5,
                }}
              >
                {isMobile
                  ? "Tarjouspyyntöihin ja kyselyihin"
                  : "Tarjouspyyntöihin ja yksityiskohtaisiin kyselyihin"}
              </p>
              <div
                style={{
                  fontSize: isMobile ? "0.9rem" : "1.1rem",
                  color: "#ffe600",
                  fontWeight: 600,
                  marginBottom: isMobile ? "1rem" : "1.5rem",
                  wordBreak: "break-word",
                }}
              >
                karkkilansahko@gmail.com
              </div>
              <a
                href="mailto:karkkilansahko@gmail.com"
                style={{
                  background: "#ffe600",
                  color: "#1a2e47",
                  border: "none",
                  borderRadius: isMobile ? "8px" : "12px",
                  padding: isMobile ? "0.7rem 1.5rem" : "0.8rem 2rem",
                  fontWeight: 700,
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
                onMouseOver={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = "#ffd700"
                    e.currentTarget.style.transform = "translateY(-2px)"
                  }
                }}
                onMouseOut={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = "#ffe600"
                    e.currentTarget.style.transform = "translateY(0)"
                  }
                }}
              >
                Lähetä viesti
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "1.5rem" : "3rem",
            marginBottom: isMobile ? "2rem" : "3rem",
            marginTop: isMobile ? "0" : "-1rem",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 1.2s",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: isMobile ? "16px" : "18px",
              border: "1.5px solid #7da0c8",
              padding: isMobile ? "1.5rem" : "2.5rem",
              textAlign: "center",
            }}
          >
            <img
              src="/clock.png"
              alt="Kello"
              style={{
                width: isMobile ? "36px" : "48px",
                height: isMobile ? "36px" : "48px",
                marginBottom: isMobile ? "0.8rem" : "1rem",
                filter:
                  "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
              }}
            />
            <h3
              style={{
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                color: "#fff",
                marginBottom: isMobile ? "1rem" : "1.5rem",
                fontWeight: 600,
              }}
            >
              Aukioloajat
            </h3>
            <div
              style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                color: "#e5e7eb",
                lineHeight: "1.8",
              }}
            >
              <div style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#ffe600" }}>Ma - Pe:</strong> 7:00 -
                16:00
              </div>
              <div>
                <strong style={{ color: "#ffe600" }}>La - Su:</strong> Suljettu
              </div>
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: isMobile ? "16px" : "18px",
              border: "1.5px solid #7da0c8",
              padding: isMobile ? "1.5rem" : "2.5rem",
              textAlign: "center",
            }}
          >
            <img
              src="/pin.png"
              alt="Sijainti"
              style={{
                width: isMobile ? "36px" : "48px",
                height: isMobile ? "36px" : "48px",
                marginBottom: isMobile ? "0.8rem" : "1rem",
                filter:
                  "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
              }}
            />
            <h3
              style={{
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                color: "#fff",
                marginBottom: isMobile ? "1rem" : "1.5rem",
                fontWeight: 600,
              }}
            >
              Toimipiste
            </h3>
            <div
              style={{
                fontSize: isMobile ? "1rem" : "1.1rem",
                color: "#e5e7eb",
                lineHeight: "1.6",
                marginBottom: isMobile ? "1rem" : "1.5rem",
              }}
            >
              Siikalantie 14
              <br />
              03600 Karkkila
            </div>
            <a
              href="https://maps.google.com/?q=Siikalantie 14, 03600 Karkkila"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                border: "2px solid #ffe600",
                color: "#ffe600",
                borderRadius: isMobile ? "6px" : "8px",
                padding: isMobile ? "0.6rem 1.2rem" : "0.7rem 1.5rem",
                fontWeight: 600,
                fontSize: isMobile ? "0.9rem" : "1rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseOver={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = "#ffe600"
                  e.currentTarget.style.color = "#1a2e47"
                }
              }}
              onMouseOut={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.color = "#ffe600"
                }
              }}
            >
              Katso kartalta
            </a>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "0rem" : "2rem",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "1.6rem" : "2.2rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: isMobile ? "0.8rem" : "1rem",
              lineHeight: isMobile ? "1.3" : "1.2",
              padding: isMobile ? "0 0.5rem" : "0",
            }}
          >
            Tai täytä{" "}
            <span style={{ color: "#ffe600" }}>yhteydenottolomake</span>
          </h2>
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              color: "#e5e7eb",
              maxWidth: isMobile ? "95%" : "600px",
              margin: isMobile ? "0 auto 0.5rem auto" : "0 auto 1rem auto",
              lineHeight: 1.6,
              padding: isMobile ? "0 0.5rem" : "0",
            }}
          >
            {isMobile
              ? "Kerro projektistasi ja saat tarjouksen"
              : "Kerro meille projektistasi ja saat tarjouksen nopeasti"}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: isMobile ? "1rem" : "2rem",
              marginTop: isMobile ? "1rem" : "1rem",
            }}
          >
            <img
              src="/down-arrow.png"
              alt="Nuoli alas"
              style={{
                width: isMobile ? "40px" : "60px",
                height: isMobile ? "40px" : "60px",
                filter:
                  "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                animation: "bounce 2s infinite",
              }}
            />
          </div>
        </div>
      </div>
      <div
        id="contact-form"
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          marginBottom: isMobile ? "2rem" : "4rem",
          marginTop: isMobile ? "0" : "-3rem",
          padding: isMobile ? "0 1rem" : "0 2rem",
        }}
      >
        <ContactForm />
      </div>
      <footer
        style={{
          marginTop: "auto",
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
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </main>
  )
}

export default Contact
