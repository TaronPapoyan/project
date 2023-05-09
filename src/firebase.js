import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaYnliwnCETl0FZ-CnhrtQpxrlkXg4roc",
  authDomain: "ourproject2-b0a91.firebaseapp.com",
  projectId: "ourproject2-b0a91",
  storageBucket: "ourproject2-b0a91.appspot.com",
  messagingSenderId: "365445606824",
  appId: "1:365445606824:web:86b241dfbfb96b7672819d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const usersRef = collection(db, "users");
export const tasksRef = collection(db, "tasks");

export const imageListRef = ref(storage, "avatars/");
export default app;
