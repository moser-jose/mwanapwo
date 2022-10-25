import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import {firebase}  from '../api/api'
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const StateContext = createContext();

export const StateFirebaseContext = ({ children }) => {
    const token = window.localStorage.getItem('token');
    const [usuarios, setUsuarios]=useState([]);
    //const navigate = useNavigate();

    const db= getFirestore(firebase);
    const userCollectionRef= collection(db, "riders");

    useEffect(() => {
        const getUsers=async()=>{
            const data= await getDocs(userCollectionRef);
            setUsuarios(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
            console.log(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
        }
        getUsers();
    }, []);

    return (
        <StateContext.Provider
            value={{usuarios}}>
            {children}
        </StateContext.Provider>
    );
};

export const useFirebaseContext = () => useContext(StateContext);
