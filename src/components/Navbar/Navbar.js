import React from 'react'
import {NavLink} from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/home">Inicio</NavLink>
            <NavLink to="/team">Nuestro equipo</NavLink>
            <NavLink to="/courses">Cursos</NavLink> 
            <NavLink to="/login">Accede a tu cuenta</NavLink> 
            <NavLink to="/register">Regístrate</NavLink>     
                  
        </div>
    )
}
