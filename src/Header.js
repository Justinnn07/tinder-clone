import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>
      <img
        src="https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/tinder-512.png"
        alt=""
        className="header-logo"
      />
      <IconButton>
        <ForumIcon className="header-icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
