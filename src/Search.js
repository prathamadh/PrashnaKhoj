import React, { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";

// axios.create({
//   baseURL: "http://localhost:3500",
// });

const Search = () => {
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   console.log(search);
  // }, [search]);
  const imgContainer = document.getElementById("imgContainer");

  const handleSubmit = async (e) => {
    e.preventDefault(console.log("result" + search));

    try {
      const response = await axios.post(
        "http://localhost:3500/api",
        JSON.stringify({
          search: search,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const imgArr = response.data.results;

      imgContainer.innerHTML = "";

      imgArr.forEach((imgArr) => {
        const imgElement = document.createElement("img");
        imgElement.src = imgArr;
        imgContainer.appendChild(imgElement);
      });
    } catch (err) {
      if (!err?.response) {
        console.log("No server response");
      } else {
        console.log("Failed");
      }
    }
  };
  return (
    <>
      <div id="cover">
        <form onSubmit={handleSubmit}>
          <div className="tb">
            <div className="td">
              <input
                type="text"
                placeholder="Search"
                required
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div id="imgContainer"></div>
    </>
  );
};

export default Search;
