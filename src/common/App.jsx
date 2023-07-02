import { useState } from 'react'
import './App.css'
import Login from './Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page'>
    <div className='bienvenida'>
      <div className='content'>
      <h1>Bienvenid@ al emocionante juego de las propiedades inmobiliarias</h1>
      <Login/>
      </div>

    </div>
    </div>
  )
}

export default App
