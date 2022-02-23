import * as firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "payse-43ff4.appspot.com",
  messagingSenderId: "105596222185",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const Firebase = firebase.initializeApp(firebaseConfig);
// if (!Firebase.apps.length) {
// }

export default Firebase;
