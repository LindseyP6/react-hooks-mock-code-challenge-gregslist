import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemsArray, setItemsArray] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r=>r.json())
    .then(data => setItemsArray(data))
  }, [] ) 

  function handleSetSearchInput(e){
    setSearchTerm(e.target.value)
  }

  const filteredItemList = itemsArray.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()))

  function handleDeleteState(id){
    const byebyeItem = itemsArray.filter(item => item.id !==id)
    setItemsArray(byebyeItem)
  }

  return (
    <div className="app">
      <Header 
        filteredItemsArray={filteredItemList}
        setSearchTerm={setSearchTerm}
        handleSetSearchInput={handleSetSearchInput}
      />
      <ListingsContainer 
        itemsArray={filteredItemList}
        handleDeleteState={handleDeleteState} 
      />
    </div>
  );
}

export default App;
