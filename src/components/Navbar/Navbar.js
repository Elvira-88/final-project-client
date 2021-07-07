import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useAuthContext } from "../../context/AuthContext";
import './Navbar.css';
import logo from './logo.png';

export default function Navbar() {

    const { isAuthenticated, signOut } = useAuthContext();

    const history = useHistory();

    const handleSignOut = () => {
        signOut();
        history.push("/login");
    };

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo"/>
            <div className="navegation">
                <NavLink className="navlink" to="/">Inicio</NavLink>
                <NavLink className="navlink" to="/team">Nuestro equipo</NavLink>
                <NavLink className="navlink" to="/courses">Cursos</NavLink>
                {!isAuthenticated &&
                <NavLink className="navlink" to="/register">Regístrate</NavLink>             
                }  
                {isAuthenticated
                ? <a onClick={handleSignOut} className="navlink">Cerrar sesión</a>                           
                :<NavLink className="navlink" to="/login">Iniciar sesión</NavLink> 
                }
            </div>          
                
        </div>
    )
}
