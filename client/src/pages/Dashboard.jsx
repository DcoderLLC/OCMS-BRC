import { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../Components/Sidebar/Sidebar'
import CountupCards from '../Components/Dashboard/CountupCards'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box className="relative flex">
      {/* Toggle Button for Small Screens */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 mt-14 bg-gray-800 text-white rounded-full focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay to close sidebar on small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <Box className="flex-grow p-4 md:ml-64">
        <CountupCards />
      </Box>
    </Box>
  );
};

export default Dashboard;
