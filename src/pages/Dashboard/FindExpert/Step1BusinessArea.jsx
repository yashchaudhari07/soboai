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
    // Added p-4 to keep distance from screen edges on mobile
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur p-4">
      
      {/* CHANGED: w-[900px] -> w-full max-w-[900px] */}
      {/* ADDED: max-h-[90vh] overflow-y-auto (To enable scrolling on small screens if content is long) */}
      <div className="bg-white w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-xl p-5 md:p-8 shadow-xl relative">

        {/* Adjusted button position for mobile */}
        <button className="absolute right-4 top-4 md:right-6 md:top-6 text-[20px]" onClick={onClose}>✕</button>

        <p className="text-sm text-gray-500">Step 1 of 2</p>
        <h2 className="text-[20px] md:text-[22px] font-semibold">Choose your business area</h2>
        <p className="text-gray-500 mb-6 text-sm md:text-base">Select the area where you need expert insights</p>

        {/* CHANGED: grid-cols-3 -> grid-cols-1 sm:grid-cols-2 md:grid-cols-3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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

        {/* FOOTER: Adjusted for mobile (Stacking items) */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0">
          <p className="text-gray-400 text-sm">Select an area to continue</p>
          <button
            disabled={!area}
            onClick={onNext}
            className={`w-full sm:w-auto px-6 py-2 rounded-lg text-white text-sm transition
              ${area ? "bg-[#2D60FF]" : "bg-gray-300"}`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}