import React from 'react';
import { FaCar } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { HiOutlineLogout, HiUsers } from "react-icons/hi";
import { RiUser6Fill } from "react-icons/ri";
import logo from '../logo.png';
import Separador from '../components/separador';
const Index = () => {
    return (
        <div className='mwanapwo'>
            <aside className='esquerda'>
                <div className='menu-logo'>
                    <img src={logo} />
                    <h2>Moser José</h2>
                </div>
                <ul className='menu'>
                    <li><a href='/'><GiHomeGarage/> Dashboard</a></li>
                    <li><a href='/'><RiUser6Fill/> Motoristas</a></li>
                    <li><a href='/'><FaCar/> Viaturas</a></li>
                    <li><a href='/'><HiUsers/> Passageiros</a></li>
                    <li><a href='/'><HiOutlineLogout/> Sair</a></li>
                </ul>
            </aside>
            <div className='direita'>
                <Separador icon={<RiUser6Fill size={30} color="#bc7e29" />} titulo="Motoristas cadastrdaos" descricao="Todos motoristas cadastrados pela empresa"/>
            </div>
        </div>
    );
};

export default Index;