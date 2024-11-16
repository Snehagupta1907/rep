import React from "react";
import { FiSearch } from "react-icons/fi";
import ExploreItem from "../../components/Resusable/Explore";

export default function Explore() {
  const creators = [
    {
      id: 1,
      type:"creator",
      name: "Donald Trump",
      imageUrl:
        "https://th.bing.com/th/id/OIP.mzHrHGZ3VedhnS1Kqlc0vQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "45th President of the United States and a businessman",
      followers: 10000000,
    },
    {
      id: 2,
      name: "Andrew Tate",
      type:"creator",
      imageUrl:
        "https://th.bing.com/th/id/OIP.62NcRAyMg8CUrm2llav6IAHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "British-American entrepreneur and former kickboxer",
      followers: 5000000,
    },
    {
      id: 3,
      name: "Ronaldo",
      type:"creator",
      imageUrl:
        "https://th.bing.com/th/id/OIP.gXZoTIumD6EGpUsNXDm-QwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "Portuguese professional footballer",
      followers: 200000000,
    },
    {
      id: 4,
      name: "Don Romero",
      type:"creator",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRW47le8ZbNblIZFpeWYAfl8ZNY43nObhlA&s",
      description: "Farcaster Creator",
      followers: 270156,
    },
    {
      id: 5,
      name: "PewDiePie",
      type:"creator",
      imageUrl:
        "https://i.guim.co.uk/img/media/9d9759a25269ff4dd7f4c41bde320c4928bdfb65/0_24_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e4916223d76a56180788e7bfc1d25b02",
      description: "Popular Youtuber",
      followers: 110000000,
    },
    {
      id: 6,
      name: "Greg",
      type:"creator",
      imageUrl:
        "https://pbs.twimg.com/profile_images/972210365198143493/R3bpWPqJ_400x400.jpg",
      description: "CTO @ http://scorechain.com",
      followers: 26512,
    },
  ];

  return (
    <div className="min-h-screen p-4 pb-[100px]">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-light-1">Explore</h1>
        <p className="text-light-3 text-sm">
          Discover trending posts and creators
        </p>
      </div>

      {/* Top Bar */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center w-full max-w-lg relative">
          <FiSearch className="absolute left-3 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search creators or trends"
            className="w-full pl-10 py-2 rounded-lg bg-gray-800 text-white placeholder-white outline-none"
          />
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-7">
        {creators.map((creator) => (
          <ExploreItem
            key={creator.id}
            item={creator}
            type="creator"
            fields={[
              { label: "Description", key: "description" },
              { label: "Followers", key: "followers" },
            ]}
            buttonText="Bet on Creator"
            linkBase="/search"
          />
        ))}
      </div>
    </div>
  );
}
