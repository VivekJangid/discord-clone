import React, { useEffect, useState } from "react";
import "./Chat.css";
import Message from "./Message";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useSelector } from "react-redux";
import { selectChannelID, selectChannelName } from "../../features/appSlice";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";
import firebase from "firebase";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const channelId = useSelector(selectChannelID);
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelName)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelName).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };
  console.log(messages);
  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} />
      <div className='chat__messages'>
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>
      <div className='chat__input'>
        <AddCircleIcon fontSize='large' />
        <form onSubmit={(e) => sendMessage(e)}>
          <input
            disabled={!channelId}
            value={input}
            placeholder={`Message #Test`}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className='chat__inputButton' type='submit'>
            Send Message
          </button>
        </form>
        <div className='chat__inputIcons'>
          <CardGiftcardIcon fontSize='large' />
          <GifIcon fontSize='large' />
          <EmojiEmotionsIcon fontSize='large' />
        </div>
      </div>
    </div>
  );
};

export default Chat;
