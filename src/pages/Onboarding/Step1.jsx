import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Step1({ formData, setFormData }) {
  const s = formData.step1;

  const update = (k, v) =>
    setFormData((p) => ({
      ...p,
      step1: { ...p.step1, [k]: v },
    }));

  return (
    <div className="w-full font-plex-hebrew">

      {/* HEADER */}
      <h1 className="text-[22px] md:text-[26px] font-semibold text-gray-900 leading-tight">
        Let's start with your details
      </h1>

      <p className="text-gray-500 mt-2 text-[14px] md:text-[16px]">
        These details help personalize your business onboarding experience.
      </p>

      {/* FORM GRID */}
      {/* Mobile: 1 Col | Desktop: 2 Cols */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-8">

        {/* First Name */}
        <div>
          <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">First name *</label>
          <input
            value={s.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="Jane"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">Last name *</label>
          <input
            value={s.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Doe"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

        {/* Role */}
        <div>
          <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">Role *</label>
          <div className="relative">
            <select
              value={s.role}
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

        {/* Email */}
        <div>
          <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">Email address *</label>
          <input
            value={s.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@example.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

      </div>

      {/* PHONE NUMBER (Full Width) */}
      <div className="mt-5 md:mt-6">
        <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">Phone number *</label>

        <PhoneInput
          country="us"
          value={s.phone}
          onChange={(v) => update("phone", v)}
          enableSearch
          
          /* Full width container */
          containerClass="!w-full"
          
          /* Input Styling to match other inputs */
          inputStyle={{ 
            width: '100%', 
            height: '48px', 
            fontSize: '15px', 
            backgroundColor: '#FCFCFC',
            borderRadius: '0.75rem', // rounded-xl
            border: '1px solid #d1d5db' // gray-300
          }}
          
          /* Button (Flag) Styling */
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