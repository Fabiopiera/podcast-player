// src/components/AudioPlayer/AudioPlayer.tsx
import React from "react";
import "./AudioPlayer.css";

const AudioPlayer: React.FC = () => {
  return (
    <div className="audio-player">
      <audio controls>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
