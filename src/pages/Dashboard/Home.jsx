import React, { useState } from "react";
import SurveyScreen from "../Onboarding/SurveyScreen";

// CHANGE 1: Accept formData and setFormData as props
export default function Home({ formData, setFormData }) {
  const [start, setStart] = useState(false);

  if (start) {
    // CHANGE 2: Pass these props down to the SurveyScreen
    return <SurveyScreen formData={formData} setFormData={setFormData} />;
  }

  return (
    <div
      className="
        flex flex-col items-center 
        justify-center 
        min-h-screen 
        bg-white 
        px-6 py-12 md:px-0
        text-center
        font-plex-hebrew
      "
    >

      {/* LOGO PLACEHOLDER */}
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#2D60FF] mb-6 md:mb-8 shadow-lg shadow-blue-200"></div>

      {/* HEADING */}
      <h1 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold leading-tight text-gray-900">
        Welcome to <span className="text-[#2D60FF]">Sobo</span>
      </h1>

      {/* SUBTEXT */}
      <p className="text-gray-500 mt-3 md:mt-4 max-w-[300px] sm:max-w-md md:max-w-xl text-[15px] sm:text-[16px] leading-relaxed mx-auto">
        Connect businesses with expert insights for smarter growth
      </p>

      {/* START BUTTON */}
      <button
        onClick={() => setStart(true)}
        className="
          mt-8 md:mt-10 
          w-full sm:w-auto
          px-8 py-3.5 
          rounded-xl 
          bg-[#2D60FF] text-white 
          font-medium text-[16px]
          shadow-lg shadow-blue-500/30
          hover:bg-blue-700 transition-transform active:scale-95
        "
      >
        Start business onboarding
      </button>

      {/* FEATURES GRID */}
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-8 md:gap-12
          mt-16 md:mt-24 
          w-full max-w-md md:max-w-5xl
          mx-auto
        "
      >

        {/* CARD 1 */}
        <div className="flex flex-col items-center px-4 md:px-0">
          <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl mx-auto mb-4 flex items-center justify-center">
             {/* Icon Placeholder */}
             <div className="w-6 h-6 bg-[#2D60FF] rounded-full opacity-20"></div>
          </div>
          <h3 className="font-semibold text-[16px] text-gray-900 mb-2">Personalized insight</h3>
          <p className="text-gray-500 text-[14px] leading-relaxed">
            Get tailored recommendations based on your business profile
          </p>
        </div>

        {/* CARD 2 */}
        <div className="flex flex-col items-center px-4 md:px-0">
          <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl mx-auto mb-4 flex items-center justify-center">
             <div className="w-6 h-6 bg-[#2D60FF] rounded-full opacity-20"></div>
          </div>
          <h3 className="font-semibold text-[16px] text-gray-900 mb-2">Expert Matching</h3>
          <p className="text-gray-500 text-[14px] leading-relaxed">
            Connect with industry professionals in your areas of interest
          </p>
        </div>

        {/* CARD 3 */}
        <div className="flex flex-col items-center px-4 md:px-0">
          <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl mx-auto mb-4 flex items-center justify-center">
             <div className="w-6 h-6 bg-[#2D60FF] rounded-full opacity-20"></div>
          </div>
          <h3 className="font-semibold text-[16px] text-gray-900 mb-2">Business Growth</h3>
          <p className="text-gray-500 text-[14px] leading-relaxed">
            Scale smarter with data-driven strategies and expert guidance
          </p>
        </div>

      </div>
    </div>
  );
}