"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCalendarAlt, FaFilter } from "react-icons/fa";
import { usePrivy, useLogout } from "@privy-io/react-auth";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Activities");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { ready, authenticated, user: privyUser } = usePrivy();
  const disableLogout = !ready || (ready && !authenticated);

  // Get profile details dynamically based on linkedAccounts
  const linkedAccount = privyUser?.linkedAccounts?.[0];
  const isTwitter = linkedAccount?.type === "twitter_oauth";
  const profileName = isTwitter ? linkedAccount?.name : "BITCOIN IS PUMPING";
  const profileUsername = isTwitter
    ? `@${linkedAccount?.username}`
    : "@YOU ARE OG BRO !!!";
  const profileImage = isTwitter
    ? linkedAccount?.profilePictureUrl
    : "https://th.bing.com/th/id/OIP.mzHrHGZ3VedhnS1Kqlc0vQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

  const { logout } = useLogout({
    onSuccess: () => {
      router.push("/");
    },
  });

  return (
    <div className="min-h-screen pb-[100px] text-white p-4 md:p-8 font-sans">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-6 space-y-4 md:space-y-0 bg-black-100 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <img
            src={profileImage}
            alt="Profile"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-500 shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold leading-tight">{profileName}</h1>
            <p className="text-gray-400 text-sm md:text-base">
              {profileUsername}
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              {linkedAccount?.address || "N/A"}
            </p>
          </div>
        </div>
        <div className="text-center md:text-right flex flex-col space-y-2">
          <p className="text-gray-400 text-sm md:text-base">Account balance:</p>
          <p className="text-2xl font-bold text-primary-500 tracking-wide">
            0 BUZZ
          </p>
          {/* Logout Button */}
          <button
            onClick={logout}
            disabled={disableLogout}
            className="bg-red text-white px-4 py-2 rounded-full shadow-md hover:bg-red transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 md:space-x-8 mb-6 border-b border-gray-700 text-sm md:text-base justify-center md:justify-start">
        <button
          className={`pb-2 font-semibold transition ${
            selectedTab === "Activities"
              ? "text-white border-b-2 border-primary-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
          onClick={() => setSelectedTab("Activities")}
        >
          Activities
        </button>
        <button
          className={`pb-2 font-semibold transition ${
            selectedTab === "Analytics"
              ? "text-white border-b-2 border-primary-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
          onClick={() => setSelectedTab("Analytics")}
        >
          Analytics
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
        <button className="flex items-center justify-center space-x-2 bg-[#1C2232] text-primary-500 font-semibold py-2 px-5 rounded-full w-full md:w-auto text-sm md:text-base shadow-lg hover:shadow-xl hover:bg-primary-500 hover:text-white transition-all duration-200 ease-in-out">
          <FaCalendarAlt className="text-lg" />
          <span>Last 30 days</span>
        </button>
        <button className="flex items-center justify-center space-x-2 bg-[#1C2232] text-primary-500 font-semibold py-2 px-5 rounded-full w-full md:w-auto text-sm md:text-base shadow-lg hover:shadow-xl hover:bg-primary-500 hover:text-white transition-all duration-200 ease-in-out">
          <FaFilter className="text-lg" />
          <span>Filter by</span>
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-[#131A2A] p-5 rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full text-left table-auto text-xs md:text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-600">
              <th className="px-2 py-3 font-medium">POOLID</th>
              <th className="px-2 py-3 font-medium">BET AMOUNT</th>
              <th className="px-2 py-3 font-medium">FINAL SCORE</th>
              <th className="px-2 py-3 font-medium">PREDICT SCORE</th>
              <th className="px-2 py-3 font-medium">CLAIMABLE AMOUNT</th>
              <th className="px-2 py-3 font-medium">CLAIMED?</th>
              <th className="px-2 py-3 font-medium">POOL STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700 text-gray-300 hover:bg-gray-800 transition">
              <td className="px-2 py-3">0</td>
              <td className="px-2 py-3 text-primary-500 font-semibold">
                100 BUZZ
              </td>
              <td className="px-2 py-3">5000</td>
              <td className="px-2 py-3">4900</td>
              <td className="px-2 py-3 text-primary-500 font-semibold">
                50 BUZZ
              </td>
              <td className="px-2 py-3">No</td>
              <td className="px-2 py-3 text-green-400 font-semibold">Active</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-xs md:text-sm space-y-4 md:space-y-0">
        <p className="text-gray-400">Page {currentPage} of 1</p>
        <div className="flex items-center space-x-2">
          <button
            className="bg-gray-700 text-white py-1 px-3 rounded-lg hover:bg-gray-600 transition"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            {"<"}
          </button>
          {[1].map((page) => (
            <button
              key={page}
              className={`py-1 px-3 rounded-lg font-semibold ${
                page === currentPage
                  ? "bg-primary-500 text-white"
                  : "text-gray-400 hover:text-gray-200"
              } transition`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="bg-gray-700 text-white py-1 px-3 rounded-lg hover:bg-gray-600 transition"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 4))}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
