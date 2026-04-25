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

export const NewsPaperButton = () =>(
    <a href="/newspaper" className="left-header-button" aria-label=" Digital newspaper">
            <img src="https://placehold.co/40x40/666666/ffffff?text=J" alt="" aria-hidden="true" />
            <span>Le journal</span>
    </a>
);

export const ServicesButton = () =>(
    <label htmlFor="services-toggle" role="button" className="left-header-button" tabIndex="0">
            <img src="https://placehold.co/40x40/666666/ffffff?text=S" alt="" aria-hidden="true" />
            <span id="services-button-label">Services</span>
    </label>
)

export const MainLogo = () =>(
    <a href="/homepage" className ="main-logo" aria-label="Le Monde - Back to the homepage">
            <img src="https://placehold.co/600x120/666666/ffffff?text=Le+Monde" alt=""/>
    </a>
)

export const LanguagesSwitcher = () =>(
    <nav className="language-switcher" aria-label="Language selector">
            <a href="/fr" className="selected" aria-current="page" lang="fr">FR</a>
            <div className="divider-lang" aria-hidden="true"></div>
            <a href="/en" className="unselected" lang="en">EN</a>
    </nav>
)

export const SearchButton = ()=> (
    <a href="/search" className="nav-button" aria-label="Search">
            <img src="https://placehold.co/40x40/666666/ffffff?text=S" alt="" aria-hidden="true" />
    </a>
)

export const TabletButton = () =>(
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
)