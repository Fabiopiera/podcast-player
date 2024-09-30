import React from "react";
import menu from "../../assets/menu.svg"; // Importa la imagen

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <img src={menu} alt="menu" />
    </div>
  );
};

export default Menu;
