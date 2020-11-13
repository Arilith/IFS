import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';

import Recipe from "./Recipe";
import Items from "./components/Items/Items";
import Nav from './components/Nav';
import Home from './components/pages/Home'
import RecipePage from './components/pages/RecipePage';
import Recipes from './components/pages/Recipes';
import './App.css';
import GlobalState from './components/API';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

let previousJSON = [];

const App = () => {

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const [itemsInFridge, setItemsInFridge] = useState([]);

  useEffect(() => {
    let itemsInFridge = [
      { id: 1, name: "Loading items..." },
    ];

    setItemsInFridge(
      itemsInFridge.map(data => {
        return {
          select: false,
          id: data.id,
          name: data.name,
          amount: data.amount
        };
      })
    );
  }, []);



  useEffect(() => {
    GlobalState.on("FetchedData", (json) => {
      if (previousJSON.length != json.length) {
        previousJSON = json;
        setItemsInFridge([]);
        setItemsInFridge(previousJSON);
        console.log(previousJSON);
      }
    })
  }, [])





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

  const removeItem = async (par) => {
    // setItemsInFridge(
    //   itemsInFridge.map(data => {
    //     if (data) {
    //       if (par !== data.name) {
    //         console.log(data.name);
    //         return {
    //           select: data.select,
    //           id: data.id,
    //           name: data.name,
    //           amount: data.amount
    //         };
    //       }
    //     }
    //   })
    // );

    const response = await fetch(`http://136.144.41.144/database.php?removeitem&item=${par}&userid=1`);
    alertify.notify("Item was removed.");
  }


  return (
    <Router>
      <div className="App">
        {/* <div className="animated fadeOut"></div> */}
        <Nav getSearch={getSearch} search={search} updateSearch={updateSearch} itemsInFridge={itemsInFridge} setItemsInFridge={setItemsInFridge} removeItem={removeItem} updateRecipes={updateRecipes} itemsInFridge={itemsInFridge} updateRecipes={updateRecipes} />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Recipe/:id" component={RecipePage} />
          <Route path="/Recipes/:query" component={Recipes} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
