import React from 'react';

import './styles.css'
import { Link } from 'react-router-dom';
function SideMenu() {
    return (
        <>
        <div class="sidenav">    
        <div className="slaca">
                SLACA 2019
        </div>
        <img src="" alt=""/>
           <Link to="" className="menu-button">Apresentação</Link>
           <Link to="" className="menu-button">Comitês</Link>
           <Link to="" className="menu-button">Autores</Link>
           <Link to="" className="menu-button">Eixos temáticos</Link>
           <Link to="" className="menu-button">Trabalhos</Link>
           <Link to="" className="menu-button">Contato</Link>
        </div>
        </>
    )
}

export default SideMenu;