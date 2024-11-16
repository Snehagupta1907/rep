import React from "react";
import { FiSearch } from "react-icons/fi";
import ExploreItem from "../../components/Resusable/Explore";


export default function Coins() {
  const coins = [
    {
      id: 1,
      name: "Bitcoin",
      imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=0444",
      symbol: "BTC",
      marketCap: "$1.2T",
    },
    {
      id: 2,
      name: "Ethereum",
      imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035",
      symbol: "ETH",
      marketCap: "$500B",
    },
    {
      id: 3,
      name: "Binance",
      imageUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=035",
      symbol: "BNB",
      marketCap: "$91B",
    },
  ];

  return (
    <div className="min-h-screen p-4 pb-[100px]">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-light-1">Explore Coins</h1>
        <p className="text-light-3 text-sm">Discover top cryptocurrencies</p>
      </div>

      {/* Top Bar */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center w-full max-w-lg relative">
          <FiSearch className="absolute left-3 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search coins"
            className="w-full pl-10 py-2 rounded-lg bg-gray-800 text-white placeholder-white outline-none"
          />
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-7 justify-items-center">
  {coins.map((coin) => (
    <ExploreItem
      key={coin.id}
      item={coin}
      type="coin"
      fields={[
        { label: "Symbol", key: "symbol" },
        { label: "Market Cap", key: "marketCap" },
      ]}
      buttonText="Bet on Coin"
      linkBase="/coins"
    />
  ))}
</div>

    </div>
  );
}
