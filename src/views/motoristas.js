import React,{useEffect, useState,useContext} from 'react';
import { RiUser6Fill } from "react-icons/ri";
import Separador from '../components/separador';
import ListasMotoristas from '../components/listaMotoristas'
import Esquerda from '../components/esquerda';
import { useAuthContextProvider } from '../contexts/authContext';
import Loading from '../components/loading';

const Index = () => {
   const {loading,drivers}= useAuthContextProvider();
    return (
        <div className='mwanapwo'>
            <Esquerda/>
            
            <div className='direita'>
            
                <Separador icon={<RiUser6Fill size={30} color="#bc7e29" />} titulo="Motoristas cadastrdaos" descricao="Todos motoristas cadastrados pela empresa"/>
                <button className='btn btn-cadastro'><RiUser6Fill size={19} color="#fff" /> Cadastrar Motoristas</button>
                {loading ==true ? <ListasMotoristas data={drivers}/>: <Loading/>}
            </div>
        </div>
    );
};

export default Index;