import React from "react";
import logo from "../../assets/logo1.svg"; // Importa la imagen

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
