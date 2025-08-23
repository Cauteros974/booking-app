import React, {createContext, useContext, useState, useEffect} from "react";
import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqw8gqtfEZkP3ljFJHE4SATdhqXllkO-w",
    authDomain: "booking-app-d6cba.firebaseapp.com",
    projectId: "booking-app-d6cba",
    storageBucket: "booking-app-d6cba.firebasestorage.app",
    messagingSenderId: "841700870103",
    appId: "1:841700870103:web:8ac8a05f67dfa3739d6d92",
    measurementId: "G-Y6FZ5SK7NV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setcurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
}