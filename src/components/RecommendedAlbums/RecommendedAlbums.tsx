// src/components/RecomendedAlbums/RecomendedAlbums.tsx
import React from "react";
import RecomendedAlbumsData from "../../data/RecomendedAlbumsData";
import quickPicksData from "../../data/QuickPicksData";
import "./RecommendedAlbums.css";

const RecomendedAlbums: React.FC = () => {
  return (
    <div className="recomended-albums">
      <div className="thumbnails">
        {RecomendedAlbumsData.map((thumbnail, index) => (
          <div key={index} className="thumbnail">
            <img src={thumbnail.image} alt={thumbnail.title} />
            <div className="thumbnail-info">
              <p className="title">{thumbnail.title}</p>
              <p className="artist">{thumbnail.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendedAlbums;
