import React,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const MoodForm = () => {
    const [mood, setMood] = useState('');
    const [thoughts, setThoughts] = useState('');
    const [moodHistory, setMoodHistory] = useState([]);

    useEffect(() => {
        const previousMoodHistory = JSON.parse(localStorage.getItem('moodHistory'));

        if (previousMoodHistory) {
            setMoodHistory(previousMoodHistory);
        }
    }
    , []);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntry = { mood, thoughts };
        const newMoodHistory = [...moodHistory, newEntry];
        setMoodHistory(newMoodHistory);

        localStorage.setItem('moodHistory', JSON.stringify(newMoodHistory));
        setMood('');
        setThoughts('');
    };

    return (
        <div>
        <form onSubmit = {handleSubmit}>
            <label>
                Mood:
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="angry">Angry</option>
                    <option value="anxious">Anxious</option>
                    <option value="balanced">Balanced</option>
                    <option value="energetic">Energetic</option>
                    <option value="tired">Tired</option>
                </select>
            </label>
            <label>
                Thoughts:
                <textarea value={thoughts} onChange={(e) => setThoughts(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
            </form>

            <div>
       <h2>Mood History</h2>
         <ul>
              {moodHistory.map((entry, index) => (
                 <li key={index}>
                <strong>{entry.mood}</strong> - {entry.thoughts}
                 </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default MoodForm;