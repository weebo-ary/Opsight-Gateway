import React, { useEffect, useState } from 'react';

function Network() {
  // State to hold IP addresses
  const [defaultEthIP, setDefaultEthIP] = useState('');
  const [wifiIP, setWifiIP] = useState('');
  const [ethIP, setEthIP] = useState('');
  const [macID, setMacID] = useState('');
  const [WlanID, setWlanID] = useState('');

  // Fetch IP addresses when component mounts
  useEffect(() => {
    // Fetch Default Ethernet IP
    fetch('http://10.42.0.2:9600/getIPDefaultEth0')
      .then((response) => response.json())
      .then((data) => setDefaultEthIP(data.ip))
      .catch((error) => console.error('Error fetching Default Ethernet IP:', error));

    // Fetch Wi-Fi IP
    fetch('http://10.42.0.2:9600/getIPWlan0')
      .then((response) => response.json())
      .then((data) => setWifiIP(data.ip))
      .catch((error) => console.error('Error fetching Wi-Fi IP:', error));

    // Fetch Ethernet IP
    fetch('http://10.42.0.2:9600/getIPEth0')
      .then((response) => response.json())
      .then((data) => setEthIP(data.ip))
      .catch((error) => console.error('Error fetching Ethernet IP:', error));

      fetch('http://10.42.0.2:9600/getEthMacID')
      .then((response) => response.json())
      .then((data) => setMacID(data.ip))
      .catch((error) => console.error('Error fetching Ethernet IP:', error));

      fetch('http://10.42.0.2:9600/getWlanMacID')
      .then((response) => response.json())
      .then((data) => setWlanID(data.ip))
      .catch((error) => console.error('Error fetching Ethernet IP:', error));
  }, []);

  return (
    <div className="flex justify-center items-start h-screen mt-8">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
        {/* Header */}
        <div className="bg-gray-900 text-white text-center py-3 rounded-t-lg">
          <h2 className="text-lg font-bold">Current IP</h2>
        </div>

        {/* IP Address Details */}
        <div className="p-6 grid grid-cols-3 gap-4 text-center">
          {/* Default Ethernet IP */}
          <div>
            <h3 className="font-semibold">Default Ethernet IP Address</h3>
            <p className="mt-2 text-lg">{defaultEthIP || 'Loading...'}</p>
            <p className="mt-1 text-gray-500">{macID || 'Loading...'}</p> {/* Mocked MAC address */}
          </div>

          {/* Wi-Fi IP */}
          <div>
            <h3 className="font-semibold">Wi-Fi IP Address</h3>
            <p className="mt-2 text-lg">{wifiIP || 'Loading...'}</p>
            <p className="mt-1 text-gray-500">{WlanID || 'Loading...'}</p> {/* Mocked MAC address */}
          </div>

          {/* Ethernet IP */}
          <div>
            <h3 className="font-semibold">Ethernet IP Address</h3>
            <p className="mt-2 text-lg">{ethIP || 'Loading...'}</p>
            <p className="mt-1 text-gray-500">{macID || 'Loading...'}</p> {/* Mocked MAC address */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Network;
