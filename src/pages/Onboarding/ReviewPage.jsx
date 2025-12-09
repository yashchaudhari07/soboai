import { useState } from "react";
import ReviewCard from "../../components/ReviewCard";

export default function ReviewPage({ formData, goToStep, finalSubmit }) {
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  const canSubmit = agree1 && agree2;

  const s1 = formData.step1;
  const s2 = formData.step2;
  const s3 = formData.step3;
  const s4 = formData.step4;

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 bg-white">

      <div className="w-full max-w-3xl">

        {/* TITLE */}
        <h1 className="text-[26px] font-semibold text-gray-900">
          Almost done - review your details
        </h1>

        <p className="text-gray-500 mt-1">
          Please review your information and confirm to complete your profile
        </p>

        <div className="h-10"></div>


        {/* ===================== YOUR DETAILS ===================== */}
        <ReviewCard title="Your details." onEdit={() => goToStep(1)}>
          <div className="grid grid-cols-2 gap-y-4 text-sm">

            <div>
              <div className="text-gray-500">First name</div>
              <div className="font-medium text-gray-900">{s1.firstName}</div>
            </div>

            <div>
              <div className="text-gray-500">Last name</div>
              <div className="font-medium text-gray-900">{s1.lastName}</div>
            </div>

            <div>
              <div className="text-gray-500">Email</div>
              <div className="font-medium text-gray-900">{s1.email}</div>
            </div>

            <div>
              <div className="text-gray-500">Phone number</div>
              <div className="font-medium text-gray-900">{s1.phone}</div>
            </div>

            <div>
              <div className="text-gray-500">Role</div>
              <div className="font-medium text-gray-900">{s1.role}</div>
            </div>

          </div>
        </ReviewCard>


        <div className="h-8"></div>


        {/* ===================== BUSINESS DETAILS ===================== */}
        <ReviewCard title="Business details." onEdit={() => goToStep(2)}>
          <div className="grid grid-cols-2 gap-y-4 text-sm">

            <div>
              <div className="text-gray-500">Business name</div>
              <div className="font-medium text-gray-900">{s2.name}</div>
            </div>

            <div>
              <div className="text-gray-500">City</div>
              <div className="font-medium text-gray-900">{s2.city}</div>
            </div>

            <div>
              <div className="text-gray-500">State / Region</div>
              <div className="font-medium text-gray-900">{s2.state}</div>
            </div>

            <div>
              <div className="text-gray-500">Industry</div>
              <div className="font-medium text-gray-900">
                {s2.industry || "Not provided"}
              </div>
            </div>

            <div className="col-span-2">
              <div className="text-gray-500">Business website</div>
              <div className="font-medium text-gray-900">{s2.website}</div>
            </div>

          </div>
        </ReviewCard>


        <div className="h-8"></div>


        {/* ===================== COMPANY PROFILE ===================== */}
        <ReviewCard title="Company profile" onEdit={() => goToStep(3)}>
          <div className="grid grid-cols-2 gap-y-4 text-sm">

            <div>
              <div className="text-gray-500">Annual revenue (USD)</div>
              <div className="font-medium text-gray-900">{s3.revenue}</div>
            </div>

            <div>
              <div className="text-gray-500">Number of employees</div>
              <div className="font-medium text-gray-900">{s3.employees}</div>
            </div>

          </div>
        </ReviewCard>


        <div className="h-8"></div>


        {/* ===================== INTERESTS ===================== */}
        <ReviewCard title="Interests & preferences" onEdit={() => goToStep(4)}>
          <div className="grid grid-cols-2 gap-y-4 text-sm">

            <div>
              <div className="text-gray-500">Preferred insight category</div>
              <div className="font-medium text-gray-900">{s4.interest}</div>
            </div>

            <div>
              <div className="text-gray-500">Current challenges</div>
              <div className="font-medium text-gray-900">
                Not provided
              </div>
            </div>

          </div>
        </ReviewCard>


        <div className="h-10"></div>


        {/* ===================== CONSENT ===================== */}
        <div className="text-gray-800 font-semibold">Consent & Agreement</div>

        <div className="mt-4 space-y-3 text-sm">

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agree1}
              onChange={(e) => setAgree1(e.target.checked)}
              className="mt-1 w-4 h-4"
            />
            <span>I confirm that all information provided is accurate</span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agree2}
              onChange={(e) => setAgree2(e.target.checked)}
              className="mt-1 w-4 h-4"
            />
            <span>
              I agree to <a className="text-blue-600 underline">Sobo’s Terms of service</a> and{" "}
              <a className="text-blue-600 underline">Privacy policy</a>
            </span>
          </label>

        </div>

        {/* ===================== BUTTONS ===================== */}
        <div className="flex justify-between mt-12">
          <button className="px-6 py-3 bg-[#F3F5FF] text-[#3C4DE8] rounded-lg font-medium"
            onClick={() => goToStep(4)}
          >
            Back
          </button>

          <button
            disabled={!canSubmit}
            onClick={finalSubmit}
            className={`px-8 py-3 rounded-lg font-medium text-white transition
              ${canSubmit ? "bg-[#3C64F4]" : "bg-gray-300 cursor-not-allowed"}`}
          >
            Submit profile
          </button>
        </div>

      </div>
    </div>
  );
}
