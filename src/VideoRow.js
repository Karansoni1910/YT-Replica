import React from "react";
import "./VideoRow.css";
import { Avatar } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function VideoRow({
  image,
  views,
  profile,
  timestamp,
  desc,
  title,
  channel,
}) {
  return (
    <div className="videorow">
      <img src={image} alt="" />
      <div className="video_text">
        <h4>{title}</h4>
        <p chassName="video_headline">
          {views} views <strong>&middot;</strong> {timestamp}
        </p>
        <div className="video_profile">
          <Avatar className="avatar" src={profile} /> <h3>{channel}</h3>
        </div>

        <p className="video_description">{desc}</p>
      </div>
      <div className="video_options"><MoreVertIcon /></div>
      
    </div>
  );
}
