// import React, { useEffect, useState } from "react";
// import "./Search.css";
// import axios from "axios";

// import Results from "./Results";

// import { useNavigate } from "react-router-dom";

// // axios.create({
// //   baseURL: "http://localhost:3500",
// // });

// const Search = () => {
//   const [search, setSearch] = useState("");
//   const [imgArr, setImgArr] = useState([]);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   console.log(search);
//   // }, [search]);
//   const imgContainer = document.getElementById("imgContainer");

//   const handleSubmit = async (e) => {
//     e.preventDefault(console.log("result" + search));
//     // navigate("/results");
//     try {
//       const response = await axios.post(
//         "http://localhost:3500/api",
//         JSON.stringify({
//           search: search,
//         }),
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       setImgArr(response.data.results);

//       imgContainer.innerHTML = "";

//       imgArr.forEach((imgArr) => {
//         const imgElement = document.createElement("img");
//         imgElement.src = imgArr;
//         imgContainer.appendChild(imgElement);
//       });
//     } catch (err) {
//       if (!err?.response) {
//         console.log("No server response");
//       } else {
//         console.log("Failed");
//       }
//     }
//   };
//   return (
//     <>
//       <div id="cover">
//         <form onSubmit={handleSubmit}>
//           <div className="tb">
//             <div className="td">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 required
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>
//             <div className="td" id="s-cover">
//               <button type="submit">
//                 <div id="s-circle"></div>
//                 <span></span>
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>

//       <div id="imgContainer"></div>

//     </>
//   );
// };

// export default Search;

import React, { useState } from "react";
import "./Combined.css";
import "./Search.css";


import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3500/searchs?q=${encodeURIComponent(search.trim())}`
      );

      // console.log(response);
      const data = await response.json();
      console.log(data);

      // Instead of modifying the DOM directly, navigate to the results page
      navigate("/results", 
      {
        state: { arr: data, search: search },
      }
      );
      
    } catch (err) {
      if (!err?.response) {
        console.log("No server response");
      } else {
        console.log("Failed");
      }
    }
  };

  return (
    <div id="cover">
      <form className="formm" onSubmit={handleSubmit}>
        <div className="tb">
          <div className="td">
            <input
              className="inputt"
              type="text"
              placeholder="Search"
              required
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="td" id="s-cover">
            <button className="btn" type="submit">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
