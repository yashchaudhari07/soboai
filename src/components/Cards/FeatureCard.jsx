import React from "react";

/**
 * Simple feature card matching Figma look:
 * - small rounded square icon placeholder (light bluish)
 * - bold title
 * - description smaller
 */

export default function FeatureCard({ title, desc }) {
  return (
    <div className="w-full max-w-md md:max-w-sm">
      <div className="flex flex-col items-center px-4">
        <div className="w-full flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            {/* small rounded square icon */}
            <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center">
              {/* tiny icon circle as placeholder */}
              <div className="w-5 h-5 rounded-sm bg-blue-200"></div>
            </div>
            <h3 className="text-sm font-semibold">{title}</h3>
          </div>

          <p className="text-xs text-gray-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}
