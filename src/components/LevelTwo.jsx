import React, { useState } from 'react';

const LevelTwo = () => {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const correctAnswer = 'Python';

  const checkAnswer = (answer) => {
    if (answer === correctAnswer) {
      setPuzzleSolved(true);
    } else {
      alert('Try again!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white">
      <h2 className="text-3xl font-bold">Level 2: Work Experience Challenge</h2>
      {!puzzleSolved ? (
        <div className="mt-10">
          <p>What programming language was I an expert in at JKBX?</p>
          <input 
            type="text" 
            placeholder="Enter your answer"
            className="mt-4 p-2 rounded text-black"
            onKeyPress={(e) => e.key === 'Enter' && checkAnswer(e.target.value)}
          />
        </div>
      ) : (
        <div className="mt-10 text-center">
          <h3 className="text-2xl">JKBX - Lead Backend Engineer (Feb/2023 - Feb/2024)</h3>
          <p>Spearheaded backend architecture using Python, AWS, Node.js.</p>
        </div>
      )}
    </div>
  );
};

export default LevelTwo;
