// src/components/ListenAgain/ListenAgain.tsx
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./ListenAgain.css";

const ListenAgain: React.FC = () => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return <div>Error: DataContext no está disponible</div>;
  }

  const { thumbnails, loading } = dataContext;

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="listen-again">
      <div className="thumbnails">
        {thumbnails.map((thumbnail) => (
          <div key={thumbnail.id} className="thumbnail">
            <a href={thumbnail.url} target="_blank" rel="noopener noreferrer">
              <img src={thumbnail.logo} alt={thumbnail.title} />
            </a>
            <div className="thumbnail-info">
              <p className="title">{thumbnail.title}</p>
              <p className="duration">
                Duración: {thumbnail.duration.toFixed(1)} min
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListenAgain;
