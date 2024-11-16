"use client"
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineRetweet, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { BsClock } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const ActivePools = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Twitter');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pools = [
    {
      id: 1,
      title: 'World Cup Final - France vs Argentina',
      user: 'john_doe',
      time: '2h 15m',
      participants: 125,
      stats: [
        { icon: <AiOutlineEye />, label: '24%', color: 'text-green-500' },
        { icon: <AiOutlineRetweet />, label: '8.2%', color: 'text-red' },
        { icon: <AiOutlineHeart />, label: '12%', color: 'text-green-500' },
      ],
    },
    {
      id: 2,
      title: 'NBA All-Star 2024 - Team LeBron vs Team Curry',
      user: 'jane_smith',
      time: '1h',
      participants: 300,
      stats: [
        { icon: <AiOutlineEye />, label: '18%', color: 'text-red' },
        { icon: <AiOutlineRetweet />, label: '6.5%', color: 'text-green-500' },
        { icon: <AiOutlineHeart />, label: '9.8%', color: 'text-green-500' },
      ],
    },
    {
      id: 3,
      title: 'Super Bowl LVIII - Halftime Show',
      user: 'mike_brown',
      time: '30m',
      participants: 85,
      stats: [
        { icon: <AiOutlineEye />, label: '43%', color: 'text-green-500' },
        { icon: <AiOutlineRetweet />, label: '12.5%', color: 'text-green-500' },
        { icon: <AiOutlineHeart />, label: '30%', color: 'text-red' },
      ],
    },
  ];

  return (
    <div className="min-h-screen  text-white p-4 pb-[100px]">
      <h1 className="text-2xl font-bold mb-4">Top Ongoing Pools</h1>

      {/* Header with Search and Dropdown */}
      <div className="flex justify-between items-center mb-6 space-x-2">
        {/* Search Bar */}
        <div className="flex items-center bg-[#1C2232] rounded-full px-3 py-2 w-full shadow-lg">
          <AiOutlineSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search pools..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
          />
        </div>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center bg-[#1C2232] px-4 py-2 rounded-full space-x-1 text-sm shadow-lg"
          >
            <span>{selectedPlatform}</span>
            <MdOutlineKeyboardArrowDown className="text-gray-400" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-[#1C2232] text-white rounded-lg shadow-lg z-10">
              <button
                onClick={() => { setSelectedPlatform('Twitter'); setDropdownOpen(false); }}
                className="block px-4 py-2 text-sm hover:bg-[#2A3A4E]"
              >
                Twitter
              </button>
              <button
                onClick={() => { setSelectedPlatform('Farcaster'); setDropdownOpen(false); }}
                className="block px-4 py-2 text-sm hover:bg-[#2A3A4E]"
              >
                Farcaster
              </button>
              <button
                onClick={() => { setSelectedPlatform('YouTube'); setDropdownOpen(false); }}
                className="block px-4 py-2 text-sm hover:bg-[#2A3A4E]"
              >
                YouTube
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Top Pools Section */}
      <div className="space-y-6">
        {pools.map((pool) => (
          <div key={pool.id} className="bg-[#1C2232] p-5 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            {/* Pool Title and User */}
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-primary-500">{pool.title}</h2>
              <p className="text-gray-400 text-sm">@{pool.user}</p>
            </div>

            {/* Time and Participants */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-400 space-x-1">
                <BsClock />
                <span className="text-xs">{pool.time}</span>
              </div>
              <div className="flex items-center text-gray-400 space-x-1">
                <FiUsers />
                <span className="text-xs">{pool.participants}</span>
              </div>
            </div>

            {/* Pool Stats */}
            <div className="flex justify-between">
              {pool.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-1 bg-gray-800 p-2 rounded-lg ${stat.color} shadow-md hover:bg-gray-700 transition`}
                >
                  {stat.icon}
                  <span className="text-xs font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivePools;
