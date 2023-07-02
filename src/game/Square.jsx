import './Square.css'
import { useState } from 'react'
import dedal from '../assets/imgs/dedal.png'
import auto from '../assets/imgs/auto.png'
import sombrero from '../assets/imgs/sombrero.png'
import barco from '../assets/imgs/barco.png'
import casaImg from '../assets/imgs/casa.png'
import start from '../assets/imgs/start.png'
import freeparking from '../assets/imgs/freeparking.png'
import museaum from '../assets/imgs/museaum.png'
import restArea from '../assets/imgs/rest-area.png'

export default function Square(id, name, color, owner, price, ficha, nivelestrucura, idp, alquiler, hipotecado) {


    function hayFicha(objeto){

        if (objeto.squareActual == id) {
            if (objeto.numTurno == 0){
                return (<img className="ficha" src={dedal} alt="Dedal" />)
            } else if (objeto.numTurno == 1) {
                return (<img className="ficha" src={auto} alt="Auto" />)
            } else if (objeto.numTurno == 2) {
                return (<img className="ficha" src={barco} alt="Barco" />)
            } else if (objeto.numTurno == 3) {
                return (<img className="ficha" src={sombrero} alt="Sombrero" />)
            }
        }
    }

    function hayEstrucuras(){

        const casa = <img className="casa" src={casaImg} alt="casa" />

        if (nivelestrucura == 0){
            return 
        } else if (nivelestrucura == 1) {
            return (casa)
        } else if (nivelestrucura == 2) {
            return [casa,casa]
        } else if (nivelestrucura == 3) {
            return [casa,casa,casa]
        } else if (nivelestrucura == 4) {
            return [casa,casa,casa,casa]
        } else if (nivelestrucura == 5) {
            return [casa,casa,casa,casa,casa]
        }
    }

    function propInfo(){
        if (idp == "1E") { /* si es casilla libre  */
            return (
                <div className='casilla-libre'>
                    <img className="start" src={start} alt="start" />
                </div>
            )
        } else if(idp == "2E") {
            return(
            <div className='casilla-libre'>
                <img className="rest-area" src={restArea} alt="rest" />
            </div>
            )
        } else if(idp == "3E") {
            return(
            <div className='casilla-libre'>
                <img className="free-parking" src={freeparking} alt="free parking" />
            </div>
            )
        } else if(idp == "4E") {
            return(
            <div className='casilla-libre'>
                <img className="museaum" src={museaum} alt="museo" />
            </div>
            )
        } else {
            return(
            <p className='contenido'>
            Price: ${price} <br></br>
            Propietario: {owner} <br></br>
            Hipotecado: {hipotecado?.toString()} <br></br>
            Alquiler Base: {alquiler} <br></br> 
            <b>ID: {idp}</b>
            </p>
            )
        }
    }

    return(
        <div className="square" id={"sqr"+id}>
            <p className={color}>{name}</p>
                {propInfo()}
            <div className='seccion-estructura'>
                {hayEstrucuras()}
            </div>
            <div className='seccion-fichas'>
                {ficha.map(hayFicha)}
            </div>
        </div>
        )

}
