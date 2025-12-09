import { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ReviewPage from "./ReviewPage";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import ProgressBar from "../../components/Common/ProgressBar.jsx";


export default function SurveyScreen() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);


  const [formData, setFormData] = useState({
    step1: { firstName: "", lastName: "", role: "", email: "", phone: "" },
    step2: { name: "", industry: "", city: "", state: "", website: "", desc: "", logo: "" },
    step3: { revenue: "", employees: "" },
    step4: { interest: "" },
  });

  // VALIDATION (No changes here)
  const isStepValid = () => {
    switch (step) {
      case 1: {
        const s = formData.step1;
        const phoneDigits = s.phone.replace(/\D/g, "").length;
        return (
          s.firstName &&
          s.lastName &&
          s.role &&
          s.email &&
          phoneDigits >= 10 
        );
      }

      case 2: {
        const s = formData.step2;
        return s.name && s.city && s.state && s.website;
      }

      case 3: {
        const s = formData.step3;
        return (
          s.revenue &&
          s.employees &&
          !isNaN(Number(s.revenue)) && 
          !isNaN(Number(s.employees)) &&
          Number(s.employees) > 0 
        );
      }

      case 4: {
        return formData.step4.interest !== "";
      }

      default:
        return false;
    }
  };

  const next = () => {
    if (!isStepValid()) return;
    if (step < 4) setStep(step + 1);
    else setStep("review");
  };

  const back = () => {
    if (step === 1) return;
    if (step === "review") return setStep(4);
    setStep(step - 1);
  };

  const goToStep = (target) => setStep(target);

  const finalSubmit = () => {
    alert("Profile submitted successfully!");
      navigate("/dashboard");
};

  if (step === "review") {
    return (
      <ReviewPage
        formData={formData}
        goToStep={goToStep}
        finalSubmit={finalSubmit}
      />
    );
  }
  if (completed) {
  return <DashboardLayout />;
}


  return (
    <div className="min-h-screen px-4 py-8 md:px-6 md:py-12 flex flex-col items-center">
      {/* CHANGED: px-6 py-12 -> px-4 py-8 md:px-6 md:py-12 (Less padding on mobile) */}
      <div className="w-full max-w-4xl">
        <ProgressBar step={step} />
      </div>

      <div className="w-full max-w-4xl mt-6 mb-10 md:mt-10 md:mb-16">
        {/* CHANGED: mt-10 mb-16 -> mt-6 mb-10 md:mt-10 md:mb-16 (Less vertical space on mobile) */}
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} />}
        {step === 3 && <Step3 formData={formData} setFormData={setFormData} />}
        {step === 4 && <Step4 formData={formData} setFormData={setFormData} />}
      </div>

      <div className="w-full max-w-4xl flex flex-col-reverse sm:flex-row justify-between gap-4">
        {/* CHANGED: Added flex-col-reverse and gap-4 to stack buttons on mobile */}
        
        <button
          onClick={back}
          disabled={step === 1}
          /* ADDED: w-full on mobile for easy tap */
          className="w-full sm:w-auto px-6 py-3 bg-[#F3F5FF] text-[#3C4DE8] rounded-lg disabled:opacity-40 transition hover:bg-[#e0e4ff]"
        >
          Back
        </button>

        <button
          onClick={next}
          disabled={!isStepValid()}
          /* ADDED: w-full on mobile for easy tap */
          className={`w-full sm:w-auto px-8 py-3 rounded-lg text-white transition ${
            isStepValid() ? "bg-[#3C64F4] hover:bg-[#3252d1]" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          {step === 4 ? "Review" : "Next"}
        </button>

      </div>
    </div>
  );
}