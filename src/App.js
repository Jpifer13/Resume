import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Background from './components/Background';
import Contact from './components/Contact'; // Import the Popup Component
import './index.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Toggle the popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

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

      {/* Pass the togglePopup function to Background */}
      <Background onContactClick={togglePopup} />

      {/* Contact Button */}
      <button className="contact-button" onClick={togglePopup}>
        Contact
      </button>

      {/* Render the contact form popup if open */}
      {isPopupOpen && <Contact isOpen={isPopupOpen} onClose={togglePopup} />}
    </div>
  );
}

export default App;
