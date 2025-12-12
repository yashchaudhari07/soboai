import React from "react";

// ---------------------------------------------------------
// 1. IMAGES IMPORT (तुझ्या SVG फाईल्स त्याच फोल्डरमध्ये असाव्यात)
// ---------------------------------------------------------
import IconTech from "./f1.svg";
import IconMarketing from "./f2.svg";
import IconStrategy from "./f3.svg";
import IconLeadership from "./f4.svg";
import IconFinance from "./f5.svg";
import IconSales from "./f6.svg";
import IconManagement from "./f7.svg";
import IconOperations from "./f8.svg";
import IconHR from "./f9.svg";

// ---------------------------------------------------------
// 2. DATA CONFIGURATION
// ---------------------------------------------------------
const AREAS = [
  { 
    id: "technology", 
    title: "Technology", 
    desc: "Cloud infrastructure, digital transformation, and AI implementation", 
    icon: IconTech,
    count: "1 question"
  },
  { 
    id: "marketing", 
    title: "Marketing", 
    desc: "Growth strategies, channel optimization, and performance marketing", 
    icon: IconMarketing,
    count: "1 question"
  },
  { 
    id: "strategy", 
    title: "Strategy", 
    desc: "Business planning, market expansion, and competitive positioning", 
    icon: IconStrategy,
    count: "1 question"
  },
  { 
    id: "leadership", 
    title: "Leadership", 
    desc: "Visionary leadership, team empowerment, and fostering innovation culture.", 
    icon: IconLeadership,
    count: "1 question"
  },
  { 
    id: "finance", 
    title: "Finance", 
    desc: "Financial modeling, budgeting, and investment strategies", 
    icon: IconFinance,
    count: "1 question"
  },
  { 
    id: "sales", 
    title: "Sales", 
    desc: "Drive growth through customer relationships, and sales excellence.", 
    icon: IconSales,
    count: "1 question"
  },
  { 
    id: "management", 
    title: "Management", 
    desc: "Talent management, culture building, and organizational development", 
    icon: IconManagement,
    count: "2 question" // As per PDF text
  },
  { 
    id: "operations", 
    title: "Operations", 
    desc: "Process optimization, automation, and operational efficiency", 
    icon: IconOperations,
    count: "1 question"
  },
  { 
    id: "hr", 
    title: "Human Resources", 
    desc: "Talent management, culture building, and organizational development", 
    icon: IconHR,
    count: "1 question"
  },
];

export default function Step1BusinessAreaModal({ area, onSelect, onNext, onClose }) {
  return (
    /* Main Overlay */
   /* Main Overlay */
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 font-plex-hebrex backdrop-blur-sm">

      {/* Modal Container */}
      <div className="bg-white rounded-2xl w-full max-w-[1000px] h-[90vh] max-h-[850px] flex flex-col shadow-2xl relative overflow-hidden">

        {/* --- 1. HEADER SECTION --- */}
        <div className="px-8 pt-8 pb-4 shrink-0">
          
          {/* Top Row: Title & Close */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] font-semibold text-gray-800">Find an expert</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Progress Bar */}
        
          {/* Headings */}
          <div>
            <p className="text-[13px] text-[#2D60FF] font-semibold uppercase tracking-wide mb-1">
              Step 1 of 2
            </p>
            <h3 className="text-[28px] font-bold text-[#1A1A1A] mb-2">
              Choose your business area
            </h3>
            <p className="text-gray-500 text-[15px]">
              Select the area where you need expert insights.
            </p>
          </div>
        </div>

        {/* --- 2. GRID SECTION (SCROLLABLE) --- */}
        <div className="px-8 py-2 overflow-y-auto flex-1 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
            {AREAS.map((item) => {
              const isSelected = area === item.id;
              
              return (
                <div
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className={`
                    group relative flex flex-col p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 h-full min-h-[160px]
                    ${isSelected 
                      ? "border-[#2D60FF] bg-[#F4F8FF] shadow-[0px_0px_16px_rgba(45,96,255,0.1)]" // Selected: Blue Border & Blue Shadow
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                    }
                  `}
                >
                  {/* Icon Container Box (New Requirement) */}
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-[#F4F4F6] flex items-center justify-center mb-4">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-[24px] h-[24px] object-contain" 
                      onError={(e) => {e.target.style.display='none'}} 
                    />
                  </div>

                  {/* Title */}
                  <h4 className={`text-[17px] font-bold mb-2 ${isSelected ? "text-[#2D60FF]" : "text-gray-900"}`}>
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  {/* Question Count Footer */}
                  <div className="mt-auto border-t border-dashed border-gray-200 pt-3">
                    <span className="text-[12px] font-medium text-gray-400">
                      {item.count}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 3. FOOTER SECTION --- */}
        <div className="px-8 py-5 border-t border-gray-200 bg-white flex justify-between items-center shrink-0">
          <p className="text-gray-400 text-[14px] font-medium hidden sm:block">
            {area ? "Area selected" : "Select an area to continue"}
          </p>

          <button
            onClick={onNext}
            disabled={!area}
            className={`
              px-8 py-3 rounded-lg text-[15px] font-semibold transition-all duration-200
              ${area 
                ? "bg-[#2D60FF] text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30 transform hover:-translate-y-0.5" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}