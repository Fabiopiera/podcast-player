import React from "react";
import styles from "./Profile.module.css";

interface ProfileProps {
  profileImage?: string;
  userName?: string;
}

const Profile: React.FC<ProfileProps> = ({ profileImage, userName }) => {
  return (
    <div className={styles.profile}>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p className="user-name">{userName}</p>
    </div>
  );
};

export default Profile;
