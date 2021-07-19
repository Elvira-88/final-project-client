import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useAuthContext } from "../../context/AuthContext";
import './Navbar.css';
import logo from './logo.png';
import Collapsible from 'react-collapsible';

export default function Navbar() {

    const { isAuthenticated, signOut } = useAuthContext();

    const history = useHistory();

    const handleSignOut = () => {
        signOut();
        history.push("/login");
    };

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo" id="logo_menu"/>
            <div className="navegation" id="menu_completo">
                <NavLink className="navlink" to="/">Inicio</NavLink>
                <NavLink className="navlink" to="/team">Nuestro equipo</NavLink>
                <NavLink className="navlink" to="/courses">Cursos</NavLink>
                {!isAuthenticated &&
                <NavLink className="navlink" to="/register">Regístrate</NavLink>             
                }  
                {isAuthenticated
                ? <a onClick={handleSignOut} className="navlink">Cerrar sesión</a>                           
                :<NavLink className="navlink" to="/login">Inicia sesión</NavLink> 
                }
            </div> 
            <div className="menuMobile" id="menu_colapsable">
                <Collapsible trigger="Menú">
                    <p><NavLink className="navlink" to="/">Inicio</NavLink></p>
                    <p><NavLink className="navlink" to="/team">Nuestro equipo</NavLink></p>
                    <p><NavLink className="navlink" to="/courses">Cursos</NavLink></p>
                    <p>{!isAuthenticated &&
                        <NavLink className="navlink" to="/register">Regístrate</NavLink> 
                    }</p>
                    {isAuthenticated
                    ? <p><a onClick={handleSignOut} className="navlink">Cerrar sesión</a></p>                          
                    : <p><NavLink className="navlink" to="/login">Inicia sesión</NavLink></p> 
                    }
                </Collapsible>
            </div>         
                
        </div>
    )
}
