import React from "react";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import "./AudioPlayer.css";

const AudioPlayer: React.FC = () => {
  const {
    isPlaying,
    play,
    pause,
    seekForward,
    seekBackward,
    audioImage,
    audioTitle,
    closePlayer, // Agregar la función closePlayer
    isVisible, // Verifica si es visible
  } = useAudioPlayer();

  if (!isVisible) return null; // No renderiza nada si no es visible

  return (
    <div className="audio-player">
      <div className="player-content">
        <img src={audioImage} alt={audioTitle} className="audio-thumbnail" />
        <div className="player-info">
          <p className="audio-title">{audioTitle}</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={() => seekBackward(10)}>◀ 10s</button>
        {isPlaying ? (
          <button onClick={pause}>Pause</button>
        ) : (
          <button onClick={play}>Play</button>
        )}
        <button onClick={() => seekForward(10)}>▶ 10s</button>
        <button onClick={closePlayer}>Cerrar</button> {/* Botón para cerrar */}
      </div>
    </div>
  );
};

export default AudioPlayer;
