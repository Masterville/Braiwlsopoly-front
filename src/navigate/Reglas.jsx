import './Reglas.css'
import { useState } from 'react'
import './Reglas.css'
import ListaPasosReglas from './ListaPasosReglas'
import { useHashFragment } from './useHashFragment.jsx';

export default function Reglas() {

    const pasos = [
        { titulo: "Registro de usuario", descripcion: "Para comenzar, es importante primero crear una cuenta de monopoly, por lo que debes rellenar tus datos con tu nombre de usuario y contraseña.", url: "src\\assets\\imgs\\registro_usuario.png" },
        {
            titulo: "Búsqueda/Creación de sala", descripcion: `Ahora que ya tienes tu cuenta 
        es hora que busques una sala que se adecúe a tus necesidades, por lo que debes apretar en el botón de salas disponibles y seleccionar
        la que te guste para que juegues con tus amigos. También puedes crear tu sala si presionas en el botón Crear Nueva Sala.`, url: "src\\assets\\imgs\\mis_partidas.png"
        },
        {
            titulo: "Empezar juego", descripcion: `Una vez que te has registrado, has ingresado a una sala y ha iniciado la partida
        es momento de comenzar la partida, por lo que cada jugador debe lanzar el dado para definir el orden por el que se jugará,
        por lo que luego de este proceso, el jugador que haya lanzado el número más grande comenzará y tendrá que lanzar el dado nuevamente
        para poder determinar cuántas casillas deberá avanzar`, url: "src\\assets\\imgs\\lanzar_dados.png"
        },
        {
            titulo: "Avanzar y caer en un lugar", descripcion: `Una vez que hayas termiado de desplazarte por el mapa, te darás cuenta que has caido
        en una casilla específica que se pueden clasificar en distintas categorías como una propiedad, caja de comunidad, estación de ferrocarril,
        compañía de servicios públicos, impuestos, ir a la carcel, entre otros lugares.`, url: "src\\assets\\imgs\\caer_casilla.jpg"
        },
        {
            titulo: "Siguiente turno", descripcion: `Luego de haber concluido tu turno, se procederá con entregar el dado al siguiente jugador para que lance y pueda jugar su turno, por lo que
        debes esperar los turnos de todos los jugadores para volver a lanzar el dado y así jugar.`, url: "src\\assets\\imgs\\esperar_turno.jpg"
        },
        {
            titulo: "Chatea con jugadores", descripcion: `Puedes chatear con distintos jugadores si presionas en el botón de chat, procura mantener un lenguaje adecuado y se cortés ya que hay moderadores
        que si determinan que has estado insultado, podrían banearte y ser expulsado de manera permanente de nuestros servidores.`, url: "src\\assets\\imgs\\chat_image.jpg"
        },
        {
            titulo: "Negocia con jugadores", descripcion: `Recuerda que siempre es importante negociar si necesitas alguna propiedad que crees que podría resultar estratégico hacerse dueño,
        para poder hacer esto, solo debes esperar que sea tu turno y precionar sobre el jugador que te interesa negociar, puedes intercambiar dinero, propiedades, ferrocarriles, etc... con otros
        jugadores.`, url: "src\\assets\\imgs\\negociar.jpg"
        },
        {
            titulo: "Gana la partida", descripcion: `Para ganar, debes hacerte con la mayor cantidad de propiedades y construir casas sobre ellas para que cuando los jugadores caigan en tus propiedades, tengan
        que pagarte renta y así enriquecerte y empobrecer a los demás. Ganas si logras que todos los jugadores queden en bancarrota.`, url: "src\\assets\\imgs\\ganar.jpg"
        },


    ]
    return (
        <>
            <div className="about-game">
                <h1 className='title-page'>Sobre el juego</h1>
                <p className='description'>El Monopoly es un juego que fomenta la competencia y la toma de decisiones, ya que los jugadores deben decidir qué propiedades comprar,
                    cuándo mejorarlas y cuánto cobrar en alquiler. Además, el juego incluye elementos de negociación, ya que los jugadores pueden intercambiar propiedades entre sí.
                    El Monopoly ha sido adaptado en diversas versiones temáticas, desde ciudades hasta películas y videojuegos, y es jugado por millones de personas en todo el mundo.
                </p>
            </div>
            <div className="rules-game">
                <h2 className='title-page2'>Índice</h2>
                <ol className='order-list'>
                    {pasos.map((paso, index) => {
                        return <li><a href={"#paso"+(index+1)}><span className='number'>{(index+1) + ". "}</span>{paso.titulo}</a></li>;
                    })}
                </ol>
                <h2 className='title-page2'>Instrucciones</h2>
                <ul className='rules'>
                    <div className="items">
                        <ListaPasosReglas pasos={pasos} />
                    </div>
                </ul>
            </div>
            {useHashFragment()}
        </>
    )
}