import {} from "react";
import { Box } from "@mui/material";
import HeroHome from "../Components/Home/HeroHome";
import Filter from "../Components/Home/Filter";

const Home = () => {
  return (
    <Box className="bg-[#B2A59B]">
      <HeroHome />
      <Filter />
    </Box>
  );
};

export default Home;
