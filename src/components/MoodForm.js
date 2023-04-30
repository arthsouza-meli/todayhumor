import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/MoodForm.css';

function MoodForm() {
  const [mood, setMood] = useState('');
  const navigate = useNavigate();
  const lastSubmissionDate = localStorage.getItem('lastSubmissionDate');
  const today = new Date().toLocaleDateString();

  useEffect(() => {
    if (lastSubmissionDate === today) {
      navigate('/result');
    }
  }, [lastSubmissionDate, navigate, today]);

  function handleMoodChange(event) {
    setMood(event.target.value);
  }

  function handleSubmit(event) {
    if (mood === '') {
      alert('Please select a mood before submitting.');
      return;
    }

    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_BASE_URL}/mood`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mood }),
    })
      .then((response) => {
        console.log('Thank you');
        localStorage.setItem('lastSubmissionDate', today);
        localStorage.setItem('userMood', mood);
        navigate('/result', { state: { mood: mood } });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>How's Your Mood Today?</h1>
      <h2>Your mood will help us calculate the overall mood of the world today.</h2>
      <form onSubmit={handleSubmit}>
        <div className="radio-group">

          <label>
            <input type="radio" name="mood" value="bad" checked={mood === 'bad'} onChange={handleMoodChange} />
            <span role="img" aria-label="bad" className={mood === 'bad' ? 'selected' : ''}>
              😔
            </span>
          </label>
          <label>
            <input type="radio" name="mood" value="good" checked={mood === 'good'} onChange={handleMoodChange} />
            <span role="img" aria-label="good" className={mood === 'good' ? 'selected' : ''}>
              😊
            </span>
          </label>
          <label>
            <input type="radio" name="mood" value="neutral" checked={mood === 'neutral'} onChange={handleMoodChange} />
            <span role="img" aria-label="neutral" className={mood === 'neutral' ? 'selected' : ''}>
              😐
            </span>
          </label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MoodForm;
