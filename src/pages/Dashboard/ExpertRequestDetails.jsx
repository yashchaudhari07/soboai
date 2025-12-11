export default function ExpertRequestDetails({ data, onBack }) {
  return (
    <div className="p-10 w-full font-plex-hebrew">

      {/* PAGE TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-semibold">Expert request</h1>

        <button
          onClick={onBack}
          className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
        >
          Back
        </button>
      </div>

      {/* TOP LINE */}
      <div className="w-full h-[1px] bg-gray-300 my-5"></div>

      {/* TWO COLUMN LAYOUT */}
      <div className="grid grid-cols-2 gap-10">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">

          <section>
            <h3 className="text-[15px] font-medium mb-1">Business area</h3>
            <p className="text-gray-700">{data.area}</p>
          </section>

          <section>
            <h3 className="text-[15px] font-medium mb-1">Engagement type</h3>
            <p className="text-gray-700">{data.engagement}</p>
          </section>

          <section>
            <h3 className="text-[15px] font-medium mb-1">Submitted on</h3>
            <p className="text-gray-700">{data.submitted.toDateString()}</p>
          </section>

          <section>
            <h3 className="text-[15px] font-medium mb-1">Status</h3>
            <p className="text-gray-700 leading-[20px]">{data.statusText}</p>
          </section>

        </div>

        {/* RIGHT COLUMN BOX */}
        <div className="border rounded-xl p-6 bg-white shadow-sm h-fit">

          <h3 className="text-[16px] font-semibold">Request summary</h3>

          <p className="text-gray-700 mt-3 leading-[20px]">
            No additional details provided.
          </p>

          <div className="w-full h-[1px] bg-gray-200 my-5"></div>

          <h3 className="text-[14px] font-semibold">Attachments</h3>

          <div className="mt-3 p-4 border rounded-xl text-gray-500 text-sm">
            No files uploaded
          </div>

        </div>
      </div>

      {/* FOOTER MESSAGE */}
      <div className="mt-10 p-5 rounded-xl border bg-[#F8FAFF] text-gray-700">
        Your request has been submitted successfully. Our team will review and
        connect you with the best matching expert.
      </div>
    </div>
  );
}
