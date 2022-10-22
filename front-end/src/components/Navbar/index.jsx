import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

function ButtonBar(){
    const menu = document.querySelector('#menu-bar');
    const navbar = document.querySelector('.navbar1');
    
    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
    
    menu.addEventListener('click', () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });
    
}

function Navbar() {
    

    return (
        <header>
            <div onClick={ButtonBar} id="menu-bar" className="fas fa-bars"></div>

            <Link to={"/"}><a className="logo"><i className="fas fa-paper-plane">TravelAirlines</i></a></Link>

            <nav className="navbar1">
                <a><Link to={"/"}>Home</Link></a>
                <a><Link to={"/destino"}>Destino</Link></a>
                <a><Link to={"promocao"}>Promoções</Link></a>
                <a><Link to={"/contato"}>Contato</Link></a>
            </nav>
            <div className="icons">
                <i className="fas fa-search" id="search"></i>
                <Link to={"/signup"}><i className="fas fa-user"></i></Link>
            </div>

        </header>
    )
}

export default Navbar;