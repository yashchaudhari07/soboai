import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Experts from "../pages/Dashboard/Experts";
import Home from "../pages/Dashboard/Home";
import AIInsights from "../pages/Dashboard/AIInsights";
import Engagement from "../pages/Dashboard/Engagement";

export default function DashboardLayout() {
  const [page, setPage] = useState("experts");

  return (
    <div
      className="
        flex 
        bg-[#E8EBFF] 
        min-h-screen 
        w-full
        overflow-x-hidden
      "
    >

      {/* -------- LEFT SIDEBAR -------- */}
      <div
        className="
          fixed 
          md:relative 
          z-50 
          h-full
        "
      >
        <Sidebar active={page} onChange={setPage} />
      </div>

      {/* -------- RIGHT CONTENT -------- */}
      <div
        className="
          flex-1 
          p-4 sm:p-6 
          md:ml-[200px] 
          ml-[70px] 
          transition-all 
          duration-300
        "
      >
        {page === "dashboard" && <Home />}
        {page === "ai" && <AIInsights />}
        {page === "experts" && <Experts />}
        {page === "engagement" && <Engagement />}
      </div>

    </div>
  );
}
