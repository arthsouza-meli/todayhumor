import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MoodForm from './components/MoodForm';
import MoodResult from './components/MoodResult';


function App() {


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MoodForm />} />
        <Route path="/result" element={<MoodResult />} />
      </Routes>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
