import React, { useState, useEffect } from "react";
import Chat from "../database/chat.jsx";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../database/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp); 
const db = getFirestore(firebaseApp); 

function ChatApp() {
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");
  const [matchedUsers, setMatchedUsers] = useState([]); 

  // async function displayMatches(e) {
  //   e.preventDefault();
  //   var docRef = doc(db, "users", `${auth.currentUser.uid}`);
  //   getDoc(docRef).then((doc) => {
  //     if (doc.exists) {
  //       console.log("Document data:", doc.data());
  //       const userData = doc.data(); 
  //       console.log(userData.matches);
  //       setMatchedUsers(prevMatchedUsers => [...prevMatchedUsers, userData.matches]);
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //     }).catch((error) => {
  //       console.log("Error getting document:", error);
  //     });
  // }
  async function displayMatches(e) {
    e.preventDefault();
  
    try {
      const docRef = doc(db, "users", `${auth.currentUser.uid}`);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log("Document data:", userData);
  
        if (userData.matches && Array.isArray(userData.matches)) {
          // userData.matches is an array of user IDs
          setMatchedUsers(userData.matches);
        } else {
          console.log("No matches found.");
        }
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  }
  
  const listItems = matchedUsers.map((userId) => (
    <li className="one-match" key={userId}>
      <ul>
        <button onClick={() => handleClick(userId)}>Load Chat for {userId}</button>
      </ul>
    </li>
  ));
  
  function handleClick(userId) {
    setRoom(roomName(userId));
    setIsInChat(true);
  }
  
 //
  
  

  function roomName(theirUID) {
    const yourUID = auth.currentUser.uid; 
    const order = yourUID.localeCompare(theirUID);
    if (order > 1) {
        return (
            theirUID + yourUID
        ); 
    }
    return yourUID + theirUID; 
  }

  // const listItems = matchedUsers.map(person => (
  //   <li className="one-match" key={person.uid}>
  //     <ul>
  //       <button onClick={() => handleClick(person.uid)}>{person.name}</button>
  //     </ul>
  //   </li>
  // ));
  


  // function handleClick(UID) {
  //   setRoom(roomName(UID)); 
  //   setIsInChat(true); 
  // }

  return (
    <div>
      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <ul>
            {listItems}
          </ul>
          <div className="match-button">
          <form onSubmit={displayMatches}>
            <button type="submit">Meet Your Matches</button>
          </form>
          </div>
        </div>
        
      ) : (
        <Chat room={room} />
      )}
    </div>
  );
}

export default ChatApp;