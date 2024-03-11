import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
        <nav>
            <h1 className='title-logo'>MySelf Blog</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/register">Cadastrar</Link>
                </li>
                <li>
                    <Link to="/algo">algo</Link>
                </li>
            </ul>
        </nav>
    </header>
    
  );
};

export default Navbar;