import React,{useEffect, useState,useContext} from 'react';
import { FaCar } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { HiOutlineLogout, HiUsers } from "react-icons/hi";
import { RiUser6Fill } from "react-icons/ri";
import logo from '../logo.png';
import Separador from '../components/separador';
import Esquerda from '../components/esquerda';


import { useAuthContextProvider } from '../contexts/authContext';
import { Link } from 'react-router-dom';
const Index = () => {
   const {loading,drivers}= useAuthContextProvider();
    useEffect(() => {
    }, []);
    return (
        <div className='mwanapwo'>
            <Esquerda/>            
        </div>
    );
};

export default Index;