"use client";
import React from "react";
import { FaChartLine, FaTable, FaThLarge } from "react-icons/fa";

const Tabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    { id: "pools", icon: <FaThLarge className="text-lg mb-1" />, label: "Pools" },
    { id: "highlights", icon: <FaChartLine className="text-lg mb-1" />, label: "Highlights" },
    { id: "stats", icon: <FaTable className="text-lg mb-1" />, label: "Stats" },
  ];

  return (
    <div className="flex justify-around border-b border-gray-300 pb-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setSelectedTab(tab.id)}
          className={`flex flex-col items-center text-sm ${
            selectedTab === tab.id ? "text-primary-600" : "text-gray-500"
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
