import React, { useState, useRef } from 'react';
import songs from '../data';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    setIsPlaying(false);
  };

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(false);
  };

  const song = songs[currentSong];

  return (
    <div className="player-container">
      <h2>{song.title}</h2>
      <img src={song.image} alt={song.title} className="album-art" />
      
      <audio src={song.src} ref={audioRef} onEnded={nextSong} />
      
      <div className="controls">
        <button onClick={prevSong}>⏮</button>
        <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶️"}</button>
        <button onClick={nextSong}>⏭</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
