import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MoodForm from './components/MoodForm';

const App = () => {
    return (
        <div className="container">
            <h1>Mood Tracker</h1>
            <MoodForm />
        </div>
    );
}

export default App;