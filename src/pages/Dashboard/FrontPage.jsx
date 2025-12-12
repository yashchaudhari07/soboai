// src/pages/Landing/FrontPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function FrontPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-white font-plex-hebrew">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-20 sm:mt-28 max-w-5xl">
        <div className="w-16 h-16 bg-[#2D60FF] rounded-xl mb-8 shadow-lg"></div>

        <h1 className="text-4xl sm:text-6xl font-bold text-[#2D2D2D]">
          Welcome to <span className="text-[#2D60FF]">Sobo</span>
        </h1>
        <p className="mt-4 text-[#808080] text-lg max-w-2xl">
          Connect businesses with expert insights for smarter growth
        </p>

        {/* Start Button -> Goes to SignUp */}
        <button
          onClick={() => navigate("/signup")} 
          className="mt-10 px-8 py-4 bg-[#2D60FF] text-white text-lg font-medium rounded-2xl shadow-lg hover:bg-[#1a4bd6] transition-transform transform hover:scale-105"
        >
          Start business onboarding
        </button>
      </div>
      
      {/* Features Grid (Previous code same here...) */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl pb-20">
         {/* Cards Content Same as before */}
         <div className="text-center p-4">
            <div className="w-12 h-12 bg-[#EEF2FF] mx-auto mb-4 rounded-full"></div>
            <h3 className="font-semibold">Personalized insight</h3>
         </div>
         <div className="text-center p-4">
            <div className="w-12 h-12 bg-[#EEF2FF] mx-auto mb-4 rounded-full"></div>
            <h3 className="font-semibold">Expert Matching</h3>
         </div>
         <div className="text-center p-4">
            <div className="w-12 h-12 bg-[#EEF2FF] mx-auto mb-4 rounded-full"></div>
            <h3 className="font-semibold">Business Growth</h3>
         </div>
      </div>
    </div>
  );
}