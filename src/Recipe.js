import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, healthlabels}) => {



    return(
        <div className={style.recipe}>
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

        </div>
    );
}

export default Recipe;