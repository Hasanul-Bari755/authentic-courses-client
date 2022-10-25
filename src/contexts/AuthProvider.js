import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
       return  createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser,profile)
    }

    // const verifyEmail = () => {
    //     return sendEmailVerification(auth.currentUser);
    // }

    const login = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const resetPassword = (email) => {
      return  sendPasswordResetEmail(auth,email)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       
            // if (currentUser === null || currentUser.emailVerified) {
            // }
            setUser(currentUser);
             setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        logout,
       // verifyEmail,
        login,
        resetPassword,
        signInWithGoogle,
        signInWithGithub
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;