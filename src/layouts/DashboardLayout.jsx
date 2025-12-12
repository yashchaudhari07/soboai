import { useState } from "react";
import { Outlet } from "react-router-dom"; 
import Sidebar from "../components/Sidebar/Sidebar"; 

export default function DashboardLayout() {
  
  // Sidebar State
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#EEF2FF] flex w-full font-plex-hebrew">
      
      {/* SIDEBAR (Fixed) */}
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        userLogo={null} 
      />

      {/* MAIN CONTENT AREA */}
      <div 
        className="flex-1 transition-all duration-300"
        style={{ 
          // Sidebar margin
          marginLeft: collapsed ? "101px" : "235px",
          
          // Width calculation
          width: `calc(100% - ${collapsed ? "101px" : "235px"})`,
          
          // Outer container has NO padding
          padding: "0px" 
        }}
      >
        {/* PADDING REDUCED HERE to minimize gap between sidebar/top and content */}
        <div className="p-3 md:p-4"> 
           <Outlet /> 
        </div>
      </div>

    </div>
  );
}