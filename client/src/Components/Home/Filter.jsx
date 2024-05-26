import React from "react";
import { Box, MenuItem, FormControl, Select } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter = () => {
  const [category, setCategory] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [color, setColor] = React.useState("");
  const [size, setSize] = React.useState("");

  return (
    <Box className="px-5 mx-5">
      <div className="flex justify-center pb-8">
        <h1 className="text-2xl font-semibold text-[#4F6F52]">
          Check Similar Complains
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[#739072] p-4 shadow-md rounded-md">
        <div className="mb-4 lg:mb-0 lg:mr-4">
          <h1>Sort By:</h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-8">
          <FormControl
            variant="outlined"
            size="small"
            className="min-w-[120px]"
          >
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              displayEmpty
              IconComponent={ExpandMoreIcon}
            >
              <MenuItem value="">
                <em>Category</em>
              </MenuItem>
              <MenuItem value="1">Category 1</MenuItem>
              <MenuItem value="2">Category 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            size="small"
            className="min-w-[120px]"
          >
            <Select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              displayEmpty
              IconComponent={ExpandMoreIcon}
            >
              <MenuItem value="">
                <em>Location</em>
              </MenuItem>
              <MenuItem value="a">Location A</MenuItem>
              <MenuItem value="b">Location B</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            size="small"
            className="min-w-[120px]"
          >
            <Select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              displayEmpty
              IconComponent={ExpandMoreIcon}
            >
              <MenuItem value="">
                <em>Vote</em>
              </MenuItem>
              <MenuItem value="h">High</MenuItem>
              <MenuItem value="l">Low</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            size="small"
            className="min-w-[120px]"
          >
            <Select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              displayEmpty
              IconComponent={ExpandMoreIcon}
            >
              <MenuItem value="">
                <em>Type</em>
              </MenuItem>
              <MenuItem value="e">Electricity</MenuItem>
              <MenuItem value="c">Construction</MenuItem>
              <MenuItem value="d">Dumping</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </Box>
  );
};

export default Filter;
