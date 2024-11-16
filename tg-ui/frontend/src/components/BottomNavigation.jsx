"use client"
import React from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import { FaBitcoin } from "react-icons/fa";


export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", icon: <AiOutlineHome size={24} />, path: "/" },
    { name: "Creators", icon: <AiOutlineSearch size={24} />, path: "/search" },
    { name: "Coins", icon: <FaBitcoin size={24} />, path: "/coins" },
    { name: "Active Pools", icon: <AiOutlineHeart size={24} />, path: "/active-pool" },
    { name: "Profile", icon: <AiOutlineUser size={24} />, path: "/dashboard" },
  ];



  return (
    <nav className="fixed bottom-0 left-0 w-full bg-dark-2 border-t border-dark-3 shadow-100">
      <ul className="flex justify-around items-center py-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => router.push(item.path)}
              className={`flex flex-col items-center p-3 rounded-lg ${
                pathname === item.path
                  ? "text-white bg-primary-600 font-medium"
                  : "text-light-3 hover:text-white hover:bg-primary-600 hover:font-bold"
              }`}
            >
              {item.icon}
              <span className="text-xs">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
