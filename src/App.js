import React from "react";
import "./App.css";
import Chat from "./components/chat/Chat";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className='app'>
      {/* SideBar */}
      <SideBar />
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
