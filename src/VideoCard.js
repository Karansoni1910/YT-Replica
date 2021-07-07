import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css"

export default function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) {
  return (
    <div className="videocard">
      <img className="video_tn" src={image} alt="" />
      <div className="video__info">
        <Avatar className="video__avatar" alt={channel} src={channelImage}/>
        <div className="video__text">
            <h4 className="video__title">{title}</h4> 
            <p>{channel}</p>
            <p>{views} <strong>&middot;</strong> {timestamp}</p>
        </div>
      </div>
    </div>
  );
}
