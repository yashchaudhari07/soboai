export default function Sidebar({ active, onChange, collapsed, setCollapsed }) {

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: "/assets/icons/home.png" },
    { id: "ai", label: "AI insights", icon: "/assets/icons/ai.png" },
    { id: "experts", label: "Experts", icon: "/assets/icons/experts.png" },
    { id: "engagement", label: "Engagement", icon: "/assets/icons/engagement.png" },
  ];

  return (
    <div
      className="fixed top-0 left-0 h-screen flex flex-col justify-between py-4 border-r transition-all duration-300"
      style={{
        width: collapsed ? "70px" : "220px",
        backgroundColor: "#EEF2FF",
      }}
    >
      {/* TOGGLE */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-[44px] h-[44px] bg-white rounded-xl shadow flex items-center justify-center"
        >
          <img src="/assets/icons/menu.png" className="w-[20px]" />
        </button>

        {/* MENU */}
        <div className="mt-6 flex flex-col gap-4 w-full items-center">
          {menu.map((m) => (
            <button
              key={m.id}
              onClick={() => onChange(m.id)}
              className="w-full flex flex-col items-center"
            >
              <div
                className={`rounded-xl flex items-center justify-center transition ${
                  active === m.id ? "bg-[#E8EFFF]" : "bg-transparent"
                }`}
                style={{
                  width: collapsed ? "40px" : "50px",
                  height: collapsed ? "40px" : "50px",
                }}
              >
                <img
                  src={m.icon}
                  className="w-[20px]"
                  style={{
                    filter:
                      active === m.id
                        ? "brightness(0) saturate(100%) invert(34%) sepia(93%) saturate(2662%) hue-rotate(215deg)"
                        : "opacity(0.55)",
                  }}
                />
              </div>

              {!collapsed && (
                <span
                  className={`text-[13px] mt-1 ${
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

      {/* BOTTOM ICONS */}
      <div className="flex flex-col items-center gap-5 mb-3">
        <div className="relative">
          <img src="/assets/icons/bell.png" className="w-[20px]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        </div>

        <img src="/assets/icons/settings.png" className="w-[20px]" />

        <div className="relative">
          <img src="/assets/icons/user.png" className="w-[38px] h-[38px] rounded-xl" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
