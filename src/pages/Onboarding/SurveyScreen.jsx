import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3"; // जर फाईल असेल तर
import Step4 from "./Step4"; 

export default function SurveyScreen({ formData, setFormData }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // --- VALIDATION LOGIC ---
  const isStepValid = () => {
    // STEP 1 Validation (Mandatory)
    if (currentStep === 1) {
      const { firstName, lastName, role } = formData.step1 || {};
      return firstName && firstName.trim() !== "" &&
             lastName && lastName.trim() !== "" &&
             role && role.trim() !== "";
    }
    
    // STEP 2 Validation (Business Name Mandatory)
    if (currentStep === 2) {
      const { name } = formData.step2 || {};
      return name && name.trim() !== "";
    }

    // STEP 3 & 4 (Optional) - User can proceed without selection
    return true; 
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (isStepValid()) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        // Last Step -> Finish
        navigate("/dashboard");
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-plex-hebrew mt-6">
      
      {/* Progress Bar Section */}
      <div className="w-full max-w-3xl mx-auto px-6 pt-8 pb-4">
        <div className="flex justify-between items-end mb-3">
          <span className="text-sm font-medium text-gray-500">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-bold text-[#2D60FF]">
            {progressPercentage}% Complete
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#2D60FF] transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-4 px-4">
        <div className="w-full max-w-3xl">
          
          {/* STEP RENDER */}
          {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} />}
          {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} />}
          {currentStep === 3 && <Step3 formData={formData} setFormData={setFormData} />}
          {currentStep === 4 && <Step4 formData={formData} setFormData={setFormData} />}

        </div>

        {/* Navigation Buttons */}
        <div className="w-full max-w-3xl flex justify-between mt-10 mb-10 pt-6">
          
          {/* BACK BUTTON (Updated Style) */}
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`
              px-8 py-3 rounded-xl font-medium transition-colors
              ${currentStep === 1 
                ? "bg-gray-100 text-gray-300 cursor-not-allowed" 
                : "bg-[#F2F4FE] text-[#2D60FF] hover:bg-[#E0E7FF]"} 
            `}
          >
           Back
          </button>

          {/* NEXT / FINISH BUTTON */}
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`
              px-10 py-3 rounded-xl font-medium shadow-md transition-all
              ${!isStepValid()
                ? "bg-gray-300 text-white cursor-not-allowed opacity-70"
                : "bg-[#2D60FF] text-white hover:bg-[#1a4bd6] hover:shadow-lg"}
            `}
          >
            {currentStep === totalSteps ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}