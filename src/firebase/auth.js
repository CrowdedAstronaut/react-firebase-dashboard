import firebase from "firebase/app";
import "firebase/auth";
import { createUserDocument } from "./user";

export const signup = async ({ firstName, lastName, email, password }) => {
  const res = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  const user = res.user;

  await user.updateProfile({ displayName: `${firstName} ${lastName}` });
  await createUserDocument(user);
  return user;
};

export const logout = () => {
  return firebase.auth().signOut();
};

export const login = async ({ email, password }) => {
  const res = await firebase.auth().signInWithEmailAndPassword(email, password);
  return res.user;
};