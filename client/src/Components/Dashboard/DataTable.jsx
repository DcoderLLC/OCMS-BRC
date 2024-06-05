import {} from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const DataTable = () => {
  const rows = [
    { id: 1, location: "New York", type: "Office", votes: 120 },
    { id: 2, location: "Los Angeles", type: "Warehouse", votes: 80 },
    { id: 2, location: "Los Angeles", type: "Warehouse", votes: 80 },
    { id: 2, location: "Los Angeles", type: "Warehouse", votes: 80 },
    // Add more rows as needed
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sl. No.</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Votes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.votes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
