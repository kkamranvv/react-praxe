import React from "react";

import "./Header.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { KeyboardArrowDown } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      <img src="../../../public/images/giphyLogo.png" alt="logo" />
      <div className="menu">
        <div className="btn-wrapper reactions">
          <div className="menu-btn">
            <h2>Reactions</h2>
          </div>
        </div>
        <div className="btn-wrapper entertainment">
          <div className="menu-btn">
            <h2>Entertainment</h2>
          </div>
        </div>
        <div className="btn-wrapper sports">
          <div className="menu-btn">
            <h2>Sports</h2>
          </div>
        </div>
        <div className="btn-wrapper stickers">
          <div className="menu-btn">
            <h2>Stickers</h2>
          </div>
        </div>
        <div className="btn-wrapper artists">
          <div className="menu-btn">
            <h2>Artists</h2>
          </div>
        </div>
        <div className="btn-wrapper more-vert-icon">
          <div className="menu-btn">
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="btn">
        <h2>Upload</h2>
      </div>
      <div className="btn">
        <h2>Create</h2>
      </div>
      <div className="profile">
        <img src="../../../public/images/avatar.png" alt="" />
        <div className="profile-description">
          <h2>Kamran</h2>
          <KeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
