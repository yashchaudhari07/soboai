// src/pages/Dashboard/FindExpert/Step1BusinessAreaModal.jsx
import React from "react";

const AREAS = [
  { id: "technology", title: "Technology", desc: "Cloud infrastructure, digital transformation, and AI implementation" },
  { id: "marketing", title: "Marketing", desc: "Growth strategies, channel optimization, and performance marketing" },
  { id: "strategy", title: "Strategy", desc: "Business planning, market expansion, and competitive positioning" },
  { id: "leadership", title: "Leadership", desc: "Visionary leadership, team empowerment, and fostering innovation culture" },
  { id: "finance", title: "Finance", desc: "Financial modeling, budgeting, and investment strategies" },
  { id: "sales", title: "Sales", desc: "Drive growth through customer relationships, and sales excellence" },
  { id: "management", title: "Management", desc: "Talent management, culture building, and organizational development" },
  { id: "operations", title: "Operations", desc: "Process optimization, automation, and operational efficiency" },
  { id: "hr", title: "Human Resources", desc: "Talent management, culture building, and organizational development" },
];

export default function Step1BusinessAreaModal({ area, onSelect, onNext, onClose }) {
  return (
    <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6 md:p-8 mx-auto my-8">
      {/* header */}
      <div className="mb-4">
        <div className="text-sm text-gray-600">Step 1 of 2</div>
        <h2 className="text-2xl font-semibold mt-2">Help us understand what you're looking for</h2>
        <p className="text-gray-500 mt-1 text-sm">
          Select your areas of interest so that we can personalize your experience.
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {AREAS.map((a) => {
          const selected = area === a.id;
          return (
            <button
              key={a.id}
              onClick={() => onSelect(a.id)}
              className={`
                text-left p-4 rounded-lg border transition 
                ${selected ? "border-[#2D60FF] bg-[#F4F6FF]" : "border-gray-200 bg-white hover:shadow-sm"}
                flex flex-col gap-3
              `}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-md flex items-center justify-center ${selected ? "bg-white border border-[#2D60FF]" : "bg-[#EEF2FF]"}`}>
                  {/* icon placeholder */}
                  <div className="w-5 h-5 rounded-sm bg-[#dbe9ff]" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{a.title}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-tight">{a.desc}</div>
                  
                </div>
                
              </div>
              <div className="text-xs text-gray-400 mt-2">1 question</div>
            </button>
          );
        })}
      </div>

      {/* footer */}
      <div className="mt-6 pt-4 border-t flex items-center justify-between">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg bg-[#F4F6FF] text-[#2D60FF] font-medium"
        >
          Cancel
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onNext}
            disabled={!area}
            className={`px-6 py-2 rounded-lg text-white font-medium transition
              ${area ? "bg-[#2D60FF] shadow" : "bg-[#BFCFFB] cursor-not-allowed"}
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
