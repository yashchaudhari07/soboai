// src/pages/Dashboard/components/ExpertsBanner.jsx

export default function ExpertsBanner({ onFind }) {
  return (
    <div className="relative w-full bg-[#2D60FF] rounded-xl overflow-hidden px-6 py-8 md:py-12 flex flex-col items-center justify-center text-center font-plex-hebrew">
      
      {/* BACKGROUND CIRCLES - LEFT TOP */}
      {/* Top-Left कोपऱ्यात अर्ध्या रिंग्स दिसण्यासाठी पोझिशन सेट केली आहे */}
      <div className="absolute top-[40px] left-[40px]">
        <Rings />
      </div>

      {/* BACKGROUND CIRCLES - RIGHT BOTTOM */}
      {/* Bottom-Right कोपऱ्यात अर्ध्या रिंग्स दिसण्यासाठी पोझिशन सेट केली आहे */}
      <div className="absolute bottom-[40px] right-[40px]">
        <Rings />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* TEXT [cite: 68-69] */}
        <p className="text-white text-sm md:text-[15px] leading-6 md:leading-7 tracking-wide">
          Share your challenges with us, and our experts will work closely with you
          <br className="hidden md:block" />
          to provide tailored solutions that meet your needs.
        </p>

      {/* BUTTON [cite: 70] */}
        <button
          onClick={onFind}
          className="mt-6 bg-white text-[#2D60FF] px-6 py-2.5 rounded-full font-medium text-sm md:text-base flex items-center gap-2 mx-auto transition-transform hover:scale-105 shadow-sm"
        >
          {/* Search Icon (Magnifying Glass) */}
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

// Helper component: रिंग्स बनवण्यासाठी (White Color & Opacity)
function Rings() {
  // रिंग्सची साईज (Diameter)
  const sizes = [160, 140, 120, 100, 80, 60, 40 , 20];
  
  return (
    <div className="relative flex items-center justify-center">
      {sizes.map((size, index) => (
        <div
          key={index}
          // "border-white" आणि "opacity-20" मुळे त्या PDF सारख्या फिकट पांढऱ्या दिसतील
          className="absolute rounded-full border border-white"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      ))}
    </div>
  );
}