export default function SuccessModal({ onOk }) {
  return (
    // Added p-4 to ensure spacing from screen edges on mobile
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[60] backdrop-blur p-4">
      
      {/* CHANGED: w-[380px] -> w-full max-w-[380px] */}
      {/* This ensures it shrinks on very small screens but stays 380px on larger ones */}
      <div className="bg-white w-full max-w-[380px] rounded-xl p-6 md:p-8 text-center shadow-xl">

        <h2 className="text-[20px] md:text-[22px] font-semibold mb-2">Congratulations!</h2>

        <p className="text-gray-500 mb-6 text-sm md:text-base">
          Sending your matching request out to our top 1% experts.
        </p>

        <button
          onClick={onOk}
          // Changed to w-full on mobile for better touch target, auto on desktop
          className="w-full md:w-auto px-6 py-2 bg-[#2D60FF] text-white rounded-lg text-sm transition hover:bg-[#1a4de0]"
        >
          OK
        </button>

      </div>
    </div>
  );
}