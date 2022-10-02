import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from './pages/EventPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      
        <Route path="/eventpage" element={<EventPage />} />
      </Routes>  
    </Router>
  );
}

export default App;
