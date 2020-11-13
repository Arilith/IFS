import React from 'react';
import style from './recipe.module.css';
import { Link } from 'react-router-dom';

const Recipe = ({title, calories, image, ingredients, healthlabels, key, url}) => {

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
            <Link className={style.link} to={`/Recipe/${recipeUUID}`}>Open Recipe</Link>
        </div>
    );
}

export default Recipe;