import React, {useState, useRef, useEffect } from 'react';
import Recipe from "../Recipe";
import Items from "../components/Items/Items";
import { Link, withRouter, useHistory } from 'react-router-dom';
import './API';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';


const Nav = (props) => {

    let history = useHistory();
    function toggleNav() {
        if(document.getElementById("mySidenav").style.width === "100%") {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("mySidenav").style.paddingLeft = "0px";
        } else {
          document.getElementById("mySidenav").style.width = "100%";
          document.getElementById("mySidenav").style.paddingLeft = "25px";
        }
    }

    function getSearch() {
        history.push(`/Recipes/${props.search}`);
    }

    return (
        <div className="Nav">
            <div className="topnav" id="myTopnav">
                <Link to="/Home">IFS</Link>
                <a className="icon" onClick={() => toggleNav()}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
            <div id="mySidenav" className="sidenav">
                <div className="sideBarTitle">My Kitchen</div>
                <a className="closebtn" onClick={() => toggleNav()}>&times;</a>
                <form id="searchForm" className="search-form" onSubmit={getSearch}>
                    <input placeholder="Enter desired ingredients" className="search-bar" type="text" value={props.search} onChange={props.updateSearch} />
                    {/* <button className="search-button" type="submit">Search</button> */}
                    <Link toggleNav = {toggleNav} className="search-button" to={`/Recipes/${props.search}`}> Search </Link> 
                </form>
                <table className="table">
                <thead>
                    <tr>
                    <th width="200px" >
                        My ingredients
                    </th>
                    <th ></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody className="itemslist">
                    <Items itemsInFridge={props.itemsInFridge} setItemsInFridge = {props.setItemsInFridge} removeItem = {props.removeItem} updateRecipes = {props.updateRecipes} />
                </tbody>
                </table>
                <button 
                    className="searchButton" 
                    onClick={event => {
                    let selectedItems = "";
                    props.itemsInFridge.map(data => {
                        if(data.select === true) {
                            selectedItems += data.name + ",";
                        }
                    })
                    
                    history.push(`/Recipes/${selectedItems}`);

                    }}
                >Search with selection</button>
                
            </div>   
        </div>
    )

}

export default Nav;
