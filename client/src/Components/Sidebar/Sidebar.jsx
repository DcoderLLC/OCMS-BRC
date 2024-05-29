import { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ArrowDownOnSquareIcon,
  PowerIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button for Small Screens */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 mt-14 bg-gray-800 text-white rounded-full focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <Card
        className={`h-full rounded-lg mt-24 md:h-[calc(100vh-2rem)] bg-[#B2A59B] w-64 p-4 shadow-xl shadow-blue-gray-900/5 fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:top-auto md:left-auto`}
      >
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Admin
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/dashboard" className="text-lg">
              Dashboard
            </Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/stats" className="text-lg">
              Stats
            </Link>
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <ArrowDownOnSquareIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link className="text-lg">Download</Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/" className="text-lg">
              Log Out
            </Link>
          </ListItem>
        </List>
      </Card>
      
      {/* Overlay to close sidebar on small screens */}
      {isOpen && (
        <div
          className=" inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
