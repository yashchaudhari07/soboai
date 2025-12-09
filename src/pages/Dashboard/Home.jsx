import React, { useState } from "react";
import SurveyScreen from "../Onboarding/SurveyScreen";

export default function Home() {
  const [start, setStart] = useState(false);

  if (start) {
    return <SurveyScreen />;   // <-- FULLSCREEN SURVEY (NO NAVIGATION)
  }

  return (
    <div className="flex flex-col items-center px-6 md:px-0 min-h-screen justify-center text-center">

      <div className="w-12 h-12 rounded-md bg-blue-600 mb-6"></div>

      <h1 className="text-3xl md:text-4xl font-bold">
        Welcome to <span className="text-blue-600">Sobo</span>
      </h1>

      <p className="text-gray-600 mt-2 max-w-xl">
        Connect businesses with expert insights for smarter growth
      </p>

      <button
        onClick={() => setStart(true)}
        className="mt-6 px-8 py-3 rounded-xl bg-blue-600 text-white shadow"
      >
        Start business onboarding
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

        <div>
          <div className="w-12 h-12 bg-blue-100 rounded-md mx-auto mb-4"></div>
          <h3 className="font-semibold">Personalized insight</h3>
          <p className="text-gray-500 text-sm">
            Get tailored recommendations based on your business profile
          </p>
        </div>

        <div>
          <div className="w-12 h-12 bg-blue-100 rounded-md mx-auto mb-4"></div>
          <h3 className="font-semibold">Expert Matching</h3>
          <p className="text-gray-500 text-sm">
            Connect with industry professionals in your areas of interest
          </p>
        </div>

        <div>
          <div className="w-12 h-12 bg-blue-100 rounded-md mx-auto mb-4"></div>
          <h3 className="font-semibold">Business Growth</h3>
          <p className="text-gray-500 text-sm">
            Scale smarter with data-driven strategies and expert guidance
          </p>
        </div>
      </div>
    </div>
  );
}
