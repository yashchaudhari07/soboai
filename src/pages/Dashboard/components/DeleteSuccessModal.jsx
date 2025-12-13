import React from "react";

export default function DeleteSuccessModal({ isOpen, onOk }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000] p-4 font-plex-hebrew backdrop-blur-sm">
      
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[420px] p-8 flex flex-col items-center text-center">
        
        {/* Title */}
        <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-3">
          Request deleted!
        </h2>

        {/* Message */}
        <p className="text-[15px] text-gray-500 mb-8 leading-[24px]">
          You have deleted the request and will no longer be able to engage 
          with an expert on the same. <br/> Thank you!
        </p>

        {/* Okay Button */}
        <button
          onClick={onOk}
          className="w-full py-3 rounded-xl bg-[#2D60FF] text-white font-semibold text-[15px] shadow-md hover:bg-blue-700 transition-colors"
        >
          Okay
        </button>

      </div>
    </div>
  );
}