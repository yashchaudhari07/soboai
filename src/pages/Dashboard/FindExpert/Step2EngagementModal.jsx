import React, { useState } from "react";

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

  const CONTENT = {
    Coaching: {
      title: "What is Coaching?",
      text: `Unlock your full leadership potential with an executive coaching engagement.
      
Designed for ambitious business owners and executives, this personalized program offers one-on-one guidance to enhance strategic thinking, decision-making, and communication skills.

Achieve greater clarity, overcome obstacles, and propel your professional growth with the dedicated support of an experienced executive coach.`,
    },
    Fractional: {
      title: "What is Fractional?",
      text: `Work with a fractional expert who supports your business on a part-time basis.
      
They help you scale operations, manage teams, and solve strategic problems without the cost of a full-time executive.`,
    },
    Project: {
      title: "What is a Project engagement?",
      text: `A project-based engagement focuses on achieving a specific outcome within a defined timeline, guided by an expert to ensure precise execution and quality delivery.`,
    },
  };

  const selectedData = CONTENT[active];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 font-plex-hebrex">

      {/* MODAL CONTAINER */}
      <div
        className="bg-white rounded-xl shadow-2xl relative flex flex-col w-full max-w-[1080px]"
        style={{ height: "92vh", maxHeight: "900px" }}
      >

        {/* --- 1. HEADER SECTION (Full Width) --- */}
        <div className="px-10 py-5 border-b border-gray-200 shrink-0 flex justify-between items-center z-10 bg-white rounded-t-xl">
             <h2 className="text-[22px] font-semibold text-[#1A1A1A]">Find an expert</h2>
             <button 
                onClick={onClose} 
                className="text-gray-400 text-2xl hover:text-gray-600 transition p-1"
             >
                ✕
             </button>
        </div>

        {/* --- 2. MAIN BODY (Flex Container) --- */}
        {/* इथे आपण 70% आणि 30% असे दोन भाग केले आहेत */}
        <div className="flex flex-1 overflow-hidden">
            
            {/* LEFT SIDE: 70% WIDTH (Scrollable Content) */}
            <div className="w-[68%] h-full overflow-y-auto px-10 py-6 custom-scrollbar">
                
                {/* PROGRESS BAR & TITLE */}
                <div className="mb-8">
                    <div className="flex justify-between items-end mb-2">
                        <p className="text-[13px] text-[#2D2D2D] font-medium">Step 2 of 2</p>
                        <span className="text-[13px] text-[#2D2D2D]">100% Complete</span>
                    </div>
                    {/* Visual Progress Bar Line */}
                    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-[#2D60FF] rounded-full"></div>
                    </div>
                
                    <div className="mt-6">
                        <h1 className="text-[26px] font-bold text-[#1A1A1A] mb-2">Choose an engagement</h1>
                        <p className="text-[15px] text-[#2D2D2D]">
                            Select an engagement type, how you want an expert to help you
                        </p>
                    </div>
                </div>

                {/* --- GRID (ONLY 2 COLUMNS: Menu & Text) --- */}
                {/* Image is removed from here and moved to the Right Side 30% div */}
                <div className="grid grid-cols-[240px_1fr] border-gray-200 py-4 min-h-[300px]">
                    
                    {/* COL 1: MENU */}
                    <div className="flex flex-col gap-3 pr-6 border-r border-gray-200">
                        {["Fractional", "Coaching", "Project"].map((item) => (
                            <button
                                key={item}
                                onClick={() => { setActive(item); setEngagement(item); }}
                                className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-[15px] font-medium transition-all text-left
                                ${active === item 
                                    ? "bg-[#DCE4FE] text-[#2D60FF]" 
                                    : "bg-white text-[#2D2D2D] hover:bg-gray-50 hover:border-gray-300"
                                }`}
                            >
                                <div className={`w-4 h-4 rounded-[2px] border flex items-center justify-center flex-shrink-0
                                    ${active === item ? "border-[#2D60FF] bg-[#2D60FF]" : "border-gray-300 bg-white"}`}>
                                    {active === item && <div className="w-1.5 h-1.5 bg-white rounded-sm" />}
                                </div>
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* COL 2: TEXT CONTENT */}
                    <div className="pl-8">
                        <h3 className="font-bold text-[18px] text-[#1A1A1A] mb-4">
                             {selectedData.title}
                        </h3>
                        <p className="text-[15px] text-gray-600 leading-[26px] whitespace-pre-line">
                             {selectedData.text}
                        </p>
                    </div>
                </div>

                {/* --- FORM SECTION --- */}
                <div className="pt-8 pb-4">
                    <h4 className="font-bold text-[16px] border-b text-[#1A1A1A] mb-4">
                        Describe your business need
                    </h4>
                    
                    <div className="mb-5">
                        <label className="text-[14px] text-gray-600 block mb-2 font-medium">
                            Tell us your requirement <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            placeholder="Enter details"
                            className="w-full h-[110px] border border-gray-300 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#2D60FF] focus:ring-1 focus:ring-[#2D60FF] resize-none placeholder-gray-400 bg-white"
                        />
                    </div>

                    {/* FILE UPLOAD */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl h-[190px] flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition relative">
                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                        
                        <div className="text-gray-400 mb-2 transform rotate-180">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 5V19M12 19L5 12M12 19L19 12"/>
                            </svg>
                        </div>
                        
                        <p className="text-[14px] text-gray-500 font-medium"> Drag and drop your files here</p>
                        
                        <div className=" items-center gap-3 mt-2">
                            <span className="text-[12px] text-gray-400"> -----------or----------</span> <br></br>
                         <br></br>   <span className="text-[#2D60FF] text-[13px] font-semibold border border-gray-200 bg-white px-4 py-1.5 rounded-lg shadow-sm">
                               Choose file
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: 30% WIDTH (Empty / Image Only) */}
            {/* हे पूर्ण 30% स्पेस मोकळे आहे, फक्त इमेजसाठी */}
            <div className="w-[30%] h-full flex items-center justify-center relative">
                {/* Image centered in this 30% vertical space */}
                <img 
                    src="/assets/images/telescope_people.png" 
                    alt="Engagement Illustration" 
                    className="w-[85%] max-w-[320px] object-contain"
                    onError={(e) => {
                        e.target.style.display = 'none'; 
                    }}
                />
            </div>

        </div>

        {/* --- 3. FOOTER SECTION (Full Width) --- */}
        <div className="px-10 py-5 border-t border-gray-200 bg-white rounded-b-xl flex justify-between items-center shrink-0 z-10">
            <button 
                onClick={onBack}
                className="text-[#2D60FF] text-[15px] font-semibold hover:text-blue-700 transition flex items-center gap-2"
            >
                <span>←</span> Back
            </button>
            
            <button 
                onClick={onSubmit}
                className="px-8 py-2.5 bg-[#2D60FF] text-white rounded-xl text-[15px] font-medium shadow-md hover:bg-blue-700 transition"
            >
                Submit
            </button>
        </div>

      </div>
    </div>
  );
}