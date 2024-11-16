"use client";
import EngagementGraph from "@/components/EngagementGraph";
import Post from "../../../components/Post";
import Tabs from "../../../components/Tabs";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PerformanceTable from "@/components/PerformanceTable";

const mockProfileData = {
  id: 0,
  type: "creator",
  name: "0xcBe600349CE4cF89842Bc371E4a4062140CDCCcD",

  username: "Donald Trump",
  imageUrl:
    "https://th.bing.com/th/id/OIP.mzHrHGZ3VedhnS1Kqlc0vQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  bio: "Creator | President of the United States of America",
  followers: 688000,
  following: 914,
  performanceHistory: [
    {
      poolId: "pool-1",
      score: 75,
      predictions: 80,
      engagementRate: 0.5,
    },
    {
      poolId: "pool-2",
      score: 85,
      predictions: 90,
      engagementRate: 0.6,
    },
    {
      poolId: "pool-3",
      score: 80,
      predictions: 85,
      engagementRate: 0.55,
    },
    {
      poolId: "pool-4",
      score: 90,
      predictions: 88,
      engagementRate: 0.65,
    },
    {
      poolId: "pool-5",
      score: 92,
      predictions: 95,
      engagementRate: 0.7,
    },
    {
      poolId: "pool-6",
      score: 78,
      predictions: 80,
      engagementRate: 0.52,
    },
    {
      poolId: "pool-7",
      score: 88,
      predictions: 87,
      engagementRate: 0.68,
    },
    {
      poolId: "pool-8",
      score: 95,
      predictions: 93,
      engagementRate: 0.72,
    },
    {
      poolId: "pool-9",
      score: 81,
      predictions: 85,
      engagementRate: 0.6,
    },
    {
      poolId: "pool-10",
      score: 86,
      predictions: 89,
      engagementRate: 0.67,
    },
  ],
};
const CreatorsPage = () => {
  const [selectedTab, setSelectedTab] = useState("pools");
  const [profileData, setProfileData] = useState(mockProfileData);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setProfileData(mockProfileData);
    }
  }, [id]);

  const renderContent = () => {
    switch (selectedTab) {
      case "pools":
        return (
          <div className="grid grid-cols-2 gap-4">
            {/* Example Pool Posts */}
            <Post
              image="https://th.bing.com/th/id/OIP.mzHrHGZ3VedhnS1Kqlc0vQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              title="Pool 1"
              betsPlaced={25}
              totalAmount="$500"
              endDate="2024-11-20"
              status="live"
            />
            {/* Repeat for other pools */}
          </div>
        );
      case "highlights":
        return (
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              Engagement Highlights
            </h3>
            <EngagementGraph />
          </div>
        );
      case "stats":
        return (
          <div>
            <PerformanceTable profileData={profileData} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 pb-[100px]">
      {/* Profile Section */}
      <div className="text-center mb-6 space-y-4">
        <img
          src={profileData.imageUrl}
          alt="Creator"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold">{profileData.username} </h2>

        {/* Wallet Address */}
        <p className="text-gray-500 text-xs">{profileData.name}</p>

        {/* Description */}
        <p className="text-gray-700 text-sm mt-2">{profileData.bio}</p>

        {/* Follower and Following Counts */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="text-sm">
            <p className="font-semibold">{profileData.followers}</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">{profileData.following}</p>
            <p className="text-gray-500">Following</p>
          </div>
        </div>

        {/* Highlight Div for Last Pool Score */}
        {/* <div className="mt-4">
          <h3 className="text-lg font-semibold">Last Pool Score</h3>
          <div className="bg-gray-200 h-20 rounded-lg shadow-md flex items-center justify-center">
            Last pool score: 10K
          </div>
        </div> */}
      </div>

      {/* Tabs */}
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div>{renderContent()}</div>
    </div>
  );
};

export default CreatorsPage;
