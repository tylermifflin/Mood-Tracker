// a component to display individual mood and thought entries

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const MoodEntry = (props) => {
    return (
        <div>
            <h3>{props.mood}</h3>
            <p>{props.thoughts}</p>
        </div>
    );
}

export default MoodEntry;