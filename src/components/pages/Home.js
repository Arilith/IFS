import React from 'react';
import '../../App.css';
import Recipe from '../../Recipe'
import { Link } from 'react-router-dom';

const Home = (props) => {
    const recipes = props.recipes;
    return(
        recipes ? (
            <div className="home">
                <h1>Home</h1>
            </div>
        ) : null
        
    )
}

export default Home;

