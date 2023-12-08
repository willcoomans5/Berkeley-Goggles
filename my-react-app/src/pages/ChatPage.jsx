import React, { useState, useEffect } from "react";
import Chat from "../database/chat.jsx";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../database/firebase";

const auth = getAuth(firebaseApp); 

function ChatApp() {
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  const roomName = (theirUID) => {
    const yourUID = auth.currentUser.uid; 
    const order = yourUID.localeCompare(theirUID);
    if (order > 1) {
        return (
            theirUID + yourUID
        ); 
    }
    return yourUID + theirUID; 
  }

  

  return (
    <div>
      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <input onChange={(e) => setRoom(e.target.value)} />
          <button
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
  );
}

export default ChatApp;