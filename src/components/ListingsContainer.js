import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({itemsArray, handleDeleteState}) {

  const listingCardComp = itemsArray.map((item) => 
    <ListingCard 
      key={item.id}
      {...item}
      handleDeleteState={handleDeleteState}
    />)
  return (
    <main>
      <ul className="cards">
        {listingCardComp}
      </ul>
    </main>
  );
}

export default ListingsContainer;
