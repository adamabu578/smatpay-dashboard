function MyDashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">My Dashboard</h1>
      </div>

      <div className="card">
        <h2 className="card-header">Account Overview</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
          <div style={{ background: "#f0f9ff", padding: "15px", borderRadius: "8px" }}>
            <div style={{ fontSize: "14px", color: "#0369a1" }}>Balance</div>
            <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "5px" }}>NGN 20.00</div>
          </div>

          <div style={{ background: "#f0fdf4", padding: "15px", borderRadius: "8px" }}>
            <div style={{ fontSize: "14px", color: "#166534" }}>SMS Sent</div>
            <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "5px" }}>0</div>
          </div>

          <div style={{ background: "#fef2f2", padding: "15px", borderRadius: "8px" }}>
            <div style={{ fontSize: "14px", color: "#991b1b" }}>Failed SMS</div>
            <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "5px" }}>0</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-header">Recent Activities</h2>
        <p>No recent activities found.</p>
      </div>
    </div>
  )
}

export default MyDashboard

