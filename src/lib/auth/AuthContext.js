import { createContext, useEffect, useContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import Router from "next/router";

const provider = new GoogleAuthProvider();

const authContextDefaultValues = {
  user: null,
  login: () => {},
  logout: () => {},
  uid: "",
};
export const AuthContext = createContext(authContextDefaultValues);

export function AuthProvider({ children }) {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserid(uid);
      } else {
        console.log("no user");
      }
    });
  }, []);

  const [user, setUser] = useState(null);
  const [userid, setUserid] = useState("");

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        const user = result.user;
        console.log({ credential, token, user });
        setUser(true);
        Router.push('/listofbank')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  const logout = () => {
    setUser(false);
    auth.signOut();
    console.log("logout");
  };

  const value = {
    user,
    login,
    logout,
    userid,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
