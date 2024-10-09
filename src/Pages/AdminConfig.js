import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleShutdown = () => {
    console.log("Shutdown triggered");
  };

  const handleReset = () => {
    console.log("Reset triggered");
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto py-8 space-y-8">
      {/* Real Time Clock Section */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
        <div className="bg-gray-900 text-white text-center py-3 rounded-t-lg">
          <h2 className="text-lg font-bold">Real Time Clock</h2>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4 text-center">
          <div>
            <h3 className="font-semibold">Current Date</h3>
            <p className="mt-2 text-lg">{currentTime.toISOString().split("T")[0]}</p>
          </div>
          <div>
            <h3 className="font-semibold">Current Time</h3>
            <p className="mt-2 text-lg">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
      </div>

      {/* Admin Configuration Section */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
        <div className="bg-gray-900 text-white text-center py-3 rounded-t-lg">
          <h2 className="text-lg font-bold">Admin Configuration</h2>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4 text-center">
          <div>
            <h3 className="font-semibold">Change Username & Password</h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2">
              CHANGE
            </button>
          </div>
          <div>
            <h3 className="font-semibold">Reboot Gateway</h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2">
              REBOOT
            </button>
          </div>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4 text-center">
          <div>
            <h3 className="font-semibold">Shutdown Gateway</h3>
            <button
              onClick={handleShutdown}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-2"
            >
              SHUTDOWN
            </button>
          </div>
          <div>
            <h3 className="font-semibold">Reset Gateway</h3>
            <button
              onClick={handleReset}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded mt-2"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
