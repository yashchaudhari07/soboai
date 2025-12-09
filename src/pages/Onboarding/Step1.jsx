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

      <h1 className="text-[26px] font-semibold text-gray-900">
        Let's start with your details
      </h1>

      <p className="text-gray-500 mt-1">
        These details help personalize your business onboarding experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        <div>
          <label className="text-sm font-medium">First name *</label>
          <input
            value={s.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="Jane"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Last name *</label>
          <input
            value={s.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Jane"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Role *</label>
          <select
            value={s.role}
            onChange={(e) => update("role", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          >
            <option value="">Select option ...</option>
            <option>Founder</option>
            <option>CEO</option>
            <option>Manager</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Email address *</label>
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
        <label className="text-sm font-medium">Phone number *</label>

        <PhoneInput
          country="us"
          value={s.phone}
          onChange={(v) => update("phone", v)}
          enableSearch
          inputClass="!w-full !py-3 !rounded-lg !border !border-gray-300"
          buttonClass="!bg-white"
          dropdownClass="!bg-white !text-gray-800"
        />
      </div>
    </div>
  );
}
