import { useState, useEffect } from "react";

export default function Sidebar({ active, onChange }) {
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: "/assets/icons/home.png" },
    { id: "ai", label: "AI insights", icon: "/assets/icons/ai.png" },
    { id: "experts", label: "Experts", icon: "/assets/icons/experts.png" },
    { id: "engagement", label: "Engagement", icon: "/assets/icons/engagement.png" },
  ];

  // 📌 Auto-collapse on Mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) setCollapsed(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="
        h-screen 
        flex flex-col justify-between 
        py-4
        transition-all duration-200
        fixed md:relative z-50
      "
      style={{
        width: collapsed ? "70px" : "200px",  // ✔ same design
        backgroundColor: "#EEF2FF",
      }}
    >
      {/* ------------------- TOP SECTION ------------------- */}
      <div className="flex flex-col">

        {/* Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            w-[48px] h-[48px] bg-white rounded-xl shadow 
            mx-auto mt-1 flex items-center justify-center
            md:mx-auto
          "
        >
          <img src="/assets/icons/menu.png" className="w-[22px]" alt="" />
        </button>

        {/* Menu items */}
        <div
          className="
            mt-8 flex flex-col gap-6 items-center 
            overflow-y-auto 
            max-h-[70vh]
            scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent
          "
        >
          {menu.map((m) => (
            <button
              key={m.id}
              onClick={() => onChange(m.id)}
              className="
                flex flex-col items-center gap-1
                active:scale-95 transition
              "
            >
              <div
                className={`
                  flex items-center justify-center rounded-2xl transition
                  ${active === m.id ? "bg-[#E8EFFF]" : "bg-transparent"}
                `}
                style={{
                  width: collapsed ? "40px" : "50px",
                  height: collapsed ? "40px" : "50px",
                }}
              >
                <img
                  src={m.icon}
                  className="w-[22px]"
                  style={{
                    filter:
                      active === m.id
                        ? "brightness(0) saturate(100%) invert(34%) sepia(93%) saturate(2662%) hue-rotate(215deg) brightness(94%) contrast(92%)"
                        : "opacity(0.6)",
                  }}
                  alt=""
                />
              </div>

              {!collapsed && (
                <span
                  className={`text-[14px] ${
                    active === m.id ? "text-[#2D60FF]" : "text-[#2D60FF]/70"
                  }`}
                >
                  {m.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ------------------- BOTTOM SECTION ------------------- */}
      <div
        className="
          flex flex-col items-center gap-6 mb-4 
          pb-6 md:pb-4
        "
      >
        {/* Bell */}
        <div className="relative">
          <img src="/assets/icons/bell.png" className="w-[22px]" alt="" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Settings */}
        <img src="/assets/icons/settings.png" className="w-[22px]" alt="" />

        {/* User */}
        <div className="relative">
          <img
            src="/assets/icons/user.png"
            className="w-[40px] h-[40px] rounded-xl"
            alt=""
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
