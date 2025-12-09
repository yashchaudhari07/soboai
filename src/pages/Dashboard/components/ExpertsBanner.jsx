export default function ExpertsBanner({ onFind }) {
  return (
    <div className="relative bg-[#2D60FF] h-[150px] rounded-xl px-6 flex items-center justify-center overflow-hidden">

      {/* LEFT CIRCLES */}
      <div className="circle-wrapper" style={{ left: "20px", top: "0px" }}>
        <div className="circle-ring" style={{ width: "160px", height: "160px" }}></div>
        <div className="circle-ring" style={{ width: "130px", height: "130px", top: "15px", left: "15px" }}></div>
        <div className="circle-ring" style={{ width: "100px", height: "100px", top: "30px", left: "30px" }}></div>
        <div className="circle-ring" style={{ width: "70px", height: "70px", top: "45px", left: "45px" }}></div>
        <div className="circle-ring main" style={{ width: "40px", height: "40px", top: "60px", left: "60px" }}></div>
      </div>

      {/* RIGHT CIRCLES */}
      <div className="circle-wrapper" style={{ right: "20px", bottom: "-10px" }}>
        <div className="circle-ring" style={{ width: "160px", height: "160px" }}></div>
        <div className="circle-ring" style={{ width: "130px", height: "130px", top: "15px", left: "15px" }}></div>
        <div className="circle-ring" style={{ width: "100px", height: "100px", top: "30px", left: "30px" }}></div>
        <div className="circle-ring" style={{ width: "70px", height: "70px", top: "45px", left: "45px" }}></div>
        <div className="circle-ring main" style={{ width: "40px", height: "40px", top: "60px", left: "60px" }}></div>
      </div>

      {/* TEXT + BUTTON */}
      <div className="text-center relative z-[5]">
        <p className="text-white text-[14px] leading-[20px]">
          Share your challenges with us, and our experts will work closely with you to provide tailored solutions <br />
          that meet your needs.
        </p>

        <button
          onClick={onFind}
          className="mt-4 bg-white text-[#2D60FF] px-6 py-2 rounded-full flex items-center gap-2 mx-auto shadow-sm"
        >
          <span className="text-[14px]">Find an expert</span>
        </button>
      </div>
    </div>
  );
}
