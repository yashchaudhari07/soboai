import { useState } from "react";
import Step1BusinessAreaModal from "./Step1BusinessAreaModal";
import Step2EngagementModal from "./Step2EngagementModal";
import SuccessModal from "./SuccessModal";

export default function FindExpertFlow({ open, onClose, onComplete }) {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState(null);
  const [engagement, setEngagement] = useState("Coaching"); // Default as per PDF
  const [details, setDetails] = useState("");

  if (!open) return null;

  // STEP 3: SUCCESS
  if (step === 3) {
    return (
      <SuccessModal
        onOk={() => {
          onComplete({
            area,
            engagement,
            details,
            status: "Requested",
            submitted: new Date(),
          });
          // Reset
          setStep(1);
          setArea(null);
          setEngagement("Coaching");
          setDetails("");
          onClose();
        }}
      />
    );
  }

  // STEP 1: BUSINESS AREA
  if (step === 1) {
    return (
      <Step1BusinessAreaModal
        area={area}
        onSelect={(id) => setArea(id)}
        onNext={() => setStep(2)}
        onClose={onClose}
      />
    );
  }

  // STEP 2: ENGAGEMENT & FORM
  if (step === 2) {
    return (
      <Step2EngagementModal
        engagement={engagement}
        setEngagement={setEngagement}
        details={details}
        setDetails={setDetails}
        onSubmit={() => setStep(3)}
        onBack={() => setStep(1)}
        onClose={onClose}
      />
    );
  }

  return null;
}