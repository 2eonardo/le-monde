import React from 'react';
import './UpperHeader.css';
import './NavBar.css'

export default function Header() {
    return (
        <header className="main-header">
            <div className="upper-header">
                {/* SINISTRA: Journal e Services */}
                <div className="left-header">
                    <a href="/">
                        <img src="https://placehold.co/40x40/666666/ffffff?text=J" alt="Journal" />
                        <span>Le journal</span>
                    </a>
                    <button>
                        <img src="https://placehold.co/40x40/666666/ffffff?text=S" alt="Services" />
                        <span>Services</span>
                    </button>
                </div>

                {/* CENTRO: Logo */}
                <div className="center-header">
                    <a href="/">
                        <img
                            src="https://placehold.co/600x120/666666/ffffff?text=Le+Monde"
                            alt="Le Monde Logo"
                        />
                    </a>
                </div>

                {/* DESTRA: Lingua e Abbonamento */}
                <div className="right-header">
                    <div className="language-switcher">
                        <a href="/" className="selected">FR</a>
                        <div className="divider-lang"></div>
                        <a href="/" className="unselected">EN</a>
                    </div>

                    <div className="div-account">
                        <button>S'abonner</button>
                        <a href="/">
                            <img src="https://placehold.co/40x40/gray/white?text=A" alt="Account" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Barra di navigazione secondaria */}
            <nav className="nav-bar">
                <button className="nav-button">
                    <img src="https://placehold.co/40x40/gray/white?text=M" alt="Menu"/>
                    <span>Menu</span>
                </button>
                <a href="/" className="nav-button">
                    <img src="https://placehold.co/40x40/gray/white?text=S" alt="Search"/>
                </a>
                <div className="menu-divider"></div>
                <ul className="nav-link">
                    <li><a href="/" className="nav-highlight">Proche-Orient</a></li>
                    <li><a href="/" className="nav-highlight">Hongrie</a></li>
                    <li className="list-divider"></li>
                    <li><a href="/">International</a></li>
                    <li><a href="/">Planète</a></li>
                    <li><a href="/">Politique</a></li>
                    <li><a href="/">Société</a></li>
                    <li><a href="/">Économie</a></li>
                    <li><a href="/">Idées</a></li>
                    <li><a href="/">Culture</a></li>
                    <li><a href="/">Le Goût du Monde</a></li>
                    <li><a href="/">Sciences</a></li>
                    <li><a href="/">Sport</a></li>
                    <li><a href="/">Pixels</a></li>
                </ul>
            </nav>
        </header>
    );
}