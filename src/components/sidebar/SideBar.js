import React from "react";
import "./SideBar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SideBarChannel from "./SideBarChannel";
import SignalCellular4BarIcon from "@material-ui/icons/SignalCellular4Bar";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import MicIcon from "@material-ui/icons/Mic";

const SideBar = (props) => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>Vivek Jangid</h3>
        <ExpandMoreIcon />
      </div>

      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className='sidebar__addChannel' />
        </div>
        <div className='sidebar__channelsList'>
          <SideBarChannel />
          <SideBarChannel />
          <SideBarChannel />
          <SideBarChannel />
        </div>
      </div>

      <div className='sidebar__voice'>
        <SignalCellular4BarIcon
          className='sidebar__voiceIcon'
          fontSize='large'
        />
        <div className='sidebar__voiceInfo'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className='sidebar__voiceIcons'>
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className='sidebar__profile'>
        <Avatar src='https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg' />
        <div className='sidebar__profileInfo'>
          <h3>@Vjnh8</h3>
          <p>#IAmVivek</p>
        </div>
        <div className='sidebar__profileIcons'>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
