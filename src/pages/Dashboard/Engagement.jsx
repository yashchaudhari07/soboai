import React, { useState } from "react";

// --- ICONS IMPORTS (FindExpert फोल्डरमधून) ---
import IconTech from "./FindExpert/f1.svg";
import IconMarketing from "./FindExpert/f2.svg";
import IconStrategy from "./FindExpert/f3.svg";
import IconLeadership from "./FindExpert/f4.svg";
import IconFinance from "./FindExpert/f5.svg";
import IconSales from "./FindExpert/f6.svg";
import IconManagement from "./FindExpert/f7.svg";
import IconOperations from "./FindExpert/f8.svg";
import IconHR from "./FindExpert/f9.svg";

// --- MOCK DATA ---
const ENGAGEMENTS = [
  {
    id: 1,
    area: "Marketing",
    expertName: "Albert Flores",
    role: "Growth Marketing Strategist | B2B & SaaS Specialist",
    status: "SOW under review",
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: null, 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    area: "Technology",
    expertName: null, 
    role: null,
    status: "Active",
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: { current: 4, total: 5, text: "Working on 5th deliverables. Delivered 4/5 deliverables" },
    image: null,
  },
  {
    id: 3,
    area: "Finance",
    expertName: null,
    role: null,
    status: "Pending Action", 
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: null,
    actionText: "Accept request to get your project going.",
    image: null,
  },
  {
    id: 4,
    area: "Marketing",
    expertName: "Albert Flores",
    role: "Growth Marketing Strategist | B2B & SaaS Specialist",
    status: "Completed",
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: { current: 5, total: 5, text: "All deliverables completed." },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    area: "Marketing",
    expertName: "Albert Flores",
    role: "Growth Marketing Strategist | B2B & SaaS Specialist",
    status: "Active",
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: { current: 2, total: 5, text: "Working on 3rd deliverables. Delivered 2/5 deliverables" },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    area: "Marketing",
    expertName: "Albert Flores",
    role: "Growth Marketing Strategist | B2B & SaaS Specialist",
    status: "Paused",
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: { current: 2, total: 5, text: "Paused at 2nd deliverable" },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

// --- ICONS MAPPING ---
const AREA_ICONS = {
  technology: IconTech,
  marketing: IconMarketing,
  strategy: IconStrategy,
  leadership: IconLeadership,
  finance: IconFinance,
  sales: IconSales,
  management: IconManagement,
  operations: IconOperations,
  hr: IconHR,
};

const TABS = ["All", "Active", "Paused", "Completed", "Rejected"];

export default function Engagement() {
  const [activeTab, setActiveTab] = useState("All");

  // --- FILTER LOGIC ---
  const filteredData = ENGAGEMENTS.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return item.status === "Active";
    if (activeTab === "Paused") return item.status === "Paused";
    if (activeTab === "Completed") return item.status === "Completed";
    if (activeTab === "Rejected") return item.status === "Rejected";
    return true;
  });

  // --- HELPER: STATUS STYLES ---
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active": return { bg: "#BEE8C0", text: "#007C0C" }; 
      case "SOW under review": return { bg: "#FFDA84", text: "#9D6B01" }; 
      case "Paused": return { bg: "#FFDA84", text: "#9D6B01" }; 
      case "Completed": return { bg: "#E7ECFF", text: "#2D60FF" }; 
      case "Rejected": return { bg: "#FF8181", text: "#720001" }; 
      case "Pending Action": return { bg: "#E7ECFF", text: "#2D60FF" }; 
      default: return { bg: "#F3F4F6", text: "#374151" };
    }
  };

  return (
    <div 
      className="p-4 md:p-8 bg-white rounded-2xl min-h-screen font-plex-hebrew"
      style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" }}
    >
      
      {/* HEADER ROW (Title Left, Tabs Right) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        
        {/* Title */}
        <h1 className="text-[20px] md:text-[26px] font-semibold text-gray-900">
          Engagement
        </h1>

        {/* Tabs - Aligned to Right */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-5 py-2 rounded-lg text-sm whitespace-nowrap border transition-all font-medium flex-shrink-0
                ${
                  activeTab === tab
                    ? "bg-[#2D60FF] text-white border-[#2D60FF] shadow-sm"
                    : "bg-[#CAD7FF] text-[#2D60FF] border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* GRID LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredData.map((item) => {
          const statusStyle = getStatusStyle(item.status);
          const areaKey = item.area.toLowerCase();
          const iconSrc = AREA_ICONS[areaKey] || IconTech;

          return (
            <div 
              key={item.id}
              className="border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-shadow bg-white flex flex-col justify-between"
            >
              <div>
                {/* CARD TOP: ICON & STATUS */}
                <div className="flex justify-between items-start mb-4">
                  {/* Icon Box */}
                  <div 
                    className="w-[50px] h-[50px] rounded-xl flex items-center justify-center bg-[#F5F7FA]"
                  >
                     <img 
                       src={iconSrc} 
                       alt={item.area} 
                       className="w-6 h-6 object-contain"
                       style={{ 
                         filter: "invert(46%) sepia(8%) saturate(1633%) hue-rotate(178deg) brightness(93%) contrast(89%)" 
                        }}
                     />
                  </div>
                  
                  {/* Status Badge */}
                  <span
                    className="px-3 py-1 rounded-full text-[12px] font-bold"
                    style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}
                  >
                    {item.status}
                  </span>
                </div>

                {/* AREA TITLE */}
                <h3 className="text-[18px] font-bold text-[#111827] mb-4">
                    {item.area}
                </h3>

                {/* EXPERT PROFILE (If assigned) */}
                {item.expertName && (
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={item.image} 
                      alt={item.expertName} 
                      className="w-10 h-10 rounded-full object-cover border border-gray-100"
                    />
                    <div>
                        <p className="text-[14px] font-bold text-[#101828] leading-tight">
                            {item.expertName}
                        </p>
                        <p className="text-[12px] text-gray-500 line-clamp-1">
                            {item.role}
                        </p>
                    </div>
                  </div>
                )}

                {/* DATES & TYPE */}
                <div className="flex flex-col gap-1 text-[13px] text-gray-500 mb-4 font-medium">
                    <div className="flex justify-between">
                        <span>Submitted on -</span>
                        <span className="text-gray-900">{item.submitted}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Engagement type -</span>
                        <span className="text-gray-900">{item.type}</span>
                    </div>
                </div>
              </div>

              {/* FOOTER ACTION / PROGRESS */}
              <div className="pt-4 border-t border-gray-100 mt-auto">
                {item.progress ? (
                    // PROGRESS BAR VIEW
                    <div>
                        <div className="flex justify-between items-center mb-2">
                             <p className="text-[12px] font-semibold text-gray-700">Status</p>
                             <span className="text-[12px] font-bold text-[#2D60FF]">
                                {Math.round((item.progress.current / item.progress.total) * 100)}%
                             </span>
                        </div>
                        <p className="text-[12px] text-gray-500 mb-3 leading-tight">
                            {item.progress.text}
                        </p>
                        {/* Custom Progress Bar */}
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div 
                                className="bg-[#2D60FF] h-2 rounded-full transition-all duration-500" 
                                style={{ width: `${(item.progress.current / item.progress.total) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ) : (
                    // TEXT / ACTION VIEW
                    <div>
                        <p className="text-[12px] font-semibold text-gray-700 mb-1">Status</p>
                        <p className={`text-[13px] font-medium ${item.actionText ? "text-[#2D60FF]" : "text-gray-500"}`}>
                            {item.actionText || item.status}
                        </p>
                    </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* EMPTY STATE */}
      {filteredData.length === 0 && (
         <div className="text-center py-20">
            <p className="text-gray-400">No engagements found in this category.</p>
         </div>
      )}

    </div>
  );
}