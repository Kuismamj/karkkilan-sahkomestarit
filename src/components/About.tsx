import { useState, useEffect } from "react"
import { useWindowSize } from "../hooks/useWindowSize"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { isMobile, isTablet } = useWindowSize()

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0e223a",
        paddingTop: isMobile ? "3rem" : "4rem",
        paddingBottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      {/* Hero-osio taustakuvalla - RESPONSIIVINEN */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: isMobile ? "2rem" : "5rem",
          width: "100vw",
          padding: isMobile ? "3rem 1rem" : "4rem 2rem",
          paddingTop: isMobile ? "1rem" : "5rem",
          backgroundImage: "url('/lightbulb3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: isMobile ? "35vh" : "50vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(14, 34, 58, 0.8)",
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
            justifyContent: "center",
            height: "100%",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "2rem" : isTablet ? "2.8rem" : "4rem",
              fontWeight: 900,
              color: "#fff",
              marginTop: isMobile ? "6rem" : "7rem",
              marginBottom: isMobile ? "1rem" : "1rem",
              letterSpacing: isMobile ? "-1px" : "-2px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              textAlign: "center",
              padding: isMobile ? "0 0.5rem" : "0",
            }}
          >
            Keitä <span style={{ color: "#ffe600" }}>olemme?</span>
          </h1>
          <p
            style={{
              fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.4rem",
              color: "#e6e6e6",
              marginTop: "0",
              marginBottom: isMobile ? "1rem" : "2rem",
              fontWeight: 400,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              maxWidth: isMobile ? "95%" : "800px",
              lineHeight: 1.6,
              textAlign: "center",
              padding: isMobile ? "0 0.5rem" : "0",
            }}
          >
            Karkkilan Sähkömestarit Oy on luotettava kumppani kaikissa
            sähköasioissa. Toimimme Uudenmaan alueella tarjoten laadukkaita
            sähköpalveluita niin koteihin kuin yrityksiin.
          </p>
        </div>
      </div>

      {/* Pääsisältö container - RESPONSIIVINEN */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: isMobile ? "0 1rem" : "0 2rem",
          marginBottom: isMobile ? "2rem" : "4rem",
          marginTop: isMobile ? "0" : "-2rem",
        }}
      >
        {/* Yritysesittely ja yritystiedot - STACKATTU MOBIILILLA */}
        <div
          style={{
            marginBottom: isMobile ? "2rem" : "4rem",
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
                : "2fr 1fr",
              gap: isMobile ? "2rem" : "3rem",
              alignItems: "start",
            }}
          >
            {/* Vasemmanpuoleinen teksti - MOBIILIOPTIMOIDTU */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: isMobile ? "16px" : "20px",
                border: "1.5px solid #7da0c8",
                padding: isMobile
                  ? "1.5rem 1rem"
                  : isTablet
                  ? "2rem 1.5rem"
                  : "3rem 2.5rem",
                color: "#e5e7eb",
                fontSize: isMobile ? "1rem" : isTablet ? "1.1rem" : "1.25rem",
                lineHeight: isMobile ? "1.6" : "2",
                textAlign: "left",
                order: isMobile ? 2 : 1,
              }}
            >
              {/* Keltainen viiva - PIENEMPI MOBIILILLA */}
              <div
                style={{
                  width: isMobile ? "40px" : "60px",
                  height: isMobile ? "3px" : "4px",
                  background: "#ffe600",
                  borderRadius: "2px",
                  marginBottom: isMobile ? "1rem" : "2rem",
                }}
              />

              <p
                style={{
                  marginBottom: isMobile ? "1rem" : "1.5rem",
                  marginTop: "0",
                }}
              >
                Karkkilan Sähkömestarit Oy on vuonna 2024 perustettu paikallinen
                sähköalan yritys, joka tarjoaa laadukkaita ja monipuolisia
                sähköpalveluita Uudellamaalla – erityisesti Karkkilan seudulla.
                Meille on tärkeää hoitaa hommat nopeasti, ammattitaitoisesti ja
                asiakaslähtöisesti. Juuri nämä ovat ne syyt, miksi asiakkaamme
                palaavat meille uudelleen.
              </p>

              {/* Viiva erotin 1 */}
              <div
                style={{
                  height: "1px",
                  background: "#374151",
                  margin: isMobile ? "1rem 0" : "1.5rem 0",
                }}
              />

              <p style={{ marginBottom: isMobile ? "1rem" : "1.5rem" }}>
                Tarjoamme sähköasennuksia, huoltoja, korjauksia ja erilaisia
                sähköalan ratkaisuja niin koteihin, yrityksiin kuin
                taloyhtiöihinkin. Oli kyseessä pieni pistorasian vaihto tai
                isompi sähköurakka, hoidamme työn huolellisesti ja turvallisesti
                alusta loppuun.
              </p>

              {/* Viiva erotin 2 */}
              <div
                style={{
                  height: "1px",
                  background: "#374151",
                  margin: isMobile ? "1rem 0" : "1.5rem 0",
                }}
              />

              <p style={{ marginBottom: isMobile ? "1rem" : "1.5rem" }}>
                Meidän tavoite on yksinkertainen – tyytyväinen asiakas ja
                kestävä lopputulos. Haluamme olla se luotettava sähkökumppani,
                johon voit turvautua nyt ja tulevaisuudessa.
              </p>

              {/* Viiva erotin 3 */}
              <div
                style={{
                  height: "1px",
                  background: "#374151",
                  margin: isMobile ? "1rem 0" : "1.5rem 0",
                }}
              />

              <p
                style={{
                  color: "#ffe600",
                  fontSize: isMobile ? "0.9rem" : "1.1rem",
                  fontWeight: 500,
                  marginTop: "0",
                  marginBottom: "0",
                  fontStyle: "italic",
                }}
              >
                💡 Tuet nuorta yrittäjää ja kotimaista työtä kun ostatte
                palveluita meiltä!
              </p>
            </div>
            {/* Oikeanpuoleiset yritystiedot - GRID MOBIILILLA */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: isMobile ? "16px" : "20px",
                border: "1.5px solid #7da0c8",
                padding: isMobile ? "1.5rem 1rem" : "2.1rem",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr",
                gap: isMobile ? "1rem" : "1.97rem",
                order: isMobile ? 1 : 2,
              }}
            >
              {/* Yritys */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: isMobile ? "35px" : "50px",
                    height: isMobile ? "35px" : "50px",
                    background: "rgba(255,230,0,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: isMobile
                      ? "0 auto 0.5rem auto"
                      : "0 auto 1rem auto",
                    border: "2px solid #ffe600",
                  }}
                >
                  <img
                    src="/home.png"
                    alt="Yritys"
                    style={{
                      width: isMobile ? "18px" : "25px",
                      height: isMobile ? "18px" : "25px",
                      filter:
                        "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: isMobile ? "0.9rem" : "1.2rem",
                    color: "#ffe600",
                    marginBottom: isMobile ? "0.3rem" : "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  Yritys
                </h3>
                <p
                  style={{
                    color: "#e5e7eb",
                    fontSize: isMobile ? "0.8rem" : "1rem",
                    margin: 0,
                    lineHeight: isMobile ? "1.3" : "1.4",
                  }}
                >
                  Karkkilan Sähkömestarit Oy
                </p>
              </div>

              {/* Viiva erotin - VAIN DESKTOP/TABLETILLA */}
              {!isMobile && (
                <div
                  style={{
                    height: "1px",
                    background: "#374151",
                    margin: "0.5rem 0",
                  }}
                />
              )}

              {/* Osoite */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: isMobile ? "35px" : "50px",
                    height: isMobile ? "35px" : "50px",
                    background: "rgba(255,230,0,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: isMobile
                      ? "0 auto 0.5rem auto"
                      : "0 auto 1rem auto",
                    border: "2px solid #ffe600",
                  }}
                >
                  <img
                    src="/pin.png"
                    alt="Osoite"
                    style={{
                      width: isMobile ? "18px" : "25px",
                      height: isMobile ? "18px" : "25px",
                      filter:
                        "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: isMobile ? "0.9rem" : "1.2rem",
                    color: "#ffe600",
                    marginBottom: isMobile ? "0.3rem" : "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  Osoite
                </h3>
                <p
                  style={{
                    color: "#e5e7eb",
                    fontSize: isMobile ? "0.8rem" : "1rem",
                    margin: 0,
                    lineHeight: isMobile ? "1.3" : "1.4",
                  }}
                >
                  Siikalantie 14
                  <br />
                  03600 Karkkila
                </p>
              </div>

              {/* Viiva erotin - VAIN DESKTOP/TABLETILLA */}
              {!isMobile && (
                <div
                  style={{
                    height: "1px",
                    background: "#374151",
                    margin: "0.5rem 0",
                  }}
                />
              )}

              {/* Perustamisvuosi */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: isMobile ? "35px" : "50px",
                    height: isMobile ? "35px" : "50px",
                    background: "rgba(255,230,0,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: isMobile
                      ? "0 auto 0.5rem auto"
                      : "0 auto 1rem auto",
                    border: "2px solid #ffe600",
                  }}
                >
                  <img
                    src="/calendar.png"
                    alt="Perustamisvuosi"
                    style={{
                      width: isMobile ? "18px" : "25px",
                      height: isMobile ? "18px" : "25px",
                      filter:
                        "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: isMobile ? "0.9rem" : "1.2rem",
                    color: "#ffe600",
                    marginBottom: isMobile ? "0.3rem" : "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  Perustettu
                </h3>
                <p
                  style={{
                    color: "#e5e7eb",
                    fontSize: isMobile ? "0.8rem" : "1rem",
                    margin: 0,
                  }}
                >
                  2024
                </p>
              </div>

              {/* Viiva erotin - VAIN DESKTOP/TABLETILLA */}
              {!isMobile && (
                <div
                  style={{
                    height: "1px",
                    background: "#374151",
                    margin: "0.5rem 0",
                  }}
                />
              )}

              {/* Y-tunnus */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: isMobile ? "35px" : "50px",
                    height: isMobile ? "35px" : "50px",
                    background: "rgba(255,230,0,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: isMobile
                      ? "0 auto 0.5rem auto"
                      : "0 auto 1rem auto",
                    border: "2px solid #ffe600",
                  }}
                >
                  <img
                    src="/google-docs.png"
                    alt="Y-tunnus"
                    style={{
                      width: isMobile ? "18px" : "25px",
                      height: isMobile ? "18px" : "25px",
                      filter:
                        "brightness(0) saturate(100%) invert(85%) sepia(95%) saturate(1352%) hue-rotate(15deg) brightness(118%) contrast(103%)",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: isMobile ? "0.9rem" : "1.2rem",
                    color: "#ffe600",
                    marginBottom: isMobile ? "0.3rem" : "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  Y-tunnus
                </h3>
                <p
                  style={{
                    color: "#e5e7eb",
                    fontSize: isMobile ? "0.8rem" : "1rem",
                    margin: 0,
                  }}
                >
                  3496184-6
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Arvot - RESPONSIIVINEN */}
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 1.0s",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "1.6rem" : "2.2rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: isMobile ? "1.5rem" : "2.5rem",
              textAlign: "center",
              padding: isMobile ? "0 0.5rem" : "0",
            }}
          >
            Toimintaamme ohjaavat{" "}
            <span style={{ color: "#ffe600" }}>arvomme</span>
          </h2>

          {/* ARVOT - RESPONSIIVINEN GRID */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: isMobile ? "16px" : "20px",
              border: "1.5px solid #7da0c8",
              padding: isMobile
                ? "2rem 1rem"
                : isTablet
                ? "3rem 2rem"
                : "4rem 3rem",
              maxWidth: isMobile ? "100%" : "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                ? "1fr auto 1fr auto 1fr"
                : "1fr auto 1fr auto 1fr",
              gap: isMobile ? "2rem" : "2rem",
              alignItems: "center",
            }}
          >
            {/* Turvallisuus */}
            <div style={{ textAlign: "center" }}>
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
                  src="/shield.png"
                  alt="Turvallisuus"
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
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  fontWeight: 600,
                  color: "#ffe600",
                  marginBottom: isMobile ? "0.8rem" : "1rem",
                }}
              >
                Turvallisuus
              </h3>
              <p
                style={{
                  color: "#e5e7eb",
                  fontSize: isMobile ? "0.9rem" : "1.1rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Turvallisuus on aina etusijalla kaikessa toiminnassamme
              </p>
            </div>

            {/* Viiva erotin 1 - VAIN DESKTOP/TABLETILLA */}
            {!isMobile && (
              <div
                style={{
                  width: "1px",
                  height: "120px",
                  background: "#374151",
                  justifySelf: "center",
                }}
              />
            )}

            {/* Mobiili viiva erotin 1 */}
            {isMobile && (
              <div
                style={{
                  height: "1px",
                  background: "#374151",
                  margin: "1rem 0",
                }}
              />
            )}

            {/* Ammattitaito */}
            <div style={{ textAlign: "center" }}>
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
                  src="/badge.png"
                  alt="Ammattitaito"
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
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  fontWeight: 600,
                  color: "#ffe600",
                  marginBottom: isMobile ? "0.8rem" : "1rem",
                }}
              >
                Ammattitaito
              </h3>
              <p
                style={{
                  color: "#e5e7eb",
                  fontSize: isMobile ? "0.9rem" : "1.1rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Korkea ammattitaito ja laadukas työnjälki
              </p>
            </div>

            {/* Viiva erotin 2 - VAIN DESKTOP/TABLETILLA */}
            {!isMobile && (
              <div
                style={{
                  width: "1px",
                  height: "120px",
                  background: "#374151",
                  justifySelf: "center",
                }}
              />
            )}

            {/* Mobiili viiva erotin 2 */}
            {isMobile && (
              <div
                style={{
                  height: "1px",
                  background: "#374151",
                  margin: "1rem 0",
                }}
              />
            )}

            {/* Asiakaslähtöisyys */}
            <div style={{ textAlign: "center" }}>
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
                  src="/customer-review.png"
                  alt="Asiakaslähtöisyys"
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
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  fontWeight: 600,
                  color: "#ffe600",
                  marginBottom: isMobile ? "0.8rem" : "1rem",
                }}
              >
                Asiakaslähtöisyys
              </h3>
              <p
                style={{
                  color: "#e5e7eb",
                  fontSize: isMobile ? "0.9rem" : "1.1rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Palvelemme nopeasti ja asiakaslähtöisesti
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - RESPONSIIVINEN */}
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
    </div>
  )
}
