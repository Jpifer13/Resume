import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Background from './components/Background';
import Contact from './components/Contact'; // Import the Popup Component
import './index.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1); // Volume state (1 is 100% volume by default)

  useEffect(() => {
    // Try to autoplay audio when the component is mounted
    audioRef.current.play().then(() => {
      // Autoplay successful
      setIsPlaying(true);
    }).catch((error) => {
      // Autoplay failed, handle user interaction later
      console.log("Autoplay failed, user interaction required.", error);
      setIsPlaying(false); // Autoplay failed, set state to not playing
    });
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      // Pause the audio if currently playing
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Play the audio if not currently playing
      audioRef.current.play().catch((error) => {
        // Handle any errors (for example, if the user hasn't interacted with the page)
        console.log("Error playing audio:", error);
      });
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  // Toggle the popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="app-container">

      <audio ref={audioRef} src="/song.mp3" loop />
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
      {/* <div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="vertical-slider"
          orient="vertical"
        />
      </div> */}
      <button className="audio-button" onClick={toggleAudio}>
        {isPlaying ? "Stop Music" : "Play Music"}
      </button>
      <button className="contact-button" onClick={togglePopup}>
        Contact
      </button>

      {/* Render the contact form popup if open */}
      {isPopupOpen && <Contact isOpen={isPopupOpen} onClose={togglePopup} />}
      <audio ref={audioRef} src="/campfire.mp3" loop />
    </div>
  );
}

export default App;
