import EventEmitter from 'events';

let MappedData = [];

const fetchData = async (props) => {
    const response = await fetch("http://136.144.41.144/database.php?json&userid=1");
    const json = await response.json();

    if(json) {
        GlobalState.emit("FetchedData", json);
    }
    
}

const GlobalState = new EventEmitter();

setInterval(() => {
    fetchData();
}, 3500)

export default GlobalState;