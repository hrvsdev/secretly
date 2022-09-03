import { getFirestore, collection } from "firebase/firestore";
import { addDoc, getDoc, doc, deleteDoc } from "firebase/firestore";
import { SecretDataTypes } from "./types";

import app from "./config";

// Initializing firestore db
const db = getFirestore(app);

// Secrets collection ref
const secretsRef = collection(db, "secrets");

// Saving secret
const saveSecret = async (data: string) => {
  try {
    const res = await addDoc(secretsRef, { data: data });
    return { success: true, data: { id: res.id } };
  } catch (err) {
    console.log(err);
    return { success: false, err };
  }
};

// Getting secret
const getSecret = async (id: string) => {
  try {
    const res = await getDoc(doc(db, "secrets", id));
    return { success: true, data: res.data() };
  } catch (err) {
    console.log(err);
    return { success: false, err };
  }
};

// Deleting secret
const deleteSecret = async (id: string) => {
  try {
    await deleteDoc(doc(db, "secrets", id));
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, err };
  }
};

export { saveSecret, getSecret, deleteSecret };
