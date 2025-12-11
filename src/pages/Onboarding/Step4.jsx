import React from 'react';

// Added onBack and onNext to props to handle the buttons shown in the PDF
export default function Step4({ formData, setFormData, onBack, onNext }) {
  const s = formData.step4;

  // Updated items to objects to hold the specific text from the PDF
  const items = [
    {
      title: "Technology", // [cite: 15]
      desc: "Cloud infrastructure, digital transformation, and AI implementation", // [cite: 16]
      count: "1 question" // [cite: 17]
    },
    {
      title: "Marketing", // [cite: 18]
      desc: "Growth strategies, channel optimization, and performance marketing", // [cite: 19]
      count: "1 question" // [cite: 20]
    },
    {
      title: "Strategy", // [cite: 21]
      desc: "Business planning, market expansion, and competitive positioning", // [cite: 22]
      count: "1 question" // [cite: 23]
    },
    {
      title: "Leadership", // [cite: 24]
      desc: "Visionary leadership, team empowerment, and fostering innovation culture.", // [cite: 25]
      count: "1 question" // [cite: 26]
    },
    {
      title: "Finance", // [cite: 27]
      desc: "Financial modeling, budgeting, and investment strategies", // [cite: 28]
      count: "1 question" // [cite: 29]
    },
    {
      title: "Sales", // [cite: 30]
      desc: "Drive growth through customer relationships, and sales excellence.", // [cite: 31]
      count: "1 question" // [cite: 32]
    },
    {
      title: "Management", // [cite: 33]
      desc: "Talent management, culture building, and organizational development", // [cite: 34]
      count: "1 question" // [cite: 35]
    },
    {
      title: "Operations", // [cite: 36]
      desc: "Process optimization, automation, and operational efficiency", // [cite: 37]
      count: "1 question" // [cite: 38]
    },
    {
      title: "Human Resources", // [cite: 39]
      desc: "Talent management, culture building, and organizational development", // [cite: 40]
      count: "1 question" // [cite: 41]
    },
  ];

  return (
    <div className="w-full font-plex-hebrew">
      
      {/* HEADER SECTION: Step 4 of 4 - 100% Complete [cite: 11, 12] */}
      {/* Hidden as per SurveyScreen logic usually handles progress, but kept here if needed inside */}
      {/* <div className="flex justify-between items-center text-sm font-medium text-gray-500 mb-6">
        <span>Step 4 of 4</span>
        <span>100% Complete</span>
      </div> */}

      {/* TITLE: Help us understand what you're looking for [cite: 13] */}
      <h1 className="text-[22px] md:text-[26px] font-semibold text-gray-900 leading-tight">
        Help us understand what you're looking for
      </h1>
      
      {/* SUBTITLE: Select your areas of interest... [cite: 14] */}
      <p className="text-gray-500 mt-2 text-[14px] md:text-[16px]">
        Select your areas of interest so that we can personalize your experience.
      </p>

      {/* GRID SECTION */}
      {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() =>
              setFormData((p) => ({
                ...p,
                step4: { interest: item.title },
              }))
            }
            // Dynamic styling: Highlight border if selected
            className={`
              p-5 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between h-full bg-white
              ${s.interest === item.title 
                ? "border-[#2D60FF] ring-1 ring-[#2D60FF] bg-[#F4F8FF]" 
                : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }
            `}
          >
            <div>
              {/* IMAGE PLACEHOLDER */}
              <div className="w-10 h-10 mb-4 rounded-lg flex items-center justify-center bg-gray-50 text-[#2D60FF] border border-gray-100">
                {/* Placeholder Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              {/* Card Title */}
              <h3 className="font-bold text-gray-900 text-[16px] mb-2 leading-tight">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-gray-500 text-[13px] leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Separator & Count */}
            <div>
                <hr className='my-4 border-gray-100'></hr>
                {/* Question Count Tag */}
                <span className="inline-flex items-center text-[12px] font-medium text-gray-400">
                    {item.count}
                </span>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}