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
          // Sidebar च्या मागे कंटेंट लपू नये म्हणून मार्जिन
          marginLeft: collapsed ? "101px" : "235px",
          
          // Width कॅल्क्युलेशन
          width: `calc(100% - ${collapsed ? "101px" : "235px"})`,
          
          // IMP: इथे Padding 0 केली आहे, कारण Pages (Experts) स्वतःची Padding घेतील.
          // यामुळे Sidebar आणि Content मधला गॅप कमी होईल.
          padding: "0px" 
        }}
      >
        {/* इथे तुमचे Experts, AI Insights पेजेस रेंडर होतील */}
        <div className="p-6 md:p-8"> 
           <Outlet /> 
        </div>
      </div>

    </div>
  );
}