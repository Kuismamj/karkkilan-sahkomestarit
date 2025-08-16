import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import { useWindowSize } from "../hooks/useWindowSize"

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")
  const { isMobile } = useWindowSize()

  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    message: "",
  })

  const inputStyle = {
    width: "100%",
    padding: isMobile ? "0.8rem" : "1rem",
    border: "2px solid #374151",
    borderRadius: "12px",
    fontSize: isMobile ? "0.9rem" : "1rem",
    backgroundColor: "#1f2937",
    color: "#fff",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
    boxSizing: "border-box" as const,
    fontFamily: "Poppins, sans-serif",
  }

  const labelStyle = {
    display: "block" as const,
    marginBottom: "0.5rem",
    color: "#fff",
    fontSize: isMobile ? "0.9rem" : "1rem",
    fontWeight: 600,
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await emailjs.sendForm(
        "service_tkit0vk",
        "template_clfgunm",
        e.currentTarget,
        "IZlamBvDVZnbOW4sh"
      )

      console.log("EmailJS result:", result)

      if (result.status === 200 && result.text === "OK") {
        setSubmitStatus("success")
        setFormData({
          user_name: "",
          user_phone: "",
          user_email: "",
          message: "",
        })
      } else {
        console.log("Unexpected result:", result)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "800px",
        width: "100%",
        padding: isMobile ? "1.5rem 1rem" : "2.5rem",
        background: "rgba(255,255,255,0.04)",
        borderRadius: isMobile ? "16px" : "18px",
        border: "1.5px solid #7da0c8",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {/* Otsikko */}
      <div
        style={{
          marginBottom: isMobile ? "1.5rem" : "2rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? "1.4rem" : "1.8rem",
            fontWeight: 700,
            color: "#ffe600",
            marginBottom: "0.5rem",
            margin: 0,
          }}
        >
          Pyydä ilmainen tarjous
        </h3>
        <p
          style={{
            color: "#e5e7eb",
            fontSize: isMobile ? "0.9rem" : "1rem",
            margin: "0.5rem 0 0 0",
            padding: isMobile ? "0 0.5rem" : "0",
          }}
        >
          Täytä alla oleva lomake, niin otamme sinuun yhteyttä pian
        </p>
      </div>
      {/* Status viestit */}
      {submitStatus === "success" && (
        <div
          style={{
            background: "rgba(34, 197, 94, 0.1)",
            border: "1px solid #22c55e",
            borderRadius: "8px",
            padding: isMobile ? "0.8rem" : "1rem",
            marginBottom: "1.5rem",
            color: "#22c55e",
            textAlign: "center",
            fontSize: isMobile ? "0.9rem" : "1rem",
          }}
        >
          Viesti lähetetty onnistuneesti! Otamme yhteyttä pian.
        </div>
      )}

      {submitStatus === "error" && (
        <div
          style={{
            background: "rgba(239, 68, 68, 0.1)",
            border: "1px solid #ef4444",
            borderRadius: "8px",
            padding: isMobile ? "0.8rem" : "1rem",
            marginBottom: "1.5rem",
            color: "#ef4444",
            textAlign: "center",
            fontSize: isMobile ? "0.9rem" : "1rem",
          }}
        >
          Viestin lähetys epäonnistui. Yritä uudelleen tai soita suoraan.
        </div>
      )}

      {/* Nimi ja puhelinnumero - STACKATTU MOBIILILLA */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "1rem" : "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <label htmlFor="user_name" style={labelStyle}>
            Nimi *
          </label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            required
            placeholder={isMobile ? "Nimi" : "Etunimi Sukunimi"}
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#ffe600"
              e.target.style.boxShadow = "0 0 0 3px rgba(255,230,0,0.1)"
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#374151"
              e.target.style.boxShadow = "none"
            }}
          />
        </div>
        <div>
          <label htmlFor="user_phone" style={labelStyle}>
            Puhelinnumero
          </label>
          <input
            id="user_phone"
            type="tel"
            name="user_phone"
            value={formData.user_phone}
            onChange={handleInputChange}
            placeholder={isMobile ? "Puhelin" : "040 123 4567"}
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#ffe600"
              e.target.style.boxShadow = "0 0 0 3px rgba(255,230,0,0.1)"
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#374151"
              e.target.style.boxShadow = "none"
            }}
          />
        </div>
      </div>
      {/* Sähköposti */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="user_email" style={labelStyle}>
          Sähköposti *
        </label>
        <input
          id="user_email"
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleInputChange}
          required
          placeholder={isMobile ? "Sähköposti" : "etunimi.sukunimi@email.com"}
          style={inputStyle}
          onFocus={(e) => {
            e.target.style.borderColor = "#ffe600"
            e.target.style.boxShadow = "0 0 0 3px rgba(255,230,0,0.1)"
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#374151"
            e.target.style.boxShadow = "none"
          }}
        />
      </div>
      {/* Viesti */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="message" style={labelStyle}>
          Kerro työstä *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={isMobile ? 4 : 5}
          placeholder={
            isMobile
              ? "Kerro työstä..."
              : "Kerro lyhyesti, mitä sähkötöitä tarvitset..."
          }
          style={{
            ...inputStyle,
            resize: "vertical" as const,
            minHeight: isMobile ? "100px" : "120px",
            fontFamily: "Poppins, sans-serif",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#ffe600"
            e.target.style.boxShadow = "0 0 0 3px rgba(255,230,0,0.1)"
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#374151"
            e.target.style.boxShadow = "none"
          }}
        />
      </div>
      {/* Pakollinen tieto -teksti */}
      <div
        style={{
          fontSize: isMobile ? "0.8rem" : "0.9rem",
          color: "#9ca3af",
          marginBottom: "1.5rem",
          textAlign: "left",
        }}
      >
        * = pakollinen tieto
      </div>

      {/* Lähetä-nappi */}
      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: "100%",
          padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
          backgroundColor: isSubmitting ? "#9ca3af" : "#ffe600",
          color: "#1f2937",
          border: "none",
          borderRadius: "12px",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          fontSize: isMobile ? "1rem" : "1.1rem",
          fontWeight: 700,
          boxShadow: "0 4px 16px rgba(255,230,0,0.2)",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundColor = "#ffd700"
            e.currentTarget.style.transform = "translateY(-1px)"
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,230,0,0.3)"
          }
        }}
        onMouseOut={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundColor = "#ffe600"
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,230,0,0.2)"
          }
        }}
      >
        {isSubmitting ? "Lähetetään..." : "Lähetä tarjouspyyntö"}
      </button>
    </form>
  )
}

export default ContactForm
