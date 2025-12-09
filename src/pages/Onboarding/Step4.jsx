export default function Step4({ formData, setFormData }) {
  const s = formData.step4;

  const items = [
    "Technology",
    "Marketing",
    "Strategy",
    "Leadership",
    "Finance",
    "Sales",
    "Management",
    "Operations",
    "Human Resources",
  ];

  return (
    <div>
      {/* CHANGED: text-[26px] -> text-[22px] md:text-[26px] */}
      <h1 className="text-[22px] md:text-[26px] font-semibold text-center">
        Help us understand what you're looking for
      </h1>
      
      {/* ADDED: text-sm md:text-base */}
      <p className="text-gray-500 text-center mt-2 text-sm md:text-base">
        Select your areas of interest…
      </p>

      {/* CHANGED: gap-6 -> gap-4 md:gap-6 AND mt-10 -> mt-6 md:mt-10 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10">
        {items.map((title, i) => (
          <div
            key={i}
            onClick={() =>
              setFormData((p) => ({
                ...p,
                step4: { interest: title },
              }))
            }
            /* CHANGED: p-6 -> p-4 md:p-6 (Less padding inside card on mobile) */
            className={`p-4 md:p-6 rounded-xl border cursor-pointer ${
              s.interest === title ? "border-blue-500 shadow-md" : "border-gray-200"
            }`}
          >
            <div className="w-10 h-10 bg-gray-100 mb-4 rounded-md"></div>
            <h3 className="font-semibold">{title}</h3>
            {/* CHANGED: mt-6 -> mt-4 md:mt-6 */}
            <p className="text-gray-400 text-sm mt-4 md:mt-6">1 question</p>
          </div>
        ))}
      </div>
    </div>
  );
}