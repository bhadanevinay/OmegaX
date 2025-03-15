import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Refer from "./pages/Refer";
import Leaderboard from "./pages/Leaderboard";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader"; // Import Loader
import disableRightClickAndZoom from "./utils/disableActions"; // Import function
import "./App.css";

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // Show loader for 800ms
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="app-container">
      {loading && <Loader />}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  useEffect(() => {
    disableRightClickAndZoom(); // Call function to disable right-click & zoom
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
