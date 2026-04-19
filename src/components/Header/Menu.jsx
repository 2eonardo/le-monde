import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <nav aria-label="Menu laterale Le Monde">
            <input type="checkbox" id="menu-toggle" className="menu-checkbox" aria-labelledby="menu-button-label" tabIndex="-1" />
            <label htmlFor="menu-toggle" className="menu-overlay" role="button" aria-hidden="true"><span className="sr-only">Close Menu</span> </label>

            <div className="menu-drawer" role="dialog" aria-modal="true">
                {/* Header */}
                <div className="menu-header">
                    <label htmlFor="menu-toggle" className="close-btn" role="button" aria-hidden="true">
                        <span className="sr-only">Close menu</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </label>

                    <a href="/homepage" aria-label="Le Monde - Torna alla homepage">
                        <img src="https://placehold.co/120x30/666666/ffffff?text=Le+Monde" alt="Logo Le Monde" className="logo-ph" />
                    </a>

                    <div className="language-switcher-menu" aria-label="Selettore lingua">
                        <a href="/fr" className="selected-language-menu" aria-current="page" lang="fr">FR</a>
                        <div className="divider-language-menu" aria-hidden="true"></div>
                        <a href="/en" className="unselected-language-menu" lang="en">EN</a>
                    </div>
                </div>

                {/* Cerca */}
                <div className="search-container" role="search">
                    <input
                        type="text"
                        placeholder="Rechercher sur Le Monde"
                        className="search-input"
                        aria-label="Cerca nel sito"
                    />
                    <button className="search-button" aria-label="Invia ricerca">
                        <img src="https://placehold.co/40x40/666666/ffffff?text=S" alt="" aria-hidden="true" className="icon-search"/>
                    </button>
                </div>

                {/* Link veloci */}
                <ul className="quick-links">
                    <li><a href="/Les-lives-en-cours" className="quick-link"><img src="https://placehold.co/40x40/666666/ffffff?text=L" alt="" aria-hidden="true" className="icon-ph" /> Les lives en cours</a></li>
                    <li><a href="/L-actualite-en-continu" className="quick-link"><img src="https://placehold.co/40x40/666666/ffffff?text=A" alt="" aria-hidden="true" className="icon-ph" /> L'actualité en continu</a></li>
                    <li><a href="/Proche-Orient" className="quick-link"><img src="https://placehold.co/40x40/666666/ffffff?text=P" alt="" aria-hidden="true" className="icon-ph" /> Proche-Orient</a></li>
                    <li><a href="/Ukraine" className="quick-link"><img src="https://placehold.co/40x40/666666/ffffff?text=U" alt="" aria-hidden="true" className="icon-ph" /> Ukraine</a></li>

                    <li>
                        <input type="checkbox" id="voir-plus-toggle" className="voir-plus-checkbox" aria-hidden="true" tabIndex="-1" />
                        <div className="voir-plus-content">
                            <a href="/Detroit-d-Ormuz" className="quick-link"><img src="https://placehold.co/40x40/666666/ffffff?text=D" alt="" aria-hidden="true" className="icon-ph" /> Détroit d'Ormuz</a>
                            <a href="/Vie-de-l-edition" className="quick-link"><img src="https://placehold.co/40x40/666666/ffffff?text=V" alt="" aria-hidden="true" className="icon-ph" /> Vie de l'édition</a>
                            <a href="/Carburants" className="quick-link"><img src="https://placehold.co/40x40/666666/ffffff?text=C" alt="" aria-hidden="true" className="icon-ph" /> Carburants</a>
                            <a href="/IA" className="quick-link"><img src="https://placehold.co/40x40/666666/ffffff?text=I" alt="" aria-hidden="true" className="icon-ph" /> IA</a>
                            <a href="/Pape" className="quick-link"><img src="https://placehold.co/40x40/666666/ffffff?text=P" alt="" aria-hidden="true" className="icon-ph" /> Pape</a>
                            <a href="/En-direct" className="quick-link"><img src="https://placehold.co/40x40/666666/ffffff?text=E" alt="" aria-hidden="true" className="icon-ph" /> En direct</a>
                        </div>
                        <label htmlFor="voir-plus-toggle" className="voir-plus-label" role="button" aria-expanded="false">
                            <span className="text-plus">Voir plus <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <span className="text-moins">Voir moins <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M10 8L6 4L2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                        </label>
                    </li>
                </ul>

                {/* ACCORDION */}
                <div className="accordion">
                    <div className="accordion-item">
                        <input type="checkbox" id="acc-inter" className="accordion-checkbox" aria-hidden="true" tabIndex="-1" />
                        <label htmlFor="acc-inter" className="accordion-label" role="button" aria-expanded="false">
                            International
                            <svg className="accordion-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </label>
                        <div className="accordion-content">
                            <div className="accordion-content-inner">
                                <a href="/Europe">Europe</a>
                                <a href="/Ameriques">Amériques</a>
                                <a href="/Afrique">Afrique</a>
                                <a href="/Asie-Pacifique">Asie-Pacifique</a>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <input type="checkbox" id="acc-planete" className="accordion-checkbox" aria-hidden="true" tabIndex="-1" />
                        <label htmlFor="acc-planete" className="accordion-label" role="button" aria-expanded="false">
                            Planète
                            <svg className="accordion-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </label>
                        <div className="accordion-content">
                            <div className="accordion-content-inner">
                                <a href="/Planete-tous-les-articles">Planète : tous les articles</a>
                                <a href="/Climat">Climat</a>
                                <a href="/Catastrophes-naturelles">Catastrophes naturelles</a>
                                <a href="/Biodiversite">Biodiversité</a>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <input type="checkbox" id="acc-politique" className="accordion-checkbox" aria-hidden="true" tabIndex="-1" />
                        <label htmlFor="acc-politique" className="accordion-label" role="button" aria-expanded="false">
                            Politique
                            <svg className="accordion-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </label>
                        <div className="accordion-content">
                            <div className="accordion-content-inner">
                                <a href="/Gouvernement">L'exécutif</a>
                                <a href="/Parlement">Parlement</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title">Autres formats</div>
                <ul className="list-reset">
                    <li><a href="/Videos" className="grey-link">Vidéos</a></li>
                    <li><a href="/Podcasts" className="grey-link">Podcasts</a></li>
                    <li><a href="/Newsletters" className="grey-link">Newsletters</a></li>
                </ul>

                <div className="section-title">Les applications du Monde</div>
                <ul className="list-reset">
                    <li><a href="/Actualites-en-direct" className="section-link">Actualités en direct <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
                    <li><a href="/Le-journal" className="section-link">Le journal <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
                </ul>

                <div className="grey-area">
                    <div className="article-title">1- Services Le Monde</div>
                    <ul className="list-reset">
                        <li><a href="/Boutique" className="grey-link">Boutique Le Monde</a></li>
                        <li><a href="/Ateliers" className="grey-link">Les ateliers du Monde</a></li>
                    </ul>

                    <div className="article-title">2- Services partenaires</div>
                    <ul className="list-reset">
                        <li><a href="/Calculateur" className="grey-link">Calculateur d'empreinte</a></li>
                        <li><a href="/Mahjong" className="grey-link">Mahjong gratuit</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;