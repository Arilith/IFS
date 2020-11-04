import React from 'react';
import style from './item.module.css';
import App from './App';

const Item = ({title, updateSearch2}) => {

    const updateChecked = e => {

    }

    return(
        <li>
            <label className={style.container}>
                <a className="ingredientItem" onClick={e => updateSearch2(title)} href="#">{title}</a>
                <input type="checkbox" checked="unchecked" onChange={updateChecked} />
                    <span className={style.checkmark}></span>
            </label>
            <button className="removebutton">X</button>
        </li>
    );
}

export default Item;