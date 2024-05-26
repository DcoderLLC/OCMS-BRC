import {} from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      <footer className="bg-[#B19470]">
        <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
          <Link to="/">
            <h1 className="text-lg font-semibold pl-5 text-[#4F6F52]">
              e-ComplaintDesk
            </h1>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <Link
              to="/admin"
              className=" p-4 font-semibold text-md text-[#4F6F52] hover:bg-[#739072] rounded-lg m-2 cursor-pointer duration-500"
            >
              Login As Admin
            </Link>
            <Link
              to="/policies"
              className=" p-4 font-semibold text-md text-[#4F6F52] hover:bg-[#739072] rounded-lg m-2 cursor-pointer duration-500"
            >
              Privacy Policy
            </Link>
            <Link
              to="/t&c"
              className=" p-4 font-semibold text-md text-[#4F6F52] hover:bg-[#739072] rounded-lg m-2 cursor-pointer duration-500"
            >
              Terms&Conditions
            </Link>
          </div>

          <p className="mt-6  text-[#4F6F52] text-md font-semibold lg:mt-0 ">
            © Copyright 2023 Meraki UI.{" "}
          </p>
        </div>
      </footer>
    </Box>
  );
};

export default Footer;
