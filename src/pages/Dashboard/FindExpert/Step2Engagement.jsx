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
    // Added p-4 to prevent modal from touching screen edges
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur p-4">
      
      {/* CHANGED: 
          1. w-[900px] -> w-full max-w-[900px]
          2. flex gap-6 -> flex flex-col md:flex-row gap-6 (Stack on mobile, Row on Desktop)
          3. p-8 -> p-5 md:p-8 (Less padding on mobile)
          4. Added max-h-[90vh] overflow-y-auto for scrolling 
      */}
      <div className="bg-white w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-xl p-5 md:p-8 shadow-xl relative flex flex-col md:flex-row gap-6">

        {/* Close Button */}
        <button className="absolute right-4 top-4 md:right-6 md:top-6 text-[20px] z-10" onClick={onClose}>✕</button>

        {/* LEFT SECTION (Form) */}
        <div className="flex-1">

          <p className="text-sm text-gray-500">Step 2 of 2</p>
          <h2 className="text-[20px] md:text-[22px] font-semibold">Choose an engagement</h2>
          <p className="text-gray-500 mb-6 text-sm md:text-base">
            Select how you want an expert to help you
          </p>

          {/* CHANGED: Added flex-wrap so buttons don't overflow on very small screens */}
          <div className="flex flex-wrap gap-3 mb-6">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setEngagement(t)}
                className={`px-4 py-2 border rounded-lg text-sm transition flex-grow sm:flex-grow-0
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

          {/* FOOTER */}
          <div className="flex justify-between mt-6 pt-2">
            <button className="text-gray-500 px-4 py-2" onClick={onBack}>Back</button>

            <button
              disabled={!engagement || !details}
              onClick={onSubmit}
              className={`px-6 py-2 rounded-lg text-white text-sm transition
                ${engagement && details ? "bg-[#2D60FF]" : "bg-gray-300"}`}
            >
              Submit request
            </button>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        {/* CHANGED: Added 'hidden md:block'. 
           On mobile, the image takes too much space, making the form hard to use. 
           It will only appear on Tablet (md) and Desktop screens. */}
        <div className="hidden md:block flex-shrink-0">
            <img
            src="/assets/illustration.png"
            className="w-[260px] h-auto object-contain"
            alt="Illustration"
            />
        </div>
        
      </div>
    </div>
  );
}