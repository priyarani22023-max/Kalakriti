import React from "react";
import DashboardCards from "../Admin/DashboardCards";
import RecentOrders from "../Admin/RecentOrders";

function Dashboard() {
  return (
    <div
      style={{
        padding: "25px",
        background: "#f4f7fb",
        minHeight: "100vh",
      }}
    >
      {/* Dashboard Summary Cards */}
      <DashboardCards />

      {/* Recent Orders */}
      <RecentOrders />
    </div>
  );
}

export default Dashboard;