import { firebaseApp } from "./firebase.jsx";

// ImageList.js
import React, { useEffect, useState } from 'react';
import { ref, getStorage, listAll, getDownloadURL } from '@firebase/storage'; 
import { getAuth } from "@firebase/auth";
const storage = getStorage(firebaseApp); 
const auth = getAuth(firebaseApp); 

const RetrieveImages = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const uid = auth.currentUser.uid; 

  useEffect(() => {
    // Replace 'images' with your Firebase Storage folder path
    const storageRef = ref(storage, 'users/' + uid);

    // List items in the folder
    listAll(storageRef).then((result) => {
      const urls = [];
      result.items.forEach((itemRef) => {
        // Get the download URL for each image
        getDownloadURL(itemRef).then((url) => {
          urls.push(url);
          setImageUrls(urls);
        });
      });
    });
  }, []);

  return (
    <div>
      <ul>
        {imageUrls.map((url) => (
          <li>
            <img className="profileImgs" src={url}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RetrieveImages;
