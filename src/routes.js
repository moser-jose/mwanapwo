import React,{useContext,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Index from './views';
import Motoristas from './views/motoristas';
import Login from './views/login'
import Mapa from './views/mapa'
import Politica from './views/politica'
import "./assets/scss/App.scss";
import { AuthContext } from "./contexts/authContext";
const Rotas = () => {
    const {currentUser} = useContext(AuthContext);

    const RequireAuth=({children})=>{
        return currentUser ? (children) : <Navigate to="/"/>
    }
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/politica" element={<Politica/>} />
                <Route path="/admin" element={<RequireAuth><Index/></RequireAuth>} />
                <Route path="/admin/motoristas" element={<RequireAuth><Motoristas/></RequireAuth>} />
                <Route path="/admin/mapa" element={<RequireAuth><Mapa/></RequireAuth>} />
            </Routes>
        </Router>
    )
}
export default Rotas