import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nosotros from '../navigate/Nosotros.jsx'
import Reglas from '../navigate/Reglas.jsx'
import Juego from '../navigate/Juego.jsx'
import Board from '../game/Board.jsx'
import Signup from './Signup.jsx'
import { HashRouter } from 'react-router-dom'

import App from './App'

function Routing() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/nosotros'} element={<Nosotros/>}/>
                <Route path={'/reglas'} element={<Reglas/>}/>
                <Route path={'/juego'} element={<Juego/>}/>
                <Route path={'/juego/board'} element={<Board/>}/>
                <Route path={'/signup'} element={<Signup/>}/>
                
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing