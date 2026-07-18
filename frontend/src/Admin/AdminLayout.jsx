import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AdminLayout() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#f5f7f6",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;