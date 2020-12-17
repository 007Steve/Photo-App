import React from "react";
import "../styles/Nav.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import ImageIcon from '@material-ui/icons/Image';
import { Avatar } from "@material-ui/core";
function Nav() {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="glow.png"
        alt=""
      />
      <div className="nav__center">
        <HomeIcon className="nav__icon" />
        <SearchIcon className="nav__icon" />
        <ImageIcon className="nav__icon" />
      </div>

      <div className="nav__right">
        <SendIcon className="nav__icon" />
        <Avatar  src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1613606400&v=beta&t=0291O_ntdB3UE7rg-QaWOiFFi1v5mVsOCGW8aGkbs04"className="nav__icon" />
      </div>
    </div>
  );
}

export default Nav;
