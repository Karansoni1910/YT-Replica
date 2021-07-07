import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function ChannelRow({
  image,
  channel,
  verified,
  subs,
  videos,
  desc,
}) {
  return (
    <div className="channel__row">
      <Avatar className="channel__avatar" alt={channel} src={image} />
      <div className="channel__text">
          <h4>{channel} {verified && <CheckCircleIcon />}</h4>
        <p>{subs} subscribers &middot; {videos} videos </p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
