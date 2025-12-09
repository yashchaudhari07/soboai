import { HashRouter as Router, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Dashboard/Home";
import SurveyScreen from "./pages/Onboarding/SurveyScreen";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<DashboardLayout />} />

        <Route path="/soboai-project" element={<Home />} />
      </Routes>
    </Router>
  );
}
