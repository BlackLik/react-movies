import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      props.searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    props.searchMovies(search, e.target.dataset.type);
  };

  return (
    <>
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => props.searchMovies(search, type)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="row type-search">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="episode"
            onChange={handleFilter}
            checked={type === "episode"}
          />
          <span>Episode</span>
        </label>
      </div>
    </>
  );
}

export default Search;
