import React from 'react';

// खात्री कर की f1.svg, f2.svg... हे सर्व फाईल्स Step4.jsx च्या फोल्डरमध्ये आहेत.
import IconTech from "./f1.svg"; 
import IconMarketing from "./f2.svg";
import IconStrategy from "./f3.svg";
import IconLeadership from "./f4.svg";
import IconFinance from "./f5.svg";
import IconSales from "./f6.svg";
import IconManagement from "./f7.svg";
import IconOperations from "./f8.svg";
import IconHR from "./f9.svg";

export default function Step4({ formData, setFormData }) {
  const s = formData.step4 || {};

  const items = [
    {
      title: "Technology", // [cite: 53]
      desc: "Cloud infrastructure, digital transformation, and AI implementation", // [cite: 54]
      count: "1 question", // [cite: 55]
      icon: IconTech
    },
    {
      title: "Marketing", // [cite: 56]
      desc: "Growth strategies, channel optimization, and performance marketing", // [cite: 57]
      count: "1 question", // [cite: 58]
      icon: IconMarketing
    },
    {
      title: "Strategy", // [cite: 59]
      desc: "Business planning, market expansion, and competitive positioning", // [cite: 60]
      count: "1 question", // [cite: 61]
      icon: IconStrategy
    },
    {
      title: "Leadership", // [cite: 63]
      desc: "Visionary leadership, team empowerment, and fostering innovation culture.", // [cite: 64]
      count: "1 question", // [cite: 65]
      icon: IconLeadership
    },
    {
      title: "Finance", // [cite: 66]
      desc: "Financial modeling, budgeting, and investment strategies", // [cite: 67]
      count: "1 question", // [cite: 68]
      icon: IconFinance
    },
    {
      title: "Sales", // [cite: 69]
      desc: "Drive growth through customer relationships, and sales excellence.", // [cite: 70]
      count: "1 question", // [cite: 71]
      icon: IconSales
    },
    {
      title: "Management", // [cite: 72]
      desc: "Talent management, culture building, and organizational development", // [cite: 73]
      count: "1 question", // [cite: 74]
      icon: IconManagement
    },
    {
      title: "Operations", // [cite: 75]
      desc: "Process optimization, automation, and operational efficiency", // [cite: 76]
      count: "1 question", // [cite: 77]
      icon: IconOperations
    },
    {
      title: "Human Resources", // [cite: 78]
      desc: "Talent management, culture building, and organizational development", // [cite: 79]
      count: "1 question", // [cite: 80]
      icon: IconHR
    },
  ];

  const toggleSelection = (title) => {
    if (s.interest === title) {
      setFormData(p => ({ ...p, step4: { interest: "" } })); 
    } else {
      setFormData(p => ({ ...p, step4: { interest: title } })); 
    }
  };

  return (
    <div className="w-full font-plex-hebrew">
      
      {/* TITLE [cite: 51] */}
      <h1 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-gray-900 leading-tight">
        Help us understand what you're looking for
      </h1>
      
      {/* SUBTITLE [cite: 52] */}
      <p className="text-gray-500 mt-2 text-sm sm:text-base">
        Select your areas of interest so that we can personalize your experience.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8">
        {items.map((item, i) => {
          const isSelected = s.interest === item.title;
          
          return (
            <div
              key={i}
              onClick={() => toggleSelection(item.title)}
              className={`
                relative p-5 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between h-full
                ${isSelected 
                  ? "border-[#2D60FF] bg-[#F4F8FF] shadow-sm ring-1 ring-[#2D60FF]" 
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                }
              `}
            >
              <div>
                {/* Icon Box Updated */}
                <div className={`w-10 h-10 mb-4 rounded-lg flex items-center justify-center
                  ${isSelected ? "bg-[#FFFFFF]" : "bg-gray-50"}
                `}>
                  {/* CHANGE: Added img tag here */}
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className={`w-6 h-6 object-contain ${isSelected ? "" : "opacity-60 grayscale"}`} 
                  />
                </div>

                <h3 className="font-bold text-gray-900 text-[16px] mb-2 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-flex items-center text-[12px] font-medium text-gray-400">
                  {item.count}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}