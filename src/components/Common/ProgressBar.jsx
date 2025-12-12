import React from "react";

export default function ProgressBar({ active, onChange, collapsed, setCollapsed, userLogo }) {
  
  const menu = [
    { id: "dashboard", label: "Dashboard", icon: "/assets/icons/home.png" },
    { id: "ai", label: "AI insights", icon: "/assets/icons/ai.png" },
    { id: "experts", label: "Experts", icon: "/assets/icons/experts.png" },
    { id: "engagement", label: "Engagement", icon: "/assets/icons/engagement.png" },
  ];

  return (
    <div
      className="fixed top-0 left-0 h-screen flex flex-col justify-between border-r transition-all duration-300 z-50 font-plex-henbrew"
      style={{
        width: collapsed ? "101px" : "235px",
        backgroundColor: "#EEF2FF",
        padding: "24px 16px",
        boxSizing: "border-box",
        fontSize:'14px' // Important to keep padding inside width
      }}
    >
      {/* --- TOP SECTION --- */}
      <div className="flex flex-col items-center w-full">
        
        {/* Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-white rounded-xl shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          style={{
            width: "40px",    
            height: "40px",   
            padding: "5px 8px",
            marginBottom: "40px" // 40px gap
          }}
        >
           <img src="/assets/icons/menu.png" alt="Menu" className="w-[20px] object-contain" />
        </button>

        {/* Menu Items List */}
        <div className="flex flex-col w-full" style={{ gap: "40px" }}> 
          {menu.map((m) => (
            <button
              key={m.id}
              onClick={() => onChange(m.id)}
              className={`rounded-xl transition-all duration-200 group flex items-center`}
              style={{
                 backgroundColor: active === m.id ? "#DCE4FE" : "transparent",
                 width: "100%", 
                 
                 // LOGIC: Minimize -> Column (Text below icon), Maximize -> Row (Text beside icon)
                 flexDirection: collapsed ? "column" : "row", 
                 
                 // LOGIC: Minimize -> Center align, Maximize -> Start align
                 justifyContent: collapsed ? "center" : "flex-start",
                 
                 padding: "12px",
                 minHeight: "40px"
              }}
            >
              {/* Icon Container */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              >
                <img
                  src={m.icon}
                  alt={m.label}
                  style={{
                    width: "24px",
                    height: "24px",
                    // Active -> Blue Filter, Inactive -> Gray
                    filter: active === m.id
                      ? "brightness(0) saturate(100%) invert(34%) sepia(93%) saturate(2662%) hue-rotate(215deg) brightness(100%) contrast(100%)"
                      : "grayscale(100%) opacity(0.5)"
                  }}
                />
              </div>

              {/* Label - नेहमीच दिसणार (Always Visible) */}
              <span
                style={{
                    // Text Styles from your requirements
                    fontFamily: "'IBM Plex Sans Hebrew', sans-serif",
                    fontWeight: "400",
                    fontSize: "14px",
                    color: active === m.id ? "#2D60FF" : "#DCE4FE", // Active: Blue, Inactive: Gray
                    
                    // Spacing Logic
                    marginTop: collapsed ? "4px" : "0px",   // खाली (Below) if collapsed
                    marginLeft: collapsed ? "0px" : "12px", // बाजूला (Beside) if expanded
                    
                    // Alignment
                    textAlign: "center",
                    lineHeight: "1.2",
                    whiteSpace: "nowrap"
                }}
              >
                {m.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div 
        className="flex flex-col items-center w-full" 
        style={{ gap: "20px" }}
      >
        
        {/* Notification Icon */}
        <div 
            className="flex items-center justify-center cursor-pointer relative hover:opacity-100 opacity-70 transition"
            style={{ width: "40px", height: "40px" }}
        >
           <img src="/assets/icons/bell.png" alt="Notifications" style={{ width: "24px", height: "24px" }} />
           <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#42C85B] border-2 border-[#EEF2FF] rounded-full"></span>
        </div>

        {/* Settings Icon */}
        <div 
            className="flex items-center justify-center cursor-pointer hover:opacity-100 opacity-70 transition"
            style={{ width: "40px", height: "40px" }}
        >
           <img src="/assets/icons/settings.png" alt="Settings" style={{ width: "24px", height: "24px" }} />
        </div>

        {/* Profile Image */}
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
                <img 
                  src="/assets/icons/user.png" 
                  className="w-full h-full rounded-xl" 
                  alt="Default User"
                />
              )}
             <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#42C85B] border-2 border-[#EEF2FF] rounded-full"></span>
        </div>

      </div>
    </div>
  );
}