import { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Dashboard/Home"; // Wizard / Onboarding
import DashboardLayout from "./layouts/DashboardLayout";
import AIInsights from "./pages/Dashboard/AIInsights";
import Experts from "./pages/Dashboard/Experts";
import Engagement from "./pages/Dashboard/Engagement";

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
        {/* Route 1: Onboarding Wizard (No Sidebar) */}
        <Route 
          path="/" 
          element={<Home formData={formData} setFormData={setFormData} />} 
        />
        
        {/* Route 2: Main Dashboard Layout (With Sidebar) */}
        {/* We wrap all dashboard pages inside DashboardLayout */}
        <Route element={<DashboardLayout formData={formData} />}>
            
            {/* Default redirect to Experts or Dashboard */}
            <Route path="/dashboard" element={<div className="text-[#2D60FF] text-2xl font-bold">Dashboard Home Coming Soon...</div>} />
            
            <Route path="/experts" element={<Experts />} />
            
            <Route path="/ai-insight" element={<AIInsights />} />
            
            <Route path="/engagement" element={<Engagement />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;