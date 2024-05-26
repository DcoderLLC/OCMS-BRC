import {} from "react";
import { Box } from "@mui/material";

const HeroHome = () => {
  return (
    <Box>
      <div className="flex justify-center ">
        <div className="pt-14 m-4 max-w-screen-md">
          <h1 className="text-3xl font-semibold text-[#4F6F52] text-center">
            Welcome to e-ComplaintDesk
          </h1>
          <h2 className="text-2xl font-semibold text-[#4F6F52] text-center">
            We are here to help you
          </h2>
          <div className=" md:grid-cols-2 m-6 p-4">
            <p className="text-center md:text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HeroHome;
