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
      <h1 className="text-[26px] font-semibold text-center">
        Help us understand what you're looking for
      </h1>
      <p className="text-gray-500 text-center mt-2">
        Select your areas of interest…
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {items.map((title, i) => (
          <div
            key={i}
            onClick={() =>
              setFormData((p) => ({
                ...p,
                step4: { interest: title },
              }))
            }
            className={`p-6 rounded-xl border cursor-pointer ${
              s.interest === title ? "border-blue-500 shadow-md" : "border-gray-200"
            }`}
          >
            <div className="w-10 h-10 bg-gray-100 mb-4 rounded-md"></div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm mt-6">1 question</p>
          </div>
        ))}
      </div>
    </div>
  );
}
