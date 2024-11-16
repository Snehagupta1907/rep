"use client";
import RecentBets from "../../../components/RecentBets";
import Overview from "../../../components/Overview";
import React, { useState } from "react";


const PoolPage = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const renderContent = () => {
    switch (selectedTab) {
      case "Overview":
        return (
          <Overview/>
        );
      case "Recent Bets":
        return (
      <RecentBets/>
        );

      default:
        return null;
    }
  };
  return (
    <div className="p-4  min-h-screen text-white font-sans pb-[100px]">
      <div className="flex justify-center space-x-8 mb-6">
        <button
          className={`${
            selectedTab === "Overview"
              ? "bg-gray-700 text-white font-semibold px-4 py-2 rounded-full"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedTab("Overview")}
        >
          Overview
        </button>
        <button
          className={`${
            selectedTab === "Recent Bets"
              ? "bg-gray-700 text-white font-semibold px-4 py-2 rounded-full"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedTab("Recent Bets")}
        >
          Recent Bets
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default PoolPage;
