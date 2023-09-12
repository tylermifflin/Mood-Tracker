// a component to display individual mood and thought entries

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const MoodEntry = ({ mood, thoughts }) => {
    return (
        <div>
            <h3>{mood}</h3>
            <p>{thoughts}</p>
        </div>
    );
}

export default MoodEntry;