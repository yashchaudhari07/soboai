// src/pages/Auth/SignIn.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    // 1. Basic Validation
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    // 2. Mock Record Check (Backend verification logic would go here)
    // उदाहरण: आपण मानूया की login successful झाले.
    // Real app मध्ये इथे API call करून response check केला जाईल.
    
    console.log("Checking records for:", email);
    
    // If success:
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-plex-hebrew px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#2D2D2D] text-center mb-6">Sign In</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4 bg-red-50 p-2 rounded">{error}</p>}

        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-[#DEDEDE] rounded-lg focus:outline-none focus:border-[#2D60FF]"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-[#DEDEDE] rounded-lg focus:outline-none focus:border-[#2D60FF]"
          />
          
          <button 
            type="submit"
            className="mt-4 py-3 bg-[#2D60FF] text-white rounded-xl font-medium hover:bg-[#1a4bd6] transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-[#808080]">
          Don't have an account? <span onClick={() => navigate("/signup")} className="text-[#2D60FF] cursor-pointer font-semibold">Sign Up</span>
        </p>
      </div>
    </div>
  );
}