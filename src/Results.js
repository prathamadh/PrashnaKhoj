import React, { useEffect } from "react";
import { exportImgArr } from "./Search";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { searchResults } = location.state || {};

  const imgContainer = document.getElementById("imgContainer");

  useEffect(() => {
    // imgContainer.innerHTML = "";
    const imgArr = searchResults;
    console.log(imgArr);
    imgArr.forEach((imgSrc) => {
      const imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgContainer.appendChild(imgElement);
    }, []);
  });

  return (
    <div>
      <div id="imgContainer"></div>
    </div>
  );
};

export default Results;
