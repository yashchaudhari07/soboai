import React from "react";

/**
 * Responsive Feature Card
 * - Mobile: Compact text and spacing
 * - Desktop: Larger fonts and comfortable spacing
 */

export default function FeatureCard({ title, desc }) {
  return (
    <div className="w-full h-full font-plex-hebrew ">
      <div className="flex flex-col items-start">
        
        {/* Main Content Container */}
        <div className="w-full flex flex-col items-start gap-3 md:gap-4">

          {/* ICON + TITLE ROW */}
          <div className="flex items-center gap-3 md:gap-4 w-full">

            {/* Icon Box: Responsive W/H */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              {/* Tiny Icon Placeholder */}
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-sm bg-blue-200"></div>
            </div>

            {/* Title: Scales with screen size */}
            <h3 className="text-[14px] md:text-[16px] font-semibold text-gray-900 leading-tight break-words">
              {title}
            </h3>
          </div>

          {/* DESCRIPTION */}
          {/* Increased readability on larger screens */}
          <p className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed">
            {desc}
          </p>

        </div>
      </div>
    </div>
  );
}