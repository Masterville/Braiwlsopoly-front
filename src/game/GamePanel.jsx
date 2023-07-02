import './GamePanel.css'


export default function GamePanel(game, player) {
    
    function getTurno() {
        let player_turno = ""
        const players = game["players"];
        players?.forEach(element => {
            if (element["numTurno"] == game["turno"]){
                player_turno = element.nombre;
                
            }
        });
        return player_turno
    }

    function miTurno() {
        if (player.numTurno == game.turno){
            return true
        } else {
            return false
        }

    }



    return(
        <div className="gpcontainer" >
            <div className='gameinfo'>
                <h2>Información de la partida</h2>
                <div className='idjuego'><p>Id de Juego: {game["id"]}</p></div>
                <div className='turno'><p>Turno de {getTurno()}</p></div>
                <div className='creado-por'><p>Creado por {game["creadoPor"]}</p></div>
            </div>
            <div className='playerinfo'>
                <h2>Información del jugador</h2>
                <div className='idjuego'><p>Nombre: {player.nombre}</p></div>
                <div className='turno'><p>Dinero: {player.dinero} </p></div>
                <div className='turno'><p>Mi turno: {miTurno().toString()} </p></div>
            </div>
        </div>

        )

}
