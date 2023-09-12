import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MoodEntry from './MoodEntry';

const MoodHistory = () => {
   const previousMoods = localStorage.getItem('moods');
   const previousThoughts = localStorage.getItem('thoughts');

// display the previous moods and thoughts
return (
    <div>
        <h2>Mood History</h2>
        <MoodEntry mood={previousMoods} thoughts={previousThoughts} />
    </div>
);
}

export default MoodHistory;

