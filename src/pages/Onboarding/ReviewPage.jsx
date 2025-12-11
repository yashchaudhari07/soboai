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
    <div className="min-h-screen flex flex-col items-center px-4 py-8 md:px-8 md:py-12 bg-white font-plex-hebrew">
      <div className="w-full max-w-3xl">

        {/* HEADER */}
        <h1 className="text-[22px] md:text-[26px] font-semibold text-gray-900 leading-tight">
          Almost done - review your details
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base leading-relaxed">
          Please review your information and confirm to complete your profile
        </p>

        <div className="h-6 md:h-8"></div>

        {/* ===================== PROFILE PHOTO ===================== */}
        <ReviewCard title="Profile photo" onEdit={() => goToStep(2)}>
          <div className="flex items-center gap-4">

            {/* Circular Avatar Container */}
            <div className="w-16 h-16 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center flex-shrink-0">
              {s2.logo ? (
                <img
                  src={s2.logo instanceof File ? URL.createObjectURL(s2.logo) : s2.logo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              )}
            </div>

            {/* Description Text */}
            <div>
              <h2 className="font-semibold text-gray-900 text-sm md:text-base">Profile Photo</h2>
              <p className="text-[#262626] text-xs md:text-sm mt-0.5">
                Upload professional headshot
              </p>
            </div>

          </div>
        </ReviewCard>

        <div className="h-6 md:h-8"></div>

        {/* ===================== YOUR DETAILS ===================== */}
        <ReviewCard title="Your details." onEdit={() => goToStep(1)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-6 text-[14px]">
            <div>
              <div className="text-gray-500 mb-1">First name</div>
              <div className="font-medium text-gray-900 break-words">{s1.firstName}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Last name</div>
              <div className="font-medium text-gray-900 break-words">{s1.lastName}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Email</div>
              <div className="font-medium text-gray-900 break-all">{s1.email}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Phone number</div>
              <div className="font-medium text-gray-900">{s1.phone}</div>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <div className="text-gray-500 mb-1">Role</div>
              <div className="font-medium text-gray-900 break-words">{s1.role}</div>
            </div>
          </div>
        </ReviewCard>

        <div className="h-6 md:h-8"></div>

        {/* ===================== BUSINESS DETAILS ===================== */}
        <ReviewCard title="Business details." onEdit={() => goToStep(2)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-6 text-[14px]">
            <div>
              <div className="text-gray-500 mb-1">Business name</div>
              <div className="font-medium text-gray-900 break-words">{s2.name}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">State / Region</div>
              <div className="font-medium text-gray-900 break-words">{s2.state}</div>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <div className="text-gray-500 mb-1">Business website</div>
              <div className="font-medium text-gray-900 break-all">{s2.website}</div>
            </div>
          </div>
        </ReviewCard>

        <div className="h-6 md:h-8"></div>

        {/* ===================== COMPANY PROFILE ===================== */}
        <ReviewCard title="Company profile" onEdit={() => goToStep(3)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-6 text-[14px]">
            <div>
              <div className="text-gray-500 mb-1">Annual revenue (USD)</div>
              <div className="font-medium text-gray-900">{s3.revenue}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Number of employees</div>
              <div className="font-medium text-gray-900">{s3.employees}</div>
            </div>
          </div>
        </ReviewCard>

        <div className="h-6 md:h-8"></div>

        {/* ===================== INTERESTS & PREFERENCES ===================== */}
        <ReviewCard title="Interests & preferences" onEdit={() => goToStep(4)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-6 text-[14px]">
            <div>
              <div className="text-gray-500 mb-1">City</div>
              <div className="font-medium text-gray-900 break-words">{s2.city || "Not provided"}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Industry</div>
              <div className="font-medium text-gray-900 break-words">{s2.industry || "Not provided"}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Preferred insight frequency</div>
              <div className="font-medium text-gray-900">{s4.interest || "One-time"}</div>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <div className="text-gray-500 mb-1">Current challenges</div>
              <div className="font-medium text-gray-900 break-words">Not provided</div>
            </div>
          </div>
        </ReviewCard>

        <div className="h-8 md:h-10"></div>

        {/* ===================== CONSENT ===================== */}
        <div className="text-gray-900 font-semibold text-base">Consent & Agreement</div>

        <div className="mt-4 space-y-4 text-sm text-gray-600">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agree1}
              onChange={(e) => setAgree1(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 flex-shrink-0"
            />
            <span>I confirm that all information provided is accurate</span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agree2}
              onChange={(e) => setAgree2(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 flex-shrink-0"
            />
            <span>
              I agree to <a href="#" className="text-blue-600 hover:underline">Sobo’s Terms of service</a> and{" "}
              <a href="#" className="text-blue-600 hover:underline">Privacy policy</a>
            </span>
          </label>
        </div>

        {/* ===================== BUTTONS ===================== */}
        {/* Responsive Flex: Stack on mobile (Reverse), Row on Desktop */}
        <div className="flex flex-col-reverse sm:flex-row justify-between mt-8 md:mt-12 gap-4 sm:gap-0">
          <button
            className="w-full sm:w-auto px-6 py-3 bg-gray-50 text-blue-600 rounded-lg font-semibold text-sm transition hover:bg-gray-100 border border-transparent active:scale-95"
            onClick={() => goToStep(4)}
          >
            Back
          </button>

          <button
            disabled={!canSubmit}
            onClick={finalSubmit}
            className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-sm text-white transition shadow-sm active:scale-95
              ${canSubmit ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"}`}
          >
            Submit profile
          </button>
        </div>

      </div>
    </div>
  );
}