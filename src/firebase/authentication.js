import app from "./fb-setup";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const fbAuth = getAuth(app);

// signUp
export const HandleSignUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    fbAuth,
    email,
    password
  );
  const user = userCredential.user;
  return user;
};

// signIn
export const HandleSignIn = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    fbAuth,
    email,
    password
  );
  return userCredential;
};

// signOut
export const HandleSignOut = async () => {
  await signOut(fbAuth);
};
