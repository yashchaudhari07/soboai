import { useState } from "react";

// Components Imports
import ExpertsBanner from "./components/ExpertsBanner"; 
import FindExpertFlow from "./FindExpert/FindExpertFlow";
import ExpertDetailPage from "./components/ExpertDetailPage";

const TABS = ["All", "Requested", "Rejected", "Cancelled"];

export default function Experts() {
  const [finderOpen, setFinderOpen] = useState(false);
  
  // Change 1: सुरुवातीला History रिकामी ठेवली आहे (Empty State दिसण्यासाठी)
  const [history, setHistory] = useState([]); 
  
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);

  // Helper: Status नुसार कलर्स (PDF प्रमाणे)
  const getStatusStyle = (status) => {
    switch (status) {
      case "Requested":
        return { bg: "#BEE8C0", text: "#007C0C", textWeight: "700" }; 
      case "Rejected":
        return { bg: "#FF8181", text: "#720001", textWeight: "700" }; 
      case "SOW under review":
        return { bg: "#FFDA84", text: "#9D6B01", textWeight: "700" }; 
      case "Deleted":
        return { bg: "#EAE2E2", text: "#2D60FF", badgeText: "#2D60FF", badgeBg: "#E7ECFF", textWeight: "700" }; 
      case "Cancelled":
        return { bg: "#E7ECFF", text: "#2D60FF", textWeight: "700" }; 
      default:
        return { bg: "#E7ECFF", text: "#2D60FF", textWeight: "700" };
    }
  };

  // Helper: Area नुसार Icon आणि Color
  const getIcon = (areaRaw, isDeleted) => {
    const area = areaRaw ? areaRaw.toLowerCase() : "";
    const iconClass = isDeleted ? "w-6 h-6 text-[#DEDEDE]" : "w-6 h-6";
    
    // Colors configuration
    const colors = {
      technology: "#3B82F6", // Blue
      marketing: "#22C55E",  // Green
      finance: "#EF4444",    // Red
      sales: "#F59E0B",      // Yellow/Orange
      hr: "#EC4899",         // Pink
      operations: "#8B5CF6", // Purple
      strategy: "#6366F1",   // Indigo
      leadership: "#14B8A6", // Teal
      management: "#F97316", // Orange
    };

    const color = isDeleted ? "#DEDEDE" : (colors[area] || "#2D60FF");

    // Generic Icon Path (Dashboard icon style)
    return (
      <svg className={iconClass} style={{ color: color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    );
  };

  const formatSubmittedDate = (dateVal) => {
    if (!dateVal) return "";
    return dateVal instanceof Date 
      ? dateVal.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) 
      : dateVal;
  };

  // Helper: Capitalize first letter (technology -> Technology)
  const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

  if (selected) {
    return (
      <ExpertDetailPage
        data={{
          ...selected,
          area: capitalize(selected.area), // Display Capitalized
          submitted: selected.submitted instanceof Date ? selected.submitted : new Date(), 
        }}
        onBack={() => setSelected(null)}
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
      style={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
      }}
    >

      {/* HEADER */}
      <h1 className="text-[20px] md:text-[26px] font-semibold mb-4 md:mb-6 text-gray-900">Experts</h1>

      {/* BANNER */}
      <ExpertsBanner onFind={() => setFinderOpen(true)} />

      {/* FILTER ROW */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 md:mt-8 mb-4 md:mb-6 gap-4">
        <h2 className="text-[18px] md:text-[20px] font-semibold text-gray-900">Expert match history</h2>
        
        {/* फक्त जेव्हा हिस्ट्री असेल तेव्हाच टॅब्स दिसतील */}
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
      {/* Change 2: जर हिस्ट्री रिकामी असेल तर Empty Box दाखवा */}
      {isEmpty ? (
        
        <div className="flex flex-col items-center justify-center py-16 md:py-24 bg-[#F8FAFF] border border-dashed border-[#DCE4FE] rounded-2xl gap-4 md:gap-5 px-4 text-center mt-4">
          
          {/* Empty Icon (Blue Question Mark Circle) */}
          <div className="w-16 h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center mb-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#2D60FF" strokeWidth="2"/>
              <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="#2D60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="17" r="1" fill="#2D60FF"/>
            </svg>
          </div>

          <h3 className="text-[#2D2D2D] text-[16px] font-semibold">
            No requests yet
          </h3>
          
          <p className="text-[#808080] text-sm md:text-[15px] leading-relaxed max-w-sm">
            You haven't made any requests yet! Tell us your challenge and we'll match you with an expert.
          </p>

        </div>

      ) : (

        // --- GRID OF CARDS (After Submission) ---
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((item) => {
             const style = getStatusStyle(item.status);
             const isDeleted = item.status === "Deleted";
             const badgeBg = isDeleted && style.badgeBg ? style.badgeBg : style.bg;
             const badgeTx = isDeleted && style.badgeText ? style.badgeText : style.text;

             return (
              <div
                key={item.id}
                onClick={() => !isDeleted && setSelected(item)}
                className={`
                  rounded-xl p-5 relative 
                  transition-all duration-200
                  flex flex-col h-full justify-between font-plex-hebrew
                  ${isDeleted ? "bg-white cursor-default" : "bg-white hover:shadow-lg hover:border-blue-100 cursor-pointer border border-gray-200"}
                `}
                style={isDeleted ? { borderColor: '#DEDEDE', borderWidth: '1px', borderStyle: 'solid' } : {}}
              >
                {/* TOP */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-xl flex items-center justify-center ${isDeleted ? 'bg-white border border-[#DEDEDE]' : 'bg-[#F5F7FA]'}`}>
                    {getIcon(item.area, isDeleted)}
                  </div>

                  <span
                    className="px-3 py-1 rounded-full text-[12px] font-bold whitespace-nowrap"
                    style={{ backgroundColor: badgeBg, color: badgeTx }}
                  >
                    {item.status}
                  </span>
                </div>

                {/* TITLE */}
                <h3 
                  className={`font-bold text-[16px] mb-4 md:mb-6 ${!isDeleted ? "text-gray-900" : ""}`}
                  style={{ color: isDeleted ? '#DEDEDE' : undefined }}
                >
                  {capitalize(item.area)}
                </h3>

                {/* DATE & TYPE */}
                <div 
                  className={`flex flex-col items-end text-right text-[12px] mb-4 font-medium ${!isDeleted ? "text-gray-500" : ""}`}
                  style={{ color: isDeleted ? '#DEDEDE' : undefined }}
                >
                  <p>Submitted on - 
                    <span 
                      className={!isDeleted ? "text-gray-900" : ""}
                      style={{ color: isDeleted ? '#DEDEDE' : undefined }}
                    > {formatSubmittedDate(item.submitted)}
                    </span>
                  </p>
                  
                  <p className="mt-1">Engagement type - 
                    <span 
                      className={!isDeleted ? "text-gray-900" : ""}
                      style={{ color: isDeleted ? '#DEDEDE' : undefined }}
                    > {item.engagement}
                    </span>
                  </p>
                </div>

                {/* DIVIDER */}
                <div className="border-t mb-4" style={{ borderColor: isDeleted ? '#DEDEDE' : '#F3F4F6' }}></div>

                {/* STATUS TEXT */}
                <div 
                  className={`text-[12px] leading-[18px] ${!isDeleted ? "text-[#D0D0D0]" : ""}`}
                  style={{ color: isDeleted ? '#808080' : undefined }}
                >
                  <span 
                    className={`font-semibold ${!isDeleted ? "text-gray-900" : ""}`}
                    style={{ color: isDeleted ? '#808080' : undefined }}
                  >Status - </span>
                 <span className="text-[#505050]"> {item.statusText} </span>
                </div>

              </div>
             );
          })}
        </div>
      )}

      {/* FIND EXPERT MODAL FLOW */}
      <FindExpertFlow
        open={finderOpen}
        onClose={() => setFinderOpen(false)}
        onComplete={(entry) =>
          // Change 3: नवीन एंट्री ॲड करणे
          setHistory([
            ...history,
            {
              id: Date.now(),
              area: entry.area, // e.g. "marketing"
              engagement: entry.engagement, // e.g. "Fractional"
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