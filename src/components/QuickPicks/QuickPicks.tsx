import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useAudioPlayer } from "../../context/AudioPlayerContext"; // Importamos el hook
import "./QuickPicks.css";

const QuickPicks: React.FC = () => {
  const { setAudioUrl } = useAudioPlayer(); // Usamos el hook para actualizar el audio
  const dataContext = useContext(DataContext); // datos del DataContext

  if (!dataContext) {
    return <div>Error: DataContext no está disponible</div>;
  }

  const { thumbnails, loading } = dataContext;

  if (loading) {
    return <div>Cargando...</div>;
  }
  // Función para formatear la duración
  const formatDuration = (durationInSeconds: number): string => {
    const totalSeconds = Math.floor(durationInSeconds);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes} min ${seconds} sec`;
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
                      onClick={() => setAudioUrl(thumbnail.url)} // Actualizamos la URL del audio al hacer clic
                      className="thumbnail-image"
                    />
                    <div className="thumbnail-info">
                      <p className="title">{thumbnail.title}</p>
                      <p className="artist">
                        {formatDuration(thumbnail.duration)}
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
