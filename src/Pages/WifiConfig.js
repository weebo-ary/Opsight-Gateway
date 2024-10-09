import React from "react";

const WifiConnections = () => {
  return (
    <div className="flex justify-center items-start mt-10 h-screen ">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
        {/* Header */}
        <div className="bg-gray-900 text-white flex justify-between items-center py-3 px-6 rounded-t-lg">
          <h2 className="text-lg font-bold">Wi-Fi Connections</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            SCAN AVAILABLE NETWORK
          </button>
        </div>
        
        {/* Current SSID */}
        <div className="p-4">
          <p>
            Current SSID: <span className="font-semibold">Ram</span>
          </p>
        </div>

        {/* Wi-Fi SSID Table */}
        <div className="p-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b-2 text-left text-gray-600">#</th>
                <th className="px-6 py-3 border-b-2 text-left text-gray-600">SSID Name</th>
                <th className="px-6 py-3 border-b-2 text-right text-gray-600"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">Ram</td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                    CONNECT
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WifiConnections;
