import React from 'react';
import style from './recipe.module.css';
import { Link } from 'react-router-dom';

const Recipe = ({title, calories, image, ingredients, healthlabels, key, url}) => {

    let splitURL = url.split("_");
    let recipeUUID = splitURL[1];
    console.log(recipeUUID);
    return(
        <div className={style.recipe} key={recipeUUID}>
            <h1 >{title}</h1>
            <img className={style.image} src={image} alt="" />
            <p>Required dsingredients: </p>
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
            
            <Link to={``}>Recept openen</Link>
        </div>
    );
}

export default Recipe;