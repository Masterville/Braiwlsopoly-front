import './Board.css'
import { useState, useEffect } from 'react'

import Squares from './Squares'

export default function Board() {



    return [
        

        <div className='gameboard'>
          {Squares()}
        </div>,
        <br/>,
        <br/>,
        <br/>,




    ]
}