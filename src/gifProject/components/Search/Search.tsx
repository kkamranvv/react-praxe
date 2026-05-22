import React from "react";

import "./Search.css";

import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search gifs and stickers..." />
      <div className="search-icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
