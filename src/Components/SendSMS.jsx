"use client"

import { useState } from "react"

function SendSMS() {
  const [message, setMessage] = useState("")
  const [recipient, setRecipient] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)

    // Simulate API call
    setTimeout(() => {
      setIsSending(false)
      alert(`SMS sent to ${recipient}`)
      setMessage("")
      setRecipient("")
    }, 1500)
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Send SMS</h1>
      </div>

      <div className="card">
        <h2 className="card-header">Compose Message</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="recipient" style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>
              Recipient Number
            </label>
            <input
              id="recipient"
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Enter phone number"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="message" style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={5}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
                resize: "vertical",
              }}
              required
            />
            <div style={{ marginTop: "5px", textAlign: "right", fontSize: "14px", color: "#6b7280" }}>
              {message.length}/160 characters
            </div>
          </div>

          <button
            type="submit"
            disabled={isSending}
            style={{
              backgroundColor: "#4a0082",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: isSending ? "not-allowed" : "pointer",
              opacity: isSending ? 0.7 : 1,
            }}
          >
            {isSending ? "Sending..." : "Send SMS"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default SendSMS

