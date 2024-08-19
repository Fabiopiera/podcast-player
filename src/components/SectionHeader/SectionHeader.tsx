import React from "react";
import Profile from "../Profile/Profile";
import "./SectionHeader.css";

interface SectionHeaderProps {
  profileImage: string;
  userName: string;
  sectionTitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  profileImage,
  userName,
  sectionTitle,
}) => {
  return (
    <div className="section-header">
      <div className="left">
        <Profile profileImage={profileImage} userName={userName} />
        <div className="user-info">
          <h2 className="section-title">{sectionTitle}</h2>
        </div>
      </div>
      <div className="right">
        <button className="nav-button">⟵</button>
        <button className="nav-button">⟶</button>
      </div>
    </div>
  );
};

export default SectionHeader;
