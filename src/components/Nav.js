import React, {useState, useEffect } from 'react';
import Recipe from "../Recipe";
import Items from "../components/Items/Items";
import { Link, withRouter, useHistory } from 'react-router-dom';

const Nav = (props) => {
    let history = useHistory();
    function toggleNav() {
        if(document.getElementById("mySidenav").style.width === "100%") {
          document.getElementById("mySidenav").style.width = "0";
        } else {
          document.getElementById("mySidenav").style.width = "100%";
        }
    }

    return (
        <div className="Nav">
            <div className="topnav" id="myTopnav">
                <a>IFS</a>
                <a className="icon" onClick={() => toggleNav()}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
            <div id="mySidenav" className="sidenav">
                <div className="sideBarTitle">My Refrigerator</div>
                <a className="closebtn" onClick={() => toggleNav()}>&times;</a>
                <form id="searchForm" className="search-form" onSubmit={props.getSearch}>
                    <input className="search-bar" type="text" value={props.search} onChange={props.updateSearch} />
                    <button className="search-button" type="submit">Search</button>
                </form>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">
                        Select
                    </th>
                    <th>Product</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <Items itemsInFridge={props.itemsInFridge} setItemsInFridge = {props.setItemsInFridge} removeItem = {props.removeItem} updateRecipes = {props.updateRecipes} />
                </tbody>
                </table>
                <button 
                    className="sendButton" 
                    onClick={event => {
                    let selectedItems = "";
                    props.itemsInFridge.map(data => {
                        if(data.select === true) {
                            selectedItems += data.name + ",";
                        }
                    })
                    
                    history.push(`/Recipes/${selectedItems}`);

                    }}
                >Search</button>
            </div>   
        </div>
    )

}

export default Nav;
