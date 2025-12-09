import { useState } from "react";
import ExpertsBanner from "./components/ExpertsBanner";
import FindExpertFlow from "./FindExpert/FindExpertFlow";

const TABS = ["All", "Requested", "Rejected", "Cancelled"];

const defaultHistory = [
  {
    area: "Technology",
    status: "Requested",
    engagement: "Fractional",
    submitted: new Date("2025-06-18"),
    statusText:
      "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
  },
  {
    area: "Marketing",
    status: "Rejected",
    engagement: "Fractional",
    submitted: new Date("2025-06-18"),
    statusText:
      "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
  },
  {
    area: "Technology",
    status: "Deleted",
    engagement: "Fractional",
    submitted: new Date("2025-06-18"),
    statusText:
      "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
  },
];


export default function Experts() {
  const [finderOpen, setFinderOpen] = useState(false);
  const [history, setHistory] = useState(defaultHistory);
  const [activeTab, setActiveTab] = useState("All");

  const filtered = 
    activeTab === "All"
      ? history
      : history.filter((item) => item.status === activeTab);

  return (
    <div className="p-6">

      <h1 className="text-[22px] font-semibold mb-4">Experts</h1>

      <ExpertsBanner onFind={() => setFinderOpen(true)} />

      {/* FILTERS */}
      <div className="mt-6 flex justify-end gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-lg text-sm border
              ${
                activeTab === tab
                  ? "bg-[#2D60FF] text-white border-[#2D60FF]"
                  : "bg-white text-gray-700 border-gray-300"
              }
            `}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <h2 className="text-[18px] font-semibold mt-6">Expert match history</h2>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {filtered.map((item, index) => (
          <div key={index} className="border rounded-xl bg-white p-4 relative">

            {/* STATUS BADGE */}
            <span
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor:
                  item.status === "Requested"
                    ? "#D1F7D9"
                    : item.status === "Rejected"
                    ? "#FFD1D1"
                    : "#E7ECFF",
                color:
                  item.status === "Requested"
                    ? "#1C6A37"
                    : item.status === "Rejected"
                    ? "#B42828"
                    : "#2D60FF",
              }}
            >
              {item.status}
            </span>

            {/* ICON PLACEHOLDER */}
            <div className="w-[45px] h-[45px] bg-[#EEF2FF] rounded-lg mb-3" />

            {/* TITLE */}
            <h3 className="font-semibold text-[16px]">{item.area}</h3>

            <p className="text-sm text-gray-600 mt-2">
              Submitted on – <b>{item.submitted.toDateString()}</b>
            </p>

            <p className="text-sm text-gray-600">
              Engagement type – <b>{item.engagement}</b>
            </p>

            <div className="border-b my-3"></div>

            <p className="text-[13px] text-gray-700 leading-[18px]">
              <b>Status –</b> {item.statusText}
            </p>

          </div>
        ))}
      </div>

      {/* FIND EXPERT MODAL FLOW */}
      <FindExpertFlow
        open={finderOpen}
        onClose={() => setFinderOpen(false)}
        onComplete={(entry) => setHistory([...history, entry])}
      />

    </div>
  );
}
