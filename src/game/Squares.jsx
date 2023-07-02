import './Squares.css';
import Square from './Square';
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";
import MainMenu from './menus/MainMenu';
import GamePanel from './GamePanel';
import logoim from '../assets/imgs/logomonopoly.png'

export default function Squares() {
  const [casillas, setCasillas] = useState([]);
  const [players, setPlayers] = useState([]);
  const [game, setGame] = useState([]);
  const [player, setPlayer] = useState([])

  const {token} = useContext(AuthContext);

  const idGame = localStorage.getItem("GameId")

  const idPlayer = 1;
  const action = 'nobuy';
  const datos = {
    idGame: idGame,
    idPlayer: idPlayer,
    action: action
  };


  function updateData(data) {
    console.log("khe",data);
    setCasillas(data['board']['squares']);
    setPlayers(data['players']);
    setGame(data);
  }


  function init_squares(objeto){ /*maybe args kwargs * */
    let owner = ""
    players.forEach(element => {
      if (objeto.idPlayer == element.id) {owner = element.nombre} else if (objeto.idPlayer == null) {owner = "Banco"} /*optimizar*/
    });
    return Square(objeto.posicionBoard, objeto.nombre, objeto.color, owner, objeto.precio, players, objeto.nivelEstructura, objeto.id, objeto.baseAlquiler, objeto.hipotecado)
  }



  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/${idGame}`, {'headers' : { 
        'authorization' : `Bearer ${token}`

    }}).then((response) => {
          console.log("enviaste un token bueno y te logueaste")
          console.log("recibiste",response.data)
          updateData(response.data)

      }).catch((error) => {
          console.log("no estás logueado", error);
      })
      getPlayer()
  }, [])


  function getPlayer(){
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/player/${idGame}`, {'headers' : {
        'authorization' : `Bearer ${token}`

    }}).then((response) => {
          console.log("enviaste un token bueno y te logueaste");
          console.log(response.data);
          setPlayer(response.data)

      }).catch((error) => {
          console.log("no estás logueado", error);
      })
    
  }






  return (
    <div className="tablero">
        {casillas.map(init_squares)}
        <div id='sqrpro'>
            {MainMenu(game, player)}
            <div className='center-container'>
                <h2>{game['status']}</h2> <br></br>
                <h2>{player['status']}</h2>
                <img className="logoim" src={logoim} alt="logo" />
            </div>
            <div className='game-stats'>{GamePanel(game, player)}</div>
        </div>
    </div>
  );
  
}