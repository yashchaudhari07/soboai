import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Dashboard/Home";
import SurveyScreen from "./pages/Onboarding/SurveyScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
                <Route path="/soboai-project" element={<Home/>} />

        {/* Onboarding Survey */}
        <Route path="/" element={<Home/>} />

        {/* Dashboard after submit */}
        <Route path="/dashboard" element={<DashboardLayout />} />

      </Routes>
    </BrowserRouter>
  );
}

