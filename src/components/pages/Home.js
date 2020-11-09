import React from 'react';
import '../../App.css';
import Recipe from '../../Recipe'

const Home = (props) => {
    const recipes = props.recipes;
    return(
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
    )
}

export default Home;

