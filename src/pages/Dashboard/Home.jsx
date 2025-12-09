import React, { useState } from "react";
import SurveyScreen from "../Onboarding/SurveyScreen";

export default function Home() {
  const [start, setStart] = useState(false);

  if (start) {
    return <SurveyScreen />; // FULLSCREEN, SAME AS BEFORE
  }

  return (
    <div
      className="
        flex flex-col items-center 
        px-4 sm:px-6 md:px-0 
        min-h-screen 
        justify-center 
        text-center
      "
    >

      {/* LOGO PLACEHOLDER */}
      <div className="w-12 h-12 rounded-md bg-blue-600 mb-6"></div>

      {/* HEADING */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
        Welcome to <span className="text-blue-600">Sobo</span>
      </h1>

      {/* SUBTEXT */}
      <p className="text-gray-600 mt-2 max-w-sm sm:max-w-md md:max-w-xl text-sm sm:text-base">
        Connect businesses with expert insights for smarter growth
      </p>

      {/* START BUTTON */}
      <button
        onClick={() => setStart(true)}
        className="
          mt-6 px-6 sm:px-8 py-3 
          rounded-xl 
          bg-blue-600 text-white 
          shadow 
          text-sm sm:text-base
        "
      >
        Start business onboarding
      </button>

      {/* FEATURES GRID */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-8 
          mt-16 sm:mt-20 
          w-full max-w-4xl
        "
      >

        {/* CARD 1 */}
        <div className="px-4 sm:px-0">
          <div className="w-12 h-12 bg-blue-100 rounded-md mx-auto mb-4"></div>
          <h3 className="font-semibold text-base">Personalized insight</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Get tailored recommendations based on your business profile
          </p>
        </div>

        {/* CARD 2 */}
        <div className="px-4 sm:px-0">
          <div className="w-12 h-12 bg-blue-100 rounded-md mx-auto mb-4"></div>
          <h3 className="font-semibold text-base">Expert Matching</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Connect with industry professionals in your areas of interest
          </p>
        </div>

        {/* CARD 3 */}
        <div className="px-4 sm:px-0">
          <div className="w-12 h-12 bg-blue-100 rounded-md mx-auto mb-4"></div>
          <h3 className="font-semibold text-base">Business Growth</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Scale smarter with data-driven strategies and expert guidance
          </p>
        </div>

      </div>
    </div>
  );
}
