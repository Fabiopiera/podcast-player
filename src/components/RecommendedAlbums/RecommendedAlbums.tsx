// src/components/RecomendedAlbums/RecomendedAlbums.tsx
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useAudioPlayer } from "../../context/AudioPlayerContext"; // Importamos el hook
import "./RecommendedAlbums.css";

interface Thumbnail {
  url: string; // Asegúrate de que esta propiedad exista
  logo: string;
  title: string;
}

const RecomendedAlbums: React.FC = () => {
  const { setAudioData, audioUrl, isPlaying, pause } = useAudioPlayer(); // useAudioPlayer es un hook personalizado que maneja el estado del reproductor de audio
  const dataContext = useContext(DataContext); // useContext es un hook que permite acceder a un contexto

  if (!dataContext) {
    return <div>Error: DataContext no está disponible</div>;
  }

  const { thumbnails, loading } = dataContext;

  if (loading) {
    return <div>Cargando...</div>;
  }

  // Manejo de clic en la tarjeta
  const handleCardClick = (thumbnail: Thumbnail) => {
    if (audioUrl === thumbnail.url && isPlaying) {
      pause(); // Pausar si el audio ya se está reproduciendo
    } else {
      setAudioData(thumbnail.url, thumbnail.title, thumbnail.logo); // Establecer nuevos datos de audio
    }
  };

  return (
    <div className="recomended-albums">
      <div className="thumbnails">
        {thumbnails.map((thumbnail) => (
          <div
            key={thumbnail.url}
            className="thumbnail"
            onClick={() => handleCardClick(thumbnail)}
          >
            <img src={thumbnail.logo} alt={thumbnail.title} />
            <div className="thumbnail-info">
              <p className="title">{thumbnail.title}</p>

              <p className="duration">
                ♫ {Math.floor(thumbnail.duration / 60)} min{" "}
                {Math.floor(thumbnail.duration % 60)} sec
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendedAlbums;
