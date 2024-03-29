// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkq-uR11M1k-wpfycbusq7fPUJcUvB5HU",
  authDomain: "crwn-clothing-db-69821.firebaseapp.com",
  projectId: "crwn-clothing-db-69821",
  storageBucket: "crwn-clothing-db-69821.appspot.com",
  messagingSenderId: "15987788177",
  appId: "1:15987788177:web:3005d25143cfcb2acab230",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db,'users',userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
    }
    catch(error){
      console.log('error creating the user', error.message)
    }

    return userDocRef;
    
  }
}

export const setCollectionToDB = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db,collectionKey)
  const batch = writeBatch(db)

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object);
  });

  await batch.commit()
  console.log('done')

}

export const getCollectionFromDB = async () => {
  const collectionRef = collection(db,'categories')
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q)

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items

    return acc;
  },{});

  return categoryMap;
}

export const createAuthUserWithEmailAndPassword = (email, password)=> {
  if(!email || !password) return;

  return createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = (email,password) => {
  if(!email || !password) return;

  return signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => {
  await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth,callback)
}