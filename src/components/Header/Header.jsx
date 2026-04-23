import React, { useState, useEffect, useRef } from 'react';import './UpperHeader.css';
import './NavBar.css';
import './ResponsiveHeader.css';
import Menu from './Menu';
import Services from './Services';
import './StickyBar.css';

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



const AccountButtons = () =>(
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


export function StickyBar({ isVisible }) {
    if (!isVisible) return null;

    return (
        <div className="sticky-bar-container">
            <div className="regular-display">
                <div className="center-bar">
                    <img src="https://placehold.co/40x40/666666/ffffff?text=m" alt="" aria-hidden="true" />
                    <MenuButton iconUrl={"https://placehold.co/40x40/666666/ffffff?text=MS"}/>
                    <NavList />
                </div>
                <AccountButtons />
            </div>
            <div className ="tablet-display">
                <div className="upper-header">
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
                </div>
            </div>

        </div>
    );
}

export default function Header() {
    const [isStickyVisible, setIsStickyVisible] = useState(false);
    const sentinelRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // Appare quando la sentinella (in fondo all'header) esce dal viewport
            setIsStickyVisible(!entry.isIntersecting);
        }, { threshold: [0] });

        if (sentinelRef.current) observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>

            {/* 2. Lo Sticky Bar (che appare solo quando la sentinella sopra è uscita dallo schermo) */}
            <StickyBar isVisible={isStickyVisible} />

            <header className="main-header" role="banner">
                <div className="upper-header">
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
                </div>
                {/* Barra di navigazione principale */}
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
                </nav>
                <Services />
                <Menu />

                <div
                    ref={sentinelRef}
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        height: '1px',
                        width: '100%',
                        visibility: 'hidden'
                    }}
                />
            </header>
        </>
    );
}