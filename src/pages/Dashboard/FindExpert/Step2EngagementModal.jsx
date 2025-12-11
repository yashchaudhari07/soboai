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
Designed for ambitious business owners and executives, this personalized program
offers one-on-one guidance to enhance strategic thinking, decision-making,
and communication skills. Achieve greater clarity, overcome obstacles, and
propel your professional growth with the dedicated support of an experienced executive coach.`,
    },
    Fractional: {
      title: "What is Fractional?",
      text: `Work with a fractional expert who supports your business on a part-time basis.
They help you scale operations, manage teams, and solve strategic problems.`,
    },
    Project: {
      title: "What is a Project engagement?",
      text: `A project-based engagement focuses on achieving a specific outcome within
a defined timeline, guided by an expert to ensure precise execution.`,
    },
  };

  const selected = CONTENT[active];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] p-4">

      {/* MODAL WRAPPER */}
      <div
        className="bg-white rounded-2xl shadow-xl relative flex flex-col"
        style={{
          width: "1050px",
          maxHeight: "85vh",      // FIXED HEIGHT
        }}
      >

        {/* ---------------- TOP HEADER (NON-SCROLLABLE) ---------------- */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-center border-b">
          <h2 className="text-[22px] font-semibold">Find an expert</h2>

          <button
            onClick={onClose}
            className="text-gray-500 text-[24px] hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* ---------------- SCROLLABLE BODY ---------------- */}
        <div
          className="px-8 py-6 overflow-y-auto"
          style={{
            maxHeight: "calc(85vh - 150px)",  // header + footer remove
          }}
        >

          {/* BACK BUTTON */}
     

          {/* STEP INFO */}
          <p className="text-[14px] text-[#2D60FF] font-medium mb-2">
            Step 2 of 2
          </p>

          <h1 className="text-[26px] font-bold mb-1">Choose an engagement</h1>

          <p className="text-[14px] text-gray-600 mb-6">
            Select an engagement type, how you want an expert to help you
          </p>

          {/* ---------------- MAIN GRID ---------------- */}
          <div className="grid grid-cols-[220px_1fr_260px] gap-10 border-y py-6">

            {/* -------- LEFT MENU -------- */}
            <div className="flex flex-col gap-4 border-r pr-4">
              {["Fractional", "Coaching", "Project"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setEngagement(item);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 border rounded-xl text-[15px]
                    ${
                      active === item
                        ? "bg-[#E8EFFF] border-[#2D60FF] text-[#2D60FF]"
                        : "bg-white border-gray-300 text-gray-700"
                    }`}
                >
                  <div className="w-[22px] h-[22px] bg-gray-300 rounded"></div>
                  {item}
                </button>
              ))}
            </div>

            {/* -------- MIDDLE CONTENT -------- */}
            <div className="border-r pr-6">
              <h3 className="font-semibold text-[16px] mb-2">
                {selected.title}
              </h3>

              <p className="text-[14px] text-gray-600 leading-[20px] whitespace-pre-line">
                {selected.text}
              </p>
            </div>

            {/* -------- RIGHT IMAGE BOX -------- */}
            <div className="flex justify-center">
              <div className="w-[240px] h-[250px] bg-gray-100 border rounded-xl flex items-center justify-center">
                <p className="text-gray-400">Image Here</p>
              </div>
            </div>
          </div>

          {/* ---------------- TEXT INPUT SECTION ---------------- */}
          <div className="pt-6">
            <h4 className="font-semibold text-[16px] mb-2">
              Describe your business need
            </h4>

            <label className="text-[13px] text-gray-700">
              Tell us your requirement *
            </label>

            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter details"
              className="w-full h-[90px] border rounded-xl px-3 py-2 text-sm mt-2 resize-none"
            ></textarea>

            {/* -------- FILE UPLOAD BOX -------- */}
            <div className="mt-6 border border-dashed rounded-xl h-[150px] flex flex-col items-center justify-center">
              <div className="text-[26px] text-gray-400 mb-1">⭳</div>

              <p className="text-gray-500">Drag and drop your files here</p>
              <p className="text-gray-500 text-[12px]">or</p>

              <div className="flex items-center gap-3 mt-2">
                <label
                  htmlFor="fileUpload"
                  className="px-4 py-2 bg-white border rounded-lg cursor-pointer text-sm"
                >
                  Choose file
                </label>
                <input id="fileUpload" type="file" className="hidden" />

                <span className="text-gray-500 text-sm">No file chosen</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- FOOTER BUTTONS (NON-SCROLLABLE) ---------------- */}
        <div className="px-8 py-4 border-t flex justify-between items-center bg-white">
          <button
            onClick={onBack}
            className="text-[#2D60FF] text-[15px] font-medium"
          >
            ← Back
          </button>

          <button
            onClick={onSubmit}
            className="px-6 py-2 bg-[#2D60FF] text-white rounded-xl text-[15px]"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}
