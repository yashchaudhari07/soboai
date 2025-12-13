import React from "react";

export default function AcceptSuccessModal({ isOpen, onDashboard }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000] p-4 font-plex-hebrew backdrop-blur-sm">
      
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[480px] p-8 flex flex-col items-center text-center">
        
        {/* Title */}
        <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-3">
          Congratulations!
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>

        {/* Message */}
        <p className="text-[15px] text-gray-500 mb-8 leading-[24px]">
          You're going to dance! Your expert will be in touch shortly with your engagement plan.
        </p>

        {/* Back to Dashboard Button */}
        <button
          onClick={onDashboard}
          className="w-full py-3 rounded-xl bg-[#2D60FF] text-white font-semibold text-[15px] shadow-md hover:bg-blue-700 transition-colors"
        >
          Back to dashboard
        </button>

      </div>
    </div>
  );
}