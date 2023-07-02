import './MainMenu.css'
import dedal from '../../assets/imgs/dedal.png'
import auto from '../../assets/imgs/auto.png'
import sombrero from '../../assets/imgs/sombrero.png'
import barco from '../../assets/imgs/barco.png'
import API_URL from '../../config'


import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext"


export default function MainMenu(game, player) {
    const [mortId, setMortId] = useState("");
    const [unMortId, setUnMortId] = useState("");
    const [buildId, setBuildId] = useState("");
    const [mortHouseId, setMortHouseId] = useState("");

    const {token} = useContext(AuthContext);



    function miTurno() {
        if (player.numTurno == game.turno){
            return true
        } else {
            return false
        }

    }
  
    function lanzar_dado(){
        console.log(player);
        if (!player.isMovBoard && miTurno()) {
            return (<button name='lanzardado' type='submit' onClick={() => sendAction(game.id,"movemap")}>Lanzar dado</button>)
        }
    }

    function comprar_propiedad(){
        if (player.seccionActual == "MC"){
            return [
            <button name='comprar-propiedad' type='submit' onClick={() => sendAction(game.id,"buy")}>Comprar propiedad</button>,
            <button name='no-comprar-propiedad' type='submit' onClick={() => sendAction(game.id,"nobuy")}>No comprar propiedad</button>
            ]
        }
    }

    function construir_casa(){
        if (player.isMovBoard && miTurno() && player.seccionActual != "MC") {
            return (<button name='construir' type='submit' onClick={() => sendAction(game.id,"buildhouse")}>Construir casa</button>)
        };

    }

    function hipotecar_propiedad(){
        if (player.isMovBoard && miTurno() && player.seccionActual != "MC") {
            return (<button name='hipotecar' type='submit' onClick={() => sendAction(game.id,"mortgagepossession")}>Hipotecar Propiedad</button>)
        };

    }

    function deshipotecar_propiedad(){
        if (player.isMovBoard && miTurno() && player.seccionActual != "MC") {
            return (<button name='deshipotecar' type='submit' onClick={() => sendAction(game.id,"unmortgagepossession")}>Deshipotecar Propiedad</button>)
        };

    }

    function hipotecar_casa(){
        if (player.isMovBoard && miTurno() && player.seccionActual != "MC") {
            return (<button name='hipotecar-casa' type='submit' onClick={() => sendAction(game.id,"mortgagehouse")}>Hipotecar Casa</button>)
        };

    }

    function terminar_turno() {
        if (player.isMovBoard && miTurno() && player.seccionActual != "MC") {
            return (<button name='terminarturno' type='submit' onClick={() => sendAction(game.id,"endturn")}>Terminar turno</button>)
        }
    }

    function mensaje_turno() {
        if (!miTurno()) {
            return (<h3>Aún no es tu turno, <br/> las acciones a realizar se <br/> desplegaran aquí cuando <br/> lo sea</h3>)
        }
    }

    function sendAction(idg, action) {
        console.log(action, idg)
        axios.post(`${API_URL}/games/action`,
        {
            idGame: idg,
            action: action
    
        }, {'headers' : {
            'authorization' : `Bearer ${token}`
    
        }}).then((response) => {
            console.log("enviaste un token bueno y te logueaste");
            console.log("enviaste", action);
            console.log(response.data);
    
          }).catch((error) => {
              console.log("no estás logueado", error);
          })
          setTimeout(()=>{window.location.reload(false);},1000)
      }

      function mortMenu() {

        const handleSubmit = (event) => {
          event.preventDefault();
          console.log("llegue")
          sendAction(game.id, mortId)
        };
        if (player.seccionActual == "MAmortgagepossession"){
            return [
            <h2>Submenú hipoteca propiedad</h2>, <p>Para salir del menú escribe "volver"</p>,
            <form onSubmit={handleSubmit}>
                <label>
                <input
                    placeholder='Ingresa el id de la casilla' 
                    type="text" 
                    value={mortId}
                    onChange={(e) => setMortId(e.target.value)}
                    maxLength="2"
                    required
                />
                </label>
                <input type="submit" />
            </form>]
            } else {return}
      }

      function unMortMenu() {

        const handleSubmit = (event) => {
          event.preventDefault();
          console.log("llegue")
          sendAction(game.id, unMortId)
        };
        if (player.seccionActual == "MAunmortgagepossession"){
            return [
            <h2>Submenú deshipotecar</h2>, <p>Para salir del menú escribe "volver"</p>,
            <form onSubmit={handleSubmit}>
                <label>
                <input
                    placeholder='Ingresa el id de la casilla' 
                    type="text" 
                    value={unMortId}
                    onChange={(e) => setUnMortId(e.target.value)}
                    required
                />
                </label>
                <input type="submit" />
            </form>]
            } else {return}
      }

      function buildMenu() {

        const handleSubmit = (event) => {
          event.preventDefault();
          console.log("llegue")
          sendAction(game.id, buildId)
        };
        if (player.seccionActual == "MAbuildhouse"){
            return [
            <h2>Submenú construir casa</h2>, <p>Para salir del menú escribe "volver"</p>,
            <form onSubmit={handleSubmit}>
                <label>
                <input
                    placeholder='Ingresa el id de la casilla' 
                    type="text" 
                    value={buildId}
                    onChange={(e) => setBuildId(e.target.value)}
                    required
                />
                </label>
                <input type="submit" />
            </form>]
            } else {return}
      }

      function mortHouseMenu() {

        const handleSubmit = (event) => {
          event.preventDefault();
          console.log("llegue")
          sendAction(game.id, mortHouseId)
        };
        if (player.seccionActual == "MAmortgagehouse"){
            return [
            <h2>Submenú hipotecar casa</h2>, <p>Para salir del menú escribe "volver"</p>,
            <form onSubmit={handleSubmit}>
                <label>
                <input
                    placeholder='Ingresa el id de la casilla' 
                    type="text" 
                    value={mortHouseId}
                    onChange={(e) => setMortHouseId(e.target.value)}
                    required
                />
                </label>
                <input type="submit" />
            </form>]
            } else {return}
      }


    return(
        <div className="menu-player" >
            <h2>Opciones de juego</h2>
            {lanzar_dado()}
            {comprar_propiedad()}
            {hipotecar_propiedad()}
            {deshipotecar_propiedad()}
            {construir_casa()}
            {hipotecar_casa()}
            {terminar_turno()}
            <div className='submenu'>
                {mortMenu()}
                {unMortMenu()}
                {buildMenu()}
                {mortHouseMenu()}
            </div>
            {mensaje_turno()}
        </div>
        )

}
