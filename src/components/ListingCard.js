import React, {useState} from "react";

function ListingCard({id, description, image, location, handleDeleteState}) {
  const [favorite, setFavorite] = useState(false)

  function toggleFavorite(){
    setFavorite(favorite => !favorite)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(r=>r.json())
    .then(handleDeleteState(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button 
            className="emoji-button favorite active"
            onClick={toggleFavorite}>★</button>
        ) : (
          <button 
            className="emoji-button favorite"
            onClick={toggleFavorite}>☆</button>
        )}

        <strong>{description}</strong>
        <span> · {location}</span>

        <button 
          className="emoji-button delete"
          onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
