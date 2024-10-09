import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App"; 
import NetworkStatus from "../Pages/Network"; 
import WifiConfig from "../Pages/WifiConfig"; 
import IPConfig from "../Pages/IPConfig"; 
import HealthMonitor from "../Pages/HealthMonitoring"; 
import PortConfig from "../Pages/PortConfig"; 
import AdminConfig from "../Pages/AdminConfig"; 
import Login from "../Auth/Login"; 

// Define your routes
const router = createBrowserRouter([
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/", 
        element: <NetworkStatus />,
      },
    ],
  },
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/wifi-config", 
        element: <WifiConfig />,
      },
    ],
  },
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/ip-config", 
        element: <IPConfig />,
      },
    ],
  },
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/health-monitor", 
        element: <HealthMonitor />,
      },
    ],
  },
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/port-config", 
        element: <PortConfig />,
      },
    ],
  },
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/admin-config", 
        element: <AdminConfig />,
      },
    ],
  },
]);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
