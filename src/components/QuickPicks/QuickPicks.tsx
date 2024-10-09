import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useAudioPlayer } from "../../context/AudioPlayerContext"; // Importamos el hook
import "./QuickPicks.css";

interface Thumbnail {
  url: string; // Asegúrate de que esta propiedad exista
  logo: string;
  title: string;
}

const QuickPicks: React.FC = () => {
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
    <div className="quick-picks">
      <div className="thumbnails">
        {Array.from({ length: Math.ceil(thumbnails.length / 4) }).map(
          (_, columnIndex) => (
            <div className="column" key={columnIndex}>
              {thumbnails
                .slice(columnIndex * 4, columnIndex * 4 + 4)
                .map((thumbnail) => (
                  <div key={thumbnail.id} className="thumbnail">
                    <img
                      src={thumbnail.logo}
                      alt={thumbnail.title}
                      onClick={() => handleCardClick(thumbnail)} // Actualizamos la URL del audio al hacer clic
                      className="thumbnail-image"
                    />
                    <div className="thumbnail-info">
                      <p className="title">{thumbnail.title}</p>
                      <p className="artist">
                        ♫ {Math.floor(thumbnail.duration / 60)} min{" "}
                        {Math.floor(thumbnail.duration % 60)} sec
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default QuickPicks;
