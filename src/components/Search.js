import React  from "react";

function Search({handleSetSearchInput, searchTerm}) {

  function handleSubmitDeault(e) {
    e.preventDefault();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmitDeault}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleSetSearchInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
