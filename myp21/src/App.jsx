import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const skipTime = (time) => {
    videoRef.current.currentTime += time;
  };

  const changeVolume = (amount) => {
    const video = videoRef.current;
    let newVolume = video.volume + amount;
    newVolume = Math.min(Math.max(newVolume, 0), 1);
    video.volume = newVolume;
  };

  return (
    <div className="video-container">
      <h1>Video Player</h1>
      <video ref={videoRef} className="video-player">
        <source
          src="https://cdn.shopify.com/videos/c/o/v/c5df0e1506db42908dee1d6e749e1f74.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="controls">
         <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={() => skipTime(-10)}>10s -</button>
        <button onClick={() => skipTime(10)}>10s +</button>
        <button onClick={() => changeVolume(0.1)}>Volume +</button>
        <button onClick={() => changeVolume(-0.1)}>Volume -</button>
        <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
      </div>
    </div>
  );
}

export default App;
