import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const MoodForm = () => {
    const [mood, setMood] = useState('');
    const [thoughts, setThoughts] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('mood', mood);
        localStorage.setItem('thoughts', thoughts);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label>
                Mood:
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="angry">Angry</option>
                    <option value="anxious">Anxious</option>
                    <option value="balanced">Balanced</option>
                </select>
            </label>
            <label>
                Thoughts:
                <textarea value={thoughts} onChange={(e) => setThoughts(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MoodForm;