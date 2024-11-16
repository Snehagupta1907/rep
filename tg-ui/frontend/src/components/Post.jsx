import Image from "next/image";
import React from "react";
import { FaCoins, FaUsers, FaCalendarAlt, FaTrophy } from "react-icons/fa";

const Post = ({
  image,
  title,
  betsPlaced,
  totalAmount,
  endDate,
  status,
  finalScore,
  winners,
}) => {
  return (
    <div className="relative group bg-gray-100 shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        className="h-32 w-full object-cover"
        width={128}
        height={128}
      />

      {/* Status Tag */}
      <div
        className={`absolute top-2 right-2 px-4 py-1 rounded-full text-white text-sm ${
          status === "live" ? "bg-green-500" : "bg-red"
        }`}
      >
        {status === "live" ? "Live" : "Ended"}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <h3 className="font-bold text-lg text-center mb-2">{title}</h3>
        {status === "live" ? (
          <div className="text-sm space-y-2 text-center">
            <p className="flex items-center justify-center gap-2">
              <FaUsers className="text-blue-400" />
              No. of Bets: <span className="font-medium">{betsPlaced}</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaCoins className="text-yellow-400" />
              Total Amount: <span className="font-medium">{totalAmount}</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaCalendarAlt className="text-green-400" />
              End Date: <span className="font-medium">{endDate}</span>
            </p>
          </div>
        ) : (
          <div className="text-sm space-y-2 text-center">
            <p className="flex items-center justify-center gap-2">
              <FaTrophy className="text-yellow-500" />
              Final Score: <span className="font-medium">{finalScore}</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaUsers className="text-blue-400" />
              No. of Winners: <span className="font-medium">{winners}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
