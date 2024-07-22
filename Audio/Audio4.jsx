import React, { useState, useRef } from 'react';

function MusicPlayer() {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const audioRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const audioFiles = [
    "../Audio/24kGoldn Mood.mp3",
    "../Audio/bad guy.mp3",
    "../Audio/Industry baby.mp3",
    "../Audio/Playdate.mp3",
    "../Audio/Satisfya.mp3",
    "../Audio/Senorita.mp3",
  ];

  const handleNext = () => {
    setCurrentAudioIndex((prevIndex) => (prevIndex + 1) % audioRefs.length);
  };

  const handleBack = () => {
    setCurrentAudioIndex((prevIndex) => (prevIndex - 1 + audioRefs.length) % audioRefs.length);
  };

  return (
    <div>
      {/* Your existing components */}
      <audio ref={audioRefs[0]} id="audio1" src={audioFiles[0]} />
      <audio ref={audioRefs[1]} id="audio2" src={audioFiles[1]} />
      <audio ref={audioRefs[2]} id="audio3" src={audioFiles[2]} />
      <audio ref={audioRefs[3]} id="audio4" src={audioFiles[3]} />
      <audio ref={audioRefs[4]} id="audio5" src={audioFiles[4]} />
      <audio ref={audioRefs[5]} id="audio6" src={audioFiles[5]} />
      
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default MusicPlayer;
