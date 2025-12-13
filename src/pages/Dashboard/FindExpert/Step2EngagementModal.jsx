import React, { useState } from "react";

// ---------------------------------------------------------
// ICONS & IMAGES IMPORT
// ---------------------------------------------------------
import IconFractional from "./s1.svg"; 
import IconCoaching from "./s2.svg";
import IconProject from "./s3.svg";
import ImageRight from "./s4.svg"; 

export default function Step2EngagementModal({
  engagement,
  setEngagement,
  details,
  setDetails,
  onSubmit,
  onBack,
  onClose,
}) {
  const [active, setActive] = useState(engagement || "Coaching");

  // DATA CONTENT
  const CONTENT = {
    Fractional: {
      id: "Fractional",
      icon: IconFractional,
      title: "What is Fractional?",
      text: `Work with a fractional expert who supports your business on a part-time basis.
      
They help you scale operations, manage teams, and solve strategic problems without the cost of a full-time executive.`,
    },
    Coaching: {
      id: "Coaching",
      icon: IconCoaching,
      title: "What is Coaching?",
      text: `Unlock your full leadership potential with an executive coaching engagement.
      
Designed for ambitious business owners and executives, this personalized program offers one-on-one guidance to enhance strategic thinking, decision-making, and communication skills.

Achieve greater clarity, overcome obstacles, and propel your professional growth with the dedicated support of an experienced executive coach.`,
    },
    Project: {
      id: "Project",
      icon: IconProject,
      title: "What is a Project engagement?",
      text: `A project-based engagement focuses on achieving a specific outcome within a defined timeline, guided by an expert to ensure precise execution and quality delivery.`,
    },
  };

  const selectedData = CONTENT[active];
  const OPTIONS = ["Fractional", "Coaching", "Project"];

  return (
    // Change 1: p-0 on mobile, p-4 on desktop (Mobile full screen feeling)
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-0 md:p-4 font-sans backdrop-blur-sm">

      {/* MODAL CONTAINER */}
      <div
        // Change 2: rounded-none on mobile, rounded-2xl on desktop. Height h-full on mobile.
        className="bg-white rounded-none md:rounded-2xl shadow-2xl relative flex w-full max-w-[1080px] overflow-hidden h-full md:h-auto"
        // Logic kept same, just applied logic for desktop height via Tailwind classes implicitly for mobile override
        style={{ maxHeight: "800px" }} 
      >
        {/* Helper class for desktop specific height if needed, usually h-full on mobile is better */}
        <div className="flex w-full h-full md:h-[85vh]">

            {/* --- LEFT SECTION (CONTENT) --- */}
            {/* Change 3: border-r only on desktop */}
            <div className="flex-1 flex flex-col h-full border-r-0 md:border-r border-gray-100">
                
                {/* 1. HEADER */}
                <div className="px-5 py-4 md:px-8 md:py-5 border-b border-gray-200 flex justify-between items-center shrink-0">
                     <h2 className="text-[18px] md:text-[22px] font-semibold text-[#1A1A1A]">Find an expert</h2>
                     <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-600 p-2 rounded-full transition hover:bg-gray-100"
                     >
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                       </svg>
                     </button>
                </div>

                {/* 2. BODY SCROLLABLE AREA */}
                {/* Change 4: Padding reduced for mobile */}
                <div className="flex-1 overflow-y-auto px-5 py-4 md:px-8 md:py-6 custom-scrollbar">
                    
                    {/* STEP INDICATOR */}
                    <div className="mb-6">
                        <p className="text-[13px] text-[#2D60FF] font-semibold mb-1">Step 2 of 2</p> 
                        <h1 className="text-[22px] md:text-[26px] font-bold text-[#1A1A1A] mb-1">Choose an engagement</h1>
                        <p className="text-[14px] md:text-[15px] text-gray-500">
                            Select an engagement type, how you want an expert to help you
                        </p>
                    </div>

                    {/* --- SELECTION AREA --- */}
                    {/* Change 5: Flex Col on mobile, Row on desktop */}
                    <div className="flex flex-col md:flex-row pb-6 mb-2 gap-6 md:gap-0">
                        
                        {/* LEFT COL: MENU BUTTONS */}
                        {/* Change 6: Full width on mobile, 240px on desktop */}
                        <div className="flex flex-col gap-2 w-full md:w-[240px] shrink-0">
                            {OPTIONS.map((key) => {
                                const item = CONTENT[key];
                                const isActive = active === key;

                                return (
                                    <button
                                        key={key}
                                        onClick={() => { setActive(key); setEngagement(key); }}
                                        className={`
                                            w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] transition-all text-left
                                            ${isActive 
                                                ? "bg-[#DCE4FE] text-[#2D2D2D]" 
                                                : "bg-white text-[#2D2D2D] hover:bg-gray-50 border border-transparent md:border-none ring-1 ring-gray-100 md:ring-0"
                                            }
                                        `}
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                            <img 
                                                src={item.icon} 
                                                alt={item.id} 
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <span className="font-normal">{item.id}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* VERTICAL DIVIDER (Hidden on mobile) */}
                        <div className="hidden md:block w-[1px] bg-gray-200 mx-6"></div>

                        {/* RIGHT COL: DESCRIPTION */}
                        <div className="flex-1 pt-1">
                            <h3 className="font-bold text-[16px] md:text-[18px] text-[#808080] mb-2 md:mb-3">
                                 {selectedData.title}
                            </h3>
                            <p className="text-[13px] md:text-[14px] text-gray-600 leading-[22px] md:leading-[24px] whitespace-pre-line bg-gray-50 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none">
                                 {selectedData.text}
                            </p>
                        </div>
                    </div>

                    {/* --- FORM SECTION --- */}
                    <div>
                        <div className="mb-4 border-b border-grey-400 ">
                            <h4 className="font-bold text-[16px] md:text-[18px] text-[#1A1A1A]">
                                Describe your business need
                            </h4>
                            <hr></hr>
                        </div>
                        
                        {/* Textarea */}
                        <div className="mb-5">
                            <label className="text-[14px] text-[#2D2D2D] block mb-2 font-normal">
                                Tell us your requirement <span className="text-red-500">*</span>
                            </label>
                            <textarea 
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                placeholder="Enter details"
                                className="w-full border border-gray-300 rounded-[12px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#2D60FF] focus:ring-1 focus:ring-[#2D60FF] resize-none placeholder-gray-400 bg-white"
                                style={{ height: "130px" }} 
                            />
                        </div>

                        {/* File Upload */}
                        <div>
                            <label className="text-[14px] text-[#2D2D2D] block mb-2 font-normal">
                                Upload files
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-[12px] h-[160px] flex flex-col items-center justify-center bg-[#FAFAFA] hover:bg-[#F5F5F5] transition relative text-center px-4">
                                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                
                                <p className="text-[14px] text-gray-500 font-medium mb-3">Drag and drop your files here</p>
                                <span className="text-[12px] text-gray-400 mb-3">or</span>
                                
                                <div className="flex items-center gap-3">
                                    <button className="text-[#2D60FF] text-[13px] font-medium bg-[#F3F9FF] border border-[#2D60FF] px-5 py-2 rounded-lg shadow-sm">
                                       Choose file
                                    </button>
                                    <span className="text-[13px] text-gray-400">No file chosen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. FOOTER */}
                <div className="px-5 py-4 md:px-8 md:py-5 border-t border-gray-200 flex justify-between items-center shrink-0 bg-white">
                    <button 
                        onClick={onBack}
                        className="text-[#2D60FF] text-[15px] font-semibold hover:text-blue-700 transition flex items-center gap-2"
                    >
                        Back
                    </button>
                    
                    <button 
                        onClick={onSubmit}
                        className="px-8 md:px-10 py-2.5 bg-[#2D60FF] text-white rounded-xl text-[15px] font-semibold shadow-md hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </div>

            </div>

            {/* --- RIGHT SECTION (IMAGE) --- */}
            {/* Change 7: Hidden on mobile, Flex on Medium+ screens */}
            <div className="hidden md:flex w-[35%] h-full bg-[#FAFBFF] items-center justify-center relative border-l border-gray-100">
                <img 
                    src={ImageRight} 
                    alt="Illustration" 
                    className="w-full h-auto max-w-[80%] object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
            </div>

        </div>
      </div>
    </div>
  );
}