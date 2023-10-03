import React from 'react';
import '../styles/playerStats.css';


const PlayersStats = () => {
    return (
        <div id='playerStats'>
            <h1>Jeffey Le LEVEL 1</h1>
            <div id='playerStats__lines'>
                <span id='playerStats__lines__thick'></span>
                <span id='playerStats__lines__thin'></span>
            </div>
            <h2>Fullstack Developer</h2>
        </div>
    )
}

export default PlayersStats;