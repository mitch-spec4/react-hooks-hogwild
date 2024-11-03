import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import FilterSort from "./FilterSort";
import AddHogForm from "./AddHogForm";
import hogsData from "../porkers_data";
import 'semantic-ui-css/semantic.min.css';

function App() {
    const [hogs, setHogs] = useState(hogsData);
    const [greased, setGreased] = useState(false);
    const [sortBy, setSortBy] = useState("");

    const toggleGreased = () => {
        setGreased(prev => !prev);
    };

    const handleSortChange = (sortOption) => {
        setSortBy(sortOption);
    };

    const addHog = (newHog) => {
        setHogs(prevHogs => [...prevHogs, newHog]);
    };

    const filteredHogs = hogs
        .filter(hog => greased ? hog.greased : true)
        .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "weight") return a.weight - b.weight;
            return 0;
        });

    return (
        <div className="App">
            <Nav />
            <FilterSort 
                greased={greased}
                toggleGreased={toggleGreased}
                handleSortChange={handleSortChange}
            />
            <AddHogForm addHog={addHog} />
            <div className="ui grid container">
                {filteredHogs.map(hog => (
                    <HogTile key={hog.name} hog={hog} />
                ))}
            </div>
        </div>
    );
}

export default App;
