import { useState } from 'react'
import './Footer.css'
import logo from "../assets/imgs/Braiwls.png"
import logoFacebook from "../assets/imgs/facebook.png"
import logoInstagram from "../assets/imgs/instagram.png"
import logoLinkedin from "../assets/imgs/linkedin.png"
import logoTwitter from "../assets/imgs/twitter.png"


export default function Footer() {

    return(
        <footer className="footer-bar">
            <div className="box-footer">
                <img className="logo-footer" src={logo} alt="logo" id="logo"/>
            </div>
            <div className="box-footer">
                <p>&copy; 2023 Braiwls. Todos los derechos reservados.</p>
            </div>
            <div className="box-footer">
                <a href="/"><img className="media-footer" src={logoFacebook}/></a>
                <a href="/"><img className="media-footer" src={logoTwitter}/></a>
                <a href="/"><img className="media-footer" src={logoInstagram}/></a>
                <a href="/"><img className="media-footer" src={logoLinkedin}/></a>
            </div>
        </footer>
    )
}