import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default function OnboardingContainer({ close }) {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    // Added 'p-4' so the modal doesn't touch the screen edges on mobile
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 font-plex-hebrew">
      
      {/* CHANGED: p-8 -> p-5 md:p-8 */}
      {/* Reduced padding on mobile (p-5) so the content gets more space */}
      <div className="bg-white w-full max-w-4xl rounded-xl p-5 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        <ProgressBar step={step} />

        <div className="mt-4">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-6 md:mt-8 items-center">
          <button
            className="px-5 py-3 bg-gray-100 rounded-lg text-gray-700 text-sm md:text-base transition hover:bg-gray-200"
            onClick={step === 1 ? close : back}
          >
            {step === 1 ? "Close" : "Back"}
          </button>

          <div className="flex items-center gap-3">
            {step < 4 ? (
              <button
                onClick={next}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm md:text-base transition hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={close}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm md:text-base transition hover:bg-blue-700"
              >
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}