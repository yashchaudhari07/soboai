import React from 'react';

export default function Step3({ formData, setFormData, onBack, onNext }) {
  const s = formData.step3;

  const update = (k, v) =>
    setFormData((p) => ({
      ...p,
      step3: { ...p.step3, [k]: v },
    }));

  return (
    <div className="w-full font-plex-hebrew">

      {/* HEADER SECTION */}
      <div className='my-4'>
        <h1 className="text-[22px] md:text-[26px] font-semibold text-gray-900 leading-tight">
          Tell us more about your business operations
        </h1>
        
        <p className="text-gray-500 mt-2 text-[14px] md:text-[16px] leading-relaxed">
          This helps us understand your business context better.
        </p>
      </div>

      {/* FORM FIELDS SECTION */}
      {/* Responsive Grid: 1 Column on Mobile, 2 Columns on Desktop */}
      <div className=" gap-5 md:gap-6 mt-6 md:mt-8"> 

        {/* REVENUE Field */}
        <div>
          <label htmlFor="annual-revenue" className="block text-[14px] font-medium text-gray-700 mb-1.5">
            Annual revenue (USD)
          </label>
          <input
            id="annual-revenue"
            type="text"
            placeholder="e.g. 1,200,000"
            value={s.revenue} 
            onChange={(e) => update("revenue", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] text-gray-900 focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

        {/* EMPLOYEES Field */}
        <div>
          <label htmlFor="num-employees" className="block text-[14px] font-medium text-gray-700 mb-1.5 mt-8">
            Number of employees
          </label>
          <input
            id="num-employees"
            type="text"
            placeholder="e.g. 120"
            value={s.employees} 
            onChange={(e) => update("employees", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] text-gray-900 focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>
        
      </div>
    </div>
  );
}