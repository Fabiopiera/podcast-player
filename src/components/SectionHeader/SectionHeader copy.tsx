// SectionHeader.tsx
import React, { useState } from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import "./SectionHeader.css";
import circleLeft from "../../assets/icons/circle_left.svg";
import circleOnLeft from "../../assets/icons/circle_onleft.svg";
import circleRight from "../../assets/icons/circle_right.svg";
import circleOnRight from "../../assets/icons/circle_onright.svg";

interface SectionHeaderProps {
  profileImage: string;
  sectionTitle: string;
  onScrollLeft: () => void; // Nueva prop para manejar el scroll a la izquierda
  onScrollRight: () => void; // Nueva prop para manejar el scroll a la derecha
  children?: React.ReactNode; // Nueva propiedad para contenido personalizado
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  profileImage,
  sectionTitle,
  onScrollLeft,
  onScrollRight,
  children,
}) => {
  const [leftIcon, setLeftIcon] = useState(circleLeft);
  const [rightIcon, setRightIcon] = useState(circleRight);

  const handleLeftMouseDown = () => {
    setLeftIcon(circleOnLeft);
    onScrollLeft();
  };

  const handleLeftMouseUp = () => {
    setLeftIcon(circleLeft);
  };

  const handleRightMouseDown = () => {
    setRightIcon(circleOnRight);
    onScrollRight();
  };

  const handleRightMouseUp = () => {
    setRightIcon(circleRight);
  };

  return (
    <div className="section-header">
      <div className="left">
        <ProfileImage profileImage={profileImage} />
        <div className="user-info">
          {children}
          <h2 className="section-title">{sectionTitle}</h2>
        </div>
      </div>
      <div className="right">
        <button
          className="nav-button"
          onMouseDown={handleLeftMouseDown}
          onMouseUp={handleLeftMouseUp}
        >
          <img src={leftIcon} alt="Scroll Left" />
        </button>
        <button
          className="nav-button"
          onMouseDown={handleRightMouseDown}
          onMouseUp={handleRightMouseUp}
        >
          <img src={rightIcon} alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
