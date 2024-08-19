import React from "react";
import profile from "../../assets/profile.png"; // Importa la imagen

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <img src={profile} alt="Profile" />
    </div>
  );
};

export default Profile;
