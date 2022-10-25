import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
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

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = { user,loading,createUser,updateUserProfile,logout,verifyEmail }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;