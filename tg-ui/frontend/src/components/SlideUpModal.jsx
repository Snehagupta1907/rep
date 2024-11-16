"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SlideUpModal = ({ isOpen, onClose }) => {
  const [predictedScore, setPredictedScore] = useState(1);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [tenurePeriod, setTenurePeriod] = useState("OneDay");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end md:items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-t-lg md:rounded-lg w-full max-w-md shadow-lg"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Place Your Bet</h2>
              <button
                className="text-gray-400 hover:text-gray-200"
                onClick={onClose}
              >
                ✕
              </button>
            </div>

            <div className="mb-4">
              <label className="text-gray-300 font-semibold">
                Predict Score:
              </label>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-blue-400 text-xl font-bold">
                  {predictedScore}
                </span>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={predictedScore}
                  onChange={(e) => setPredictedScore(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-gray-300 font-semibold">
                Investment Amount:
              </label>
              <div className="flex items-center mt-2 space-x-2">
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
                />
                <select className="p-2 rounded-md bg-gray-700 text-white">
                  <option value="usdc">USDC</option>
                  <option value="usdt">USDT</option>
                  <option value="buzzToken">Buzz Token</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-gray-300 font-semibold">
                Select Tenure Period:
              </label>
              <div className="flex items-center mt-2 space-x-4">
                <label className="flex items-center text-gray-300">
                  <input
                    type="radio"
                    value="OneDay"
                    checked={tenurePeriod === "OneDay"}
                    onChange={() => setTenurePeriod("OneDay")}
                    className="mr-1"
                  />
                  OneDay
                </label>
                <label className="flex items-center text-gray-300">
                  <input
                    type="radio"
                    value="OneWeek"
                    checked={tenurePeriod === "OneWeek"}
                    onChange={() => setTenurePeriod("OneWeek")}
                    className="mr-1"
                  />
                  OneWeek
                </label>
                <label className="flex items-center text-gray-300">
                  <input
                    type="radio"
                    value="OneMonth"
                    checked={tenurePeriod === "OneMonth"}
                    onChange={() => setTenurePeriod("OneMonth")}
                    className="mr-1"
                  />
                  OneMonth
                </label>
              </div>
            </div>

            <button
              className="w-full py-2 mt-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-200"
              onClick={onClose}
            >
              Submit Bet
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideUpModal;
