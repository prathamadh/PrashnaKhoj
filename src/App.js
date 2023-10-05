import Navbar from "./Navbar";
import Home from "./Home";
import Results from "./Results";
import About from "./About";
import Section from "./Section";
import ImageSec from "./ImageSec";

import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ImageSec />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Search from "./Search";
// import Results from "./Results"; // Assuming you have a Results component

// function App() {
//   return (
//     <Router>

//       <Routes>
//         <Route path="/" element={<Search />} />
//         <Route path="/results" element={<Results />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
