import React,{ useState } from 'react';

const MoodForm = () => {
    const [mood, setMood] = useState('');
    const [thoughts, setThoughts] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('mood', mood);
        localStorage.setItem('thoughts', thoughts);
    };
