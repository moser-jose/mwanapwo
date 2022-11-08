import { createContext, useEffect, useReducer, useState, useContext } from "react";
import {db,auth} from "../api/api"

import { collection, getDocs, getFirestore } from "firebase/firestore";
import AuthReducer from "./authReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const driversCollectionRef= collection(db, "drivers");
  const ridersCollectionRef= collection(db, "riders");

  const [drivers, setDriveres]=useState([]);
  const [riders, setRiders]=useState([]);
  const [loading, setLoding]=useState(false);

  useEffect(() => {
    setLoding(false);
    localStorage.setItem("user", JSON.stringify(state.currentUser));
    const getUsers=async()=>{
        const drivers= await getDocs(driversCollectionRef);
        const riders= await getDocs(ridersCollectionRef);
        setDriveres(drivers.docs.map((doc)=>({...doc.data(), id:doc.id})));
        setRiders(riders.docs.map((doc)=>({...doc.data(), id:doc.id})));
        setLoding(true);
        console.log(drivers.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }
    getUsers();
  }, [state.currentUser]);


  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch,loading,drivers,riders }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContextProvider = () => useContext(AuthContext);
