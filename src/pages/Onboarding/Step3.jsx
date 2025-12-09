export default function Step3({ formData, setFormData }) {
  const s = formData.step3;

  const update = (k, v) =>
    setFormData((p) => ({
      ...p,
      step3: { ...p.step3, [k]: v },
    }));

  return (
    <div className="w-full">

      <h1 className="text-[26px] font-semibold">Tell us more about your business operations</h1>
      <p className="text-gray-500 mt-1">This helps us understand your business context better.</p>

      <div className="flex flex-col gap-6 mt-8">

        {/* REVENUE */}
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Annual revenue (USD)"
          value={s.revenue}
          onChange={(e) => update("revenue", e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

        {/* EMPLOYEES */}
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Number of employees"
          value={s.employees}
          onChange={(e) => update("employees", e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

      </div>
    </div>
  );
}
