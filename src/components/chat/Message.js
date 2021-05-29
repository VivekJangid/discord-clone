import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

const Message = () => {
  return (
    <div className='message'>
      <Avatar />
      <div className='message__info'>
        <h4>
          UserName
          <span className='message__timestamp'>Timestamp Time</span>
        </h4>
        <p>Message Here</p>
      </div>
    </div>
  );
};

export default Message;
