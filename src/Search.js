import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault(console.log("result" + search));
  };
  return (
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
  );
};

export default Search;
