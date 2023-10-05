// import React, { useEffect } from "react";
// // import { exportImgArr } from "./Search";
// // import { useLocation } from "react-router-dom";
// import Search from "./Search";

// const Results = () => {
//   // const location = useLocation();
//   // const { searchResults } = location.state || {};

//   // const imgContainer = document.getElementById("imgContainer");

//   // useEffect(() => {
//   //   // imgContainer.innerHTML = "";
//   //   const imgArr = searchResults;
//   //   console.log(imgArr);
//   //   imgArr.forEach((imgSrc) => {
//   //     const imgElement = document.createElement("img");
//   //     imgElement.src = imgSrc;
//   //     imgContainer.appendChild(imgElement);
//   //   }, []);
//   // });

//   return (
//     <div>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
//         eaque animi aliquam, mollitia architecto, quae officiis voluptates nemo
//         tempore soluta facere esse iure dignissimos, similique fugit eius nobis
//         nesciunt. A, cum repellat.
//       </p>
//       <div id="imgContainer"></div>
//       <Search />
//     </div>
//   );
// };

// export default Results;
// import React from "react";
// import { useLocation } from "react-router-dom";
// import Search from "./Search";

// const Results = () => {
//   // Use the useLocation hook to get the data passed from the Search component
//   const location = useLocation();
//   const { imgArr } = location.state || {}; // Access imgArr from location state

//   return (
//     <>
//       {/* <Search /> */}
//       <div>
//         <h1>Results</h1>
//         {/* Display the imgArr data here */}
//         <div id="imgContainer">
//           {imgArr &&
//             imgArr.map((imgSrc, index) => (
//               <img key={index} src={imgSrc} alt={`Image ${index}`} />
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Results;
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const Results = () => {
//   const location = useLocation();
//   const { imgArr } = location.state || {};

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNext = () => {
//     if (currentImageIndex < imgArr.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   return (
//     <div>
//       <h1>Results</h1>

//       {/* Image slider container */}
//       <div className="container">
//         <div className="content-wrapper" id="contentWrapper">
//           {imgArr && imgArr.length > 0 && (
//             <img
//               className="image"
//               src={imgArr[currentImageIndex]}
//               alt={`Image ${currentImageIndex}`}
//             />
//           )}
//         </div>

//         {/* Navigation buttons */}
//         <button onClick={handlePrev}>Previous</button>
//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Results;
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const Results = () => {
//   // Use the useLocation hook to get the data passed from the Search component
//   const location = useLocation();
//   const { imgArr } = location.state || {}; // Access imgArr from location state

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNext = () => {
//     if (currentImageIndex < imgArr.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   return (
//     <div>
//       <h1>Results</h1>
//       {/* Display the imgArr data here */}
//       <div className="container">
//         <div className="content-wrapper" id="contentWrapper">
//           <img
//             className="image"
//             src={imgArr && imgArr[currentImageIndex]}
//             alt={`Image ${currentImageIndex}`}
//           />
//         </div>
//         {/* Navigation buttons */}
//         <button onClick={handlePrev}>Previous</button>
//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Results;

import React from "react";
import { useLocation } from "react-router-dom";
import "./Results.css"; // Import your custom CSS for styling

const Results = () => {
  // Use the useLocation hook to get the data passed from the Search component
  const location = useLocation();
  const { imgArr, search } = location.state || {}; // Access imgArr from location state

  return (
    <div className="results">
      <div className="spacer"></div>
      <p className="resultPara">Results for "{search}":</p>
      <div className="results-container">
        {/* Display the imgArr data here */}
        <div className="img-container">
          {imgArr &&
            imgArr.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`Image ${index}`} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
