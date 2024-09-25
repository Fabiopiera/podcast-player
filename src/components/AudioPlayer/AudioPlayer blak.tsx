// src/components/AudioPlayer/AudioPlayer.tsx
import React from "react";
import "./AudioPlayer.css";

const AudioPlayer: React.FC = () => {
  return (
    <div className="audio-player">
      <audio controls>
        <source
          src="https://dts.podtrac.com/redirect.mp3/audioboom.com/posts/8573722.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
