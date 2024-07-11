
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDi95B6xskvUeEwjJ7S1vr6tFhtW9kZ5RM",
  authDomain: "log2-a2579.firebaseapp.com",
  projectId: "log2-a2579",
  storageBucket: "log2-a2579.appspot.com",
  messagingSenderId: "572101374675",
  appId: "1:572101374675:web:3bac079386d17d60665a26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
