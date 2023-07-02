import './Juego.css'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { AuthContext } from "../auth/AuthContext";
/*imgs*/
import dedal from '../assets/imgs/dedal.png'
import auto from '../assets/imgs/auto.png'
import sombrero from '../assets/imgs/sombrero.png'
import barco from '../assets/imgs/barco.png'
import API_URL from '../config';

export default function Juego() {
    const [games, setGames] = useState([]);
    const [player, setPlayer] = useState([]);
    const [joinGames, setJoinGames] = useState([]);
    const [joinNick, setJoinNick] = useState([]);
    const [status, setStatus] = useState();
    const [estoyListo, setEstoyListo] = useState(true);



    const {token} = useContext(AuthContext);


    useEffect(() => {
        axios.get(`${API_URL}/users/games`, {'headers' : { 
            'authorization' : `Bearer ${token}`
    
        }}).then((response) => {
              console.log("enviaste un token bueno y te logueaste")
              console.log("recibiste",response.data)
              setGames(response.data)
    
          }).catch((error) => {
              console.log("no estás logueado", error);
          })
      }, [status])

    useEffect(() => {
        axios.get(`${API_URL}/games/unfinished`, {'headers' : { 
            'authorization' : `Bearer ${token}`
    
        }}).then((response) => {
              console.log("enviaste un token bueno y te logueaste")
              console.log("recibistee",response.data)
              setJoinGames(response.data)
    
          }).catch((error) => {
              console.log("no estás logueado", error);
          })
      }, [status])

    function sendAction(idgame, name) {
        console.log("aappppp",name, idgame)
        if (name.length > 0) {
        axios.post(`${API_URL}/games/join`,
        {
            idGame: idgame,
            nombrePlayer: name
    
        }, {'headers' : {
            'authorization' : `Bearer ${token}`
    
        }}).then((response) => {
            console.log("enviaste un token bueno y te logueaste");
            console.log("enviaste", name);
            console.log("este es",response.data);
            setStatus(response.data.error)
            if (typeof response.data.error !== 'undefined') {
                setStatus(response.data.error)
            } else {setStatus(response.data.game.status)}
            
    
          }).catch((error) => {
              console.log("no estás logueado", error);
          })
        } else {alert("error: ingresa un apodo")}
      }

      function sendVote(idgame, vote) {
        console.log("vote", idgame, vote)
        axios.post(`${API_URL}/games/vote`,
        {
            idGame: idgame,
            voteStart: vote
    
        }, {'headers' : {
            'authorization' : `Bearer ${token}`
    
        }}).then((response) => {
            console.log("enviaste un token bueno y votaste correctamente");
            setStatus("Tu voto fue aceptado, solo falta esperar a los otros jugadores")       
    
          }).catch((error) => {
              console.log("no estás logueado", error);
          })
      }

      function startGame(idgame) {
        axios.post(`${API_URL}/games/start`,
        {
            idGame: idgame
    
        }, {'headers' : {
            'authorization' : `Bearer ${token}`
    
        }}).then((response) => {
            console.log("enviaste un token bueno");
            if (typeof response.data.error == "undefined"){
                setStatus(response.data.game.status)

            } else {
                setStatus(response.data.error)
            }

            console.log("yey", response)      
    
          }).catch((error) => {
              console.log("no estás logueado", error);
          })
      }

      function createGame() {
        console.log("entre")
        axios.post(`${API_URL}/games/create`,
        {},
        {'headers' : {
            'authorization' : `Bearer ${token}`
    
        }}).then((response) => {
            setStatus("Sala de partida creada exitosamente podrás verla en la sección 'unirse a una partida'")
            console.log("yey", response)      
    
          }).catch((error) => {
              console.log("no eres admin", error);
              setStatus("Partida nueva no creada, no eres admin")
          })
      }


    function displayGames(game) {

        let local_id = game.id
        function findFicha(turno) {
            if (turno == 0){
                return (<img className="ficha" src={dedal} alt="Dedal" />)
            } else if (turno == 1) {
                return (<img className="ficha" src={auto} alt="Auto" />)
            } else if (turno == 2) {
                return (<img className="ficha" src={barco} alt="Barco" />)
            } else if (turno == 3) {
                return (<img className="ficha" src={sombrero} alt="Sombrero" />)
            }
        }

        let players = game.players

        function getPlayers(player) {
            let playerNum = 1
            return [" - ",player.nombre]
        }

        return (

            <div className='room' >
                <div className='text'>
                    <p>
                        <strong>ID:</strong> {game.id} <br/>
                        <strong>Creada por:</strong> {game.creadoPor} <br/>
                        <strong>Jugadores: </strong>{players.map(getPlayers)}
                    </p>
                </div>
                <div className='button-join'>
                    <a href="/juego/board" className="nav-link">
                        <button onClick={()=>{localStorage.setItem("GameId",game.id)}}>Reanudar partida</button>
                    </a>
                </div>
            </div>
        )
    }

    function displayJoinGames(game) {
        let players = game.players

        function getPlayers(player) {
            function estoyListo(votoCom) {
                if (votoCom) {return "listo"}
                else {return "no listo"}
            }
            return [<strong>{player.nombre}</strong>,": ",estoyListo(player['votoComienzo']), <br/>]
        }


        if (!game.gameComenzado){
        return (

            <div className='room' >
                <div className='text'>
                    <p>
                        <strong>ID:</strong> {game.id} <br/>
                        <strong>Creada por:</strong> {game.creadoPor} <br/>
                        <strong>Jugadores: <br/> </strong>{players.map(getPlayers)}
                    </p>
                    <button onClick={()=>{sendAction(game.id, joinNick)}}>Unirse</button>
                    <button onClick={()=>{sendVote(game.id, estoyListo)}}>Estoy listo</button>
                    <button onClick={()=>{startGame(game.id)}}>Start</button>
                </div>
            </div>
        )
    }}

    function loggedIn() {
        if (token == null) {
            return(<h2>Debes estar logueado para ver las partidas</h2>)
        }
    }

  

    
    return(
        <>
        <div className='container'>
            <div className='header-j'>
                <h1>Menú de partidas</h1>
                {loggedIn()}
                <h2>-- {status} --</h2>
            </div>

            <div className='sb-container'>
                <div className='my-rooms'>
                    <h2>Mis partidas</h2>
                    <div className='rooms'>
                        {games.map(displayGames)}
                    </div>
                </div>

                <div className='my-rooms'>
                    <h2>Unirse a una partida</h2>
                    <input
                        type='text'
                        placeholder='Escribe tu Apodo'
                        value={joinNick}
                        onChange={(e) => setJoinNick(e.target.value)}
                        maxLength="12"
                        required
                        />
                    {joinGames.map(displayJoinGames)}
                </div>


                <div className='create-room'>
                    <div className='create-header'>
                        <h2>Crear una nueva partida</h2>
                        <h3>Debes tener permisos de admin para hacerlo</h3>
                    </div>
                    <button onClick={()=>{createGame()}}>Crear partida</button>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
        </div>
        </>
    )
}