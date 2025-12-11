import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ReviewPage from "./ReviewPage";
import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import ProgressBar from "../../components/Common/ProgressBar.jsx";

export default function SurveyScreen({ formData: initialData }) {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);

  // If initialData is not provided, use default state (useful for direct access)
  const [formData, setFormData] = useState(initialData || {
    step1: { firstName: "", lastName: "", role: "", email: "", phone: "" },
    step2: { name: "", industry: "", city: "", state: "", website: "", desc: "", logo: "" },
    step3: { revenue: "", employees: "" },
    step4: { interest: "" },
  });

  // VALIDATION LOGIC
  const isStepValid = () => {
    switch (step) {
      case 1: {
        const s = formData.step1;
        // Basic check for digits
        const phoneDigits = s.phone ? s.phone.replace(/\D/g, "").length : 0;
        return (
          s.firstName && s.lastName && s.role && s.email && phoneDigits >= 10
        );
      }
      case 2: {
        const s = formData.step2;
        return s.name && s.city && s.state && s.website;
      }
      case 3: {
        const s = formData.step3;
        // Check if revenue/employees exist and are valid numbers (if required)
        // Simplified check: just ensure they are not empty for now
        return s.revenue && s.employees;
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
    // In a real app, you would submit formData to backend here
    alert("Profile submitted successfully!");
    setCompleted(true);
    navigate("/dashboard");
  };

  // --- RENDER LOGIC ---

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
    // If completed, maybe show loading or redirect (already handled by navigate)
    return <DashboardLayout formData={formData} />;
  }

  return (
    <div className="min-h-screen px-4 py-8 md:px-8 md:py-12 bg-white font-plex-hebrew flex flex-col items-center">
      
      {/* PROGRESS BAR */}
      <div className="w-full max-w-3xl">
        <ProgressBar step={step} />
      </div>

      {/* FORM STEPS CONTENT */}
      <div className="w-full max-w-3xl mt-8 mb-10 md:mt-12 md:mb-16">
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} />}
        {step === 3 && <Step3 formData={formData} setFormData={setFormData} />}
        {step === 4 && <Step4 formData={formData} setFormData={setFormData} />}
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="w-full max-w-3xl flex flex-col-reverse sm:flex-row justify-between gap-4 sm:gap-0">
        
        {/* Back Button */}
        <button
          onClick={back}
          disabled={step === 1}
          className={`
            w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-[15px] transition active:scale-95
            ${step === 1 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-0 sm:opacity-100" // Hide on mobile if disabled
                : "bg-[#F3F5FF] text-[#2D60FF] hover:bg-[#E8EFFF]"
            }
          `}
        >
          Back
        </button>

        {/* Next/Review Button */}
        <button
          onClick={next}
          disabled={!isStepValid()}
          className={`
            w-full sm:w-auto px-8 py-3 rounded-xl font-medium text-[15px] text-white transition shadow-sm active:scale-95
            ${isStepValid() 
                ? "bg-[#2D60FF] hover:bg-blue-700" 
                : "bg-gray-300 cursor-not-allowed"
            }
          `}
        >
          {step === 4 ? "Review" : "Next"}
        </button>

      </div>
    </div>
  );
}