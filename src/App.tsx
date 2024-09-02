import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurClients from "./components/clients/OurClients";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route
            path="/ourClients"
            element={<OurClients/>}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;