import React from 'react';
import "./RuleContainer.css"

function RuleContainer(props) {

    const { paso, index } = props;
    return (
        <div id={`paso${index + 1}`} className='paso-item'>
            <div className="title">
                <br/><strong>Paso {index + 1}. {paso.titulo} <br/></strong>
            </div>
            <div className="description">
                {paso.descripcion}
            </div>
            {paso.url !== '' &&
            <div className="contenedor-imagen">
                <img src={paso.url} alt="imagen-descriptiva" />
            </div>
            }
        </div>
    );
}

export default RuleContainer;