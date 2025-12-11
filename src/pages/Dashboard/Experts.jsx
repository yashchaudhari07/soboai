// src/pages/Dashboard/Experts.jsx

import { useState } from "react";
import ExpertsBanner from "./components/ExpertsBanner";
import FindExpertFlow from "./FindExpert/FindExpertFlow";
import ExpertDetailPage from "./components/ExpertDetailPage";

const TABS = ["All", "Requested", "Rejected", "Cancelled"];

const defaultHistory = [
  {
    id: 1,
    area: "Technology",
    status: "Requested",
    engagement: "Fractional",
    submitted: new Date("2025-06-18"),
    statusText:
      "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
    requirement:
      "Lorem ipsum dolor sit amet consectetur. Vel laoreet in amet pretium elementum convallis. Ut rhoncus malesuada fames eget ut in neque nam.",
    files: 5,
  },
  {
    id: 2,
    area: "Marketing",
    status: "Rejected",
    engagement: "Fractional",
    submitted: new Date("2025-06-18"),
    statusText:
      "Your consultant has made an engagement plan for your business. Review the plan details to begin next step",
    requirement:
      "Lorem ipsum dolor sit amet consectetur. Vel laoreet in amet pretium elementum convallis. Ut rhoncus malesuada fames eget ut in neque nam.",
    files: 3,
  },
];

export default function Experts() {
  const [finderOpen, setFinderOpen] = useState(false);
  const [history, setHistory] = useState(defaultHistory);
  const [activeTab, setActiveTab] = useState("All");

  // 🔥 FINAL: Only ONE state for selecting card
  const [selected, setSelected] = useState(null);

  // 🔥 FULL PAGE REPLACEMENT
  if (selected) {
    return (
      <ExpertDetailPage
        data={{
          ...selected,
          submitted: selected.submitted.toDateString(), // Convert to string
        }}
        onBack={() => setSelected(null)}
      />
    );
  }

  const filtered =
    activeTab === "All"
      ? history
      : history.filter((h) => h.status === activeTab);

  return (
    <div className="p-6 bg-[#FFFFFF] rounded-lg min-h-screen">

      <h1 className="text-[22px] font-semibold mb-4">Experts</h1>

      {/* BLUE BANNER */}
      <ExpertsBanner onFind={() => setFinderOpen(true)} />

      {/* FILTER TABS */}
      <div className="mt-6 flex justify-end gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-lg text-sm border ${
              activeTab === tab
                ? "bg-[#2D60FF] text-white border-[#2D60FF]"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <h2 className="text-[18px] font-semibold mt-6">Expert match history</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="border rounded-xl bg-white p-6 relative cursor-pointer hover:shadow-lg transition"
          >
            {/* Badge */}
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

            <div className="w-[45px] h-[45px] bg-[#EEF2FF] rounded-lg mb-3" />

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
        onComplete={(entry) =>
          setHistory([
            ...history,
            {
              id: Date.now(),
              ...entry,
              submitted: new Date(),
              requirement: entry.details || "No details provided",
              files: 0,
            },
          ])
        }
      />
    </div>
  );
}
