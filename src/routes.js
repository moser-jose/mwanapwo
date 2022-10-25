import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './views';
import "./assets/scss/App.scss";

const Rotas = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                    {/*  <Route path="/dashboard" element={<Dashboard/>} />
                        <Route path="/meus-dados/:id" element={<Usuario/>} /> */}
                    {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    )
}
export default Rotas