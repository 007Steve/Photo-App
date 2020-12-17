import React from "react";
import "../styles/Post.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Avatar } from "@material-ui/core";
function Post() {
  return (
    <div className="post">
      <img className="post__image"src="https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
      <div className="post__Container">
        <div className="post__leftContainer">
          <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <div className="post__textContainer">
            <h4  className="post__name">stephen</h4>
            <p  className="post__time">1 min ago</p>
          </div>
        </div>
        <div className="post__rightContainer">
          <h4>
            <span>23</span> likes
          </h4>
          <FavoriteIcon  className="heart"/>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
