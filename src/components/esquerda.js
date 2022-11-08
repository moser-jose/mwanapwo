import React from 'react'
import { Link } from 'react-router-dom'
import { FaCar } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { HiOutlineLogout, HiUsers } from "react-icons/hi";
import { RiUser6Fill } from "react-icons/ri";
import logo from '../logo.png';
import Separador from '../components/separador';

function esquerda({user}) {
  return (
    <aside className='esquerda'>
        <div className='menu-logo'>
            <img src={logo} />
            <h2>Moser José</h2>
        </div>
        <ul className='menu'>
            <li><Link to='/admin'><GiHomeGarage/> Dashboard</Link></li>
            <li><Link to="/admin/motoristas"><RiUser6Fill/> Motoristas</Link></li>
            <li><a href='/'><FaCar/> Viaturas</a></li>
            <li><a href='/'><HiUsers/> Passageiros</a></li>
            <li><a href='/'><HiOutlineLogout/> Sair</a></li>
        </ul>
    </aside>
  )
}

export default esquerda