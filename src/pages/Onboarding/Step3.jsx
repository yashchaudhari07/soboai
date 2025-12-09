export default function Step3({ formData, setFormData }) {
  const s = formData.step3;

  const update = (k, v) =>
    setFormData((p) => ({
      ...p,
      step3: { ...p.step3, [k]: v },
    }));

  return (
    <div className="w-full">

      {/* CHANGED: text-[26px] -> text-[22px] md:text-[26px] */}
      <h1 className="text-[22px] md:text-[26px] font-semibold text-gray-900">
        Tell us more about your business operations
      </h1>
      
      {/* CHANGED: text-sm md:text-base */}
      <p className="text-gray-500 mt-1 text-sm md:text-base">
        This helps us understand your business context better.
      </p>

      {/* CHANGED: gap-6 -> gap-4 md:gap-6 AND mt-8 -> mt-6 md:mt-8 */}
      <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-8">

        {/* REVENUE */}
        {/* ADDED: w-full to make input stretch full width */}
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Annual revenue (USD)"
          value={s.revenue}
          onChange={(e) => update("revenue", e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none"
        />

        {/* EMPLOYEES */}
        {/* ADDED: w-full */}
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Number of employees"
          value={s.employees}
          onChange={(e) => update("employees", e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none"
        />

      </div>
    </div>
  );
}