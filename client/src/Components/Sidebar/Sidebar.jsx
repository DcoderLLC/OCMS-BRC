import {} from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartPie, FaTable } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="mt-10">
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
  );
};

export default Sidebar;
