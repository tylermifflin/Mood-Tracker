import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MoodForm from './components/MoodForm';
import MoodHistory from './components/MoodHistory';

const App = () => {
    return (
        <div className="container">
            <h1>Mood Tracker</h1>
            <MoodForm />
            <MoodHistory />
        </div>
    );
}

export default App;