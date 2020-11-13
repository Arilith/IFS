import React from 'react';
import style from './RecipeExpand.module.css';
import { Link } from 'react-router-dom';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const RecipeExpand = ({title, calories, image, ingredients, healthlabels, key, url}) => {


    const useRecipe = async () => {
        const response = await fetch("http://136.144.41.144/database.php?useItem&userid=1&ingredients=" + ingredients.map(ingredient => (ingredient.text + ", ")));

        alertify.success("Your used ingredients were deleted from your personal list. Have a nice meal!");
    }

    let splitURL = url.split("_");
    let recipeUUID = splitURL[1];
    return(
        <div className={style.recipe} key={recipeUUID}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="" />
            <p>Required ingredients: </p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Amount of calories: <b>{Math.round(calories)}</b></p>
            <p>Allergy Information:</p>
            <ul>
                {healthlabels.map(healthlabel => (
                    <li>{healthlabel}</li>
                ))}
            </ul>
            
            <button className={style.useButton} onClick = {useRecipe}>Use Recipe</button>
        </div>
    );
}

export default RecipeExpand;