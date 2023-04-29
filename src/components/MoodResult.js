import React, { useState, useEffect } from 'react';
import './css/MoodResult.css';

function MoodResult() {
  const [averageMood, setAverageMood] = useState('');
  const [numUsers, setNumUsers] = useState(0);
  const [nextSubmissionTime, setNextSubmissionTime] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/mood`)
      .then(response => response.json())
      .then(data => {
        setAverageMood(data.averageMood);
        setNumUsers(data.totalEntries);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const timeRemaining = nextDay.getTime() - now.getTime();
  
      const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);
  
      setNextSubmissionTime(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);

  let emoji;
  switch (averageMood) {
    case 'good':
      emoji = '😊';
      break;
    case 'bad':
      emoji = '😔';
      break;
    default:
      emoji = '😐';
  }
  
  const userMood = localStorage.getItem('userMood');
  let userEmoji;
  switch (userMood) {
    case 'good':
      userEmoji = '😊';
      break;
    case 'bad':
      userEmoji = '😔';
      break;
    default:
      userEmoji = '😐';
  }


  return (
    <div className="container">
      <h2>Mood world today is {emoji}</h2>
      <h3>Your mood today is {userEmoji}</h3>
      <h4>{numUsers} people contributed</h4>
      <div className="message-container">
        <p>Come back tomorrow to share your mood again!</p>
        <p className="next-submission-time">{nextSubmissionTime}</p>
      </div>
    </div>
  );
}

export default MoodResult;
