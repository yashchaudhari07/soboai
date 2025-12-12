// src/pages/Dashboard/components/ExpertsBanner.jsx
import React from "react";

export default function ExpertsBanner({ onFind }) {
  return (
    // Change: py-8 वापरले आहे (साईज कमी करण्यासाठी)
    <div className="relative w-full bg-[#2D60FF] rounded-2xl overflow-hidden px-6 py-8 md:py-10 flex flex-col items-center justify-center text-center font-plex-hebrew shadow-sm">
      
      {/* --- BACKGROUND RINGS (Top Left) --- */}
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30">
        <Rings />
      </div>

      {/* --- BACKGROUND RINGS (Bottom Right) --- */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 pointer-events-none opacity-30">
        <Rings />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Text Size Reduced */}
        <p className="text-white text-sm md:text-[15px] font-normal leading-relaxed tracking-wide">
          Share your challenges with us, and our experts will work closely with you
          <br className="hidden md:block" />
          to provide tailored solutions that meet your needs.
        </p>

        {/* Button Size Reduced */}
        <button
          onClick={onFind}
          className="mt-6 bg-white text-[#2D60FF] px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 mx-auto transition-transform hover:scale-105 shadow-sm active:scale-95"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Find an expert
        </button>
      </div>
    </div>
  );
}

// Helper component: Rings Sizes Reduced significantly
function Rings() {
  // साईज कमी केल्या आहेत (320px Max)
  const sizes = [320, 270, 220, 170, 120, 70];
  
  return (
    <div className="relative flex items-center justify-center">
      {sizes.map((size, index) => (
        <div
          key={index}
          className="absolute rounded-full border border-white box-border"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      ))}
    </div>
  );
}