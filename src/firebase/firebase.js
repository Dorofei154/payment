import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    setDoc,
    doc,
    getDocs,
    deleteDoc,
    updateDoc
  } from 'firebase/firestore';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};



const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const logout = () => {
  return signOut(auth);
};


export {
  login,
  logout,
  signup,
  auth
}