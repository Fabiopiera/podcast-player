import React, { useState } from "react";
import "./ScrollButton.css";

interface ScrollButtonProps {
  defaultIcon: string;
  activeIcon: string;
  altText: string;
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  defaultIcon,
  activeIcon,
  altText,
  onClick,
}) => {
  const [icon, setIcon] = useState(defaultIcon);

  const handleMouseDown = () => {
    setIcon(activeIcon);
    onClick();
  };

  const handleMouseUp = () => {
    setIcon(defaultIcon);
  };

  return (
    <button
      className="nav-button"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <img src={icon} alt={altText} />
    </button>
  );
};

export default ScrollButton;
