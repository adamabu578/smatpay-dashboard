import React from 'react';
import airtelLogo from '/airtel.png';
import gloLogo from '/glo-icon.png';
import NineLogo from '/etisalat.png';
import mtnLogo from "/mtn.png";
import { Zap } from 'lucide-react';
import { WalletMinimal } from 'lucide-react';
import { LogOut } from 'lucide-react';




function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="text-center text">My Dashboard - SMATPAY VTU</h1>
      </div>

      {/* SMS & Voice */}
      <div className="card">
        <h2 className="card-header">SMS & Voice</h2>
        <div className="card-grid">
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: "#f0f9ff" }}>
              💬
            </div>
            <div className="service-info">
              <div className="service-name">Send SMS</div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: "#f0f9ff" }}>
              🔊
            </div>
            <div className="service-info">
              <div className="service-name">VoiceOTP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Airtime */}
      <div className="card">
        <h2 className="card-header">Buy Airtime</h2>
        <p style={{ color: "#f59e0b", marginBottom: "15px" }}>
          NEW: Get an instant 2% discount on airtime purchase (MTN: 1% Discount)!
        </p>
        <div className="card-grid">
          {[{ name: "MTN", logo: mtnLogo }, { name: "Airtel", logo: airtelLogo }, { name: "Glo", logo: gloLogo }, { name: "9mobile", logo: NineLogo }].map((network) => (
            <div className="service-card" key={network.name}>
              <div className="service-icon" style={{ backgroundColor: "#fff9db" }}>
                <img src={network.logo} alt={network.name} style={{ width: '24px', height: '24px' }} />
              </div>
              <div className="service-info">
                <div className="service-name">{network.name} Airtime</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buy Data Bundle */}
      <div className="card">
        <h2 className="card-header">Buy Data Bundle</h2>
        <div className="card-grid">
          {[{ name: "MTN", logo: mtnLogo }, { name: "Airtel", logo: airtelLogo }, { name: "Glo", logo: gloLogo }, { name: "9mobile", logo: NineLogo }].map((network) => (
            <div className="service-card" key={network.name}>
              <div className="service-icon" style={{ backgroundColor: "#e0f7fa" }}>
                <img src={network.logo} alt={network.name} style={{ width: '24px', height: '24px' }} />
              </div>
              <div className="service-info">
                <div className="service-name">{network.name} Data</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bills Payment */}
      <div className="card">
        <h2 className="card-header">Bills Payment</h2>
        <div className="card-grid">
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: "#fde2e2" }}>
            <Zap />
            </div>
            <div className="service-info">
              <div className="service-name">Electricity Bill</div>
            </div>
          </div>
        </div>
      </div>

      {/* My Wallet */}
      <div className="card">
        <h2 className="card-header">My Wallet</h2>
        <div className="card-grid">
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: "#d1e7dd" }}>
            <WalletMinimal />
            </div>
            <div className="service-info">
              <div className="service-name">Fund Wallet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="card">
        <h2 className="card-header">Tools</h2>
        <div className="card-grid">
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: "#ffcccc" }}>
            <LogOut />
            </div>
            <div className="service-info">
              <div className="service-name">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
