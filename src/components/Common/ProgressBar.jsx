export default function ProgressBar({ step }) {
  const percent = (step / 4) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Step {step} of 4</span>
        <span>{percent}% Complete</span>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="h-2 bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
