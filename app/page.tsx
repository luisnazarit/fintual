"use client";

import Header from "./Header";
import { useState } from "react";
import Portfolio from "./components/Portfolio";

export default function Home() {
  const [startDate, setStartDate] = useState("2021-01-01");
  const [endDate, setEndDate] = useState("2024-01-01");

  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto flex gap-20 justify-center mb-8">
        <div>
          <label className="block text-sm">Start Date:</label>
          <input
            className="block border border-slate-200 py-2 px-4 rounded-sm"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm">End Date:</label>
          <input
            className="block border border-slate-200 py-2 px-4 rounded-sm"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <Portfolio startDate={startDate} endDate={endDate} />
    </>
  );
}
