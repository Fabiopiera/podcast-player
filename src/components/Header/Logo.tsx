import React from "react";
import logo from "../../assets/logo1.svg"; // Importa la imagen

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
