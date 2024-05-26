import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setNav(false);
    }
  };

  return (
    <Box>
      <div className="bg-[#B19470] flex justify-between items-center h-24 w-full mx-auto px-4 text-white relative z-50">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl p-6 text-[#4F6F52]  font-bold">
            e-ComplaintDesk
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          <Link
            to="/admin"
            className="p-4 font-bold text-lg text-[#4F6F52] hover:bg-[#739072] rounded-lg m-2 cursor-pointer duration-500"
          >
            Login As Admin
          </Link>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#B19470] ease-in-out duration-500 z-50"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
          }
        >
          {/* Mobile Logo */}
          <Link to="/">
            <h1 className="text-2xl pt-14 pl-14  text-[#4F6F52]  font-bold">
              e-ComplaintDesk
            </h1>
          </Link>

          {/* Mobile Navigation Items */}
          <ul className="grid grid-rows-1">
            <Link
              onClick={closeMenuOnMobile}
              to="/admin"
              className="p-4 font-bold text-2xl text-[#4F6F52] hover:bg-[#739072] rounded-lg  m-2 cursor-pointer duration-500"
            >
              Login As Admin
            </Link>
          </ul>
        </ul>
      </div>
    </Box>
  );
};

export default Navbar;
