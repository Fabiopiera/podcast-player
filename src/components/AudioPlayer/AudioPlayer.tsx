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
        <button onClick={() => seekBackward(10)}>◀◀</button>
        {isPlaying ? (
          <button onClick={pause}>▌▌</button>
        ) : (
          <button onClick={play} className="play-iconaudio">
            ▶
          </button> // Clase para play
        )}
        <button onClick={() => seekForward(10)}>▶▶</button>
        <button onClick={closePlayer}>X</button> {/* Botón para cerrar */}
      </div>
    </div>
  );
};

export default AudioPlayer;
