import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import profileImage from "../../assets/profile.png"; // Importa la imagen del perfil
import album1 from "../../assets/album1.png"; // Importa la imagen del álbum 1
import album2 from "../../assets/album2.png"; // Importa la imagen del álbum 2
import "./ListenAgain.css";

const ListenAgain: React.FC = () => {
  return (
    <section className="listen-again">
      <SectionHeader
        profileImage={profileImage}
        userName="Ryan Jones"
        sectionTitle="Listen Again"
      />
      {/* Aquí irán los elementos de la sección */}
      <div className="items">
        {/* Ejemplo de miniaturas de canciones */}
        <div className="item">
          <img src={album1} alt="Album 1" />
          <div className="details">
            <p className="title">Song Title 1</p>
            <p className="artist">Artist 1</p>
          </div>
        </div>
        <div className="item">
          <img src={album2} alt="Album 2" />
          <div className="details">
            <p className="title">Song Title 2</p>
            <p className="artist">Artist 2</p>
          </div>
        </div>
        {/* Añadir más elementos según sea necesario */}
      </div>
    </section>
  );
};

export default ListenAgain;
