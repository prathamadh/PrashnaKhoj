import React from "react";
import "./Combined.css";
import "./ImageSec.css";
import FIlter from "./FIlter";
import Search from "./Search";

const ImageSec = () => {
  return (
    <div className="imageSec">
      {/* <p className="imageSecP">Feel Free To Search Anything</p> */}
      <div className="textBox">
      <h3 className="tagline">
    Unlock the Past, Master the Future :{' '}
    <span style={{ color: '#EB5A08', fontSize: '40px' }}>PrashnaKhoj</span>
    <br />
    Your Gateway to Academic Excellence and GRE Success!
  </h3>
      
      <h4 className="description">
        PrashnaKhoj is a dynamic hub that not only connects students with a vast database of questions but also empowers them with specialized features for mastering the intricacies of GRE listening, speaking, and writing tests.
      </h4>
      </div>
      <Search />
      {/* <FIlter /> */}
    </div>
  );
};

export default ImageSec;
