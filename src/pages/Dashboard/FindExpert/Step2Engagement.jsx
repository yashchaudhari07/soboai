export default function Step2EngagementModal({
  area,
  engagement,
  setEngagement,
  details,
  setDetails,
  onSubmit,
  onBack,
  onClose,
}) {
  const types = ["Fractional", "Coaching", "Project"];

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur">
      <div className="bg-white w-[900px] rounded-xl p-8 shadow-xl relative flex gap-6">

        <button className="absolute right-6 top-6 text-[20px]" onClick={onClose}>✕</button>

        <div className="flex-1">

          <p className="text-sm text-gray-500">Step 2 of 2</p>
          <h2 className="text-[22px] font-semibold">Choose an engagement</h2>
          <p className="text-gray-500 mb-6">
            Select how you want an expert to help you
          </p>

          <div className="flex gap-3 mb-6">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setEngagement(t)}
                className={`px-4 py-2 border rounded-lg text-sm
                  ${engagement === t ? "border-[#2D60FF] bg-[#E8EFFF]" : "border-gray-300"}`}
              >
                {t}
              </button>
            ))}
          </div>

          <label className="text-[15px] font-medium">Describe your business need</label>
          <textarea
            className="w-full border rounded-lg p-3 mt-2 h-[110px]"
            placeholder="Enter details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <div className="flex justify-between mt-6">
            <button className="text-gray-500" onClick={onBack}>Back</button>

            <button
              disabled={!engagement || !details}
              onClick={onSubmit}
              className={`px-6 py-2 rounded-lg text-white text-sm
                ${engagement && details ? "bg-[#2D60FF]" : "bg-gray-300"}`}
            >
              Submit request
            </button>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <img
          src="/assets/illustration.png"
          className="w-[260px] h-auto"
        />
      </div>
    </div>
  );
}
