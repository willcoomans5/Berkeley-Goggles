// Chat.jsx
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, push } from "firebase/database";

const Chat = ({ firebaseApp }) => {
  const auth = getAuth(firebaseApp);
  const db = getDatabase(firebaseApp);
  const uid = auth.currentUser.uid;
  const messagesRef = ref(db, "messages"); 

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setMessages(Object.values(data));
      }
    });

    return () => unsubscribe();
  }, [messagesRef]);

  const sendMessage = () => {
    const newMessageRef = push(messagesRef);
    const timestamp = new Date().getTime();

    set(newMessageRef, {
      text: newMessage,
      timestamp,
      uid,
    });

    setNewMessage("");
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.timestamp}>{message.text}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;





