import React from 'react';
import RuleContainer from './RuleContainer.jsx';
import "./ListaPasosReglas.css"
import { HashRouter, Route } from 'react-router-dom'
import { useHashFragment } from './useHashFragment.jsx';

function ListaPasos(props) {

  return (
    <ol className='order-list'>
      {props.pasos.map((paso, index) => {
        console.log("Generando lista: paso" + index);
        return <RuleContainer key={index} paso={paso} index={index}/>;
      })}
    </ol>
  );
}

export default ListaPasos;