import React from "react";

interface UserNameProps {
  userName: string;
}

const UserName: React.FC<UserNameProps> = ({ userName }) => {
  return <span className="user-name">{userName}</span>;
};

export default UserName;
