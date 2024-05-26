import { useEffect, useState } from "react";
import { Box, Stack, Pagination, Typography } from "@mui/material";
import CardDeatils from "./CardDeatils";
import data from "../../data/Complaint";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const SimilarCards = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust the number of items per page as needed

  // Calculate the indices of items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <Box>
      <Stack sx={{ marginTop: { sm: "50px" } }}>
        <Stack
          marginTop={2}
          flexDirection={"row"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={3}
        >
          {currentItems.map((blog) => (
            <CardDeatils
              blog={blog}
              title={blog.title}
              description={blog.description} // Use description here
              key={blog.id}
              image={blog.blogimage}
            />
          ))}
        </Stack>
        <Stack alignItems="center" marginTop={4}>
          <Typography className=" text-lg font-bold p-3">
            See Others Pages
          </Typography>
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </Stack>

      <div className="grid pb-10 justify-center">
        <Typography>Add your Complaints</Typography>
        <br />
        <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <Link to="/complaints">Add Your Complaint</Link>
        </button>
      </div>
    </Box>
  );
};

export default SimilarCards;
