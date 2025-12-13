import React from "react";

export default function SuccessModal({ onOk }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] p-4 font-plex-hebrew backdrop-blur-sm">

      {/* CENTER WHITE MODAL */}
      <div className="bg-white rounded-2xl shadow-xl text-center px-10 py-8 w-full max-w-[520px]">
        
        {/* TITLE */}
        <h2 className="text-[22px] font-semibold mb-3 text-[#1A1A1A]">
          Congratulations!
        </h2>

        {/* SMALL DIVIDER */}
        <div className="w-full h-px bg-gray-200 mb-4"></div>

        {/* MESSAGE */}
        <p className="text-[15px] text-gray-700 leading-[22px] mb-8">
          Sending your matching request out to our top 1% experts.
        </p>

        {/* OKAY BUTTON */}
        <button
          onClick={onOk}
          className="px-8 py-2.5 bg-[#2D60FF] text-white rounded-xl text-[15px] font-semibold hover:bg-blue-700 transition-colors shadow-sm"
        >
          Okay
        </button>
      </div>
    </div>
  );
}