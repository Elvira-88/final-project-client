import React from 'react'
import {NavLink} from 'react-router-dom';

import './Navbar.css';
import logo from './logo.png';

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo"/>
            <div className="navegation">
                <NavLink className="navlink" to="/">Inicio</NavLink>
                <NavLink className="navlink" to="/team">Nuestro equipo</NavLink>
                <NavLink className="navlink" to="/courses">Cursos</NavLink> 
                <NavLink className="navlink" to="/login">Accede a tu cuenta</NavLink> 
                <NavLink className="navlink" to="/register">Regístrate</NavLink> 
            </div>          
                
        </div>
    )
}
