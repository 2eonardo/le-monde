import React from 'react';
import './UpperHeader.css';
import './NavBar.css'
import './ResponsiveHeader.css'

const NavList = () =>(
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

const RightHeader = () => (
    <div className="right-header">
        <nav className="language-switcher" aria-label="Language selector">
            <a href="/fr" className="selected" aria-current="page" lang="fr">FR</a>
            <div className="divider-lang" aria-hidden="true"></div>
            <a href="/en" className="unselected" lang="en">EN</a>
        </nav>
        <div className="div-account">
            <button type="button" className="btn-subscribe">S'abonner</button>
            <a href="/login" aria-label="Log in to your account">
                <img src="https://placehold.co/40x40/666666/ffffff?text=A" alt="" aria-hidden="true" />
            </a>
        </div>
    </div>
);

const MenuButton = () => (
    <label htmlFor="menu-toggle" className="nav-button" aria-expanded="false" aria-label="Open menu">
        <img src="https://placehold.co/40x40/666666/ffffff?text=M" alt="" aria-hidden="true" />
        <span>Menu</span>
    </label>
)

export default function Header() {
    return (
        <header className="main-header" role="banner">
            <div className="upper-header">
                    {/* SINISTRA: Journal e Services */}
                    <div className="left-header">
                        <a href="/newspaper" aria-label=" Digital newspaper">
                            <img src="https://placehold.co/40x40/666666/ffffff?text=J" alt="" aria-hidden="true" />
                            <span>Le journal</span>
                        </a>
                        <button type="button" aria-label="Open services">
                            <img src="https://placehold.co/40x40/666666/ffffff?text=S" alt="" aria-hidden="true" />
                            <span>Services</span>
                        </button>

                    </div>
                <div className="menu-button">
                    <MenuButton />
                </div>
                    {/* CENTRO: Logo principale */}
                    <div className="center-header">
                        <a href="/homepage" aria-label="Le Monde - Back to the homepage">
                            <img src="https://placehold.co/600x120/666666/ffffff?text=Le+Monde" alt=""/>
                        </a>
                    </div>


                    {/* DESTRA: Lingua e Abbonamento */}
                    <RightHeader />

            </div>

            {/* Barra di navigazione principale */}
            <nav className="nav-bar" aria-label="Main navigation">
                    <MenuButton />

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

            </nav>
        </header>
    );
}