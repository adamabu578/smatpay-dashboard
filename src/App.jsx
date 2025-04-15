"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import { Home, MessageSquare, User, Settings, ChevronDown, ChevronRight, Bell, Grid } from "react-feather"
import "./App.css"

// Pages
import Dashboard from "./Components/Dashboard"
import SendSMS from "./Components/SendSms"
import BuyAirtime from "./Components/Airtime/BuyAirtime"
import BuyData from "./Components/BuyData/BuyData"
import CloudCompose from "./Components/CloudCompose"
import MyDashboard from "./Components/MyDashboard"
import HomePage from "./Components/HomePage"
import { Save } from 'lucide-react';
import { MicVocal } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Rss } from 'lucide-react';
import { Plug } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import { WalletMinimal } from 'lucide-react';
import { Wrench } from 'lucide-react';
import Epin from "./Components/Epin/Epin"
import Electricity from "./Components/Electricity/Electricity"
import TvSubscription from "./Components/Tv-subscription/TvSubscription"
import Subscription from "./Components/Tv-subscription/TvSubscription"


function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Header />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/my-dashboard" element={<MyDashboard />} />
              <Route path="/send-sms" element={<SendSMS />} />
              <Route path="/cloud-compose" element={<CloudCompose />} />
              <Route path="/BuyAirtime" element={<BuyAirtime />} />  
              <Route path="/BuyData" element={<BuyData />} />
              <Route path="/Epin" element={<Epin/>} />
              <Route path="/Electricity" element={<Electricity/>} />
              <Route path="/Subscription" element={<Subscription/>} /> 
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

function Header() {
  return (
    <header className="w-full h-[100px]  p-16 shadow-md  md:flex md:items-center items-center justify-center  gap-4 lg:m-auto">
      <div className="flex items-center justify-between gap-4 ">
        <Link to="/" className="block md:inline-block py-2 px-4 hover:text-blue-600">Home</Link>
        <Link to="/blog" className="block md:inline-block py-2 px-4 hover:text-blue-600">Blog</Link>
        <Link to="/api" className="block md:inline-block py-2 px-4 hover:text-blue-600">API</Link>
        <Link to="/contact" className="block md:inline-block py-2 px-4 hover:text-blue-600">Contact</Link>
      </div>
      <div className="user-section">
        <span className="text-sm  ">Hi, Adamu Kamsulum</span>
        <span className="balance">NGN 20.00</span>
        <div className="notification-icon">
          <Bell size={20} />
          <span className="notification-badge">1</span>
        </div>
        <div className="grid-icon">
          <Grid size={20} />
        </div>
        <Link to="/logout" className="logout-link">
          Log Out
        </Link>
      </div>
    </header>
  )
}

function Sidebar() {
  const [openMenus, setOpenMenus] = useState({
    sms: false,
    voiceOTP: false,
    settings: false,
    epin: false,
    airtime: false,
    internetdata: false,
    electricity: false,
    mywallet: false,
    developertools: false,
    referearn: false,
    mytool: false,
    tvsubscription: false,

  })

  const location = useLocation()

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon"><img src="/smatpay.svg" /></div>
        <span className="logo-text">SMATPAY</span>
      </div>

      <nav className="sidebar-nav">
        <Link to="/dashboard" className={`nav-item ${isActive("/dashboard") ? "active" : ""}`}>
          <Home size={20} />
          <span>Home Dashboard</span>
        </Link>

        <Link to="/my-dashboard" className={`nav-item ${isActive("/my-dashboard") ? "active" : ""}`}>
          <User size={20} />
          <span>My Dashboard</span>
        </Link>

        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("sms")}>
            <MessageSquare size={20} />
            <span>SMS</span>
            {openMenus.sms ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.sms && (
            <div className="submenu">
              <Link to="/send-sms" className={`submenu-item ${isActive("/send-sms") ? "active" : ""}`}>
                Send SMS
              </Link>
              <Link to="/cloud-compose" className={`submenu-item ${isActive("/cloud-compose") ? "active" : ""}`}>
                Cloud Compose
              </Link>
              <Link to="/bulk-sms" className="submenu-item">
                Bulk SMS
              </Link>
              <Link to="/scheduled-sms" className="submenu-item">
                Scheduled SMS
              </Link>
              <Link to="/sms-templates" className="submenu-item">
                SMS Templates
              </Link>
              <Link to="/sms-history" className="submenu-item">
                SMS History
              </Link>
            </div>
          )}
        </div>
        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("epin")}>
               <Save size={20} />
            <span>Epin</span>
            {openMenus.epin ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.epin && (
            <div className="submenu">
              <Link to="/Epin" className="submenu-item">
                 E-Pin
              </Link>
            
            </div>
          )}
        </div>
          
        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("voiceOTP")}>
          <MicVocal size={20} />
            <span>Voice OTP</span>
            {openMenus.voiceOTP ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.voiceOTP && (
            <div className="submenu">
              <Link to="/SendVoiceOTP" className="submenu-item">
             Send Voice OTP
              </Link>
              <Link to="/VoiceOTPLog" className="submenu-item">
                Voice OTP Log
              </Link>
              <Link to="/Voice-OTP-Classes" className="submenu-item">
                Voice OTP Classes
              </Link>
              <Link to="/Custom-Call-Channel" className="submenu-item">
                Custom Call Channel
              </Link>
            </div>
          )}
        </div>

        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("airtime")}>
          <Smartphone size={20}/>
            <span>Airtime </span>
            {openMenus.airtime ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.airtime && (
            <div className="submenu">
              <Link to="/BuyAirtime" className="submenu-item">
             Buy Airtime
              </Link>
           
            </div>
          )}
        </div>

        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("internetdata")}>
          <Rss size={20} />
            <span>Internet Data</span>
            {openMenus.internetdata ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.internetdata && (
            <div className="submenu">
              <Link to="/BuyData" className="submenu-item">
               Buy Data
              </Link>
            
            </div>
          )}
        </div>

        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("electricity")}>
          <Plug size={20} />
            <span>Electricity</span>
            {openMenus.electricity ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.electricity && (
            <div className="submenu">
              <Link to="/Electricity" className="submenu-item">
               Buy Electricity Token/Bill
              </Link>
              {/* <Link to="/ElectricityHistory" className="submenu-item">
                Electricity History
              </Link>
              <Link to="/MyMeters" className="submenu-item">
              My Meters
              </Link> */}
            </div>
          )}
        </div>

        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("tvsubscription")}>
          <Plug size={20} />
            <span>Tv-Subscription</span>
            {openMenus.tvsubscription ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.tvsubscription && (
            <div className="submenu">
              <Link to="/Subscription" className="submenu-item">
               Tv-subscription
              </Link>
          
            </div>
          )}
        </div>


        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("mywallet")}>
          <WalletMinimal size={20} />
            <span>My Wallet</span>
            {openMenus.mywallet ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.mywallet && (
            <div className="submenu">
              <Link to="/FundWallet" className="submenu-item">
               Fund Wallet
              </Link>
              <Link to="/WalletHistory" className="submenu-item">
              Wallet History
              </Link>
              <Link to="/TransferToUser" className="submenu-item">
              Transfer to User
              </Link>
              <Link to="/LowBalanceReminder" className="submenu-item">
              Low Balance Reminder
              </Link>
              <Link to="/MyLedger" className="submenu-item">
              My Ledger
              </Link>
              <Link to="/PriceList" className="submenu-item">
              My Pricelist
              </Link>
            </div>
            
          )}
        </div>

        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("developertools")}>
          <CodeXml size={20} />
            <span>Developer Tools</span>
            {openMenus.developertools ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.developertools && (
            <div className="submenu">
              <Link to="/ApiToken" className="submenu-item">
               API Token
              </Link>
              <Link to="/DLRCallbackURL" className="submenu-item">
               DLR Callback URL
              </Link>
            </div>
          )}
        </div>

        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("referearn")}>
          <SquarePen size={20}/>
            <span>Refer and Earn</span>
            {openMenus.referearn ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.referearn && (
            <div className="submenu">
              <Link to="/ApiToken" className="submenu-item">
               API Token
              </Link>
              <Link to="/DLRCallbackURL" className="submenu-item">
               DLR Callback URL
              </Link>
            </div>
          )}
        </div>

        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("mytool")}>
          <Wrench size={20}/>
            <span>My Tools</span>
            {openMenus.mytool ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.mytool && (
            <div className="submenu">
              <Link to="/PhoneExtractSeperate" className="submenu-item">
              Phone Extract/Seperate
              </Link>
              <Link to="/FilterPhoneNumbers" className="submenu-item">
               Filter Phone Numbers
              </Link>
            </div>
          )}
        </div>

        <div className="nav-item with-submenu">
          <div className="nav-item-header" onClick={() => toggleMenu("settings")}>
            <Settings size={20} />
            <span>Settings</span>
            {openMenus.settings ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {openMenus.settings && (
            <div className="submenu">
              <Link to="/profile" className="submenu-item">
                Profile
              </Link>
              <Link to="/account" className="submenu-item">
                Account
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default App

