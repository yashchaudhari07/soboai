import { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// पेजेस
import Home from "./pages/Dashboard/Home"; 
import DashboardLayout from "./layouts/DashboardLayout";
import Experts from "./pages/Dashboard/Experts"; // Experts Page Import
import AIInsights from "./pages/Dashboard/AIInsights";
import Engagement from "./pages/Dashboard/Engagement";

// Dashboard Home (जर Experts पेज नसेल तर हे दिसेल)
const DashboardHome = () => (
  <div className="p-8 font-plex-hebrew">
    <h1 className="text-3xl font-bold text-[#2D60FF]">Welcome to Dashboard</h1>
    <p className="text-gray-500 mt-2">Select an option from the sidebar.</p>
  </div>
);

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
        {/* --- 1. SURVEY / ONBOARDING (No Sidebar) --- */}
        <Route 
          path="/" 
          element={<Home formData={formData} setFormData={setFormData} />} 
        />
        
        {/* --- 2. MAIN DASHBOARD (With Sidebar) --- */}
        <Route element={<DashboardLayout />}>
            
            {/* Dashboard वर बाय डीफॉल्ट Experts पेज दाखवूया किंवा Home */}
            <Route path="/dashboard" element={<Experts />} /> 
            
            <Route path="/experts" element={<Experts />} />
            <Route path="/ai-insight" element={<AIInsights />} />
            <Route path="/engagement" element={<Engagement />} />

        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;