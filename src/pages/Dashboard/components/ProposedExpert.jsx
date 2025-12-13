import React from 'react';
import { BadgeCheck } from 'lucide-react'; // Checkmark Icon

export const ProposedExpert = () => {
    return (
        <div className="w-full font-sans">
            
            {/* Header */}
            <h3 className="mt-6 text-[18px] font-bold text-[#101828] mb-4">
                Proposed expert
            </h3>

            {/* --- BLUE PROFILE CARD (Matching Profile.pdf) --- */}
            <div className="w-full bg-[#2D60FF] rounded-2xl flex flex-col items-center justify-center py-10 px-6 text-center shadow-sm">
                
                {/* Avatar */}
                <div className="mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Albert Flores"
                        className="w-[80px] h-[80px] rounded-full border-2 border-white object-cover shadow-md"
                    />
                </div>

                {/* Name + Experience */}
                <h2 className="text-white text-[18px] font-semibold tracking-wide">
                    Albert Flores <span className="font-normal opacity-90">| Years of experience - 15 yrs</span>
                </h2>

                {/* Education */}
                <p className="text-white text-[15px] mt-1.5 opacity-95">
                    <span className="font-semibold">Education -</span> UGA: Construction Management
                </p>

                {/* Title + Verified Check */}
                <div className="flex items-center justify-center gap-2 mt-1.5">
                    <p className="text-white text-[15px] font-medium">
                        Growth Marketing Strategist | B2B & SaaS Specialist
                    </p>
                    {/* Checkmark Icon */}
                    <BadgeCheck className="w-5 h-5 text-white fill-transparent" strokeWidth={2.5} />
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-4 w-full">
                    <button
                        className="px-6 py-2.5 rounded-xl border border-white text-white text-[14px] font-semibold hover:bg-white hover:text-[#2D60FF] transition-all duration-200"
                    >
                        View Linked profile
                    </button>

                    <button
                        className="px-6 py-2.5 rounded-xl border border-white text-white text-[14px] font-semibold hover:bg-white hover:text-[#2D60FF] transition-all duration-200"
                    >
                        View Portfolio
                    </button>
                </div>
            </div>

            {/* --- OTHER DETAILS (Cleaned up & Fixed) --- */}
            
            {/* Mission Statement */}
            <div className="mt-8">
                <h3 className="text-[18px] font-bold text-[#101828] mb-3">
                    Mission statement
                </h3>
                <p className="text-[14px] text-[#475467] leading-[24px]">
                    My mission is to provide unparalleled expertise and guidance to clients in the
                    construction industry. We are committed to delivering innovative solutions that
                    optimize project efficiency, minimize costs, and ensure the highest standards of
                    quality and safety. Through strategic consulting, meticulous planning, and
                    proactive collaboration, we empower our clients to achieve their construction
                    goals with confidence and success. Our dedication to excellence and integrity
                    defines our approach, making us..
                </p>
            </div>

            {/* Bio */}
            <div className="mt-8">
                <h3 className="text-[18px] font-bold text-[#101828] mb-3">
                    Bio
                </h3>
                <p className="text-[14px] text-[#475467] leading-[24px]">
                    Results-driven marketing expert with 10+ years of experience helping startups
                    and enterprises boost brand visibility, optimize funnels, and scale customer
                    acquisition. Specialized in digital, content, and performance marketing.
                </p>
            </div>

            {/* Availability */}
            <div className="mt-8">
                <h3 className="text-[18px] font-bold text-[#101828] mb-3">
                    Availability
                </h3>
                <p className="text-[14px] text-[#475467] leading-[24px]">
                    Open For 1:1 consultation<br />
                    Availability for short-term projects & audits
                </p>
            </div>

            {/* Languages */}
            <div className="mt-8">
                <h3 className="text-[18px] font-bold text-[#101828] mb-3">
                    Languages
                </h3>
                <p className="text-[14px] text-[#475467]">English - Spanish (Professional Working Proficiency)</p>
            </div>

            {/* Core Expertise / Skills */}
            <div className="mt-8">
                <h3 className="text-[18px] font-bold text-[#101828] mb-4">
                    Core Expertise / Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                    {[
                        "Growth Marketing Strategy",
                        "Content Marketing",
                        "Paid Ads (Google, Meta, LinkedIn)",
                        "SEO & Conversion Optimization",
                        "GTM Strategy & Analytics",
                        "CRM & Email Marketing (HubSpot, Mailchimp)"
                    ].map((skill, index) => (
                        <span key={index} className="px-4 py-2 bg-white border border-[#D0D5DD] rounded-full text-[#344054] text-[14px] font-medium shadow-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* --- CLIENT REVIEWS (Fixed Styles) --- */}
            <div className="w-full mt-10  rounded-2xl pt-8 pr-8 pb-8 ">

                <h2 className="text-[18px] font-bold text-[#101828] mb-6">
                    Client Reviews / Endorsement
                </h2>

                <div className="flex flex-col md:flex-row gap-8 w-full">

                    {/* LEFT SECTION – Ratings */}
                    <div className="flex-1 space-y-3">
                        <RatingRow label="Expert’s Helpfulness" stars={4} />
                        <RatingRow label="Communication" stars={5} />
                        <RatingRow label="Understanding of the problem" stars={3} />
                        <RatingRow label="Quality of solution" stars={4} />
                        <RatingRow label="Timeliness" stars={4} />
                    </div>

                    {/* MIDDLE DIVIDER */}
                    <div className="hidden md:block w-[1px] bg-[#D1E9FF]"></div>

                    {/* RIGHT SECTION – Satisfaction */}
                    <div className="flex-1 space-y-3">
                        <h3 className="text-[16px] font-bold text-[#101828] mb-4">Overall Satisfaction</h3>
                        <SatRow label="Very Satisfied" pct="89%" />
                        <SatRow label="Satisfied" pct="9%" />
                        <SatRow label="Neutral" pct="2%" />
                        <SatRow label="Very Dissatisfied" pct="0%" />
                    </div>

                </div>

                <hr className="my-8 border-[#D1E9FF]" />

                {/* Bottom Reviewer Card */}
                <div className="flex items-start gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="User"
                        className="w-[48px] h-[48px] rounded-full object-cover"
                    />

                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-1">
                            <p className="text-[16px] font-bold text-[#101828]">Tabb Patz</p>
                            <div className="flex gap-[1px]">
                                {[...Array(4)].map((_, i) => <span key={i} className="text-[#FDB022] text-[16px]">★</span>)}
                                <span className="text-gray-300 text-[16px]">★</span>
                            </div>
                        </div>

                        <p className="text-[12px] text-[#475467] font-medium">
                            — Head of Marketing, Fintech Startup
                        </p>

                        <p className="text-[14px] text-[#101828] leading-[22px] mt-2">
                            Jane's insights were game-changing. We restructured our funnel and
                            saw immediate results.
                        </p>
                    </div>
                </div>

                <button className="mt-6 px-6 py-2 bg-white border border-[#2D60FF] text-[#2D60FF] rounded-lg text-[14px] font-semibold hover:bg-[#F5F8FF] transition-colors">
                    View all
                </button>
            </div>

        </div>
    );
};

// Helper Components for Cleaner Code
const RatingRow = ({ label, stars }) => (
    <div className="flex justify-between items-center text-[14px] text-[#344054]">
        <span>{label}</span>
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-[18px] leading-none ${i < stars ? "text-[#FDB022]" : "text-gray-300"}`}>★</span>
            ))}
        </div>
    </div>
);

const SatRow = ({ label, pct }) => (
    <div className="flex justify-between items-center text-[14px] text-[#344054]">
        <span>{label}</span>
        <span className="font-semibold text-[#101828]">{pct}</span>
    </div>
);