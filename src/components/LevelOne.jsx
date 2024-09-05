import React, { useState } from 'react';
import '../styles/wand.css';

const LevelOne = ({ unlockNextLevel }) => {
  const [infoRevealed, setInfoRevealed] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleReveal = () => {
    setClicked(true);
    setTimeout(() => {
      setInfoRevealed(true);
      unlockNextLevel(); // Unlocks Level Two
    }, 500); // Wait for the flick animation to finish
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold">Level 1: Who Am I?</h2>
      <div className="mt-10">
        <div className={`wand ${clicked ? 'clicked' : ''}`} onClick={handleReveal}>
          <div className="sparkle"></div>
        </div>
        {!clicked && <p className="hint">Click the wand to reveal the information!</p>}
      </div>
      {infoRevealed && (
        <div className="mt-10 text-center">
          <h3 className="text-2xl">Jake Pifer</h3>
          <p className="mt-4">Email: jakepifer3@gmail.com</p>
          <p>GitHub: <a href="https://github.com/Jpifer13" className="text-blue-400">Jpifer13</a></p>
        </div>
      )}
    </div>
  );
};

export default LevelOne;
