import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// --- IMPORTS FROM SAME FOLDER ---
import menuIcon from './a1.svg';       
import dashboardIcon from './a2.svg';  
import aiIcon from './a3.svg';         
import expertsIcon from './a4.svg';    
import engagementIcon from './a5.svg'; 
import bellIcon from './a6.svg';       
import settingsIcon from './a7.svg';   

export default function Sidebar({ collapsed, setCollapsed, userLogo }) {
  
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: dashboardIcon, path: "/dashboard" },
    { id: "ai", label: "AI insights", icon: aiIcon, path: "/ai-insight" },
    { id: "experts", label: "Experts", icon: expertsIcon, path: "/experts" },
    { id: "engagement", label: "Engagement", icon: engagementIcon, path: "/engagement" },
  ];

  // --- COLORS ---
  const bgColor = "#EEF2FF";
  const borderColor = "#B5C6FF";
  const mainColor = "#2D60FF"; 
  const activeIconBg = "#DCE4FE"; 

  // --- BLUE FILTER ---
  const blueFilter = "invert(30%) sepia(76%) saturate(4529%) hue-rotate(214deg) brightness(100%) contrast(103%)";

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div
      className="fixed top-0 left-0 h-screen flex flex-col justify-between transition-all duration-300 z-50 font-plex-hebrew overflow-y-auto custom-scrollbar"
      style={{
        width: collapsed ? "101px" : "235px",
        backgroundColor: bgColor,
        borderRight: `1px solid ${borderColor}`,
        padding: "32px 16px", // Top padding थोडी वाढवली
        boxSizing: "border-box",
        maxHeight: "100vh" 
      }}
    >
      {/* --- TOP SECTION --- */}
      {/* GAP INCREASED: 40px -> 50px */}
      <div className="flex flex-col w-full" style={{ gap: "50px" }}> 
        
        {/* Toggle Button - RIGHT ALIGNED */}
        <div className="w-full flex justify-end">
            <button
            onClick={() => setCollapsed(!collapsed)}
            className="bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
            style={{
                width: "40px",    
                height: "40px",
                borderRadius: "8px",
                flexShrink: 0
            }}
            >
            <img 
                src={menuIcon} 
                alt="Menu" 
                style={{ width: "20px", height: "20px", filter: blueFilter }} 
            />
            </button>
        </div>

        {/* Menu Items */}
        {/* GAP INCREASED: 10px -> 24px (For PDF Layout spacing) */}
        <div className="flex flex-col w-full" style={{ gap: "24px" }}>
            {menu.map((m) => {
                const isActive = location.pathname === m.path;
                const isHovered = hoveredItem === m.id;
                
                return (
                <button
                    key={m.id}
                    onClick={() => navigate(m.path)}
                    onMouseEnter={() => setHoveredItem(m.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="group flex items-center transition-all duration-200"
                    style={{
                        backgroundColor: "transparent", 
                        width: "100%",
                        flexDirection: collapsed ? "column" : "row",
                        justifyContent: collapsed ? "center" : "flex-start",
                        padding: 0, 
                        minHeight: "40px"
                    }}
                >
                    {/* ICON CONTAINER */}
                    <div
                    className="flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: (isActive || isHovered) ? activeIconBg : "transparent",
                    }}
                    >
                    <img 
                        src={m.icon} 
                        alt={m.label} 
                        style={{ 
                            width: "20px", 
                            height: "20px",
                            filter: blueFilter 
                        }} 
                    />
                    </div>

                    {/* LABEL */}
                    <span
                    style={{
                        fontFamily: "'IBM Plex Sans Hebrew', sans-serif",
                        fontSize: "15px", // Font size थोडी वाढवली (Clear दिसण्यासाठी)
                        fontWeight: "500",
                        color: mainColor,
                        marginTop: collapsed ? "4px" : "0px", 
                        marginLeft: collapsed ? "0px" : "16px", // Gap वाढवला
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        lineHeight: "1.2",
                        display: collapsed ? (window.innerWidth < 400 ? 'none' : 'block') : 'block' 
                    }}
                    >
                    {m.label}
                    </span>
                </button>
                );
            })}
        </div>
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div 
        className="flex flex-col items-start w-full" 
        style={{ gap: "24px", marginTop: "auto", paddingTop: "20px" }} 
      >
        
        {/* Notification */}
        <div 
            className="flex items-center justify-center cursor-pointer relative hover:scale-110 transition-transform duration-200"
            style={{ width: "40px", height: "40px" }}
        >
           <img 
             src={bellIcon} 
             alt="Notifications" 
             style={{ width: "20px", height: "20px", filter: blueFilter }} 
           />
           <span 
             className="absolute top-2 right-2 bg-[#42C85B] border-2 border-[#EEF2FF] rounded-full"
             style={{ width: "10px", height: "10px" }} 
           ></span>
        </div>

        {/* Settings */}
        <div 
            className="flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
            style={{ width: "40px", height: "40px" }}
        >
           <img 
             src={settingsIcon} 
             alt="Settings" 
             style={{ width: "20px", height: "20px", filter: blueFilter }} 
           />
        </div>

        {/* Profile */}
        <div 
            className="relative cursor-pointer"
            style={{ width: "40px", height: "40px" }}
        >
             {userLogo ? (
                <img 
                  src={userLogo instanceof File ? URL.createObjectURL(userLogo) : userLogo} 
                  className="w-full h-full rounded-xl object-cover border border-gray-200 shadow-sm" 
                  alt="User Profile"
                />
              ) : (
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center border border-gray-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={mainColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              )}
             {/* Green Dot */}
             <span 
                className="absolute -bottom-1 -right-1 bg-[#42C85B] border-2 border-[#EEF2FF] rounded-full"
                style={{ width: "12px", height: "12px" }}
             ></span>
        </div>

      </div>
    </div>
  );
}