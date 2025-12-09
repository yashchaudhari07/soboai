import { useState } from "react";

export default function Step2({ formData, setFormData }) {
  const s = formData.step2;

  const update = (key, value) =>
    setFormData((p) => ({
      ...p,
      step2: { ...p.step2, [key]: value },
    }));

  // image preview state
  const [logoPreview, setLogoPreview] = useState(s.logo || null);

  // handle file upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file); // preview
    setLogoPreview(imageURL);

    // save into formData
    update("logo", file);
  };

  return (
    <div className="w-full">

      {/* TITLE */}
      <h1 className="text-[26px] font-semibold text-gray-900">
        Tell us more about your business
      </h1>

      <p className="text-gray-500 mt-1">
        Providing accurate details helps us tailor insight and match you with the most relevant experts.
      </p>

      {/* LOGO UPLOAD BLOCK */}
      <div className="flex items-center gap-4 mt-10">

        {/* CIRCLE THUMBNAIL EXACT FIGMA */}
        <div className="w-16 h-16 rounded-full bg-gray-100 border flex items-center justify-center overflow-hidden">

          {logoPreview ? (
            <img src={logoPreview} alt="logo" className="w-full h-full object-cover" />
          ) : (
            <svg
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-gray-600 opacity-70"
            >
              <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}

        </div>

        <div>
          <h3 className="font-medium text-gray-900">Business Logo</h3>

          <label className="text-sm text-blue-600 underline cursor-pointer">
            Upload your business logo
            <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
          </label>
        </div>
      </div>

      {/* FORM GRID EXACT LIKE FIGMA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        {/* BUSINESS NAME */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Business name *</label>
          <input
            placeholder="Sobo, Inc"
            value={s.name}
            onChange={(e) => update("name", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
          />
        </div>

        {/* INDUSTRY */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Industry</label>
          <select
            value={s.industry}
            onChange={(e) => update("industry", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none"
          >
            <option value="">Select option ...</option>
            <option>Technology</option>
            <option>Finance</option>
            <option>Healthcare</option>
            <option>Education</option>
          </select>
        </div>

        {/* CITY */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">City</label>
          <input
            placeholder="San Francisco"
            value={s.city}
            onChange={(e) => update("city", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
          />
        </div>

        {/* STATE */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">State/Region</label>
          <input
            placeholder="California"
            value={s.state}
            onChange={(e) => update("state", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
          />
        </div>

        {/* WEBSITE */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Business website</label>
          <input
            placeholder="https://www.yourcompany.com"
            value={s.website}
            onChange={(e) => update("website", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Business description</label>
          <textarea
            placeholder="Briefly describe what your business does (Optional)"
            value={s.desc}
            onChange={(e) => update("desc", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
