import React from 'react'
import {NavLink} from 'react-router-dom';

import './Navbar.css';
import logo from './logo.png';

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo"/>
            <div className="navegation">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/team">Nuestro equipo</NavLink>
                <NavLink to="/courses">Cursos</NavLink> 
                <NavLink to="/login">Accede a tu cuenta</NavLink> 
                <NavLink to="/register">Regístrate</NavLink> 
            </div>          
                
        </div>
    )
}
