import firebase from "firebase/app";
import "firebase/auth";

export const initializeFirebase = () => {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
  };
  try {
    firebase.initializeApp(config);
  } catch (error) {
    throw error;
  }
};
