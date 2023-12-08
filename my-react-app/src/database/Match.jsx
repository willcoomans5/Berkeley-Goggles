import React, { useEffect, useState } from 'react';
import { collectionGroup, query, where, getDocs, getFirestore } from "firebase/firestore";  
import { firebaseApp } from './firebase';

const db = getFirestore(firebaseApp); 

const Match = () => {
  const [matchlist, setMatchlist] = useState([]); 

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
      <li>
        <ul>
          <li>{person.name}</li>
          <li>{person.birthday}</li>
          <li>{person.description}</li>
        </ul>
      </li>
    );

  return (
    <>
    <div className="matches">
      {/* Render your component with the data */}
      {(
        <div>
          <ul>{listItems}</ul>;
        </div>
      )}
    </div>
    <div>
      <form onSubmit={match}>
        <button type="submit">Display Matches</button>
      </form>

    </div>
    </>
  );
};

export default Match;



