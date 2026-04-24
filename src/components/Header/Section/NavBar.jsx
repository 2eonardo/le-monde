import React from "react";
import {MenuButton, NavList} from "../UI/HeaderElements.jsx";
import './NavBar.css';


export function NavBar (){
    return(
        <nav className="nav-bar" aria-label="Main navigation">
            <MenuButton iconUrl={'https://placehold.co/40x40/666666/ffffff?text=M'}/>
            <a href="/search" className="nav-button" aria-label="Search">
                <img src="https://placehold.co/40x40/666666/ffffff?text=S" alt="" aria-hidden="true" />
            </a>
            {/* Sezione a comparsa max-width 1024px:*/}
            <div className="tablet-button">
                <button>
                    <img src="https://placehold.co/40x40/666666/ffffff?text=V" alt="" aria-hidden="true" />
                    <span>Videò</span>
                </button>
                <button>
                    <img src="https://placehold.co/40x40/666666/ffffff?text=E" alt="" aria-hidden="true" />
                    <span>En continu</span>
                </button>
            </div>
            <div className="menu-divider" aria-hidden="true"></div>
            <NavList />
        </nav>);

}