import React from "react";

const FirewallPortConfiguration = () => {
  // Sample Data for Ports (You can replace this with dynamic data)
  const ports = [
    { id: 1, port: 22 },
    { id: 2, port: 1880 },
    { id: 3, port: 5900 },
    { id: 4, port: 80 },
    { id: 5, port: 9600 },
  ];

  // Function to handle the delete action (for now just a log)
  const handleDelete = (id) => {
    console.log(`Delete port with id: ${id}`);
    // Add actual delete logic here
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto py-8">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-900 text-white py-3 px-6 rounded-t-lg">
          <h2 className="text-lg font-bold">Firewall Port Configuration</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            OPEN PORT
          </button>
        </div>

        {/* Port Table */}
        <div className="p-6">
          <table className="w-full table-auto text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Port Number</th>
                <th className="py-2 px-4 border-b text-right">Actions</th>
              </tr>
            </thead>
            <br/>
            <tbody>
              {ports.map((port, index) => (
                <tr key={port.id}>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{port.port}</td>
                  <td className="py-2 px-4 border-b text-right">
                    <button
                      onClick={() => handleDelete(port.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FirewallPortConfiguration;
