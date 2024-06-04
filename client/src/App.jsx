import {} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AdminLogin from "./pages/AdminLogin";
import Complaint from './pages/Complaint';
import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';
import Policies from './pages/Policies';
import Terms from './pages/Terms';
import PageNotFound from "./pages/PageNotFound";
// import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <Box>
      <Router>
        {/* <Sidebar /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/complaints" element={<Complaint />} />
          {/* <Route path="/Sidebar" element={<Sidebar />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/stats" element={<Stats />} />
          <Route path='/Policies' element={<Policies />} />
          <Route path="/t&c" element={<Terms />} />
          <Route path="*" element={<PageNotFound />} />
          </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
