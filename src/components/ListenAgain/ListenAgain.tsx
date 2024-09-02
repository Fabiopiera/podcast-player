// src/components/ListenAgain/ListenAgain.tsx
import React from "react";
import listenAgainData from "../../data/ListenAgainData";
import "./ListenAgain.css";

const ListenAgain: React.FC = () => {
  return (
    <div className="listen-again">
      <div className="thumbnails">
        {listenAgainData.map((thumbnail, index) => (
          <div key={index} className="thumbnail">
            <img src={thumbnail.image} alt={thumbnail.title} />
            <div className="thumbnail-info">
              <p className="title">{thumbnail.title}</p>
              <p className="artist">
                {thumbnail.artist}
                {thumbnail.genero && (
                  <span className="genero"> • {thumbnail.genero}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListenAgain;
