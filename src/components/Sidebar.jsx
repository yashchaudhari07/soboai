import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // [Imported for Navigation]

// --- IMPORTS FROM SAME FOLDER ---
import menuIcon from './Sidebar/a1.svg';       
import dashboardIcon from './Sidebar/a2.svg';  
import aiIcon from './Sidebar/a3.svg';         
import expertsIcon from './Sidebar/a4.svg';    
import engagementIcon from './Sidebar/a5.svg'; 
import bellIcon from './Sidebar/a6.svg';       
import settingsIcon from './Sidebar/a7.svg';   

// 'active' ani 'onChange' props kadhun takle, karan ata URL varun active tharel
export default function Sidebar({ collapsed, setCollapsed, userLogo }) {
  
  const navigate = useNavigate(); // For page navigation
  const location = useLocation(); // To check current active URL

  // Menu Configuration with PATHS based on your App.js
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

  // Hover State
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div
      className="fixed top-0 left-0 h-screen flex flex-col justify-between transition-all duration-300 z-50 font-['IBM_Plex_Sans_Hebrew']"
      style={{
        width: collapsed ? "101px" : "235px",
        backgroundColor: bgColor,
        borderRight: `1px solid ${borderColor}`,
        padding: "24px 16px",
        boxSizing: "border-box"
      }}
    >
      {/* --- TOP SECTION --- */}
      <div className="flex flex-col items-center w-full" style={{ gap: "40px" }}>
        
        {/* Toggle Button */}
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

        {/* Menu Items */}
        {menu.map((m) => {
            // Logic: If current URL path includes the menu path, set it as Active
            const isActive = location.pathname === m.path;
            const isHovered = hoveredItem === m.id;
            
            return (
              <button
                key={m.id}
                onClick={() => navigate(m.path)} // [NAVIGATION ACTION]
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
                    // BG changes on Active OR Hover
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
                      fontSize: "14px",
                      fontWeight: "400",
                      color: mainColor,
                      
                      marginTop: collapsed ? "4px" : "0px", 
                      marginLeft: collapsed ? "0px" : "12px",
                      
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      lineHeight: "1.2"
                  }}
                >
                  {m.label}
                </span>
              </button>
            );
        })}
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div 
        className="flex flex-col items-center w-full" 
        style={{ gap: "20px" }}
      >
        
        {/* Notification */}
        <div 
            className="flex items-center justify-center cursor-pointer relative hover:opacity-100 opacity-70 transition"
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
            className="flex items-center justify-center cursor-pointer hover:opacity-100 opacity-70 transition"
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
                  className="w-full h-full rounded-xl object-cover border border-gray-200" 
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
  );}