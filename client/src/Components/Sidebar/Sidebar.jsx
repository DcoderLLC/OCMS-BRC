import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartPie, FaTable, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`w-64 h-screen bg-gray-800 text-white  lg:relative z-20 ${isOpen ? "block" : "hidden"} lg:block`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="pt-10">
          <ul>
            <li className="mb-4">
              <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <FaHome className="mr-3" /> Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/dashboard/charts" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <FaChartPie className="mr-3" /> Charts
              </Link>
            </li>
            <li>
              <Link to="/dashboard/table" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <FaTable className="mr-3" /> Table
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="lg:hidden flex items-center p-4 bg-gray-800 text-white fixed w-full z-10">
        <button onClick={toggleSidebar} className="text-2xl">
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
