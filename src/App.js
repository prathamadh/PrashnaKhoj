import Navbar from "./Navbar";
import Home from "./Home";
import Results from "./Results";
import About from "./About";

import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/r" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
