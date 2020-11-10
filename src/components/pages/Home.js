import React from 'react';
import '../../App.css';
import Recipe from '../../Recipe'
import { Link } from 'react-router-dom';
import Style from '../pages/home.module.css';

const Home = (props) => {

    return(
            <div className={Style.home}>
                <h1>Welcome!</h1>
                <p>Welcome to the Interactive Food Scanner Experience! This app will help you to stop wasting food while also making the most delicious meals! <br/><br/> Open your refrigerator by using the menu button in the top right.</p>
            </div>
    )
}

export default Home;

