import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "payse-43ff4.appspot.com",
  messagingSenderId: "105596222185",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const db = getFirestore();
export const auth = getAuth();

export default firebaseConfig;
