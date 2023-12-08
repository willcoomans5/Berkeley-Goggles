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
import { getDatabase, ref, get, child } from 'firebase/database';
import { firebaseApp } from './firebase';  // Update the import statement\
import { getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp); 
const db = getDatabase(firebaseApp);
const Match = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const uid = auth.currentUser.uid; // obtain the UID from your authentication context or wherever it's available
      const usersRef = ref(db, `users/${uid}`);

      try {
        const snapshot = await get(child(usersRef));

        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error getting data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="matches">
      {/* Render your component with the data */}
      {data && (
        <div>
          <p>{data.name}</p>
          <p>{data.birthday}</p>
          <p>{data.description}</p>
          <p>{data.year}</p>
        </div>
      )}
    </div>
  );
};

export default Match;



