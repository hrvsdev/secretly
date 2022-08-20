import { getFirestore, collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import app from "./config";

// Initializing firestore db
const db = getFirestore(app);

// Secrets collection ref
const secretsRef = collection(db, "secrets");

// Saving secret
const saveSecret = async (secret: string) => {
  try {
    const res = await addDoc(secretsRef, { secret });
    console.log(res)
  } catch (err) {
    console.log(err);
  }
};


export {saveSecret}