import React, {useState} from 'react'
import "./Navbar.css"
import logo from "../assets/imgs/Braiwls.png"
import LogoutButton from './Logout'

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <a href="/" className="nav-link">Inicio</a>
      <a href="nosotros" className="nav-link">Nosotros</a>
      <a href="reglas" className="nav-link">Reglas</a>
      <a href="/juego" className="nav-link">Juego</a>
      <a href="/signup" className="nav-link">Regístrate</a>
      <a href="/" className="nav-link">Inicia Sesión</a>
      {LogoutButton}
    </nav>
    </>
  )
}

export default Navbar