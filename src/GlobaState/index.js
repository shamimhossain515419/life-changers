'use client';

import app from '@/firebase/firebase.config';
import {
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut,
     updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';


const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const googleProvider = new GoogleAuthProvider();
     const createUser = async (email, password) => {
          setLoading(true);
          const data = await createUserWithEmailAndPassword(auth, email, password);
          return data
     };

     const signIn = async (email, password) => {
          setLoading(true);
          const result = await signInWithEmailAndPassword(auth, email, password);
          return result
     };


     const profileUpdate = async (name, photo) => {
          const data = await updateProfile(auth.currentUser, {
               displayName: name,
               photoURL: photo,
          });

          return data
     };

     const googleLogin = () => {
          setLoading(true);
          return signInWithPopup(auth, googleProvider);
     };

     const logout = () => {
          setLoading(true);
          return signOut(auth);
     };

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
               setUser(user);
               setLoading(false);
          });

          () => {
               unsubscribe();
          };
     }, []);

     const value = {
          user,
          loading,
          createUser,
          signIn,
          profileUpdate,
          googleLogin,
          logout,
          name,
     };

     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
