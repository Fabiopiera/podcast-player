import React from "react";

interface ProfileImageProps {
  profileImage: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ profileImage }) => {
  return <img src={profileImage} alt="Profile" className="profile-image" />;
};

export default ProfileImage;
