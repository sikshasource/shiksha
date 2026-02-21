import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ByDomain from "./pages/ByDomain";
import ByDegree from "./pages/ByDegree";
import ByTechnology from "./pages/ByTechnology";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/by-domain" element={<ByDomain />} />
        <Route path="/by-degree" element={<ByDegree />} />
        <Route path="/by-technology" element={<ByTechnology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
