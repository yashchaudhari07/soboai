export default function Step1BusinessAreaModal({ area, onSelect, onNext, onClose }) {
  const areas = [
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
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur">
      <div className="bg-white w-[900px] rounded-xl p-8 shadow-xl relative">

        <button className="absolute right-6 top-6 text-[20px]" onClick={onClose}>✕</button>

        <p className="text-sm text-gray-500">Step 1 of 2</p>
        <h2 className="text-[22px] font-semibold">Choose your business area</h2>
        <p className="text-gray-500 mb-6">Select the area where you need expert insights</p>

        <div className="grid grid-cols-3 gap-4">
          {areas.map((a) => (
            <div
              key={a}
              onClick={() => onSelect(a)}
              className={`border rounded-xl p-4 cursor-pointer transition
                ${area === a ? "border-[#2D60FF] shadow-sm" : "border-gray-300"}`}
            >
              <h3 className="font-semibold">{a}</h3>
              <p className="text-gray-500 text-sm mt-1">1 question</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <p className="text-gray-400">Select an area to continue</p>
          <button
            disabled={!area}
            onClick={onNext}
            className={`px-6 py-2 rounded-lg text-white text-sm
              ${area ? "bg-[#2D60FF]" : "bg-gray-300"}`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
