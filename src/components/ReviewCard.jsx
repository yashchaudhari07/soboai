import React from "react";

export default function ReviewCard({ title, children, onEdit }) {
  return (
    <div className="
      w-full 
      border border-gray-200 
      rounded-xl 
      p-4 sm:p-6 
      relative 
      bg-white
      font-['IBM_Plex_Sans_Hebrew']
      shadow-sm
    ">
      
      {/* TITLE + EDIT HEADER */}
      <div className="
        flex flex-col sm:flex-row 
        justify-between sm:items-center 
        gap-3 sm:gap-4 mb-4
      ">
        {/* Title: Responsive Text Size */}
        <h3 className="font-semibold text-gray-900 text-[16px] sm:text-[18px] break-words leading-tight">
          {title}
        </h3>

        {/* Edit Button */}
        <button
          onClick={onEdit}
          className="
            self-start sm:self-auto
            flex items-center gap-2 
            px-4 py-2 
            rounded-lg 
            bg-[#F4F6FF] 
            text-[#3C4DE8] 
            font-medium 
            text-[14px]
            whitespace-nowrap
            hover:bg-[#E8EFFF] transition-colors
            active:scale-95
          "
        >
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-[#3C4DE8]"
          >
            <path d="M12 20h9" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M16.5 3.5a2.121 2.121 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          Edit
        </button>
      </div>

      {/* CHILD CONTENT */}
      <div className="mt-2 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
        {children}
      </div>

    </div>
  );
}