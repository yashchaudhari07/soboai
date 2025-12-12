// src/pages/Auth/SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  
  // States for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    // 1. Check for empty fields
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    // 2. Check password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // 3. (Optional) Email format validation regex logic can go here

    // Success -> Redirect to SignIn
    alert("Account created successfully! Please Sign In.");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-plex-hebrew px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#2D2D2D] text-center mb-6">Create Account</h2>
        
        {error && <p className="text-red-500 text-sm text-center mb-4 bg-red-50 p-2 rounded">{error}</p>}

        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
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
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-3 border border-[#DEDEDE] rounded-lg focus:outline-none focus:border-[#2D60FF]"
          />
          
          <button 
            type="submit"
            className="mt-4 py-3 bg-[#2D60FF] text-white rounded-xl font-medium hover:bg-[#1a4bd6] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-[#808080]">
          Already have an account? <span onClick={() => navigate("/signin")} className="text-[#2D60FF] cursor-pointer font-semibold">Sign In</span>
        </p>
      </div>
    </div>
  );
}