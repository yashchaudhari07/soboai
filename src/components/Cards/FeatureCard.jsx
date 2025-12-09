import React from "react";

/**
 * Simple feature card matching Figma look:
 * Responsive improvements:
 * - Full width on mobile
 * - Auto-adjust max-width on tablet/desktop
 * - Icon + title wrap cleanly on small screens
 */

export default function FeatureCard({ title, desc }) {
  return (
    <div className="w-full max-w-full sm:max-w-md md:max-w-sm">
      <div className="flex flex-col items-center px-3 sm:px-4">
        <div className="w-full flex flex-col items-start gap-3 sm:gap-4">

          {/* ICON + TITLE */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* small rounded square icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-blue-50 flex items-center justify-center">
              {/* tiny icon placeholder */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm bg-blue-200"></div>
            </div>

            <h3 className="text-sm sm:text-sm font-semibold break-words">{title}</h3>
          </div>

          {/* DESCRIPTION */}
          <p className="text-xs sm:text-xs text-gray-500 leading-5">
            {desc}
          </p>

        </div>
      </div>
    </div>
  );
}
