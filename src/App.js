// src/App.js

import { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
        // नवीन SignIn file
import SurveyScreen from "./pages/Onboarding/SurveyScreen";
// --- Dashboard ---
import DashboardLayout from "./layouts/DashboardLayout";
import Experts from "./pages/Dashboard/Experts";
import AIInsights from "./pages/Dashboard/AIInsights";
import Engagement from "./pages/Dashboard/Engagement";
import SignIn from "./pages/Dashboard/SignIn";
import SignUp from "./pages/Dashboard/SignUp";
import FrontPage from "./pages/Dashboard/FrontPage";
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  const [formData, setFormData] = useState({
    step1: {},
    step2: { logo: null },
    step3: {},
    step4: {},
  });

  return (
    <Router>
      <Routes>
        {/* 1. Website Landing Page */}
        <Route path="/" element={<FrontPage />} />
        
        {/* 2. Authentication Flow */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* 3. Onboarding (Survey) - फक्त Login झाल्यावर इथे यायचे */}
        <Route 
          path="/onboarding" 
          element={<SurveyScreen formData={formData} setFormData={setFormData} />} 
        />
        
        {/* 4. Dashboard (Future Steps) */}
        <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard/>} /> 
            <Route path="/experts" element={<Experts />} />
            <Route path="/ai-insight" element={<AIInsights />} />
            <Route path="/engagement" element={<Engagement />} />
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;