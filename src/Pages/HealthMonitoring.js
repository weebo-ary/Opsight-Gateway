import React from "react";

const HealthMonitor = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto py-8 space-y-8">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6">
        <h2 className="text-lg font-bold text-center mb-4">System Health Monitor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Temperature Card */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold">Temperature</h3>
            <p className="text-2xl mt-2 font-bold">45°C</p> {/* Replace with actual data */}
          </div>
          
          {/* CPU Utilization Card */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold">CPU Utilization</h3>
            <p className="text-2xl mt-2 font-bold">32%</p> {/* Replace with actual data */}
          </div>
          
          {/* Memory Usage Card */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold">Memory Usage</h3>
            <p className="text-2xl mt-2 font-bold">2.5 GB / 8 GB</p> {/* Replace with actual data */}
          </div>
          
          {/* Disk Usage Card */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold">Disk Usage</h3>
            <p className="text-2xl mt-2 font-bold">120 GB / 256 GB</p> {/* Replace with actual data */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMonitor;
