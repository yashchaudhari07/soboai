import { useState } from "react";
import { Outlet } from "react-router-dom"; 
import Sidebar from "../components/Sidebar/Sidebar";

export default function DashboardLayout({ formData }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    // Main Container with PDF Background Color #EEF2FF
    <div className="min-h-screen bg-[#EEF2FF] font-plex-hebrew flex">

      {/* SIDEBAR (Fixed Position inside Sidebar.jsx) */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        userLogo={formData?.step2?.logo}
      />

      {/* MAIN CONTENT AREA */}
      <div
        // Responsive Padding: p-4 (16px) on mobile, p-8 (32px) on desktop
        className="flex-1 transition-all duration-300 p-4 md:p-8"
        style={{
          marginLeft: collapsed ? "101px" : "235px", // Match Sidebar Widths
          width: `calc(100% - ${collapsed ? "101px" : "235px"})`,
        }}
      >
        {/* <Outlet /> renders the current route component */}
        <Outlet /> 
      </div>

    </div>
  );
}