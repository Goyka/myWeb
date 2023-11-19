import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJ_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCK,
  messagingSenderId: import.meta.env.VITE_FB_MESS_SEND_ID,
  appId: import.meta.env.VITE_FB_API_ID,
  measurementId: import.meta.env.VITE_FB_MEASURE_ID,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
