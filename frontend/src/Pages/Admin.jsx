import DashboardCards from "../Admin/DashboardCards";
import RecentOrders from "../Admin/RecentOrders";

function Admin() {
  return (
    <div
      className="container-fluid p-4"
      style={{
        background: "#f5f7f6",
        minHeight: "100vh",
      }}
    >
      <DashboardCards />
      <RecentOrders />
    </div>
  );
}

export default Admin;