import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';

import Recipe from "./Recipe";
import Items from "./components/Items/Items";
import Nav from './components/Nav';
import Home from './components/pages/Home'
import RecipePage from './components/pages/RecipePage';
import Recipes from './components/pages/Recipes';

import './App.css';

const App = () => {
  
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
        { id: 7, name: "Peanutbutter" },
        { id: 8, name: "Curry" },
        { id: 9, name: "Ketchup" },
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

  // useEffect(() => {
  //   getRecipes();
  // }, [query]); 

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //   const data = await response.json();
  //   setRecipes(data.hits);
  // }

  

  const updateSearch = e => {
    setSearch(e.target.value);
  };


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  const updateRecipes = e => {
    setQuery(e);
    
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
    <Router>
      <div className="App">
      {/* <div className="animated fadeOut"></div> */}
      <Nav getSearch = {getSearch} search = {search} updateSearch = {updateSearch} itemsInFridge = {itemsInFridge} setItemsInFridge = {setItemsInFridge} removeItem = {removeItem} updateRecipes = {updateRecipes} itemsInFridge = {itemsInFridge} updateRecipes = {updateRecipes} />
      <Switch>
        <Route path="/" exact render ={(props) => ( <Home {...props} />)} />
        <Route path="/Recipe/:id" component = { RecipePage } />
        <Route path="/Recipes/:query" component = { Recipes } />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
