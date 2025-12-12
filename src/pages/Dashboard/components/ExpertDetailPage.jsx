import { useState } from "react";
import { ProposedExpert } from "./ProposedExpert";

export default function ExpertDetailPage({ data, onBack }) {
  // Demo Data (Safe Fallback)
  const safeData = data || {
    area: "Marketing", // [cite: 99]
    submitted: "14th Jun, 2025", // [cite: 101]
    engagement: "Fractional", // [cite: 102]
    status: "Requested", // [cite: 100]
    statusText: "Your expert is making an engagement plan for your business. Review the plan details once they are shared.", // [cite: 89]
    requirement: "Lorem ipsum dolor sit amet consectetur. Vel laoreet in amet pretium elementum convallis. Ut rhoncus malesuada fames eget ut in neque nam.", // [cite: 91]
    files: 5 // [cite: 93]
  };

  const [value, setValue] = useState(false);

  return (
    <div className="p-8 bg-white min-h-screen font-['IBM_Plex_Sans_Hebrew']">

      {/* --- TOP HEADER --- */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[24px] font-semibold text-[#1A1A1A]">
          Expert request title 
        </h1>

        <button
          onClick={onBack}
          className="px-6 py-2.5 bg-white text-[#2D60FF] rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition shadow-sm"
        >
          Back
        </button>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">

        {/* ================= LEFT SIDE (REQUEST CARD) ================= */}
        {/* [1.1, 1.2, 1.3, 1.4] Main Card Styling */}
        <div 
            className="border border-gray-100"
            style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0px 20px 50px 0px #2D60FF2E" // [1.4] Exact Shadow
            }}
        >
            
            {/* 1. HEADER SECTION */}
            <div className="flex items-start" style={{ gap: "16px" }}> {/* [2.4] Gap 16px */}
                
                {/* [2.1, 2.2, 2.3] Icon Box */}
                <div 
                    className="flex items-center justify-center shrink-0"
                    style={{
                        width: "54px",
                        height: "54px",
                        backgroundColor: "#87C09C", // [2.2]
                        borderRadius: "50px",       // [2.3] (User said 50)
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3V21H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 9L13.875 13.125L9.75 9L3 15.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                {/* Text Details */}
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        {/* [2.5] Title 24px Bold */}
                        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1A1A1A", lineHeight: "1.2" }}>
                            {safeData.area} 
                        </h2>
                    </div>
                     {/* [2.6] Badge */}
                     <div className="mt-1">
                        <span 
                            style={{
                                backgroundColor: "#BEE8C0", 
                                color: "#007C0C",
                                padding: "4px 16px", // [2.5] 16px horizontal padding
                                borderRadius: "100px",
                                fontSize: "12px",
                                fontWeight: "600",
                                display: "inline-block"
                            }}
                        >
                            {safeData.status} 
                        </span>
                     </div>
                </div>
            </div>

            {/* 2. DATES & TYPE [3.1, 3.2, 3.3, 3.4] */}
            {/* "thodi pudhi aahey" -> Indented to align with text, margin left approx 70px (54 icon + 16 gap) */}
            <div className="mt-6 flex flex-col" style={{ marginLeft: "70px", gap: "16px" }}> {/* [3.3] Gap 16px */}
                <p style={{ fontSize: "18px", color: "#2D2D2D" }}> {/* [3.1, 4.3] */}
                    <span style={{ fontWeight: "400" }}>Submitted on - </span>
                    <span style={{ fontWeight: "700" }}>{safeData.submitted}</span> {/* [3.2] Value Bold */}
                </p>
                <p style={{ fontSize: "18px", color: "#2D2D2D" }}>
                    <span style={{ fontWeight: "400" }}>Engagement type - </span>
                    <span style={{ fontWeight: "700" }}>{safeData.engagement}</span>
                </p>
            </div>

            {/* DIVIDER [4.4] */}
            <div className="w-full h-px my-6" style={{ backgroundColor: "#D5D8DC" }}></div>

            {/* 3. STATUS SECTION */}
            <div className="mb-6">
                <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#2D2D2D", marginBottom: "8px" }}> {/* [4.1, 4.3] */}
                    Status
                </h3>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "#2D2D2D", lineHeight: "1.6" }}> {/* [4.2] */}
                   {safeData.statusText} 
                </p>
            </div>

            {/* DIVIDER [4.4] */}
            <div className="w-full h-px my-6" style={{ backgroundColor: "#D5D8DC" }}></div>

            {/* 4. REQUIREMENT SECTION */}
            <div className="mb-6">
                <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#2D2D2D", marginBottom: "8px" }}>
                    Business requirement 
                </h3>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "#2D2D2D", lineHeight: "1.6" }}>
                    {safeData.requirement}  
                </p>

                {/* File Attachment [4.5] */}
                <div className="flex items-center gap-2 mt-4 cursor-pointer hover:opacity-80 transition w-fit">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#2D60FF", textDecoration: "underline" }}>
                        {safeData.files} files attached 
                    </span>
                </div>
            </div>

            {/* DIVIDER [4.4] */}
            <div className="w-full h-px my-6" style={{ backgroundColor: "#D5D8DC" }}></div>

            {/* 5. ACTIONS (Buttons) */}
            <div className="flex flex-col" style={{ gap: "16px" }}>
                
                {/* Edit Request Button [5.1, 5.2, 5.3, 5.6, 5.7] */}
                <button 
                    className="w-full flex items-center justify-center transition hover:opacity-90"
                    style={{
                        height: "48px",
                        backgroundColor: "#F3F9FF",
                        color: "#2D60FF",
                        borderRadius: "12px",
                        fontSize: "16px",
                        fontWeight: "600",
                        padding: "11px 27px",
                        border: "none"
                    }}
                >
                    Edit request 
                </button>

                {/* Delete Request Button [5.1, 5.2, 5.4, 5.6, 5.7] */}
                <button 
                    className="w-full flex items-center justify-center transition hover:opacity-90"
                    style={{
                        height: "48px",
                        backgroundColor: "#F3F9FF",
                        color: "#2D60FF", // User specifically asked for #2D60FF here
                        borderRadius: "12px",
                        fontSize: "16px",
                        fontWeight: "600",
                        padding: "11px 27px",
                        border: "none"
                    }}
                >
                    Delete request 
                </button>
            </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex flex-col gap-6">

          {/* RIGHT SIDE TOP BANNER */}
          <div className="bg-[#EEF2FF] border border-[#E0E7FF] rounded-2xl p-8">
              <h2 className="text-[20px] font-bold text-[#1A1A1A] mb-4">
                Curious About Your Consultant's Advice? 
              </h2>

              <ul className="space-y-3 mb-6">
                {[
                  "Instantly access detailed responses to your query.",
                  "Connect directly with consultants to discuss your solutions.",
                  "Streamline your decision-making with all information in one place."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px] text-gray-700 leading-[24px]">
                    <span className="w-2 h-2 rounded-full bg-[#2D60FF] mt-2 shrink-0"></span>
                    {item}  
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6">
                <button className="bg-[#2D60FF] text-white px-6 py-2.5 rounded-lg text-[14px] font-medium shadow-md hover:bg-blue-700 transition">
                  Upgrade to pro 
                </button>
                <button className="text-[#2D60FF] text-[14px] font-semibold hover:underline">
                  Learn more &gt; 
                </button>
              </div>
          </div>

          {/* CONDITIONAL RENDER */}
          {value ? (
            <ProposedExpert data={safeData} />
          ) : (
            <div className="bg-[#F8FAFC] border border-dashed border-gray-300 rounded-2xl h-[300px] flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 animate-pulse"></div>
                <p className="text-[16px] text-gray-800 font-medium mb-1">
                  We're assigning the most suitable expert based on the details you provided. 
                </p>
                <p className="text-[14px] text-gray-500">
                  Thank you for your patience.
                </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}