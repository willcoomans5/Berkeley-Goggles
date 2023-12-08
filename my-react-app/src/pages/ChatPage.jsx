import React, { useState, useEffect } from "react";
import Chat from "../database/chat.jsx";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../database/firebase";
import NavigationBar from "../components/NavigationBar.jsx"
import "./ChatPage.css"

const auth = getAuth(firebaseApp); 

function ChatApp() {
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");


  return ( 
  <>
    <NavigationBar/>
    <div>
      {!isInChat ? (
        <div className="room">
          <p className="button-label"> Who would you like to chat with? </p>
          <input className="room-name" onChange={(e) => setRoom(e.target.value)} />
          <button
            className="enter-chat-button"
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter Chat
          </button>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </div>
  </>
  );
}

export default ChatApp;