import React, { useState, useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { useTheme } from '@mui/material/styles';
import { BiSolidVolumeFull } from "react-icons/bi";

export default function MusicCard() {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(10);
  const [showVolumeButton, setShowVolumeButton] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [lastPlayedIndex, setLastPlayedIndex] = useState(null);
  
  const theme = useTheme();

  // Create refs for each audio element
  const audioRefs = [
    useRef(null),
    useRef(null)
  ];

  useEffect(() => {
    const handleTimeUpdate = (audioRef) => {
      return () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
          setDuration(audioRef.current.duration);
        }
      };
    };

    // Add event listeners for each audio element
    audioRefs.forEach((audioRef) => {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate(audioRef));
    });

    return () => {
      // Remove event listeners when component unmounts
      audioRefs.forEach((audioRef) => {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate(audioRef));
      });
    };
  }, []);

  const togglePlay = (index) => {
    const audioElement = audioRefs[index].current;
  
    // Pause any currently playing audio
    audioRefs.forEach((ref, i) => {
      if (i !== index && ref.current && !ref.current.paused) {
        ref.current.pause();
      }
    });
  
    // Toggle play/pause for the selected audio
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
        setCurrentAudioIndex(index);
      } else {
        audioElement.pause();
        setLastPlayedIndex(index); // Set the last played index
      }
    }
  };
  
  
  

  const handleSeek = (event, newValue) => {
    setCurrentTime(newValue);
    const audioElement = audioRefs[currentAudioIndex].current;
    if (audioElement) {
      audioElement.currentTime = newValue;
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    const newVolume = newValue / 100; // Convert volume to a value between 0 and 1
    audioRefs[currentAudioIndex].current.volume = newVolume;
  };

  const handleSkipForward = () => {
    const audioElement = audioRefs[currentAudioIndex].current;
    if (audioElement) {
      audioElement.currentTime += 10;
    }
  };

  const handleSkipBackward = () => {
    const audioElement = audioRefs[currentAudioIndex].current;
    if (audioElement) {
      audioElement.currentTime -= 10;
    }
  };

  const handleNext = () => {
    setCurrentAudioIndex((prevIndex) => (prevIndex + 1) % audioRefs.length);
  };

  const handleBack = () => {
    setCurrentAudioIndex((prevIndex) => (prevIndex - 1 + audioRefs.length) % audioRefs.length);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Card>
      <CardContent>
        <h2>Music Player</h2>
        <IconButton onClick={() => togglePlay(0)} aria-label={audioRefs[0].current?.paused ? 'Play' : 'Pause'}>
          {audioRefs[0].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
        </IconButton>
        <IconButton onClick={() => togglePlay(1)} aria-label={audioRefs[1].current?.paused ? 'Play' : 'Pause'}>
          {audioRefs[1].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
        </IconButton>
        <IconButton onClick={() => togglePlay(lastPlayedIndex)} aria-label={audioRefs[lastPlayedIndex]?.current?.paused ? 'Play' : 'Pause'}>
  {audioRefs[lastPlayedIndex]?.current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
</IconButton>

        <IconButton onClick={handleSkipBackward} aria-label="Skip Backward">
          <FastRewindIcon />
        </IconButton>
        <audio ref={audioRefs[0]} id="audio1" src="../Audio/24kGoldn Mood.mp3" />
        <audio ref={audioRefs[1]} id="audio2" src="../Audio/Stay.mp3" />
        {/* Add other audio elements similarly */}
        <Slider
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          aria-label="Duration"
        />
        <div>
          {formatTime(currentTime)} / {formatTime(duration - currentTime)}
        </div>
        <IconButton onClick={handleSkipForward} aria-label="Skip Forward">
          <FastForwardIcon />
        </IconButton>
        <IconButton onClick={handleNext} aria-label="Next">
          Next
        </IconButton>
        <IconButton onClick={handleBack} aria-label="Back">
          Back
        </IconButton>
        {showVolumeButton && (
          <IconButton onClick={() => setShowVolumeSlider(!showVolumeSlider)}>
            <VolumeUpIcon />
          </IconButton>
        )}
        {showVolumeSlider && (
          <Slider
            min={0}
            max={100}
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Volume"
          />
        )}
        {currentAudioIndex !== null && audioRefs[currentAudioIndex].current && (
          <BiSolidVolumeFull onClick={() => setShowVolumeSlider(!showVolumeSlider)} />
        )}
      </CardContent>
    </Card>
  );
}
