import React,{useState} from 'react'
import { FaUser, FaCalendarAlt, FaTrophy, FaCoins } from "react-icons/fa";
import SlideUpModal from './SlideUpModal';
const Overview = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
    <>
            <div className="mb-6 flex justify-between w-full items-center">
              <div>
                <h1 className="text-3xl font-extrabold text-purple-400">
                  Pool #0001
                </h1>
                <p className="text-gray-400 mt-1">
                  Betting pool for the upcoming championship.
                </p>
                <p className="text-green-500 text-2xl font-semibold mt-3 tracking-wider">
                  00:00:00
                </p>
              </div>
              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r whitespace-nowrap from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg hover:shadow-xl" onClick={openModal}>
                  PLACE A BET
                </button>
              </div>
            </div>

          
            <div className="bg-gray-800 p-6 rounded-lg mb-6 shadow-lg">
              <h2 className="text-xl font-bold mb-3 text-purple-300">
                How It Works
              </h2>
              <ul className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Safely link your digital wallet to start placing bets.</li>
                <li>Place your bets on the outcomes of your choice.</li>
                <li>
                  Earn points Overviewd on the accuracy of your predictions.
                </li>
                <li>
                  Monitor your performance and compete on the leaderboard.
                </li>
              </ul>
            </div>

            {/* Pool Details Section */}
            <div className=" p-6 bg-gray-800  rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-purple-300">
                Pool Details
              </h2>
              <div className="space-y-4">
                {/* Total Bets */}
                <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <FaCoins className="text-yellow-400 mr-2" />
                    <p>Total Bets</p>
                  </div>
                  <p className="text-lg font-semibold">1</p>
                </div>

                {/* Unique Users */}
                <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <FaUser className="text-purple-400 mr-2" />
                    <p>Unique Users</p>
                  </div>
                  <p className="text-lg font-semibold">1</p>
                </div>

                {/* Total Amount Bet */}
                <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <FaCoins className="text-blue-400 mr-2" />
                    <p>Total Amount Bet</p>
                  </div>
                  <p className="text-lg font-semibold text-yellow-400">
                    200 Buzz
                  </p>
                </div>

                {/* Start Date */}
                <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-blue-400 mr-2" />
                    <p>Start Date</p>
                  </div>
                  <p className="text-lg font-semibold">Tue Nov 12 2024</p>
                </div>

                {/* End Date */}
                <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-blue-400 mr-2" />
                    <p>End Date</p>
                  </div>
                  <p className="text-lg font-semibold">Tue Nov 12 2024</p>
                </div>

                {/* Pool Status */}
                <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <span className="bg-green-500 h-4 w-4 rounded-full mr-2"></span>
                    <p>Pool Status</p>
                  </div>
                  <p className="text-lg font-semibold text-green-500">Active</p>
                </div>

                {/* Last Score Achieved */}
                <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <FaTrophy className="text-red-400 mr-2" />
                    <p>Last Score Achieved</p>
                  </div>
                  <p className="text-lg font-semibold text-red-400">300</p>
                </div>
              </div>
              <SlideUpModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </>
  )
}

export default Overview