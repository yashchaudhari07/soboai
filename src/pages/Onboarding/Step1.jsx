import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Step1({ formData, setFormData }) {
  const s = formData.step1;

  // Function to update state
  const update = (k, v) =>
    setFormData((p) => ({
      ...p,
      step1: { ...p.step1, [k]: v },
    }));

  return (
    <div className="w-full font-plex-hebrew">

      {/* HEADER */}
      <h1 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-gray-900 leading-tight">
        Let's start with your details
      </h1>

      <p className="text-gray-500 mt-2 text-sm sm:text-base">
        These details help personalize your business onboarding experience.
      </p>

      {/* FORM GRID */}
      {/* Mobile: 1 Column | Desktop: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-8">

        {/* First Name (Mandatory) */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">
            First name <span className="text-[#FF4D4F]">*</span>
          </label>
          <input
            value={s.firstName || ""}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="Jane"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

        {/* Last Name (Mandatory) */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">
            Last name <span className="text-[#FF4D4F]">*</span>
          </label>
          <input
            value={s.lastName || ""}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Doe"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

        {/* Role (Mandatory) */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">
            Role <span className="text-[#FF4D4F]">*</span>
          </label>
          <div className="relative">
            <select
              value={s.role || ""}
              onChange={(e) => update("role", e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors appearance-none text-gray-700"
            >
              <option value="">Select option ...</option>
              <option>Founder</option>
              <option>CEO</option>
              <option>Manager</option>
              <option>Other</option>
            </select>
            {/* Custom Arrow Icon */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L6 6L11 1"/></svg>
            </div>
          </div>
        </div>

        {/* Email (OPTIONAL - No Red Star) */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">
            Email address <span className="text-gray-400 font-normal ml-1 text-xs"></span>
          </label>
          <input
            value={s.email || ""}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@example.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

      </div>

      {/* PHONE NUMBER (OPTIONAL - No Red Star) */}
      <div className="mt-5 md:mt-6">
        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
          Phone number <span className="text-gray-400 font-normal ml-1 text-xs"></span>
        </label>

        <PhoneInput
          country="us"
          value={s.phone || ""}
          onChange={(v) => update("phone", v)}
          enableSearch
          
          /* Full width container */
          containerClass="!w-full"
          
          /* Input Styling */
          inputStyle={{ 
            width: '100%', 
            height: '48px', 
            fontSize: '15px', 
            backgroundColor: '#FCFCFC',
            borderRadius: '0.75rem', 
            border: '1px solid #d1d5db' 
          }}
          
          /* Flag Button Styling */
          buttonStyle={{
            backgroundColor: '#FCFCFC',
            borderColor: '#d1d5db',
            borderTopLeftRadius: '0.75rem',
            borderBottomLeftRadius: '0.75rem'
          }}
          
          /* Dropdown Styling */
          dropdownClass="!bg-white !text-gray-800 !rounded-xl !shadow-lg"
        />
      </div>
    </div>
  );
}