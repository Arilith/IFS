import React, {useState, useRef, useEffect } from 'react';
import Recipe from "../Recipe";
import Items from "../components/Items/Items";
import { Link, withRouter, useHistory } from 'react-router-dom';
import API from './API'



const Nav = (props) => {

    const [barCodes, setBarCodes] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://136.144.41.144/database.php?json&userid=1");
            const json = await response.json();
            setBarCodes(json);
            console.log("Fetching data");
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchJumbo();
    }, [barCodes]);

    let fetchedData = false;
    setInterval(function() {
           // fetchData();
    }, 10000);

    const fetchJumbo = async () => {
        console.log("Fetch Jumbo");
    }

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

    return (
        <div className="Nav">
            <div className="topnav" id="myTopnav">
                <Link to="/">IFS</Link>
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
                >Search</button>
                <API/>
            </div>   
        </div>
    )

}

export default Nav;
