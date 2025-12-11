import { useState } from "react";
import { ProposedExpert } from "./ProposedExpert";

// FINAL CLEAN WORKING EXPERT DETAIL PAGE
export default function ExpertDetailPage({ data, onBack }) {
  const [value, setValue] = useState(false);
  if (!data) {
    return (
      <div className="p-6 text-red-600 font-semibold">
        Error: No expert data found.
      </div>
    );
  }

  return (
    <div className="p-6 rounded-lg min-h-screen bg-[#FFFFFF]" style={{ }}>

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[22px] font-semibold text-[#1A1A1A]">
          Expert request title
        </h1>

        <button
          onClick={onBack}
          className="px-5 py-2 bg-[#EEF2FF] text-[#2D60FF] rounded-lg font-medium border border-[#2D60FF]"
        >
          Back
        </button>
      </div>

      {/* MAIN 2-COLUMN GRID → 35% / 65% */}
      <div className="grid grid-cols-[35%_65%] gap-6">

        {/* ================= LEFT SIDE ================= */}
        <div>

          {/* CARD 1 — TOP INFO */}
          <div className="bg-white border rounded-xl p-6">

            {/* FIRST ROW */}
            <div className="flex items-start justify-between">

              {/* LEFT ICON + TITLE */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E6F4EC] flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#52C38E] rounded-sm"></div>
                </div>

                <div>
                  <h2 className="text-[20px] font-semibold text-[#1A1A1A]">
                    {data.area}
                  </h2>

                  <p className="mt-2 text-[14px] text-gray-600">
                    Submitted on –{" "}
                    <span className="font-semibold">{data.submitted}</span>
                  </p>

                  <p className="text-[14px] text-gray-600">
                    Engagement type –{" "}
                    <span className="font-semibold">{data.engagement}</span>
                  </p>
                </div>
              </div>

              {/* STATUS BADGE */}
              <span
                className="px-4 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor:
                    data.status === "Requested"
                      ? "#D4F3DB"
                      : data.status === "Rejected"
                        ? "#FFD4D4"
                        : "#E8EBFF",
                  color:
                    data.status === "Requested"
                      ? "#1D7A45"
                      : data.status === "Rejected"
                        ? "#B23434"
                        : "#2D60FF",
                }}
              >
                {data.status}
              </span>
            </div>

            {/* LINE */}
            <div className="w-full h-[1px] bg-gray-300 my-4"></div>

            {/* STATUS TEXT */}
            <p className="text-[14px] text-gray-700 leading-[22px]">
              <b>Status – </b>
              {data.statusText}
            </p>
            <hr style={{ marginTop: '30px', marginBottom: '30px' }}></hr>
            <h3 className="text-[16px] font-semibold mb-2">
              Business requirement
            </h3>

            <p className="text-[14px] text-gray-700 leading-[22px]">
              {data.requirement}
            </p>

            {/* FILES */}
            <div className="flex items-center gap-2 mt-4 text-[#2D60FF] cursor-pointer">
              <span className="text-[14px] underline">{data.files} files attached</span>

              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#2D60FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14" />
                <path d="M5 12l7 7 7-7" />
              </svg>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col gap-3">
              <button className="w-full py-3 rounded-xl bg-[#EEF2FF] text-[#2D60FF] font-medium text-[15px]">
                Edit request
              </button>

              <button className="w-full py-3 rounded-xl bg-[#2D60FF] text-white font-medium text-[15px]">
                Delete request
              </button>
            </div>
          </div>

          {/* CARD 2 — BUSINESS REQUIREMENT */}

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="bg-white border rounded-xl h-fit">

          <div
            className="rounded-xl border border-gray-200 p-8 bg-[#EEF2FF]"
            style={{ width: "100%", boxSizing: "border-box" }}
          >
            <div className="bg-red" style={{
              padding: '20px', borderRadius: '16px', backgroundColor: '#EEF2FF', margingTop: '16px', marginBottom: '16px'
            }}>{/* ---------- TOP TITLE ---------- */}
              <h2 className="text-[20px] font-semibold text-gray-900">
                Curious About Your Consultant's Advice?
              </h2>

              {/* ---------- BULLET POINTS ---------- */}
              <ul className="mt-4 space-y-3 text-[14px] text-gray-700 leading-[22px]">
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#2D60FF] rounded-full mt-[6px]"></span>
                  Instantly access detailed responses to your query.
                </li>

                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#2D60FF] rounded-full mt-[6px]"></span>
                  Connect directly with consultants to discuss your solutions.
                </li>

                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#2D60FF] rounded-full mt-[6px]"></span>
                  Streamline your decision-making with all information in one place.
                </li>
              </ul>

              {/* ---------- UPGRADE BUTTON ---------- */}
              <div className="mt-6">
                <button className="bg-[#2D60FF] text-white px-5 py-2 rounded-lg text-sm font-medium shadow-sm">
                  Upgrade to pro
                </button>
                <button className="ml-4 text-[#2D60FF] underline text-sm font-medium">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          {value ? <ProposedExpert data={data} /> :
            <div style={{height:'300px', marginTop:'20px', marginBottom:'20px', boxSizing:'border-box', backgroundColor:'#EEF2FF', borderRadius:'15px', position:'relative' , display:'flex', justifyContent:'center', alignItems:'center',}}>


              <div className="mt-8 text-center" style={{height:'100%', width:'100%', backgroundColor:'#EEF2FF', borderRadius:'15px' , position:'absolute', justifyContent:'center', alignItems:'center',}}>
                <p className="text-[14px] text-[#1B1B1B] leading-[22px] items-center">
                  We're assigning the most suitable expert based on the details you provided.
                </p>

                <p className="text-[14px] text-[#1B1B1B] leading-[22px] mt-2">
                  Thank you for your patience.
                </p>
              </div>

            </div>
          }
        </div>
      </div>
    </div>
  );
}
