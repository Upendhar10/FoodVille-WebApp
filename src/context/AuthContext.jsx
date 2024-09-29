import { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-toastify";

import { fbAuth } from "../firebase/authentication";

import {
  HandleSignUp,
  HandleSignIn,
  HandleSignOut,
} from "../firebase/authentication";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null); // Stores the authenticated user's details

  // This useEffect listens to auth changes and updates the user state
  useEffect(() => {
    const unsubscribe = fbAuth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const signUp = async (email, password, username) => {
    try {
      // Call Firebase Sign-Up function here
      const newUser = await HandleSignUp(email, password, username);
      setUser(newUser);
      toast.success("SignUp Successful");
    } catch (error) {
      console.error("Error signing up: ", error);
      toast.error(error.code.split("/")[1].split("-").join(" "));
    }
  };

  const signIn = async (email, password) => {
    try {
      // Call Firebase Sign-In function here
      const loggedInUser = await HandleSignIn(email, password);
      setUser(loggedInUser); // Set the user once successfully signed in
      toast.success("SignIn Successful");
    } catch (error) {
      console.error("Error signing in: ", error);
      toast.error(error.code.split("/")[1].split("-").join(" "));
    }
  };

  const signOut = async () => {
    try {
      await HandleSignOut(); // Call Firebase Sign-Out function
      setUser(null); // Clear the user from state
      toast.success("SignOut Successful");
    } catch (error) {
      console.error("Error signing out: ", error);
      toast.error(error.code.split("/")[1].split("-").join(" "));
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};
