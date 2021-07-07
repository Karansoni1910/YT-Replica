import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MicIcon from "@material-ui/icons/Mic";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Header.css";

export default function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__title">
        <MenuIcon className="menu" />
        <Link to="/" className="home__link">
          <YouTubeIcon className="yt-icon" />
          <span>
          <strong>YouTube</strong>
        </span>
        </Link>
        
      </div>
      <div className="header__input">
        <div className="search-text">
          <input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            type="text"
            placeholder="  Search"
          />
          <Link to={`search/${inputSearch}`} className="header__link">
            <SearchIcon className="header__search" />
          </Link>
        </div>
        <MicIcon className="header__mic" />
      </div>
      <div className="header__icons">
        <VideoCallIcon style={{ fontSize: 26 }} className="vc-icon" />
        <AppsIcon style={{ fontSize: 26 }} className="app-icon" />
        <NotificationsIcon style={{ fontSize: 26 }} className="noti-icon" />
        <AccountCircleIcon style={{ fontSize: 26 }} className="acc-icon" />
      </div>
    </div>
  );
}
