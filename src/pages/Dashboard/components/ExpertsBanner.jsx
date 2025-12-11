// src/pages/Dashboard/components/ExpertsBanner.jsx

export default function ExpertsBanner({ onFind }) {
  return (
    <div className="relative w-full bg-[#2D60FF] rounded-2xl overflow-hidden px-6 py-10 md:py-12 flex flex-col items-center justify-center text-center font-['IBM_Plex_Sans_Hebrew'] shadow-md">
      
      {/* --- BACKGROUND RINGS (Pixel Perfect Position) --- */}
      
      {/* Top-Left Corner: Center of rings exactly on the corner tip */}
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        <Rings />
      </div>

      {/* Bottom-Right Corner: Center of rings exactly on the corner tip */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
        <Rings />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* TEXT [cite: 170-171] */}
        <p className="text-white text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-normal tracking-wide opacity-95">
          Share your challenges with us, and our experts will work closely with you
          <br className="hidden md:block" />
          to provide tailored solutions that meet your needs.
        </p>

        {/* BUTTON [cite: 172] */}
        <button
          onClick={onFind}
          className="mt-8 bg-white text-[#2D60FF] px-8 py-3 rounded-full font-semibold text-[14px] md:text-[15px] flex items-center gap-2 mx-auto transition-transform hover:scale-105 shadow-sm active:scale-95"
        >
          {/* Search Icon */}
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Find an expert
        </button>
      </div>
    </div>
  );
}

// Helper: Rings Component (Concentric Circles)
function Rings() {
  // Sizes based on PDF look
  const sizes = [300, 260, 220, 180, 140, 100, 60]; 
  
  return (
    <div className="relative flex items-center font-plex-hebrew justify-center">
      {sizes.map((size, index) => (
        <div
          key={index}
          className="absolute rounded-full border border-white"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            opacity: 0.1, // Subtle opacity matching PDF
          }}
        />
      ))}
    </div>
  );
}