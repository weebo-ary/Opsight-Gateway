import React from "react";

const StaticIPConfiguration = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 h-auto py-8 space-y-8">
      {/* Wi-Fi Static IP Configuration */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-900 text-white py-3 px-6 rounded-t-lg">
          <h2 className="text-lg font-bold">WiFi Static IP Configuration</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            ADD WIFI PROFILE
          </button>
        </div>
        
        {/* Wi-Fi Table */}
        <div className="p-6">
          <table className="w-full table-auto text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Profile Name</th>
                <th className="py-2 px-4 border-b">IP Address</th>
                <th className="py-2 px-4 border-b">Router Address</th>
                <th className="py-2 px-4 border-b">DNS</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty table for now */}
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">Sample_WiFi_Profile</td>
                <td className="py-2 px-4 border-b">192.168.1.100</td>
                <td className="py-2 px-4 border-b">192.168.1.1</td>
                <td className="py-2 px-4 border-b">8.8.8.8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Ethernet Static IP Configuration */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-900 text-white py-3 px-6 rounded-t-lg">
          <h2 className="text-lg font-bold">Ethernet Static IP Configuration</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            ADD ETHERNET PROFILE
          </button>
        </div>
        
        {/* Ethernet Table */}
        <div className="p-6">
          <table className="w-full table-auto text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Profile Name</th>
                <th className="py-2 px-4 border-b">IP Address</th>
                <th className="py-2 px-4 border-b">Router Address</th>
                <th className="py-2 px-4 border-b">DNS</th>
                <th className="py-2 px-4 border-b text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data for the Ethernet table */}
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">static_eth0</td>
                <td className="py-2 px-4 border-b">10.42.0.2</td>
                <td className="py-2 px-4 border-b">192.168.1.200</td>
                <td className="py-2 px-4 border-b">255.255.255.0</td>
                <td className="py-2 px-4 border-b text-right space-x-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">
                    EDIT
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                    DELETE
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">2</td>
                <td className="py-2 px-4 border-b">192.168.1.200</td>
                <td className="py-2 px-4 border-b">192.168.1.201</td>
                <td className="py-2 px-4 border-b">192.168.1.1</td>
                <td className="py-2 px-4 border-b">8.8.4.4</td>
                <td className="py-2 px-4 border-b text-right space-x-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">
                    EDIT
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                    DELETE
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

export default StaticIPConfiguration;
