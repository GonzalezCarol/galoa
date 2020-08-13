import React from 'react';

import create from '../../assets/icons/create-icon.svg';
import './styles.css';

function ButtonCreate() {
    return(
        <button type="button" className="button-create">
            <div>
                <img src={create} alt="Botão Criar"/>
                <span className="create"> criar tópico </span>
            </div>
        </button>
    )
}

export default ButtonCreate;