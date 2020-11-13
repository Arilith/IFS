import React, {useState } from "react";
import { Link } from 'react-router-dom';

const Items = props => {

    return(
        props.itemsInFridge.map((data, i) => (
            data ? (
            <tr key={data.id}>
                <td>
                    <input onChange={event => {
                    let checked = event.target.checked;
                    props.setItemsInFridge(
                        props.itemsInFridge.map(d => {
                        if(d.id === data.id) {
                            d.select = checked;
                        }
                        return d;
                        })
                    );
                    console.log(props.itemsInFridge);
                    }} type="checkbox" check={ data.checked }></input>
                </td>
                <td width="250px">
                    <Link to={`/Recipes/${data.name}`} className="ingredientItem">{data.name}</Link>
                </td>
                <td>
                    <button className="removebutton" onClick={e => props.removeItem(data.name)}><i className="fa fa-times"></i></button>
                </td>
            </tr> 
            ) : null
        )
        )
    )
}

export default Items;