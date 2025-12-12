import React from 'react'

export const ProposedExpert = () => {
    return (
        <div>
            <h3 className="mt-10 text-[18px] font-semibold text-gray-900 mb-4">
                Proposed expert
            </h3>

            {/* Expert Name + Experience */}
            <div
                className="w-full bg-[#2D60FF] rounded-2xl flex flex-col items-center justify-center py-10"
                style={{ textAlign: "center" }}
            >
                {/* Avatar */}
                <img
                    src="/assets/expert-avatar.png"
                    alt="Expert"
                    className="w-[80px] h-[80px] rounded-full mb-4"
                />

                {/* Name + Experience */}
                <p className="text-white font-semibold text-[18px]">
                    Albert Flores | Years of experience - 15 yrs
                </p>

                {/* Education */}
                <p className="text-white text-[15px] mt-1">
                    <span className="font-semibold">Education -</span> UGA: Construction Management
                </p>

                {/* Title */}
                <p className="text-white text-[15px] mt-1 flex items-center gap-1 justify-center">
                    Growth Marketing Strategist | B2B & SaaS Specialist
                    <span className="text-white text-lg">✔</span>
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                    <button
                        className="px-6 py-2 rounded-xl border border-white text-white text-[14px] font-medium hover:bg-white hover:text-[#2D60FF] transition"
                    >
                        View Linked profile
                    </button>

                    <button
                        className="px-6 py-2 rounded-xl border border-white text-white text-[14px] font-medium hover:bg-white hover:text-[#2D60FF] transition"
                    >
                        View Portfolio
                    </button>
                </div>
            </div>
             <h3 className="mt-10 text-[18px] font-semibold text-gray-900">
              Mission statement
            </h3>

            <p className="mt-3 text-[14px] text-gray-700 leading-[22px]">
              My mission is to provide unparalleled expertise and guidance to clients in the
              construction industry. We are committed to delivering innovative solutions that
              optimize project efficiency, minimize costs, and ensure the highest standards of
              quality and safety. Through strategic consulting, meticulous planning, and
              proactive collaboration, we empower our clients to achieve their construction
              goals with confidence and success. Our dedication to excellence and integrity
              defines our approach, making us..
            </p>

            {/* ---------- BIO ---------- */}
            <h3 className="mt-10 text-[18px] font-semibold text-gray-900">
              Bio
            </h3>

            <p className="mt-3 text-[14px] text-gray-700 leading-[22px]">
              Results-driven marketing expert with 10+ years of experience helping startups
              and enterprises boost brand visibility, optimize funnels, and scale customer
              acquisition. Specialized in digital, content, and performance marketing.
              Results-driven marketing expert with 10+ years of experience helping startups
              and enterprises boost brand visibility, optimize funnels, and scale customer
              acquisition. Specialized in digital, content, and performance marketing.
              Results-driven marketing expert with 10+ years of experience helping startups
              and enterprises boost brand visibility, optimize funnels, and scale customer
              acquisition. Specialized in digital, content, and performance marketing.
              Results-driven marketing expert with 10+ years of experience helping startups
              and enterprises boost brand visibility, optimize funnels, and scale customer
              acquisition. Specialized in digital, content, and performance marketing.
            </p>
            
            <h3 className="mt-10 text-[18px] font-semibold text-gray-900">
              Avaibility
            </h3>
            <p>
              Open For 1:1 consultation<br></br>
              Avaibility for short-team projects & audits
            </p>
            <h3 className="mt-10 text-[18px] font-semibold text-gray-900">
              Languages
            </h3>
            <p>English - Spanish (professional Working Profficiency)</p>
            <h3 className="mt-10 text-[18px] font-semibold text-gray-900">
              Core Expertise / Skills
            </h3>
            <div className="flex flex-wrap gap-3 mt-4">

              <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-800 text-sm shadow-sm">
                Growth Marketing Strategy
              </span>

              <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-800 text-sm shadow-sm">
                Content Marketing
              </span>

              <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-800 text-sm shadow-sm">
                Paid Ads (Google, Meta, LinkedIn)
              </span>

              <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-800 text-sm shadow-sm">
                SEO & Conversion Optimization
              </span>

              <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-800 text-sm shadow-sm">
                GTM Strategy & Analytics
              </span>

              <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-800 text-sm shadow-sm">
                CRM & Email Marketing (HubSpot, Mailchimp)
              </span>

            </div>
             <div className="w-full mt-10 bg-#CAD7FF rounded-2xl p-6" style={{ border: '1px solid #CAD7FF' }}>

              {/* Section Title */}
              <h2 className="text-[20px] font-semibold text-gray-900 mb-6">
                Client Reviews / Endorsement
              </h2>

              {/* Rating Categories */}
              <div className="flex w-full mt-6">

                {/* LEFT SECTION – Ratings */}
                <div className="w-[45%] space-y-3 text-[15px] text-gray-800">

                  {/* Expert's Helpfulness */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-[20px] font-semibold text-gray-900 mb-6">
                      Expert’s Helpfulness</h2>

                  </div>

                  {/* Communication */}
                  <div className="flex items-center justify-between">
                    <span>Communication</span>
                    <span className="flex gap-1">
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-gray-300 text-lg">★</span>
                    </span>
                  </div>

                  {/* Understanding of the problem */}
                  <div className="flex items-center justify-between">
                    <span>Understanding of the problem</span>
                    <span className="flex gap-1">
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-gray-300 text-lg">★</span>
                      <span className="text-gray-300 text-lg">★</span>
                    </span>
                  </div>

                  {/* Quality of solution */}
                  <div className="flex items-center justify-between">
                    <span>Quality of solution</span>
                    <span className="flex gap-1">
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-gray-300 text-lg">★</span>
                    </span>
                  </div>

                  {/* Timeliness */}
                  <div className="flex items-center justify-between">
                    <span>Timeliness</span>
                    <span className="flex gap-1">
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-orange-500 text-lg">★</span>
                      <span className="text-gray-300 text-lg">★</span>
                      <span className="text-gray-300 text-lg">★</span>
                    </span>
                  </div>

                </div>

                {/* MIDDLE DIVIDER */}
                <div className="w-[1px] bg-gray-300 mx-8"></div>

                {/* RIGHT SECTION – Satisfaction */}
                <div className="w-[45%] text-[15px] text-gray-800 space-y-3">
                  <h2 className="text-[20px] font-semibold text-gray-900 mb-6">
                    Overall Satisfaction</h2>
                  <div className="flex justify-between">
                    <span>Very Satisfied</span>
                    <span className="font-medium text-gray-900">89%</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Satisfied</span>
                    <span className="font-medium text-gray-900">9%</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Neutral</span>
                    <span className="font-medium text-gray-900">2%</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Very Dissatisfied</span>
                    <span className="font-medium text-gray-900">0%</span>
                  </div>

                </div>

              </div>
              <hr className="mt-8"></hr>
              {/* Bottom Reviewer Card */}
              <div className="flex items-start gap-4 mt-8 items-center">

                {/* Avatar */}
                <img
                  src="/assets/user-avatar.png"
                  alt="User"
                  className="w-[55px] h-[55px] rounded-full"
                />

                <div className="flex flex-col">

                  {/* Name + Rating */}
                  <div className="flex items-center gap-3">
                    <p className="text-[16px] font-semibold text-gray-900">Tabb Patz</p>

                    {/* Stars */}
                    <div className="flex gap-[2px]">
                      <span className="text-orange-500 text-[18px] leading-none">★</span>
                      <span className="text-orange-500 text-[18px] leading-none">★</span>
                      <span className="text-orange-500 text-[18px] leading-none">★</span>
                      <span className="text-orange-500 text-[18px] leading-none">★</span>
                      <span className="text-gray-300 text-[18px] leading-none">★</span>
                    </div>
                  </div>

                  {/* Role */}
                  <p className="text-[14px] text-gray-600 mt-[2px]">
                    — Head of Marketing, Fintech Startup
                  </p>

                  {/* Review text */}
                  <p className="text-[15px] text-gray-800 leading-[22px] mt-2 max-w-[600px]">
                    Jane's insights were game-changing. We restructured our funnel and
                    saw immediate results.
                  </p>

                </div>
              </div>
              <button className="py-2 px-8 my-4" style={{ backgroundColor: '#F3F9FF', borderRadius: '5px', border: '1px solid #2D60FF', }}>view all</button>
            </div>





        </div>
    )
}