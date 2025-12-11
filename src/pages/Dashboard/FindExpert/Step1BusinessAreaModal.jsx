import React from "react";

// ❗ हे आयकन्स तुझ्या public/assets/icons/ फोल्डरमध्ये असणे आवश्यक आहे
const AREAS = [
  { id: "technology", title: "Technology", desc: "Cloud infrastructure, digital transformation, and AI implementation", icon: "/assets/icons/tech.png" },
  { id: "marketing", title: "Marketing", desc: "Growth strategies, channel optimization, and performance marketing", icon: "/assets/icons/marketing.png" },
  { id: "strategy", title: "Strategy", desc: "Business planning, market expansion, and competitive positioning", icon: "/assets/icons/strategy.png" },
  { id: "leadership", title: "Leadership", desc: "Visionary leadership, team empowerment, and fostering innovation culture.", icon: "/assets/icons/leadership.png" },
  { id: "finance", title: "Finance", desc: "Financial modeling, budgeting, and investment strategies", icon: "/assets/icons/finance.png" },
  { id: "sales", title: "Sales", desc: "Drive growth through customer relationships, and sales excellence.", icon: "/assets/icons/sales.png" },
  { id: "management", title: "Management", desc: "Talent management, culture building, and organizational development", icon: "/assets/icons/management.png" },
  { id: "operations", title: "Operations", desc: "Process optimization, automation, and operational efficiency", icon: "/assets/icons/operations.png" },
  { id: "hr", title: "Human Resources", desc: "Talent management, culture building, and organizational development", icon: "/assets/icons/hr.png" },
];

export default function Step1BusinessAreaModal({ area, onSelect, onNext, onClose }) {
  return (
    /* Main Overlay with Font applied */
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 font-plex-hebrex">

      {/* Modal Container */}
      <div className="bg-white rounded-xl w-full max-w-[980px] h-[85vh] max-h-[800px] flex flex-col shadow-2xl relative overflow-hidden">

        {/* --- 1. HEADER SECTION --- */}
        <div className="px-10 pt-8 pb-2 shrink-0">

          {/* Top Row: Title & Close Button */}
          <div className="flex justify-between items-start">
            <h2 className="text-[22px] font-semibold text-[#1A1A1A]">Find an expert</h2>
            <button
              onClick={onClose}
              className="text-gray-400 text-2xl hover:text-gray-600 transition -mt-1 -mr-2 p-2"
            >
              ✕
            </button>
          </div>
          <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
              <p className="text-[13px] text-[#2D2D2D] font-medium">Step 1 of 2</p>
              <span className="text-[13px] text-[#2D2D2D]">50% Complete</span>
            </div>
            {/* Visual Progress Bar Line */}
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#2D60FF] rounded-full" style={{ width: '50%' }}></div>
              <div className="h-full  bg-gray-100 rounded-full" style={{ width: '50%' }}></div>

            </div>

            <div className="mt-6">
              <h1 className="text-[26px] font-bold text-[#1A1A1A] mb-2">Choose an engagement</h1>
              <p className="text-[15px] text-[#2D2D2D]">
                Select an engagement type, how you want an expert to help you
              </p>
            </div>
          </div>

          {/* Sub Header Text */}
          <div className="mt-5">
            <p className="text-[13px] text-gray-500 font-medium mb-1">Step 1 of 2</p>
            <h3 className="text-[26px] font-bold text-[#1A1A1A]">Choose your business area</h3>
            <p className="text-gray-500 text-[15px] mt-2">
              Select the area where you need expert insights.
            </p>
          </div>
        </div>

        {/* --- 2. GRID SECTION (SCROLLABLE) --- */}
        <div className="px-10 py-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AREAS.map((a) => {
              const selected = area === a.id;
              return (
                <div
                  key={a.id}
                  onClick={() => onSelect(a.id)}
                  className={`
                    border rounded-xl p-5 cursor-pointer transition-all duration-200 flex flex-col h-full min-h-[150px] relative
                    ${selected
                      ? "border-[#2D60FF] bg-[#F8FAFF] shadow-[0_0_0_1px_#2D60FF]"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="mb-3">
                    <img
                      src={a.icon}
                      alt={a.title}
                      className="w-[32px] h-[32px] object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h4 className={`font-semibold text-[17px] mb-2 ${selected ? "text-[#2D60FF]" : "text-[#1A1A1A]"}`}>
                    {a.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-500 text-[13px] leading-[20px] flex-1">
                    {a.desc}
                  </p>

                  {/* Question Count Footer */}
                  <div className="mt-4 pt-1">
                    <p className="text-gray-400 text-[12px] font-medium">1 question</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 3. FOOTER SECTION --- */}
        {/* Footer with Top Border as per PDF */}
        <div className="px-10 py-5 border-t border-gray-200 bg-white flex justify-between items-center shrink-0">
          <p className="text-gray-400 text-[14px] font-medium">
            Select an area to continue
          </p>

          <button
            className={`px-10 py-3 rounded-lg text-white text-[15px] font-semibold transition-all shadow-sm
              ${area ? "bg-[#2D60FF] hover:bg-blue-700 shadow-blue-500/30" : "bg-[#E0E0E0] cursor-not-allowed text-gray-500"}
            `}
            disabled={!area}
            onClick={onNext}
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}