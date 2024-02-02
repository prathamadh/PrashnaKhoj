import React from "react";
import "./Section.css";
import sideImg from './img/student.png';
const Section = () => {
  return (
    <div className="sec">
      <p className="secP">
      <span style={{ color: '#EB5A08', fontSize: '60px' }}> Search </span> a Keyword  & <br/>
      Get Questions <span style={{ color: '#EB5A08', fontSize: '60px' }}> Easily  </span> !
      </p>
      <img src={sideImg} alt="Student" />
    </div>
  );
};

export default Section;
