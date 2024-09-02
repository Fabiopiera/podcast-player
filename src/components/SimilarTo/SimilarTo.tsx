import React from "react";
import listenAgainData from "../../data/SimilarToData";
import "./SimilarTo.css";

const SimilarTo: React.FC = () => {
  return (
    <div className="similar-to">
      <div className="thumbnails">
        {listenAgainData.map((thumbnail, index) => (
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

export default SimilarTo;
