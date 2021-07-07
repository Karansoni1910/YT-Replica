import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@material-ui/icons/Home'
import ExploreIcon from "@material-ui/icons/Explore"
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import SidebarRow from "./SidebarRow"
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow  Icon={ExploreIcon} title="Explore"/>
            <SidebarRow  Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr />
            <SidebarRow Icon={VideoLibraryIcon}title="Library"/>
            <SidebarRow Icon={HistoryIcon}title="History"/>
            <SidebarRow Icon={OndemandVideoIcon}title="Your videos"/>
            <SidebarRow Icon={WatchLaterIcon}title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltIcon}title="liked videos"/>
            <SidebarRow Icon={ExpandMoreIcon}title="Show more"/>
            <hr />
            <SidebarRow Icon={SettingsIcon} title="Settings"/>
            <SidebarRow Icon={FlagIcon} title="Report history"/>
            <SidebarRow Icon={HelpIcon} title="Help"/>
            <SidebarRow Icon={FeedbackIcon} title="Send Feedback"/>
        </div>
    )
}
