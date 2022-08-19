import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqSH9v1Jd2eHyUBR-4Hxw7eUOwIhLwm7I",
  authDomain: "secret-share-v.firebaseapp.com",
  projectId: "secret-share-v",
  storageBucket: "secret-share-v.appspot.com",
  messagingSenderId: "228334750935",
  appId: "1:228334750935:web:781a1f7b00a01145f23492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app