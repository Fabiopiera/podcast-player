import React, { useRef } from "react";
import "./AudioPlayer.css";

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="audio-player">
      <div className="custom-player">
        <button className="audio-button" onClick={playAudio}>
          Play
        </button>
        <button className="audio-button" onClick={pauseAudio}>
          Pause
        </button>
        <audio ref={audioRef}>
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
