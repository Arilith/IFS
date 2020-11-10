import React from 'react';
import style from './RecipeExpand.module.css';
import { Link } from 'react-router-dom';

const RecipeExpand = ({title, calories, image, ingredients, healthlabels, key, url}) => {

    let splitURL = url.split("_");
    let recipeUUID = splitURL[1];
    return(
        <div className={style.recipe} key={recipeUUID}>
            <h1 >{title}</h1>
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
            
            <button className={style.useButton} >Use Recipe</button>
        </div>
    );
}

export default RecipeExpand;