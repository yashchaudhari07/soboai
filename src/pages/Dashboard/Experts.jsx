import { useState } from "react";

// 👇 ही लाईन महत्वाची आहे, ही चेक करा
import ExpertsBanner from "./components/ExpertsBanner"; 
import FindExpertFlow from "./FindExpert/FindExpertFlow";
import ExpertDetailPage from "./components/ExpertDetailPage";

const TABS = ["All", "Requested", "Rejected", "Cancelled"];

const defaultHistory = [
  {
    id: 1,
    area: "Technology",
    status: "Requested",
    engagement: "Fractional",
    submitted: "18th Jun, 2025",
    statusText: "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
  },
  {
    id: 2,
    area: "Marketing",
    status: "Rejected",
    engagement: "Fractional",
    submitted: "18th Jun, 2025",
    statusText: "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
  },
  {
    id: 3,
    area: "Technology",
    status: "Deleted",
    engagement: "Fractional",
    submitted: "18th Jun, 2025",
    statusText: "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
  },
  {
    id: 4,
    area: "Finance",
    status: "Requested",
    engagement: "Fractional",
    submitted: "18th Jun, 2025",
    statusText: "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
  },
  {
    id: 5,
    area: "Finance",
    status: "SOW under review",
    engagement: "Fractional",
    submitted: "18th Jun, 2025",
    statusText: "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
  },
  {
    id: 6,
    area: "Technology",
    status: "Rejected",
    engagement: "Fractional",
    submitted: "18th Jun, 2025",
    statusText: "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
  }
];

export default function Experts() {
  const [finderOpen, setFinderOpen] = useState(false);
  const [history, setHistory] = useState(defaultHistory);
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);

  const forceEmptyView = false; 

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

  const getIcon = (area, isDeleted) => {
    const iconClass = isDeleted ? "w-6 h-6 text-[#DEDEDE]" : "w-6 h-6";
    const techColor = isDeleted ? "#DEDEDE" : "#3B82F6"; 
    const markColor = isDeleted ? "#DEDEDE" : "#22C55E"; 
    const finColor  = isDeleted ? "#DEDEDE" : "#EF4444"; 

    if (area === "Technology") return (
      <svg className={iconClass} style={{ color: techColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    );
    if (area === "Marketing") return (
      <svg className={iconClass} style={{ color: markColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
    );
    if (area === "Finance") return (
      <svg className={iconClass} style={{ color: finColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    );
    return <div className="w-6 h-6 bg-gray-300 rounded-full"></div>;
  };

  const formatSubmittedDate = (dateVal) => {
    if (!dateVal) return "";
    return dateVal instanceof Date ? dateVal.toDateString() : dateVal;
  };

  if (selected) {
    return (
      <ExpertDetailPage
        data={{
          ...selected,
          submitted: formatSubmittedDate(selected.submitted), 
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
    // RESPONSIVE CONTAINER: p-4 (mobile) -> p-8 (desktop)
    <div 
      className="p-4 md:p-8 bg-white rounded-2xl min-h-screen font-plex-hebrew" 
      style={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        marginLeft: "0px"
      }}
    >

      {/* HEADER */}
      <h1 className="text-[20px] md:text-[26px] font-semibold mb-4 md:mb-6 text-gray-900">Experts</h1>

      {/* BANNER */}
      {/* ExpertsBanner वापरताना वर import असणे गरजेचे आहे */}
      <ExpertsBanner onFind={() => setFinderOpen(true)} />

      {/* FILTER ROW */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 md:mt-8 mb-4 md:mb-6 gap-4">
        <h2 className="text-[18px] md:text-[20px] font-semibold text-gray-900">Expert match history</h2>
        
        {(!isEmpty && !forceEmptyView) && (
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
      {(forceEmptyView || isEmpty) ? (
        
        <div className="flex flex-col items-center justify-center py-12 md:py-20 bg-[#EEF2FF] rounded-xl gap-4 md:gap-6 px-4 text-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center mb-2 md:mb-4">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-auto md:h-auto">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2D60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="#2D60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17H12.01" stroke="#2D60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-[#2D2D2D] text-sm md:text-[15px] leading-relaxed max-w-sm">
            You haven't made any requests yet! Tell us your challenge and we'll match you with an expert.
          </p>
        </div>

      ) : (

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
                    className="px-2 py-1 md:px-3 md:py-1 rounded-xl text-[11px] md:text-[12px] font-medium whitespace-nowrap"
                    style={{ backgroundColor: badgeBg, color: badgeTx }}
                  >
                    {item.status}
                  </span>
                </div>

                {/* TITLE */}
                <h3 
                  className={`font-semibold text-[15px] md:text-[16px] mb-4 md:mb-6 ${!isDeleted ? "text-gray-900" : ""}`}
                  style={{ color: isDeleted ? '#DEDEDE' : undefined }}
                >
                  {item.area}
                </h3>

                {/* DATE & TYPE */}
                <div 
                  className={`flex flex-col items-end text-right text-[11px] md:text-[12px] mb-4 font-medium ${!isDeleted ? "text-gray-500" : ""}`}
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
                  className={`text-[11px] md:text-[12px] leading-[18px] ${!isDeleted ? "text-[#D0D0D0]" : ""}`}
                  style={{ color: isDeleted ? '#808080' : undefined }}
                >
                  <span 
                    className={`font-medium ${!isDeleted ? "text-gray-900" : ""}`}
                    style={{ color: isDeleted ? '#808080' : undefined }}
                  >Status - </span>
                 <span className="text-[#2D2D2D]"> {item.statusText} </span>
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
          setHistory([
            ...history,
            {
              id: Date.now(),
              ...entry,
              submitted: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
              status: "Requested",
              statusText: "Your request has been received. We are matching you with an expert.",
              requirement: entry.details || "No details provided",
              engagement: "Fractional"
            },
          ])
        }
      />
    </div>
  );
}