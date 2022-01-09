import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSD9-Kzmptt--XzjDt3gre27Sjo8QN190",
  authDomain: "tinkoff-30c9b.firebaseapp.com",
  projectId: "tinkoff-30c9b",
  storageBucket: "tinkoff-30c9b.appspot.com",
  messagingSenderId: "685817344700",
  appId: "1:685817344700:web:38d87af87344ef141356b9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
