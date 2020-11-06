import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';
import Items from "./components/Items/Items"
const App = () => {

  const APP_ID = '7eeb6043';
  const APP_KEY = '7b018ae4f245c4318e137ed6a44ff60d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const [itemsInFridge, setItemsInFridge] = useState([]);

  useEffect(() => {
    let itemsInFridge = [
      { id: 1, name: "Milk" },
      { id: 2, name: "Peas" },
      { id: 3, name: "Beef" },
      { id: 4, name: "Salt" },
      { id: 5, name: "Pepper" },
      { id: 6, name: "Butter" },
    ];

    setItemsInFridge(
      itemsInFridge.map(data => {
        return {
          select: false,
          id: data.id,
          name: data.name
        };
      })
    );
  }, []);


  // const JumboApi = require('jumbo-api');

  useEffect(() => {
     getRecipes();
  }, [query]); 

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

 function updateRecipes(e) {
   setQuery(e);
   getRecipes();
   setSearch("");
 }

 function removeItem(par) {
  setItemsInFridge(
    itemsInFridge.map(data => {
      if(data) {
        if(par !== data.name) {
          console.log(data.name);
          return {
            select: data.select,
            id: data.id,
            name: data.name
          };
        }
      }
    })
  );
 }
  
  function toggleNav() {
    if(document.getElementById("mySidenav").style.width === "100%") {
      document.getElementById("mySidenav").style.width = "0";
    } else {
      document.getElementById("mySidenav").style.width = "100%";
    }
  }
  


  return(
    <div className="App">
      <div className="animated fadeOut"></div>
      <div className="topnav" id="myTopnav">
        <a>IFS</a>
        <a className="icon" onClick={() => toggleNav()}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <div id="mySidenav" className="sidenav">
        <div className="sideBarTitle">My Refrigerator</div>
        <a className="closebtn" onClick={() => toggleNav()}>&times;</a>
        <form id="searchForm" className="search-form" onSubmit={getSearch}>
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                Select
              </th>
              <th>Product</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <Items itemsInFridge={itemsInFridge} setItemsInFridge = {setItemsInFridge} removeItem = {removeItem} updateRecipes = {updateRecipes} />
          </tbody>
        </table>
        <button 
            className="sendButton" 
            onClick={event => {
              let selectedItems = "";
              itemsInFridge.map(data => {
                if(data.select === true) {
                  selectedItems += data.name + ", ";
                }
              })
              updateRecipes(selectedItems);
            }}
          >Search</button>
      </div>   
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            title = {recipe.recipe.label} 
            calories = {recipe.recipe.calories} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            healthlabels = {recipe.recipe.healthLabels}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
