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
    <div className="w-full">

      {/* CHANGED: text-[26px] -> text-[22px] md:text-[26px] */}
      <h1 className="text-[22px] md:text-[26px] font-semibold text-gray-900">
        Let's start with your details
      </h1>

      <p className="text-gray-500 mt-1 text-sm md:text-base">
        These details help personalize your business onboarding experience.
      </p>

      {/* CHANGED: gap-6 -> gap-4 md:gap-6 (Less gap on mobile) */}
      {/* CHANGED: mt-8 -> mt-6 md:mt-8 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">

        <div>
          <label className="text-sm font-medium mb-1 block">First name *</label>
          <input
            value={s.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="Jane"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Last name *</label>
          <input
            value={s.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Jane"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Role *</label>
          <select
            value={s.role}
            onChange={(e) => update("role", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white"
          >
            <option value="">Select option ...</option>
            <option>Founder</option>
            <option>CEO</option>
            <option>Manager</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Email address *</label>
          <input
            value={s.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@example.com"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />
        </div>

      </div>

      {/* PHONE NUMBER */}
      <div className="mt-6">
        <label className="text-sm font-medium mb-1 block">Phone number *</label>

        <PhoneInput
          country="us"
          value={s.phone}
          onChange={(v) => update("phone", v)}
          enableSearch
          /* ADDED: containerClass="!w-full" ensures the component takes full width on mobile */
          containerClass="!w-full"
          /* ADDED: inputStyle to force 100% width and match height with other inputs */
          inputStyle={{ width: '100%', height: '48px' }}
          inputClass="!w-full !rounded-lg !border !border-gray-300"
          buttonClass="!bg-white !rounded-l-lg !border-gray-300"
          dropdownClass="!bg-white !text-gray-800"
        />
      </div>
    </div>
  );
}