import React, { useState } from "react";
import "./SearchInputForm.css";
import { useNavigate } from "react-router";

function SearchInputForm() {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(e.target.value);
  };

  const redirectToSearch = () => {
    if (searchField === "") {
      alert("SearchField is Empty");
    } else {
      // Navigate to the search page with the search field as state
      navigate("/search", { state: searchField });
    }
  };

  return (
    <div className="search-input-form-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search Books"
        value={searchField}
        onChange={handleChange}
      />
      <button onClick={redirectToSearch} className="search-button">
        Search
      </button>
    </div>
  );
}

export default SearchInputForm;
