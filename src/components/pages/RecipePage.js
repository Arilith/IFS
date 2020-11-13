import React, {useState, useEffect, Component } from 'react';
import {useHistory} from 'react-router-dom';

import '../../App.css';
import RecipeExpand from '../RecipeExpand'
import App from '../../App';

const Recipes = ({match}) => {

    const APP_ID = '7eeb6043';
    const APP_KEY = '7b018ae4f245c4318e137ed6a44ff60d';

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, [query]); 

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        setQuery(match.params.query);
    }

    let history = useHistory();

    useEffect(() => {
        history.listen((location, action) => {
            let splitURL = location.pathname.split("/");
            setQuery(splitURL[2]);
            
        });
    }, []);
        


    return(
        <div className="recipes">

          {recipes.map(recipe => (
            <RecipeExpand 
              key = {recipe.uri}
              title = {recipe.recipe.label} 
              calories = {recipe.recipe.calories} 
              image = {recipe.recipe.image}
              ingredients = {recipe.recipe.ingredients}
              healthlabels = {recipe.recipe.healthLabels}
              url = {recipe.recipe.uri}
            />
          ))}
        </div>
    )
}

export default Recipes;

