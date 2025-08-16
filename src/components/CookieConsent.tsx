import React, { useState, useEffect } from "react"
import { useWindowSize } from "../hooks/useWindowSize"

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false)
  const { isMobile, isTablet } = useWindowSize()

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    } else if (consent === "accepted") {
      loadGoogleAnalytics()
    }
  }, [])

  const loadGoogleAnalytics = () => {
    const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

    if (!MEASUREMENT_ID) {
      console.warn("Google Analytics Measurement ID not found")
      return
    }

    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${MEASUREMENT_ID}');
    `
    document.head.appendChild(script2)
  }

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
    loadGoogleAnalytics()
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: isMobile ? "auto" : isTablet ? "auto" : "12vh",
        minHeight: isMobile ? "120px" : "auto",
        backgroundColor: "#1f2937",
        color: "#fff",
        padding: isMobile
          ? "1rem"
          : isTablet
          ? "1.25rem 1.5rem"
          : "1.5rem 2rem",
        zIndex: 9999,
        borderTop: "2px solid #ffe600",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "1rem" : "1rem",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: isMobile ? "100%" : "300px",
            marginBottom: isMobile ? "0.5rem" : 0,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: isMobile ? "0.9rem" : isTablet ? "0.95rem" : "1rem",
              lineHeight: isMobile ? "1.4" : "1.5",
              textAlign: isMobile ? "left" : "left",
            }}
          >
            🍪 Käytämme evästeitä sivuston toiminnan parantamiseksi ja
            analytiikan keräämiseksi.{" "}
            {!isMobile &&
              "Hyväksymällä evästeet autat meitä kehittämään palveluitamme."}
            {isMobile && "Hyväksymällä autat meitä kehittämään palvelua."}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: isMobile ? "0.75rem" : "1rem",
            alignItems: "center",
            width: isMobile ? "100%" : "auto",
            flexDirection: isMobile ? "row" : "row",
            justifyContent: isMobile ? "space-between" : "flex-end",
          }}
        >
          <button
            onClick={rejectCookies}
            style={{
              padding: isMobile
                ? "0.6rem 1rem"
                : isTablet
                ? "0.7rem 1.25rem"
                : "0.75rem 1.5rem",
              backgroundColor: "transparent",
              color: "#fff",
              border: "2px solid #6b7280",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: isMobile ? "0.9rem" : "1rem",
              fontWeight: 600,
              transition: "all 0.2s ease",
              flex: isMobile ? "1" : "0 0 auto",
              maxWidth: isMobile ? "110px" : "none",
            }}
            onMouseOver={(e) => {
              if (!isMobile) {
                e.currentTarget.style.backgroundColor = "#6b7280"
              }
            }}
            onMouseOut={(e) => {
              if (!isMobile) {
                e.currentTarget.style.backgroundColor = "transparent"
              }
            }}
          >
            Hylkää
          </button>

          <button
            onClick={acceptCookies}
            style={{
              padding: isMobile
                ? "0.6rem 1rem"
                : isTablet
                ? "0.7rem 1.25rem"
                : "0.75rem 1.5rem",
              backgroundColor: "#ffe600",
              color: "#1a2e47",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: isMobile ? "0.9rem" : "1rem",
              fontWeight: 700,
              transition: "all 0.2s ease",
              boxShadow: "0 2px 8px rgba(255,230,0,0.3)",
              flex: isMobile ? "2" : "0 0 auto",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => {
              if (!isMobile) {
                e.currentTarget.style.backgroundColor = "#ffd700"
                e.currentTarget.style.transform = "translateY(-1px)"
              }
            }}
            onMouseOut={(e) => {
              if (!isMobile) {
                e.currentTarget.style.backgroundColor = "#ffe600"
                e.currentTarget.style.transform = "translateY(0)"
              }
            }}
          >
            {isMobile ? "Hyväksy" : "Hyväksy evästeet"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
