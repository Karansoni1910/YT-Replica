import React from "react";
import "./Recommended.css";
import VideoCard from "./VideoCard";

export default function Recommended() {
  return (
    <>
      <hr />
      <div className="recommended">
        <h2>Recommended</h2>
        <div className="recommended__videos">
          <VideoCard
            title="Video Name"
            image="https://source.unsplash.com/random/250x140"
            channel="Random Name"
            views="32M"
            timestamp="3 days ago"
            channelImage="https://source.unsplash.com/500x500/?face"
          />
          <VideoCard
            title="Video Name"
            image="https://source.unsplash.com/random/250x140"
            channel="Random Name"
            views="12M"
            timestamp="1 day ago"
            channelImage="https://source.unsplash.com/500x500/?face"
          />
          <VideoCard
            title="Video Name"
            image="https://source.unsplash.com/random/250x140"
            channel="Random Name"
            views="3.2M"
            timestamp="3 weeks ago"
            channelImage="https://source.unsplash.com/500x500/?face"
          />
          <VideoCard
            title="Video Name"
            image="https://source.unsplash.com/random/250x140"
            channel="Random Name"
            views="3M"
            timestamp="3 years ago"
            channelImage="https://source.unsplash.com/500x500/?face"
          />
          <VideoCard
            title="Video Name"
            image="https://source.unsplash.com/random/250x140"
            channel="Random Name"
            views="14M"
            timestamp="13 days ago"
            channelImage="https://source.unsplash.com/500x500/?face"
          />
          <VideoCard
            title="Video Name"
            image="https://source.unsplash.com/random/250x140"
            channel="Random Name"
            views="6M"
            timestamp="30 days ago"
            channelImage="https://source.unsplash.com/500x500/?face"
          />
          <VideoCard
            title="Video Name"
            image="https://source.unsplash.com/random/250x140"
            channel="Random Name"
            views="365K"
            timestamp="14 days ago"
            channelImage="https://source.unsplash.com/500x500/?face"
          />
          <VideoCard
            title="Video Name"
            image="https://source.unsplash.com/random/250x140"
            channel="Random Name"
            views="302M"
            timestamp="27 days ago"
            channelImage="https://source.unsplash.com/500x500/?face"
          />
        </div>
      </div>
    </>
  );
}
