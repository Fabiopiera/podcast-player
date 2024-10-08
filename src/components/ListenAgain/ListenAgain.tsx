// src/components/ListenAgain/ListenAgain.tsx
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useAudioPlayer } from "../../context/AudioPlayerContext"; // Importamos el hook
import "./ListenAgain.css";

const ListenAgain: React.FC = () => {
  const { setAudioData, isPlaying, audioUrl, pause } = useAudioPlayer(); // Usamos el hook para actualizar los datos del audio
  const dataContext = useContext(DataContext); // datos del DataContext

  if (!dataContext) {
    return <div>Error: DataContext no está disponible</div>;
  }

  const { thumbnails, loading } = dataContext;

  if (loading) {
    return <div>Cargando...</div>;
  }

  // Manejo de clic en la tarjeta
  const handleCardClick = (thumbnail) => {
    if (audioUrl === thumbnail.url && isPlaying) {
      pause(); // Pausar si el audio ya se está reproduciendo
    } else {
      setAudioData(thumbnail.url, thumbnail.title, thumbnail.logo); // Establecer nuevos datos de audio
    }
  };

  return (
    <div className="listen-again">
      <div className="thumbnails">
        {thumbnails.map((thumbnail) => (
          <div key={thumbnail.id} className="thumbnail">
            <img
              src={thumbnail.logo}
              alt={thumbnail.title}
              onClick={() => handleCardClick(thumbnail)} // Manejo de clic en la tarjeta
            />
            <div className="thumbnail-info">
              <p className="title">{thumbnail.title}</p>
              <p className="subtitle">{thumbnail.description}</p>
              <p className="duration">
                Duración: {Math.floor(thumbnail.duration / 60)} min{" "}
                {Math.floor(thumbnail.duration % 60)} sec
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListenAgain;
