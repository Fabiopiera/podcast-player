import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import ScrollButton from "../ScrollButton/ScrollButton";
import "./SectionHeader.css";
import circleLeft from "../../assets/icons/circle_left.svg";
import circleOnLeft from "../../assets/icons/circle_onleft.svg";
import circleRight from "../../assets/icons/circle_right.svg";
import circleOnRight from "../../assets/icons/circle_onright.svg";

interface SectionHeaderProps {
  profileImage: string;
  sectionTitle: string;
  onScrollLeft: () => void;
  onScrollRight: () => void;
  children?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  profileImage,
  sectionTitle,
  onScrollLeft,
  onScrollRight,
  children,
}) => {
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
        <ScrollButton
          defaultIcon={circleLeft}
          activeIcon={circleOnLeft}
          altText="Scroll Left"
          onClick={onScrollLeft}
        />
        <ScrollButton
          defaultIcon={circleRight}
          activeIcon={circleOnRight}
          altText="Scroll Right"
          onClick={onScrollRight}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
