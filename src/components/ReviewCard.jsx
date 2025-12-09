export default function ReviewCard({ title, children, onEdit }) {
  return (
    <div className="w-full border border-gray-200 rounded-xl p-6 relative bg-white">

      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>

      {/* Edit Button */}
      <button
        onClick={onEdit}
        className="absolute top-4 right-4 flex items-center gap-1 px-4 py-2 rounded-lg bg-[#F4F6FF] text-[#3C4DE8] font-medium text-sm"
      >
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-[#3C4DE8]"
        >
          <path
            d="M12 20h9"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16.5 3.5a2.121 2.121 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        Edit
      </button>

      {children}
    </div>
  );
}
