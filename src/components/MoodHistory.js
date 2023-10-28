import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MoodEntry from './MoodEntry';

const MoodHistory = () => {
   const [mood, setMood] = useState([]);
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        const previousMoods = localStorage.getItem('mood')|| [];
        const previousThoughts = localStorage.getItem('thoughts') || [];

        setMood(previousMoods);
        setThoughts(previousThoughts);
    } , []);


// display the previous moods and thoughts
return (
    <div>
        <h2>Mood History</h2>
        {mood.len}
}

export default MoodHistory;

