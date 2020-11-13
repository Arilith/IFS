import React from 'react';
import '../../App.css';
import Recipe from '../../Recipe'
import { Link } from 'react-router-dom';
import Style from '../pages/home.module.css';

const Home = () => {

    return(
            <div className={Style.home}>
                <h1>Welcome!</h1>
                <p>Welcome to the Interactive Food Scanner Experience! This app will help you to stop wasting food while also making the most delicious meals! <br/><br/> Open your kitchen by using the menu button in the top right. <br/> From there you can start searching for the most delicious meals with your own ingredients, or just look up any recipe you want. <br/><br/> Click <Link className={Style.startLink} to={`/Recipes/Beef`}>here</Link> to get started with your first search!<br/>
                <img className={Style.logoImg} src="https://cdn.discordapp.com/attachments/772803903376850965/773539338914627634/Logo_Design_Challenge_5_1.png"></img>
                
                </p>
            </div>
    )
}

export default Home;

