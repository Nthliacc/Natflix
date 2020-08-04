import React from 'react';
import Logo from '../../assets/imagens/natflix.png';
import './Menu.css';
import { Button } from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
               <img className="Logo" src={Logo} alt="Natflix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
};

export default Menu;