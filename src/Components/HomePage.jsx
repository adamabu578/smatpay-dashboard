"use client"
import { useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Welcome to SMATPAY VTU</h1>
      </div>

      <div className="card">
        <h2 className="card-header">Quick Actions</h2>
        <div className="card-grid">
          <div className="service-card" onClick={() => navigate("/send-sms")} style={{ cursor: "pointer" }}>
            <div className="service-icon" style={{ backgroundColor: "#f0f9ff" }}>
              <span role="img" aria-label="message">
                💬
              </span>
            </div>
            <div className="service-info">
              <div className="service-name">Send SMS</div>
              <div className="service-description">Send SMS to any number</div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: "#fff9db" }}>
              <span role="img" aria-label="airtime">
                📱
              </span>
            </div>
            <div className="service-info">
              <div className="service-name">Buy Airtime</div>
              <div className="service-description">Purchase airtime for any network</div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: "#f0fdf4" }}>
              <span role="img" aria-label="data">
                📊
              </span>
            </div>
            <div className="service-info">
              <div className="service-name">Buy Data</div>
              <div className="service-description">Purchase data bundles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

