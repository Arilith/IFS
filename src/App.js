import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';
import Items from "./components/Items/Items";
import Nav from './components/Nav';
import Home from './components/pages/Home'
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


  return(
    <div className="App">
      <div className="animated fadeOut"></div>
      <Nav getSearch = {getSearch} search = {search} updateSearch = {updateSearch} itemsInFridge = {itemsInFridge} setItemsInFridge = {setItemsInFridge} removeItem = {removeItem} updateRecipes = {updateRecipes} itemsInFridge = {itemsInFridge} updateRecipes = {updateRecipes} />
      <Home recipes = { recipes } />
    </div>
  );
}

export default App;
