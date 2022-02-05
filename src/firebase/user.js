import { firestore } from "./config";

export const createUserDocument = async (user) => {
  // get a reference to the firestore document
  const docRef = firestore.doc(`/users/${user.uid}`);

  // create user object
  const userProfile = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    dob: "",
    country: "",
    city: "",
    position: "",
    number: "",
    height: "",
  };

  // write to cloud firestore
  return docRef.set(userProfile);
};