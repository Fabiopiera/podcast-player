// src/components/AudioPlayer/AudioPlayer.tsx
import React from "react";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import "./AudioPlayer.css";

const AudioPlayer: React.FC = () => {
  const { audioUrl } = useAudioPlayer(); // Obtener la URL del audio del contexto

  return (
    <div className="audio-player">
      <audio controls src={audioUrl} autoPlay={!!audioUrl}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
