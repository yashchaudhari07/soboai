import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Phone, MessageCircle, Mail, MessageSquare } from "lucide-react"; 

/* --- ICONS IMPORTS --- */
import IconTech from "../FindExpert/f1.svg";
import IconMarketing from "../FindExpert/f2.svg";
import IconStrategy from "../FindExpert/f3.svg";
import IconLeadership from "../FindExpert/f4.svg";
import IconFinance from "../FindExpert/f5.svg";
import IconSales from "../FindExpert/f6.svg";
import IconManagement from "../FindExpert/f7.svg";
import IconOperations from "../FindExpert/f8.svg";
import IconHR from "../FindExpert/f9.svg";

import { ProposedExpert } from "./ProposedExpert";
import DeleteModal from "./DeleteModal";
import DeleteSuccessModal from "./DeleteSuccessModal";
import AcceptSuccessModal from "./AcceptSuccessModal"; 

/* AREA ICON MAP */
const AREA_ICONS = {
    technology: IconTech,
    marketing: IconMarketing,
    strategy: IconStrategy,
    leadership: IconLeadership,
    finance: IconFinance,
    sales: IconSales,
    management: IconManagement,
    operations: IconOperations,
    hr: IconHR,
};

export default function ExpertDetailPage({ data, onBack, onDelete }) {
    
    const navigate = useNavigate();

    // --- STATE ---
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isAcceptOpen, setIsAcceptOpen] = useState(false);

    // --- LOGIC ---
    const showExpert = true; 

    const getStatusStyle = (status) => {
        switch (status) {
            case "Requested": return { bg: "#BEE8C0", text: "#007C0C" };
            case "Rejected": return { bg: "#FF8181", text: "#720001" };
            case "SOW under review": return { bg: "#FFDA84", text: "#9D6B01" };
            case "Cancelled": return { bg: "#E7ECFF", text: "#2D60FF" };
            case "Deleted": return { bg: "#EAE2E2", text: "#9CA3AF" };
            default: return { bg: "#E7ECFF", text: "#2D60FF" };
        }
    };

    const formatDate = (val) => {
        if (!val) return "";
        return new Date(val).toLocaleDateString("en-GB", {
            day: "numeric", month: "short", year: "numeric",
        });
    };

    const statusStyle = getStatusStyle(data.status);
    const areaKey = data.area ? data.area.toLowerCase() : "technology";
    const iconSrc = AREA_ICONS[areaKey] || IconTech;
    const isDeleted = data.status === "Deleted";

    // --- HANDLERS ---
    const handleDeleteClick = () => setIsConfirmOpen(true);
    
    const handleConfirmYes = () => {
        setIsConfirmOpen(false);
        setIsSuccessOpen(true);
    };
    
    const handleSuccessOk = () => {
        setIsSuccessOpen(false);
        if(onDelete) onDelete(data.id);
    };

    const handleAcceptClick = () => setIsAcceptOpen(true);
    
    const handleDashboardRedirect = () => {
        setIsAcceptOpen(false);
        navigate("/dashboard");
    };

    return (
        <div className="w-full h-screen bg-[#F9FAFB] md:p-8 font-plex-hebrew flex justify-center overflow-hidden">

            <div className="w-full max-w-[1400px] bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col h-full">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-6 shrink-0">
                    <h1 className="text-[24px] font-semibold text-[#1A1A1A]">Expert request title</h1>
                    <button onClick={onBack} className="px-4 py-2 rounded-lg border border-[#D0D5DD] text-[14px] font-medium text-[#344054] hover:bg-gray-50 transition">
                        Back
                    </button>
                </div>

                {/* DIVIDER */}
                <div className="h-[1px] w-full bg-[#EAECF0] mb-6 shrink-0" />

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 h-full overflow-hidden">

                    {/* ================= LEFT SIDE (DETAILS) ================= */}
                    <div className="flex flex-col h-full overflow-y-auto custom-scrollbar pr-2">
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-4">
                                    <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: statusStyle.bg }}>
                                        <img src={iconSrc} alt={data.area} className={`w-6 h-6 object-contain ${isDeleted ? "grayscale opacity-50" : ""}`} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[18px] font-bold text-[#1A1A1A] leading-tight">{data.area}</h2>
                                        <span className="text-[13px] font-bold mt-1" style={{ color: statusStyle.text }}>{data.status}</span>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col gap-1">
                                    <p className="text-[13px] text-[#808080] font-medium">Submitted on - <span className="text-[#1A1A1A] font-semibold">{formatDate(data.submitted)}</span></p>
                                    <p className="text-[13px] text-[#808080] font-medium">Engagement type - <span className="text-[#1A1A1A] font-semibold">{data.engagement}</span></p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-t border-b border-[#EAECF0] py-4 mb-6">
                            <p className="text-[14px] leading-[22px] text-[#505050]">
                                <span className="font-bold text-[#1A1A1A]">Status </span>
                                {data.statusText || "Your expert is making an engagement plan for your business."}
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-2">Business requirement</h3>
                            <p className="text-[14px] text-[#505050] leading-[24px]">{data.details || "Lorem ipsum dolor sit amet..."}</p>
                        </div>

                        <div className="flex items-center gap-2 mb-8">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45">
                                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                            </svg>
                            <span className="text-[14px] font-medium text-[#2D60FF] cursor-pointer hover:underline">5 files attached</span>
                        </div>

                        <div className=" items-center gap-4 mt-auto pb-4" style={{ textAlign: 'center' }}>
                            <button className="flex items-center justify-center w-full border border-[#2D60FF] p-3 bg-[#F3F9FF] rounded-xl text-[#2D60FF] gap-2 text-[14px] font-semibold hover:text-[#2D60FF] transition-colors">
                                Edit request
                            </button>
                            <button 
                                className="flex w-full items-center justify-center bg-[#F3F9FF] border border-[#2D60FF] rounded-xl text-[#2D60FF] p-3 gap-2 text-[14px] font-semibold mt-3 hover:text-[#B42318] transition-colors" 
                                onClick={handleDeleteClick}
                            >
                                Delete request
                            </button>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE (NEW LAYOUT) ================= */}
                    <div className="flex flex-col h-full border border-[#D1E9FF] rounded-2xl overflow-hidden bg-white">

                        {/* --- 1. SCROLLABLE CONTENT (Top Box + Expert) --- */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                            
                            {/* TOP PROMO CARD (Horizontal Layout - Reduced Height) */}
                            <div className="w-full bg-[#EFF8FF] rounded-xl p-5 mb-6 border border-blue-50">
                                <div className="flex items-center justify-between gap-6">
                                    
                                    {/* Left: Text Content */}
                                    <div className="flex-1">
                                        <h3 className="text-[16px] font-bold text-[#101828] mb-2 leading-tight">
                                            Curious About Your Consultant's Advice?
                                        </h3>
                                        <ul className="space-y-1.5 mb-4">
                                            <li className="flex items-start gap-2 text-[13px] text-[#475467]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#2D60FF] mt-1.5 shrink-0"></span>
                                                Instantly access detailed responses.
                                            </li>
                                            <li className="flex items-start gap-2 text-[13px] text-[#475467]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#2D60FF] mt-1.5 shrink-0"></span>
                                                Connect directly with consultants.
                                            </li>
                                            <li className="flex items-start gap-2 text-[13px] text-[#475467]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#2D60FF] mt-1.5 shrink-0"></span>
                                                Streamline your decision-making.
                                            </li>
                                        </ul>
                                        <div className="flex items-center gap-4">
                                            <button className="bg-[#101828] text-white text-[12px] font-semibold px-4 py-2 rounded-lg hover:bg-black transition">
                                                Upgrade to pro
                                            </button>
                                            <button className="text-[#2D60FF] text-[12px] font-semibold hover:underline">
                                                Learn more {">"}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right: Compact Icons Cluster */}
                                    <div className="relative w-28 h-24 shrink-0">
                                        <div className="absolute top-0 right-2 bg-white p-2 rounded-xl shadow-sm border border-gray-100 transform rotate-12 z-20">
                                            <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                                        </div>
                                        <div className="absolute top-8 right-12 bg-white p-2 rounded-xl shadow-sm border border-gray-100 transform -rotate-12 z-10">
                                            <Phone className="w-4 h-4 text-[#25D366] fill-current" />
                                        </div>
                                        <div className="absolute bottom-2 right-4 bg-white p-2 rounded-xl shadow-sm border border-gray-100 transform rotate-6 z-30">
                                            <Mail className="w-4 h-4 text-[#EA4335]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BOTTOM: PROPOSED EXPERT (Scrolls with Top Box) */}
                            {showExpert ? (
                                <div className="w-full">
                                    <ProposedExpert />
                                </div>
                            ) : (
                                <div className="p-6 bg-[#F0F5FF] rounded-xl border border-[#DCE4FE] flex items-start gap-4">
                                    <div className="mt-0.5 shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="#2D60FF" strokeWidth="2" />
                                            <path d="M12 16V12" stroke="#2D60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12" cy="8" r="1" fill="#2D60FF" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[15px] text-[#1D2939] font-medium leading-[24px]">
                                            We're assigning the most suitable expert based on the details you provided.
                                            <br />
                                            <span className="text-[#2D60FF]">Thank you for your patience.</span>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* --- 2. STATIC FOOTER (Buttons) --- */}
                        {/* UPDATE: Buttons aligned to Right and Size Reduced */}
                        {showExpert && (
                            <div className="p-4 border-t border-gray-200 bg-white shrink-0 flex justify-end gap-3 z-10 shadow-[0_-4px_10px_-4px_rgba(0,0,0,0.05)]">
                                <button className="w-24 py-1.5 border border-gray-300 text-gray-700 rounded-lg font-semibold text-[13px] hover:bg-gray-50 hover:text-red-600 transition-colors">
                                    Reject
                                </button>
                                <button 
                                    onClick={handleAcceptClick}
                                    className="w-24 py-1.5 bg-[#2D60FF] text-white rounded-lg font-semibold text-[13px] hover:bg-blue-700 shadow-sm transition-all"
                                >
                                    Accept
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* --- MODALS --- */}
            <DeleteModal 
                isOpen={isConfirmOpen} 
                onClose={() => setIsConfirmOpen(false)} 
                onConfirm={handleConfirmYes} 
            />
            <DeleteSuccessModal 
                isOpen={isSuccessOpen} 
                onOk={handleSuccessOk} 
            />
            <AcceptSuccessModal 
                isOpen={isAcceptOpen}
                onDashboard={handleDashboardRedirect}
            />

        </div>
    );
}