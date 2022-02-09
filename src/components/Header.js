import React, {useState} from "react";
import Search from "./Search";
import Sorter from "./Sorter";

function Header({handleSetSearchInput, setSearchTerm, filteredItemsArray}) {

  // const [sortBy, setSortBy] = useState("id");

  // const sortedItems = filteredItemsArray.sort((listingA, listingB) => {
  //   if (sortBy === "id") {
  //     return listingA.id - listingB.id;
  //   } else {
  //     return listingA.location.localeCompare(listingB.location);
  //   }
  // })

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        setSearchTerm={setSearchTerm}
        handleSetSearchInput={handleSetSearchInput}
      />
      {/* <Sorter 
        sortedArray={sortedItems}
        setSortBy={setSortBy}/> */}
    </header>
  );
}

export default Header;
