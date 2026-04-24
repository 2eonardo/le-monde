import React from "react";
import {AccountButtons, MenuButton} from "../UI/HeaderElements.jsx";
import './UpperHeader.css';

export function UpperHeader() {
    return(<div className="upper-header">
        {/* SINISTRA: Journal e Services */}
        <div className="left-header">
            <a href="/newspaper" aria-label=" Digital newspaper">
                <img src="https://placehold.co/40x40/666666/ffffff?text=J" alt="" aria-hidden="true" />
                <span>Le journal</span>
            </a>
            <label htmlFor="services-toggle" role="button" tabIndex="0">
                <img src="https://placehold.co/40x40/666666/ffffff?text=S" alt="" aria-hidden="true" />
                <span id="services-button-label">Services</span>
            </label>
        </div>
        {/* Sezione a comparsa max-width 1024px:*/}
        <div className="menu-button">
            <MenuButton iconUrl={"https://placehold.co/40x40/666666/ffffff?text=MS"}/>
        </div>
        {/* CENTRO: Logo principale */}
        <div className="center-header">
            <a href="/homepage" aria-label="Le Monde - Back to the homepage">
                <img src="https://placehold.co/600x120/666666/ffffff?text=Le+Monde" alt=""/>
            </a>
        </div>
        {/* DESTRA: Lingua e Abbonamento */}
        <div className="right-header">
            <nav className="language-switcher" aria-label="Language selector">
                <a href="/fr" className="selected" aria-current="page" lang="fr">FR</a>
                <div className="divider-lang" aria-hidden="true"></div>
                <a href="/en" className="unselected" lang="en">EN</a>
            </nav>
            <AccountButtons />
        </div>
    </div>);
}