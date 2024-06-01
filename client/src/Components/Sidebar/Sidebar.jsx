// import from 'react';
import { Card, Typography, List, ListItem, ListItemPrefix } from '@material-tailwind/react';
import { PresentationChartBarIcon, ArrowDownOnSquareIcon, PowerIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Card
      className={`h-full fixed md:relative z-50 rounded-lg pt-24 md:h-[calc(100vh-2rem)] bg-[#B2A59B] w-64 p-4 shadow-xl shadow-blue-gray-900/5 top-0 left-0 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
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
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func,
};

export default Sidebar;
