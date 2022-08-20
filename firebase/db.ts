import { getFirestore, collection } from "firebase/firestore";
import { addDoc, getDoc, doc } from "firebase/firestore";
import app from "./config";

// Initializing firestore db
const db = getFirestore(app);

// Secrets collection ref
const secretsRef = collection(db, "secrets");

// Saving secret
const saveSecret = async (secret: string) => {
  try {
    const res = await addDoc(secretsRef, { secret });
    console.log(res.id);
  } catch (err) {
    console.log(err);
  }
};

// Getting secret
const getSecret = async (id: string) => {
  try {
    const res = await getDoc(doc(db, "secrets", id));
    console.log(res.data());
  } catch (err) {
    console.log(err);
  }
};

export { saveSecret, getSecret };
