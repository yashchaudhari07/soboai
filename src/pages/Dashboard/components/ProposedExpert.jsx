import React from 'react'

export const ProposedExpert = () => {
    return (
        <div className="font-plex-hebrew">
            
            <h3 className="mt-6 md:mt-10 text-[16px] md:text-[18px] font-semibold text-gray-900 mb-4">
                Proposed expert
            </h3>

            {/* EXPERT CARD */}
            <div
                className="w-full bg-[#2D60FF] rounded-2xl flex flex-col items-center justify-center py-8 md:py-10 px-4 text-center shadow-md"
            >
                {/* Avatar */}
                <img
                    src="/assets/expert-avatar.png"
                    alt="Expert"
                    className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-full mb-4 object-cover bg-white"
                />

                {/* Name + Experience */}
                <p className="text-white font-semibold text-[16px] md:text-[18px]">
                    Albert Flores | Years of experience - 15 yrs
                </p>

                {/* Education */}
                <p className="text-white text-[13px] md:text-[15px] mt-1 opacity-90">
                    <span className="font-semibold">Education -</span> UGA: Construction Management
                </p>

                {/* Title */}
                <p className="text-white text-[13px] md:text-[15px] mt-1 flex flex-wrap items-center gap-1 justify-center opacity-90">
                    Growth Marketing Strategist | B2B & SaaS Specialist
                    <span className="text-white text-lg ml-1">✔</span>
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
                    <button
                        className="px-6 py-2.5 rounded-xl border border-white text-white text-[14px] font-medium hover:bg-white hover:text-[#2D60FF] transition w-full sm:w-auto"
                    >
                        View Linked profile
                    </button>

                    <button
                        className="px-6 py-2.5 rounded-xl border border-white text-white text-[14px] font-medium hover:bg-white hover:text-[#2D60FF] transition w-full sm:w-auto"
                    >
                        View Portfolio
                    </button>
                </div>
            </div>

            {/* MISSION STATEMENT */}
            <h3 className="mt-8 md:mt-10 text-[16px] md:text-[18px] font-semibold text-gray-900">
              Mission statement
            </h3>
            <p className="mt-2 md:mt-3 text-[14px] text-gray-700 leading-[22px] md:leading-[24px]">
              My mission is to provide unparalleled expertise and guidance to clients in the
              construction industry. We are committed to delivering innovative solutions that
              optimize project efficiency, minimize costs, and ensure the highest standards of
              quality and safety. Through strategic consulting, meticulous planning, and
              proactive collaboration, we empower our clients to achieve their construction
              goals with confidence and success. Our dedication to excellence and integrity
              defines our approach, making us..
            </p>

            {/* BIO */}
            <h3 className="mt-8 md:mt-10 text-[16px] md:text-[18px] font-semibold text-gray-900">
              Bio
            </h3>
            <p className="mt-2 md:mt-3 text-[14px] text-gray-700 leading-[22px] md:leading-[24px]">
              Results-driven marketing expert with 10+ years of experience helping startups
              and enterprises boost brand visibility, optimize funnels, and scale customer
              acquisition. Specialized in digital, content, and performance marketing.
              Results-driven marketing expert with 10+ years of experience helping startups
              and enterprises boost brand visibility, optimize funnels, and scale customer
              acquisition. Specialized in digital, content, and performance marketing.
            </p>
            
            {/* AVAILABILITY & LANGUAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-10">
                <div>
                    <h3 className="text-[16px] md:text-[18px] font-semibold text-gray-900">
                    Availability
                    </h3>
                    <p className="text-[14px] text-gray-700 mt-2">
                    Open For 1:1 consultation<br/>
                    Availability for short-term projects & audits
                    </p>
                </div>
                <div>
                    <h3 className="text-[16px] md:text-[18px] font-semibold text-gray-900">
                    Languages
                    </h3>
                    <p className="text-[14px] text-gray-700 mt-2">English - Spanish (Professional Proficiency)</p>
                </div>
            </div>

            {/* CORE EXPERTISE */}
            <h3 className="mt-8 md:mt-10 text-[16px] md:text-[18px] font-semibold text-gray-900">
              Core Expertise / Skills
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3 mt-4">
              {[
                  "Growth Marketing Strategy", "Content Marketing", 
                  "Paid Ads (Google, Meta, LinkedIn)", "SEO & Conversion Optimization",
                  "GTM Strategy & Analytics", "CRM & Email Marketing"
              ].map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-[13px] md:text-sm shadow-sm">
                    {skill}
                </span>
              ))}
            </div>

            {/* REVIEWS SECTION */}
            <div className="w-full mt-10 bg-[#EEF2FF] border border-[#E0E7FF] rounded-2xl p-6">

              <h2 className="text-[18px] md:text-[20px] font-semibold text-gray-900 mb-6">
                Client Reviews / Endorsement
              </h2>

              {/* RATINGS GRID */}
              <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0 mt-6">

                {/* LEFT SECTION – Ratings */}
                <div className="w-full md:w-[45%] space-y-4 text-[14px] md:text-[15px] text-gray-800">
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-4">Expert’s Helpfulness</h3>
                  
                  {[
                      { label: "Communication", stars: 4 },
                      { label: "Understanding of problem", stars: 5 },
                      { label: "Quality of solution", stars: 4 },
                      { label: "Timeliness", stars: 5 }
                  ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span>{row.label}</span>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-lg leading-none ${i < row.stars ? 'text-orange-500' : 'text-gray-300'}`}>★</span>
                            ))}
                        </div>
                      </div>
                  ))}
                </div>

                {/* DIVIDER (Hidden on Mobile) */}
                <div className="hidden md:block w-[1px] bg-gray-300 mx-8"></div>
                <div className="md:hidden w-full h-[1px] bg-gray-300 my-4"></div>

                {/* RIGHT SECTION – Satisfaction */}
                <div className="w-full md:w-[45%] text-[14px] md:text-[15px] text-gray-800 space-y-4">
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-4">Overall Satisfaction</h3>
                  
                  {[
                      { label: "Very Satisfied", val: "89%" },
                      { label: "Satisfied", val: "9%" },
                      { label: "Neutral", val: "2%" },
                      { label: "Very Dissatisfied", val: "0%" },
                  ].map((row, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{row.label}</span>
                        <span className="font-medium text-gray-900">{row.val}</span>
                      </div>
                  ))}
                </div>

              </div>

              <hr className="my-8 border-gray-300"></hr>

              {/* REVIEWER CARD */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src="/assets/user-avatar.png"
                  alt="User"
                  className="w-[50px] h-[50px] rounded-full object-cover bg-gray-200"
                />

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-[16px] font-semibold text-gray-900">Tabb Patz</p>
                    <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-[16px] leading-none ${i < 4 ? 'text-orange-500' : 'text-gray-300'}`}>★</span>
                        ))}
                    </div>
                  </div>

                  <p className="text-[13px] text-gray-500">
                    — Head of Marketing, Fintech Startup
                  </p>

                  <p className="text-[14px] text-gray-800 leading-[22px] mt-2 max-w-[600px]">
                    Jane's insights were game-changing. We restructured our funnel and
                    saw immediate results.
                  </p>
                </div>
              </div>

              <button className="mt-6 py-2.5 px-8 bg-[#F3F9FF] text-[#2D60FF] border border-[#2D60FF] rounded-lg text-[14px] font-medium hover:bg-blue-50 transition w-full sm:w-auto">
                  View all reviews
              </button>
            </div>

        </div>
    )
}