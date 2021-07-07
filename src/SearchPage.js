import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

export default function SearchPage() {
  return (
    <div className="searchpage">
      <div className="search__filter">
        <TuneIcon className="tune-icon" />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://source.unsplash.com/500x500/?face"
        channel="Channel Name"
        verified
        subs="720K"
        videos={58}
        desc="This is a channel description for the YouTube channel"
      />
      <hr />
      <VideoRow
        title="Video Name"
        image="https://source.unsplash.com/random/320x200"
        channel="Random Name"
        views="365K"
        timestamp="14 days ago"
        desc="This is the video description for the Youtube video"
        profile="https://source.unsplash.com/500x500/?face"
      />
      <VideoRow
        title="Video Name"
        image="https://source.unsplash.com/random/320x200"
        channel="Random Name"
        views="365K"
        timestamp="14 days ago"
        desc="This is the video description for the Youtube video"
        profile="https://source.unsplash.com/500x500/?face"
      />
      <VideoRow
        title="Video Name"
        image="https://source.unsplash.com/random/320x200"
        channel="Random Name"
        views="365K"
        timestamp="14 days ago"
        desc="This is the video description for the Youtube video"
        profile="https://source.unsplash.com/500x500/?face"
      />
      <VideoRow
        title="Video Name"
        image="https://source.unsplash.com/random/320x200"
        channel="Random Name"
        views="365K"
        timestamp="14 days ago"
        desc="This is the video description for the Youtube video"
        profile="https://source.unsplash.com/500x500/?face"
      />
      <VideoRow
        title="Video Name"
        image="https://source.unsplash.com/random/320x200"
        channel="Random Name"
        views="365K"
        timestamp="14 days ago"
        desc="This is the video description for the Youtube video"
        profile="https://source.unsplash.com/500x500/?face"
      />
      <VideoRow
        title="Video Name"
        image="https://source.unsplash.com/random/320x200"
        channel="Random Name"
        views="365K"
        timestamp="14 days ago"
        desc="This is the video description for the Youtube video"
        profile="https://source.unsplash.com/500x500/?face"
      />
      <VideoRow
        title="Video Name"
        image="https://source.unsplash.com/random/320x200"
        channel="Random Name"
        views="365K"
        timestamp="14 days ago"
        desc="This is the video description for the Youtube video"
        profile="https://source.unsplash.com/500x500/?face"
      />
    </div>
  );
}
