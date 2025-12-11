import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Experts from "../pages/Dashboard/Experts";
import Home from "../pages/Dashboard/Home";
import AIInsights from "../pages/Dashboard/AIInsights";
import Engagement from "../pages/Dashboard/Engagement";

export default function DashboardLayout() {
  const [page, setPage] = useState("experts");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex bg-[#EEF2FF] min-h-screen overflow-hidden">

      {/* SIDEBAR ALWAYS VISIBLE */}
      <Sidebar
        active={page}
        onChange={setPage}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* MAIN CONTENT */}
      <div
        className="flex-1 transition-all duration-300 p-6"
        style={{
          marginLeft: collapsed ? "90px" : "220px",
          maxWidth: "1650px",
          marginRight: "auto",
        }}
      >
        {page === "dashboard" && <Home />}
        {page === "ai" && <AIInsights />}
        {page === "experts" && <Experts />}
        {page === "engagement" && <Engagement />}
      </div>

    </div>
  );
}
