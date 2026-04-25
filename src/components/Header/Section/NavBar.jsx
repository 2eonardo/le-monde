import React from "react";
import {MenuButton, NavList, SearchButton, TabletButton} from "../UI/HeaderElements.jsx";
import './NavBar.css';


export function NavBar (){
    return(
        <nav className="nav-bar" aria-label="Main navigation">
            <MenuButton iconUrl={'https://placehold.co/40x40/666666/ffffff?text=M'}/>
            <SearchButton />
            {/* Sezione a comparsa max-width 1024px:*/}
            <TabletButton />
            <div className="menu-divider" aria-hidden="true"></div>
            <NavList />
        </nav>);

}