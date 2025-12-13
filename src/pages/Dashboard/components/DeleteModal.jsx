import React from "react";

export default function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] p-4 font-plex-hebrew backdrop-blur-sm">
      
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[400px] p-6 flex flex-col items-center text-center">
        
        {/* Title */}
        <h2 className="text-[20px] font-bold text-[#1A1A1A] mb-2">
          Delete request!
        </h2>

        {/* Message */}
        <p className="text-[14px] text-gray-500 mb-8 leading-relaxed">
          Are you sure you want to delete the request?
        </p>

        {/* Buttons Row */}
        <div className="flex items-center gap-4 w-full">
          
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          {/* Yes Button (Red/Danger) */}
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl bg-[#2D60FF] text-white font-semibold shadow-md hover:bg-blue-700 transition-colors"
          >
            Yes
          </button>
        </div>

      </div>
    </div>
  );
}