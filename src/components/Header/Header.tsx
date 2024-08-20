import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ShareButton from "./ShareButton";
import Profile from "../Profile/Profile";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Menu />
      <Logo />
      <SearchBar />
      <ShareButton />
      <Profile profileImage="./assets/profile.png" userName="" />
    </header>
  );
};

export default Header;
