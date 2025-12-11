import { useState } from "react";

export default function FindExpertModal({ open, onClose, onNext }) {

  // ❗ Hooks always at top-level
  const [selected, setSelected] = useState("");

  // ❗ After hooks → then conditional return
  if (!open) return null;

  const areas = [
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

  return (
    // Added 'p-4' to ensure modal doesn't touch screen edges on mobile
    <div className="fixed inset-0 bg-black/40 flex items-center font-plex-hebrew justify-center z-50 p-4">

      {/* CHANGED: w-[900px] -> w-full max-w-[900px] (Makes it fluid but caps at 900px) */}
      {/* CHANGED: p-8 -> p-5 md:p-8 (Less padding on mobile) */}
      <div className="bg-white rounded-xl w-full max-w-[900px] max-h-[90vh] overflow-y-auto shadow-xl p-5 md:p-8 relative">

        {/* Close button */}
        <button
          className="absolute right-4 top-4 md:right-6 md:top-6 text-gray-500 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-[20px] md:text-[22px] font-semibold mb-6">Find an expert</h2>

        <p className="text-sm text-gray-500 mb-1">Step 1 of 2</p>
        <h3 className="text-[18px] md:text-[22px] font-semibold mb-2">Choose your business area</h3>
        <p className="text-gray-500 mb-6 text-sm md:text-base">
          Select the area where you need expert insights.
        </p>

        {/* GRID */}
        {/* CHANGED: grid-cols-3 -> grid-cols-1 sm:grid-cols-2 md:grid-cols-3 */}
        {/* This creates 1 column on mobile, 2 on tablets, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {areas.map((a) => (
            <div
              key={a.id}
              onClick={() => setSelected(a.id)}
              className={`border rounded-xl p-4 cursor-pointer transition bg-white
                ${selected === a.id ? "border-[#2D60FF] shadow-sm" : "border-gray-200"}`}
            >
              <img src={a.icon} alt="" className="w-[32px] mb-2" />

              <h4 className="font-semibold text-[16px]">{a.title}</h4>

              <p className="text-gray-600 text-[13px] leading-[18px] mt-1">
                {a.desc}
              </p>

              <p className="text-gray-400 text-[12px] mt-3">1 question</p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        {/* CHANGED: Added flex-col-reverse for mobile so button stays easily clickable */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0">
          <p className="text-gray-400 text-[13px]">
            Select an area to continue
          </p>

          <button
            className={`w-full sm:w-auto px-6 py-2 rounded-lg text-white text-[14px] transition
              ${selected ? "bg-[#2D60FF]" : "bg-gray-300 cursor-not-allowed"}`}
            disabled={!selected}
            onClick={() => onNext(selected)}
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}