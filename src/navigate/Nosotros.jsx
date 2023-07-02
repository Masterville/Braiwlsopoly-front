import './Nosotros.css'
import { useState } from 'react'

export default function Nosotros() {

    return(
        <>
        <div className='container'>
            <div className='header-n'>
                <h1>Nosotros</h1>
            </div>
            <div className='sub-container'>
            <div className='teams'>
                <div className='img-container'>
                    <img src='src/assets/imgs/avatar.png' alt='avatar randall' />
                </div>
                <div className='name'>Randall Biermann</div>
                <div className='desig'>Sección 1</div>
                <div className='about'>¡Hola! Soy Randall Biermann, estudiante de tercer año de ingeniería civil en la Pontificia Universidad Católica de Chile.
                 Además, fundé una start-up de videojuegos llamada Braiwls relacionada con la creación de distintos tipos de videojuegos como el Monópoly. Me apasiona la ingeniería 
                 y la creación de productos innovadores que desafíen la mente. Mi enfoque en la creatividad y la innovación me ha llevado a explorar nuevas ideas y 
                 oportunidades en el futuro. ¡Gracias por conocer un poco más sobre mí!</div>
                <div className='social-links'>
                    <a href='#'><img className="icons" src="src\assets\imgs\linkedin.png"/></a>
                    <a href='#'><img className="icons" src="src\assets\imgs\github.png"/></a>
                </div>

            </div>

            <div className='teams'>
                <div className="img-container">
                    <img src='src/assets/imgs/avatar2.png' alt='avatar fernando' />
                </div>
                <div className='name'>Fernando Villela</div>
                <div className='desig'>Sección 1</div>
                <div className='about'>Hola! soy estudiante de ingeniería civil major Software en la Pontificia Universidad Católica de Chile. Me gustan mucho los juegos de mesa
                 y los videojuegos. Mis favoritos son el Monopoly y el Red Dead Redemption 2 respectivamente. Me motiva que para este proyecto podamos realizar un de ellos y me parece
                 interesante que al convertir el Monopoly en un videojuego se le quite la función de ser el banco a un jugador lo que puede ser algo tediosa a veces. <label htmlFor=""></label></div>
                <div className='social-links'>
                    <a href='#'><img className="icons" src="src\assets\imgs\linkedin.png"/></a>
                    <a href='#'><img className="icons" src="src\assets\imgs\github.png"/></a>
                </div>
                
            </div>
            </div>
        </div>
        </>
    )
}