import React, {useState } from "react";
import { Link } from 'react-router-dom';

const Items = props => {

    return(
        props.itemsInFridge.map((data, i) => (
            data ? (
            <tr key={data.id}>
            <th scope="row">
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
            </th>
            <td>
                <Link to={`/Recipes/${data.name}`} className="ingredientItem" >{data.name}</Link>
            </td>
            <td>
                <button className="removebutton" onClick={e => props.removeItem(data.name)}>X</button>
            </td>
            </tr> 
            ) : null
        )
        )
    )
}

export default Items;