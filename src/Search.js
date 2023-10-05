import React, { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const exportImgArr = [];
const Search = () => {
  const [search, setSearch] = useState("");
  const [imgArr, setImgArr] = useState([]); // Declare and initialize imgArr here
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const images = response.data.results;
      setImgArr(images);

      navigate("/results", { state: { searchResults: imgArr } });
    } catch (err) {
      if (!err?.response) {
        console.log("No server response");
      } else {
        console.log("Failed");
      }
    }
  };

  const exportImgArr = imgArr;

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
    </>
  );
};

export default Search;
export { exportImgArr };
