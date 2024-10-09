import React from "react";
import { BsDisplayport } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import {
  MdLocationSearching,
  MdOutlineHealthAndSafety,
  MdOutlineWifiPassword,
} from "react-icons/md";
import { SiStatuspal } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../../Assets/Logo/DarkLogo.png";
import { BiEdit, BiLogOut } from "react-icons/bi";

const Drawer = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-gray-800 text-white flex items-center justify-between px-2 z-50 shadow-lg">
        <div>
          <img src={Logo} className="w-36 object-cover" alt="Logo-Opsight" />
        </div>
        <div className="flex items-center justify-center gap-5 mr-5">
          <button className="flex gap-2 items-center justify-center focus:outline-none text-gray-300 hover:text-gray-400 bg-gray-700 p-3 rounded-lg">
            <span className="text-2xl">
              <BiEdit />
            </span>
            Open Node-Red
          </button>
          <button className="flex gap-2 items-center justify-center focus:outline-none text-gray-300 hover:text-gray-400">
            <span className="text-2xl">
              <BiLogOut />
            </span>
            Signout
          </button>
        </div>
      </div>

      {/* Always Open Drawer */}
      <div className="fixed top-16 left-0 w-64 h-full bg-white text-black border-r-2">
        <div className="p-6">
          <ul>
            <li className="mt-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "text-black"
                }
              >
                <span className="flex gap-2 items-center justify-start">
                  <SiStatuspal /> Network Status
                </span>
              </NavLink>
            </li>
            <li className="mt-6">
              <NavLink
                to="/wifi-config"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "text-black"
                }
              >
                <span className="flex gap-2 items-center justify-start">
                  <MdOutlineWifiPassword /> Wi-Fi Configuration
                </span>
              </NavLink>
            </li>
            <li className="mt-6">
              <NavLink
                to="/ip-config"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "text-black"
                }
              >
                <span className="flex gap-2 items-center justify-start">
                  <MdLocationSearching /> IP Configuration
                </span>
              </NavLink>
            </li>
            <li className="mt-6">
              <NavLink
                to="/health-monitor"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "text-black"
                }
              >
                <span className="flex gap-2 items-center justify-start">
                  <MdOutlineHealthAndSafety /> Health Monitoring
                </span>
              </NavLink>
            </li>
            <li className="mt-6">
              <NavLink
                to="/port-config"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "text-black"
                }
              >
                <span className="flex gap-2 items-center justify-start">
                  <BsDisplayport /> Port Configuration
                </span>
              </NavLink>
            </li>
            <li className="mt-6">
              <NavLink
                to="/admin-config"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "text-black"
                }
              >
                <span className="flex gap-2 items-center justify-start">
                  <GrUserAdmin /> Admin Configuration
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 mt-16 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Drawer;
