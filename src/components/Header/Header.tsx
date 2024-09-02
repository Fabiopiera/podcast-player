import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ShareButton from "./ShareButton";
import Profile from "../Profile/Profile";
import "./Header.css";
import ProfileImage from "../ProfileImage/ProfileImage";

import profileImage from "../../assets/profile.png"; // Importa la imagen del perfil

const Header: React.FC = () => {
  return (
    <header className="header">
      <Menu />
      <Logo />
      <SearchBar />
      <ShareButton />
      <ProfileImage profileImage={profileImage} />
    </header>
  );
};

export default Header;
