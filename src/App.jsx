import React, { useEffect, useState } from "react";
import { auth, provider } from "./components/config";
import {
  signInWithPopup,
  FacebookAuthProvider,
  signInAnonymously,
} from "firebase/auth";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log("User data: ", data.user);
        console.log("User email: ", data.user.email);
        console.log("User display name: ", data.user.displayName);
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error during sign-in: ", error);
      });
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setValue(email);
    }
  }, []);

  const signInWithFacebook = async () => {
    try {
      const facebookProvider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("Logged user: ", result.user);
    } catch (error) {
      console.error("Error during Facebook sign-in: ", error);
    }
  };

  return (
    <>
      {value ? (
        <Home />
      ) : (
        <button onClick={handleClick}>Sign in with Google</button>
      )}
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>
    </>
  );
}

export default App;
