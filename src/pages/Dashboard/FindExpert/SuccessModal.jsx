export default function SuccessModal({ onOk }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[60] backdrop-blur">
      <div className="bg-white w-[380px] rounded-xl p-8 text-center shadow-xl">

        <h2 className="text-[22px] font-semibold mb-2">Congratulations!</h2>

        <p className="text-gray-500 mb-6">
          Sending your matching request out to our top 1% experts.
        </p>

        <button
          onClick={onOk}
          className="px-6 py-2 bg-[#2D60FF] text-white rounded-lg text-sm"
        >
          OK
        </button>

      </div>
    </div>
  );
}
