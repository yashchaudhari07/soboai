import { useState } from "react";

// Components Imports
import ExpertsBanner from "./components/ExpertsBanner"; 
import FindExpertFlow from "./FindExpert/FindExpertFlow";
import ExpertDetailPage from "./components/ExpertDetailPage";

// --- ICONS IMPORTS ---
import IconTech from "./FindExpert/f1.svg";
import IconMarketing from "./FindExpert/f2.svg";
import IconStrategy from "./FindExpert/f3.svg";
import IconLeadership from "./FindExpert/f4.svg";
import IconFinance from "./FindExpert/f5.svg";
import IconSales from "./FindExpert/f6.svg";
import IconManagement from "./FindExpert/f7.svg";
import IconOperations from "./FindExpert/f8.svg";
import IconHR from "./FindExpert/f9.svg";

const TABS = ["All", "Requested", "Rejected", "Cancelled"];

// --- AREA CONFIGURATION (Only Icons) ---
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

export default function Experts() {
  const [finderOpen, setFinderOpen] = useState(false);
  const [history, setHistory] = useState([]); 
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);

  // --- DELETE LOGIC ---
  const handleDeleteRequest = (id) => {
    // 1. लिस्ट मधून ती रिक्वेस्ट काढून टाकणे (Filter out)
    setHistory(prev => prev.filter(item => item.id !== id));
    
    // 2. Expert Detail Page बंद करून परत लिस्ट (Experts Page) वर येणे
    setSelected(null);
  };

  // --- STATUS STYLE CONFIGURATION ---
  const getStatusStyle = (status) => {
    switch (status) {
      case "Requested": return { bg: "#BEE8C0", text: "#007C0C" }; 
      case "Rejected": return { bg: "#FF8181", text: "#720001" }; 
      case "SOW under review": return { bg: "#FFDA84", text: "#9D6B01" }; 
      case "Cancelled": return { bg: "#E7ECFF", text: "#2D60FF" }; 
      case "Deleted": return { bg: "#EAE2E2", text: "#9CA3AF" }; 
      default: return { bg: "#E7ECFF", text: "#2D60FF" }; 
    }
  };

  const formatSubmittedDate = (dateVal) => {
    if (!dateVal) return "";
    return dateVal instanceof Date 
      ? dateVal.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) 
      : dateVal;
  };

  const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

  // --- RENDER DETAIL PAGE ---
  if (selected) {
    return (
      <ExpertDetailPage
        data={{
          ...selected,
          area: capitalize(selected.area),
          submitted: selected.submitted instanceof Date ? selected.submitted : new Date(), 
        }}
        onBack={() => setSelected(null)}
        onDelete={handleDeleteRequest} // <--- हा महत्वाचा बदल आहे (Function pass केले)
      />
    );
  }

  const filtered =
    activeTab === "All"
      ? history
      : history.filter((h) => h.status === activeTab);

  const isEmpty = history.length === 0;

  return (
    <div 
      className="p-4 md:p-8 bg-white rounded-2xl min-h-screen font-plex-hebrew" 
      style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" }}
    >

      {/* HEADER */}
      <h1 className="text-[20px] md:text-[26px] font-semibold mb-4 md:mb-6 text-gray-900">Experts</h1>

      {/* BANNER */}
      <ExpertsBanner onFind={() => setFinderOpen(true)} />

      {/* FILTER ROW */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 md:mt-8 mb-4 md:mb-6 gap-4">
        <h2 className="text-[18px] md:text-[20px] font-semibold text-gray-900">Expert match history</h2>
        
        {!isEmpty && (
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-4 py-2 md:px-5 md:py-2 rounded-lg text-sm whitespace-nowrap border transition-all font-medium flex-shrink-0
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
        )}
      </div>

      {/* === CONTENT AREA === */}
      {isEmpty ? (
        
        // EMPTY STATE BOX
        <div className="flex flex-col items-center justify-center py-16 md:py-24 bg-[#F8FAFF] border border-dashed border-[#DCE4FE] rounded-2xl gap-4 md:gap-5 px-4 text-center mt-4">
          <div className="w-16 h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center mb-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#2D60FF" strokeWidth="2"/>
              <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="#2D60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="17" r="1" fill="#2D60FF"/>
            </svg>
          </div>
          <h3 className="text-[#2D2D2D] text-[16px] font-semibold">No requests yet</h3>
          <p className="text-[#808080] text-sm md:text-[15px] leading-relaxed max-w-sm">
            You haven't made any requests yet! Tell us your challenge and we'll match you with an expert.
          </p>
        </div>

      ) : (

        // GRID OF CARDS
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((item) => {
             const statusStyle = getStatusStyle(item.status);
             const isDeleted = item.status === "Deleted";
             const areaKey = item.area ? item.area.toLowerCase() : "technology";
             const iconSrc = AREA_ICONS[areaKey] || AREA_ICONS.technology;
             const iconColor = statusStyle.text; 
             const iconBoxBg = isDeleted ? "#F3F4F6" : "#F5F7FA";

             return (
              <div
                key={item.id}
                onClick={() => !isDeleted && setSelected(item)}
                className={`
                  rounded-xl p-5 relative 
                  transition-all duration-200
                  flex flex-col h-full justify-between font-plex-hebrew
                  ${isDeleted 
                    ? "bg-gray-50 cursor-default border border-gray-200" 
                    : "bg-white hover:shadow-lg hover:border-blue-200 cursor-pointer border border-gray-200"
                  }
                `}
              >
                {/* CARD TOP ROW */}
                <div className="flex justify-between items-start mb-4">
                  <div 
                    className={`w-[50px] h-[50px] rounded-xl flex items-center justify-center`}
                    style={{ backgroundColor: iconBoxBg }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: iconColor,
                        maskImage: `url(${iconSrc})`,
                        WebkitMaskImage: `url(${iconSrc})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                      }}
                    />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[12px] font-bold whitespace-nowrap"
                    style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}
                  >
                    {item.status}
                  </span>
                </div>

                {/* TITLE */}
                <h3 
                  className="font-bold text-[16px] mb-4 md:mb-6"
                  style={{ color: isDeleted ? "#9CA3AF" : "#111827" }}
                >
                  {capitalize(item.area)}
                </h3>

                {/* DETAILS */}
                <div 
                  className={`flex flex-col items-end text-right text-[12px] mb-4 font-medium`}
                  style={{ color: isDeleted ? "#9CA3AF" : "#6B7280" }}
                >
                  <p>Submitted on - 
                    <span className={isDeleted ? "" : "text-gray-900"}> {formatSubmittedDate(item.submitted)}</span>
                  </p>
                  
                  <p className="mt-1">Engagement type - 
                    <span className={isDeleted ? "" : "text-gray-900"}> {item.engagement}</span>
                  </p>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-gray-100 mb-4"></div>

                {/* STATUS MESSAGE */}
                <div className="text-[12px] leading-[18px] text-gray-500">
                  <span className={`font-semibold ${isDeleted ? "text-gray-400" : "text-gray-900"}`}>
                    Status - 
                  </span>
                  <span style={{ color: isDeleted ? "#9CA3AF" : "#4B5563" }}> {item.statusText} </span>
                </div>

              </div>
             );
          })}
        </div>
      )}

      {/* MODAL FLOW */}
      <FindExpertFlow
        open={finderOpen}
        onClose={() => setFinderOpen(false)}
        onComplete={(entry) =>
          setHistory([
            ...history,
            {
              id: Date.now(),
              area: entry.area, 
              engagement: entry.engagement,
              details: entry.details,
              submitted: new Date(),
              status: "Requested",
              statusText: "Your request has been received. Our team will review and connect you with the best matching expert.",
            },
          ])
        }
      />
    </div>
  );
}