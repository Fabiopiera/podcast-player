import React from "react";
import cast from "../../assets/cast.svg"; // Importa la imagen

const ShareButton: React.FC = () => {
  return (
    <div className="cast">
      <img src={cast} alt="Cast" />
    </div>
  );
};

export default ShareButton;
