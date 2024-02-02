import Navbar from "./Navbar";
import Home from "./Home";
import Results from "./Results";
import About from "./About";
import Footer from "./Components/Footer";


import { Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
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
