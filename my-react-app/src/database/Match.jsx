// import React, { useEffect, useState } from 'react';
// import { getDatabase, ref, get, child } from 'firebase/database';
// import { firebaseApp } from './firebase';  // Update the import statement

// const db = getDatabase(firebaseApp);

// const Match = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const usersRef = ref(db, 'users.uid');

//       try {
//         const snapshot = await get(child(usersRef));

//         if (snapshot.exists()) {
//           setData(snapshot.val());
//         } else {
//           console.log('No data available');
//         }
//       } catch (error) {
//         console.error('Error getting data', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* Render your component with the data */}
//       {data && <p>{data}</p>}
//     </div>
//   );
// };

// export default Match;


import React, { useEffect, useState } from 'react';
import { collectionGroup, query, where, getDocs, getFirestore } from "firebase/firestore";  
import { firebaseApp } from './firebase';

const db = getFirestore(firebaseApp)

const Match = async() => {
  // Query a reference to a subcollection
  const matches = query(collectionGroup(db, 'users'));
  const querySnapshot = await getDocs(matches);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
  });

  return (
    <div className="matches">
      {/* Render your component with the data */}
      {(
        <div>
        </div>
      )}
    </div>
  );
};

export default Match;



