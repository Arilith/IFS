import react, { useState, useEffect } from 'react';

const API = () => {

    const [barCodes, setBarcodes] = useState([]);

    console.log("Init");

    const fetchData = async () => {
        try {
            const response = await fetch("http://136.144.41.144/database.php?json&userid=1");
            const json = await response.json();
            setBarcodes(json);
            console.log("Fetching data");
        } catch(err) {
            console.log(err);
        }
    }

    

    
    

    return (
        null
    )

}

export default API;