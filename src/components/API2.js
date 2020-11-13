import React, { useEffect, useState } from "react";

let mappedData = [];

const API2 = async () => {


    const response = await fetch("http://136.144.41.144/database.php?json&userid=1");
    const json = await response.json();

    
    json.map(data => {
        let id = Math.random();
        switch(data) {
            case '8606108584163':
                mappedData.push({id : id, name: "Chicken Noodles"});
            case '20521325':
                mappedData.push({id : id, name: "Chicken Ragout"});
            case '4056489124160':
                mappedData.push({id : id, name: "Bread"});
            case '8000050840825':
                mappedData.push({id : id, name: "Spagetthi"});
            case '5000171056498':
                mappedData.push({id : id, name: "Tuna"});
            case '8713200817058':
                mappedData.push({id : id, name: "Meatball"});
            case '20069490':
                mappedData.push({id : id, name: "Pesto"});
            case '4056489167938':
                mappedData.push({id : id, name: "Pepper"});
            default:
                mappedData.push({id : id, name: "Unrecognized"});
        }
    })

    useEffect(() => {
        this.interval = setInterval(() => {
            //fetchData();
            console.log("Testing");
        }, 5000)
    }, []);
    
    useEffect(() => {
        return () => {
          clearInterval(this.interval);
        }
      }, []);

}

API2();

export default mappedData;