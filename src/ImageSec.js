import React from "react";
import "./Combined.css";
import "./ImageSec.css";
import FIlter from "./FIlter";
import Search from "./Search";

const ImageSec = () => {
  return (
    <div className="imageSec">
      {/* <p className="imageSecP">Feel Free To Search Anything</p> */}
      <div className="search-filter-container">
        <Search />
        <FIlter />
      </div>
    </div>
  );
};

export default ImageSec;
