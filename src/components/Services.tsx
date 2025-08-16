import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useWindowSize } from "../hooks/useWindowSize"

const services = [
  {
    icon: (
      <img
        src="/plug.png"
        alt="Sähköasennukset"
        style={{ width: 40, height: 40, filter: "brightness(0) invert(1)" }}
      />
    ),
    title: "Sähköasennukset",
    desc: "Uudisrakentaminen, saneeraukset ja kotitalouksien sähkötyöt ammattitaidolla",
    items: ["Uudisrakentaminen", "Saneeraukset", "Kotitalous"],
    buttonColor: "#1a2e47",
  },
  {
    icon: (
      <img
        src="/search.png"
        alt="Vianetsintä"
        style={{ width: 40, height: 40, filter: "brightness(0) invert(1)" }}
      />
    ),
    title: "Vianetsintä",
    desc: "Nopea ja tehokas vikahaku sekä diagnostiikka sähköjärjestelmiin",
    items: ["Vikahaku", "Diagnostiikka", "Mittaukset"],
    buttonColor: "#ffe600",
    buttonTextColor: "#1a2e47",
  },
  {
    icon: (
      <img
        src="/wrench.png"
        alt="Korjaustyöt"
        style={{ width: 40, height: 40, filter: "brightness(0) invert(1)" }}
      />
    ),
    title: "Korjaustyöt",
    desc: "Luotettavat huolto- ja korjauspalvelut kaikenlaisiin sähkölaitteisiin",
    items: ["Korjaukset", "Komponenttien vaihto", "Pikahuollot"],
    buttonColor: "#1a2e47",
  },
  {
    icon: (
      <img
        src="/solar-panel.png"
        alt="Aurinkosähköjärjestelmät"
        style={{ width: 40, height: 40, filter: "brightness(0) invert(1)" }}
      />
    ),
    title: "Aurinkosähköjärjestelmät",
    desc: "Aurinkopaneelien asennus, huolto ja optimointi energiatehokkuuden maksimoimiseksi",
    items: ["Asennus", "Huolto", "Optimointi"],
    buttonColor: "#ffe600",
    buttonTextColor: "#1a2e47",
  },
  {
    icon: (
      <img
        src="/charging-station.png"
        alt="Sähköautojen latausasemat"
        style={{ width: 40, height: 40, filter: "brightness(0) invert(1)" }}
      />
    ),
    title: "Sähköautojen latausasemat",
    desc: "Kotien ja yritysten latauspisteiden asennus ja huolto tulevaisuuden tarpeisiin",
    items: ["Kotilaturit", "Yritysratkaisut", "Huolto"],
    buttonColor: "#1a2e47",
  },
  {
    icon: (
      <img
        src="/settings.png"
        alt="Huoltotyöt"
        style={{ width: 40, height: 40, filter: "brightness(0) invert(1)" }}
      />
    ),
    title: "Huoltotyöt",
    desc: "Ammattitaitoiset sähköjärjestelmien huolto ja kunnossapito",
    items: [
      "Sähköjärjestelmien huolto",
      "Kunnossapito",
      "Turvallisuustarkastukset",
    ],
    buttonColor: "#ffe600",
    buttonTextColor: "#1a2e47",
  },
]

export default function Services() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const { isMobile, isTablet } = useWindowSize()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const images = [
    { src: "/lattialam.jpeg", alt: "Lattialämmitys asennus" },
    { src: "/ulkovalaistus.jpeg", alt: "Ulkovalaistus asennus" },
    { src: "/ryhmakeskus.jpeg", alt: "Ryhmäkeskus asennus" },
    { src: "/oviverhopuhallin.jpeg", alt: "Oviverhopuhallin asennus" },
    { src: "/Peilikaappi.jpeg", alt: "Peilikaappi asennus" },
    { src: "/aurinko.jpeg", alt: "Aurinkosähkö asennus" },
    { src: "/lattialam2.jpeg", alt: "Lattialämmityksen kaapelointi" },
    { src: "/mittauskeskus.jpeg", alt: "Mittauskeskus asennus" },
    { src: "/pistorasia.jpeg", alt: "Pistorasioiden asennus" },
  ]

  const handleContactClick = () => {
    navigate("/yhteys", {
      state: { scrollTo: "contact-form" },
    })
  }

  return (
    <div
      style={{
        background: "#0e223a",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Hero-osio taustakuvalla */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: "4rem",
          width: "100vw",
          padding: isMobile ? "2rem 1rem" : "5rem 2rem",
          paddingTop: isMobile ? "5rem" : "7rem",
          backgroundImage: "url('/kaappi.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* Himmennetty overlay */}
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

        {/* Sisältö overlayerin päällä */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.3s",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "2rem" : isTablet ? "2.4rem" : "4rem",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "0.5rem",
              marginTop: isMobile ? "0" : "7rem",
              letterSpacing: "-1px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Sähkötyöt luotettavasti <br />
            <span style={{ color: "#ffe600" }}>
              Uudellamaalla ja lähialueilla
            </span>
          </h1>
          <div
            style={{
              color: "#e6e6e6",
              fontSize: isMobile ? "1rem" : "1.4rem",
              maxWidth: 1000,
              margin: "0 auto",
              fontWeight: 400,
              lineHeight: 1.5,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            Karkkilan Sähkömestarit Oy tarjoaa kattavat sähköasennuspalvelut
            uudisrakentamiseen, saneerauksiin sekä teollisuuden tarpeisiin.
            Palvelemme kotitalouksia, yrityksiä ja taloyhtiöitä vahvalla
            ammattitaidolla ja pitkällä kokemuksella.
          </div>
        </div>
      </div>
      {/* Palveluboxit - responsiivinen grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "repeat(2, 1fr)"
            : "repeat(auto-fit, minmax(340px, 1fr))",
          gap: isMobile ? "1.5rem" : "2.5rem",
          maxWidth: 1200,
          margin: "0 auto",
          marginBottom: "4rem",
          marginTop: isMobile ? "-2rem" : "1rem",
          padding: isMobile ? "0 1rem" : "0 2rem",
        }}
      >
        {services.map((srv, i) => (
          <div
            key={srv.title}
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: 18,
              border: "1.5px solid #7da0c8",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              padding: isMobile ? "2rem 1.5rem" : "2.5rem 2rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              minHeight: isMobile ? 280 : 340,
              position: "relative",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded
                ? "translateY(0) scale(1)"
                : `translateY(50px) scale(0.95)`,
              transition: `all 0.6s ease-out ${0.6 + i * 0.1}s`,
            }}
          >
            {/* Ikoni */}
            <div
              style={{
                width: isMobile ? 48 : 56,
                height: isMobile ? 48 : 56,
                borderRadius: 12,
                background: "rgba(255,230,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                marginBottom: 18,
                border: "2px solid #ffe600",
                boxShadow: "0 2px 8px rgba(255,230,0,0.2)",
              }}
            >
              <img
                src={srv.icon.props.src}
                alt={srv.icon.props.alt}
                style={{
                  width: isMobile ? 32 : 40,
                  height: isMobile ? 32 : 40,
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>

            {/* Otsikko */}
            <div
              style={{
                fontWeight: 700,
                fontSize: isMobile ? "1.2rem" : "1.35rem",
                color: "#fff",
                marginBottom: 8,
              }}
            >
              {srv.title}
            </div>
            {/* Kuvaus */}
            <div
              style={{
                color: "#e5e7eb",
                fontSize: isMobile ? "0.95rem" : "1.05rem",
                marginBottom: 16,
                minHeight: isMobile ? 40 : 48,
              }}
            >
              {srv.desc}
            </div>

            {/* Lista */}
            <ul
              style={{
                color: "#e5e7eb",
                fontSize: isMobile ? "0.9rem" : "1rem",
                margin: 0,
                paddingLeft: 22,
                marginBottom: 18,
              }}
            >
              {srv.items.map((item) => (
                <li
                  key={item}
                  style={{
                    marginBottom: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ color: "#ffe600", fontSize: "1.1em" }}>✔</span>{" "}
                  {item}
                </li>
              ))}
            </ul>

            {/* Nappi */}
            <button
              style={{
                marginTop: "auto",
                background: "#ffe600",
                color: "#1a2e47",
                border: "none",
                borderRadius: 8,
                padding: isMobile ? "0.8em 1.3em" : "0.9em 1.5em",
                fontWeight: 700,
                fontSize: isMobile ? "1rem" : "1.1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(255,230,0,0.2)",
                transition: "all 0.3s ease",
                outline: "none",
                width: isMobile ? "100%" : "auto",
              }}
              onClick={handleContactClick}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#ffd700"
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#ffe600"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              Pyydä tarjous &nbsp;→
            </button>
          </div>
        ))}
      </div>
      {/* Työnäytteet-otsikko */}
      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          marginBottom: "3rem",
          padding: "0 2rem",
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 1.2s",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "1rem",
            letterSpacing: "-1px",
            textShadow: "0 2px 16px #1a2e47",
          }}
        >
          Työnäytteitä
        </h2>
        <div
          style={{
            color: "#e6e6e6",
            fontSize: isMobile ? "1rem" : "1.25rem",
            maxWidth: 700,
            margin: "0 auto 3rem auto",
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          Katso esimerkkejä ammattitaitoisista sähkötöistämme – laadukasta työtä{" "}
          <span style={{ color: "#ffe600" }}>
            kotitalouksiin, yrityksiin ja taloyhtiöihin
          </span>
        </div>
      </div>
      {/* Työnäytteet grid - responsiivinen */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "repeat(2, 1fr)"
            : "repeat(3, 1fr)",
          gridTemplateRows: isMobile
            ? "repeat(9, 300px)"
            : isTablet
            ? "repeat(5, 350px)"
            : "repeat(3, 350px)",
          gap: isMobile ? "1rem" : "1.5rem",
          maxWidth: 1000,
          margin: "0 auto",
          padding: isMobile ? "0 1rem" : "0 1rem",
          marginBottom: isMobile ? "2rem" : "4rem",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              cursor: "pointer",
              borderRadius: 18,
              overflow: "hidden",
              border: "2px solid #fff",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded
                ? "translateY(0) scale(1)"
                : "translateY(30px) scale(0.9)",
              transition: `all 0.5s ease-out ${1.4 + index * 0.1}s`,
            }}
            onClick={() => setSelectedImage(image.src)}
            onMouseOver={(e) => {
              const overlay = e.currentTarget.querySelector(
                ".hover-overlay"
              ) as HTMLElement | null
              const icon = e.currentTarget.querySelector(
                ".zoom-icon"
              ) as HTMLElement | null
              if (overlay && icon) {
                overlay.style.opacity = "1"
                icon.style.opacity = "1"
              }
            }}
            onMouseOut={(e) => {
              const overlay = e.currentTarget.querySelector(
                ".hover-overlay"
              ) as HTMLElement | null
              const icon = e.currentTarget.querySelector(
                ".zoom-icon"
              ) as HTMLElement | null
              if (overlay && icon) {
                overlay.style.opacity = "0"
                icon.style.opacity = "0"
              }
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "calc(100% - 60px)",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Tekstipalkki alareunassa */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "60px",
                background: "linear-gradient(135deg, #1a2e47 0%, #2a4a6b 100%)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                fontWeight: 600,
                textAlign: "center",
                padding: "0 12px",
                boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
              }}
            >
              {getImageText(image.src)}
            </div>

            {/* Hover overlay */}
            <div
              className="hover-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 60,
                background: "rgba(0,0,0,0.6)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="zoom-icon"
                src="/suurennuslasi.png"
                alt="Suurenna kuva"
                style={{
                  width: "64px",
                  height: "64px",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Modal suurennetulle kuvalle */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sulje-nappi */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "-15px",
                right: "-15px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                border: "2px solid #1a2e47",
                color: "#1a2e47",
                fontSize: "1.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10000,
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#ffe600"
                e.currentTarget.style.transform = "scale(1.1)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#fff"
                e.currentTarget.style.transform = "scale(1)"
              }}
            >
              ✕
            </button>
            {/* Suurennettu kuva */}
            <img
              src={selectedImage}
              alt="Suurennettu työnäyte"
              style={{
                maxWidth: "100%",
                maxHeight: "calc(90vh - 80px)",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            />
            {/* Kuvan kuvaus modalissa */}
            <div
              style={{
                backgroundColor: "rgba(26, 46, 71, 0.95)",
                color: "#fff",
                padding: "1rem 1.5rem",
                marginTop: "1rem",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "1.1rem",
                fontWeight: 600,
                border: "2px solid #ffe600",
              }}
            >
              {getImageText(selectedImage)}
            </div>
          </div>
        </div>
      )}

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
// Funktio joka palauttaa oikean tekstin
function getImageText(src: string): string {
  const textMap: { [key: string]: string } = {
    "/lattialam.jpeg": "Lattialämmityskaapelin asennus keittiöön",
    "/pistorasia.jpeg": "Pistorasian asennus",
    "/aurinko.jpeg": "Aurinkosähköjärjestelmän asennus profiilipeltikatolle",
    "/ulkovalaistus.jpeg": "Ulkovalaistus kuistille",
    "/oviverhopuhallin.jpeg": "Oviverhopuhaltimen sähköistys",
    "/ryhmakeskus.jpeg": "Ryhmäkeskuksen asennus amka-linjasta",
    "/mittauskeskus.jpeg": "Mittauskeskuksen asennus",
    "/lattialam2.jpeg": "Lattialämmityskaapelin asennus pesutiloihin",
    "/Peilikaappi.jpeg": "Peilikaapin kytkentä pesuhuoneeseen",
  }
  return textMap[src] || "Sähkötyö"
}
