import { useState } from "react";

export default function Step2({ formData, setFormData }) {
  const s = formData.step2;

  const update = (key, value) =>
    setFormData((p) => ({
      ...p,
      step2: { ...p.step2, [key]: value },
    }));

  // Handle Image Preview
  const [logoPreview, setLogoPreview] = useState(
    s.logo instanceof File ? URL.createObjectURL(s.logo) : s.logo || null
  );

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file); 
    setLogoPreview(imageURL);
    update("logo", file);
  };

  return (
    <div className="w-full font-plex-hebrew">

      {/* HEADER */}
      <h1 className="text-[22px] md:text-[26px] font-semibold text-gray-900 leading-tight">
        Tell us more about your business
      </h1>

      <p className="text-gray-500 mt-2 text-[14px] md:text-[16px] leading-relaxed">
        Providing accurate details helps us tailor insight and match you with the most relevant experts. 
      </p>

      {/* LOGO UPLOAD SECTION */}
      <div className="flex items-center gap-4 mt-6 md:mt-8 p-4  rounded-xl">
        
        {/* Logo Preview Circle */}
        <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0 relative shadow-sm">
          {logoPreview ? (
            <img src={logoPreview} alt="business logo" className="w-full h-full object-cover" />
          ) : (
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-gray-300"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0ZM3 20.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-1.5Z"
              />
            </svg>
          )}
          
          {/* Edit Icon Overlay */}
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#2D60FF] rounded-full flex items-center justify-center border border-white">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#262626] text-[15px]">Business Logo</h3>
          <label className="text-[13px] text-[#262626] font-regular cursor-pointer hover:underline">
            Click to upload logo
            <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
          </label>
        </div>
      </div>

      {/* FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-8">

        {/* Business Name */}
        <div>
          <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">Business name <span style={{color:'#FF4D4F'}}>*</span></label>
          <input
            placeholder="Sobo, Inc"
            value={s.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

        {/* Industry */}
        <div>
          <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">Industry</label>
          <div className="relative">
            <select
              value={s.industry}
              onChange={(e) => update("industry", e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors appearance-none text-gray-700"
            >
              <option value="">Select option ...</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Retail</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L6 6L11 1"/></svg>
            </div>
          </div>
        </div>

        {/* City */}
        <div>
          <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">City</label>
          <input
            placeholder="San Francisco"
            value={s.city}
            onChange={(e) => update("city", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

        {/* State */}
        <div>
          <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">State/Region</label>
          <input
            placeholder="California"
            value={s.state}
            onChange={(e) => update("state", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

        {/* Website (Full Width) */}
        <div className="md:col-span-2">
          <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">Business website</label>
          <input
            placeholder="https://www.yourcompany.com"
            value={s.website}
            onChange={(e) => update("website", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

        {/* Description (Full Width) */}
        <div className="md:col-span-2">
          <label className="text-[14px] font-medium text-gray-700 mb-1.5 block">Business description</label>
          <textarea
            placeholder="Briefly describe what your business does (Optional)"
            value={s.desc}
            onChange={(e) => update("desc", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none bg-[#FCFCFC] text-[15px] focus:outline-none focus:border-[#2D60FF] transition-colors placeholder-gray-400"
          />
        </div>

      </div>
    </div>
  );
}