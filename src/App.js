import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import Item from "./Item";
import './App.css';

const App = () => {

  const APP_ID = '7eeb6043';
  const APP_KEY = '7b018ae4f245c4318e137ed6a44ff60d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState();

  const itemsInFridge = ["Milk", "Beef", "Carrots", "Tomatoes", "Peas"];
  // const JumboApi = require('jumbo-api');

  useEffect(() => {
     getRecipes();
  }, [query]); 

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
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

  
  function toggleNav() {
    if(document.getElementById("mySidenav").style.width == "100%") {
      document.getElementById("mySidenav").style.width = "0";
    } else {
      document.getElementById("mySidenav").style.width = "100%";
    }
  }
  


  return(
    <div className="App">
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
        
          <ul>
            {itemsInFridge.map(item => (
              <Item updateSearch2={updateRecipes} title={item}></Item>
            ))}
          </ul>
      </div>   
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key = {recipe.recipe.label} 
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
