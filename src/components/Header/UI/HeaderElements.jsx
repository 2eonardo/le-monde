import React from "react";
import './HeaderElements.css'

export const NavList = () =>(
    <ul className="nav-link">
        <li><a href="/Proche-Orient" className="nav-highlight">Proche-Orient</a></li>
        <li><a href="/Hongrie" className="nav-highlight">Hongrie</a></li>
        <li className="list-divider" aria-hidden="true"></li>
        <li><a href="/International">International</a></li>
        <li><a href="/Planète">Planète</a></li>
        <li><a href="/Politique">Politique</a></li>
        <li><a href="/Société">Société</a></li>
        <li><a href="/Économie">Économie</a></li>
        <li><a href="/Idées">Idées</a></li>
        <li><a href="/Culture">Culture</a></li>
        <li><a href="/Le Goût du Monde">Le Goût du Monde</a></li>
        <li><a href="/Sciences">Sciences</a></li>
        <li><a href="/Sport">Sport</a></li>
        <li><a href="/Pixels">Pixels</a></li>
    </ul>
);

export const AccountButtons = () =>(
    <div className="div-account">
        <button type="button" className="btn-subscribe">S'abonner</button>
        <a href="/login" aria-label="Log in to your account">
            <img src="https://placehold.co/40x40/666666/ffffff?text=A" alt="" aria-hidden="true" />
        </a>
    </div>
);

export const MenuButton = ({iconUrl}) => (
    <label htmlFor="menu-toggle" className="nav-button"  role="button" tabIndex="0">
        <img src={iconUrl} alt="" aria-hidden="true" />
        <span id="menu-button-label">Menu</span>
    </label>
)