import React from 'react';
import '../../App.css';
import Recipe from '../../Recipe'
import { Link } from 'react-router-dom';

const Home = (props) => {

    return(
            <div className="home">
                <h1>Welkom!</h1>
                <p>Welkom in de app van de Interactive Food Scanner. U gaat de lijst van producten in uw huis kunnen vinden. </p>
            </div>
    )
}

export default Home;

