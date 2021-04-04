import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="search-input"
        placeholder="Search by Make or Model"
        type="text"
        name="Search"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        autoFocus
      />
    </form>
  );
};

export default Search;
