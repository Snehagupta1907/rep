import React from 'react'

const RecentBets = () => {
  return (
    <>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Bets History Table */}
      <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-lg md:text-xl font-bold text-purple-400 mb-3 md:mb-4">
          Bets History
        </h2>
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="px-2 md:px-4 py-2 text-xs md:text-sm font-semibold text-gray-400">
                BET ID
              </th>
              <th className="px-2 md:px-4 py-2 text-xs md:text-sm font-semibold text-gray-400">
                AMOUNT
              </th>
              <th className="px-2 md:px-4 py-2 text-xs md:text-sm font-semibold text-gray-400">
                USER
              </th>
              <th className="px-2 md:px-4 py-2 text-xs md:text-sm font-semibold text-gray-400">
                PREDICTED SCORE
              </th>
              <th className="px-2 md:px-4 py-2 text-xs md:text-sm font-semibold text-gray-400">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="px-2 md:px-4 py-3 text-xs md:text-sm">
                0
              </td>
              <td className="px-2 md:px-4 py-3 text-xs md:text-sm">
                200 Buzz
              </td>
              <td className="px-2 md:px-4 py-3 text-xs md:text-sm">
                0xcfa...1c9870B891
              </td>
              <td className="px-2 md:px-4 py-3 text-xs md:text-sm">
                86300
              </td>
              <td className="px-2 md:px-4 py-3 text-xs md:text-sm">
                <span className="h-3 w-3 md:h-4 md:w-4 bg-green-500 rounded-full inline-block"></span>
              </td>
            </tr>
            {/* Add more rows here as needed */}
          </tbody>
        </table>
      </div>

      {/* Chart Section */}
      <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-xl font-bold text-purple-400 mb-3 md:mb-4">
          Total Amount Chart
        </h2>
        <div className="h-48 md:h-64 flex items-center justify-center">
          {/* Placeholder for chart, replace with actual chart component */}
          <p className="text-gray-400">Chart goes here</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default RecentBets