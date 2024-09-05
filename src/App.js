import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Background from './components/Background';
import './index.css';

function App() {
  return (
      <div className="app-container">
        <Router>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
        <div className="separator"></div>
        <Background />
      </div>
  );
}

export default App;
