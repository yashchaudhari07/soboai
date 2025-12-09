import { useState } from "react";
import Step1BusinessAreaModal from "./Step1BusinessArea";
import Step2EngagementModal from "./Step2Engagement";
import SuccessModal from "./SuccessModal";

export default function FindExpertFlow({ open, onClose, onComplete }) {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState(null);
  const [engagement, setEngagement] = useState(null);
  const [details, setDetails] = useState("");

  // If modal is closed → render nothing
  if (!open) return null;

  // SUCCESS MODAL (FULLSCREEN RESPONSIVE)
  if (step === 3) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
        <SuccessModal
          onOk={() => {
            onComplete({
              area,
              engagement,
              details,
              status: "Requested",
              submitted: new Date(),
              statusText:
                "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
            });

            // Reset flow
            setStep(1);
            setArea(null);
            setEngagement(null);
            setDetails("");

            onClose();
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="
        fixed inset-0 
        z-[50]
        bg-black/40 
        backdrop-blur-sm
        flex items-center justify-center
        overflow-y-auto
        px-3 sm:px-4
      "
    >

      {/* STEP 1 */}
      {step === 1 && (
        <Step1BusinessAreaModal
          area={area}
          onSelect={(a) => setArea(a)}
          onNext={() => setStep(2)}
          onClose={onClose}
        />
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <Step2EngagementModal
          area={area}
          engagement={engagement}
          setEngagement={setEngagement}
          details={details}
          setDetails={setDetails}
          onSubmit={() => setStep(3)}
          onBack={() => setStep(1)}
          onClose={onClose}
        />
      )}
    </div>
  );
}
