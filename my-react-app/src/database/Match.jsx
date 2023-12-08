import React, { useEffect, useState } from 'react';
import { collectionGroup, query, where, 
  doc, updateDoc, getDocs, getFirestore, arrayUnion } from "firebase/firestore";  
import { getAuth } from 'firebase/auth';
import { firebaseApp } from './firebase';

const db = getFirestore(firebaseApp); 
const auth = getAuth(firebaseApp); 

const Match = () => {
  const [matchlist, setMatchlist] = useState([]); 

  async function matchWithUser(person) {
    const myUID = auth.currentUser.uid; 
    const theirUID = person.uid; 

    const myUserRef = doc(db, "users", `${myUID}`);

    await updateDoc(myUserRef, {
      matches: arrayUnion(theirUID)
    });
  }

  async function match(e) {
    e.preventDefault(); 
    setMatchlist([]); 
    // Query a reference to a subcollection
    const matches = query(collectionGroup(db, 'users'));
    const querySnapshot = await getDocs(matches);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      setMatchlist(matchlist => [...matchlist, doc.data()]);
      console.log(matchlist); 
    });}
  
    const listItems = matchlist.map(person =>
      <li className="one-match">
        <ul>
          <li className="match-name">{person.name}</li>
          <li className="match-dob">{person.birthday}</li>
          <li className="match-bio">{person.description}</li>
          <button className="getMatches" onClick={() => matchWithUser(person)}>Match with {person.name}</button>
        </ul>
      </li>
    );

  return (
    <>
    <div className="matches">
      {/* Render your component with the data */}
      {(
        <div>
          <ul>{listItems}</ul>
        </div>
      )}
    </div>
    <div className="match-button">
      <form onSubmit={match}>
        <button type="submit" className="getMatches">Meet Your Matches</button>
      </form>

    </div>
    </>
  );
};

export default Match;



