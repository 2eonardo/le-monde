import React from 'react';
import './Services.css';
import {handleLabelKeyDown} from "../../utils/keyboardUtils.jsx";

const Services = () => {
    return (
        <>
            {/* Input per il toggle: collegato via label-text all'header per WAVE */}
            <input type="checkbox" id="services-toggle" className="services-checkbox" aria-labelledby="services-button-label" tabIndex="-1"/>

            {/* Nav semantica con ruoli per screen reader */}
            <nav className="services-overlay" role="dialog" aria-modal="true" aria-labelledby="services-button-label">
                <div className="services-container">

                    {/* Tasto Chiudi: rimosso aria-hidden e aggiunto role button per accessibilità */}
                    <div className="services-close-row">
                        <label htmlFor="services-toggle" className="services-close-label" role="button" tabIndex="0" onKeyDown={handleLabelKeyDown} >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span> Fermer</span>
                        </label>
                    </div>

                    <div className="services-main-grid">
                        {/* Gruppo 1 */}
                        <section className="services-section">
                            <h2 className="services-title">1- LOREM IPSUM DOLOR</h2>
                            <div className="services-subgrid">
                                <ul>
                                    <li><a href="/Lorem Ipsum">Lorem Ipsum</a></li>
                                    <li><a href="/Dolor Sit Amet">Dolor Sit Amet</a></li>
                                    <li><a href="/Consectetur">Consectetur</a></li>
                                    <li><a href="/Adipiscing Elit">Adipiscing Elit</a></li>
                                </ul>
                                <ul>
                                    <li><a href="/Sed Do Eiusmod">Sed Do Eiusmod</a></li>
                                    <li><a href="/Tempor Incidid">Tempor Incidid</a></li>
                                    <li><a href="/Ut Labore Et">Ut Labore Et</a></li>
                                    <li><a href="/Dolore Magna">Dolore Magna</a></li>
                                </ul>
                            </div>
                        </section>

                        {/* Gruppo 2 */}
                        <section className="services-section">
                            <h2 className="services-title">2- CONSECTETUR ADIPIS</h2>
                            <div className="services-subgrid">
                                <ul>
                                    <li><a href="/Minim Veniam">Minim Veniam</a></li>
                                    <li><a href="/Quis Nostrud">Quis Nostrud</a></li>
                                    <li><a href="/Exercitation">Exercitation</a></li>
                                    <li><a href="/Ullamco Laboris">Ullamco Laboris</a></li>
                                </ul>
                                <ul>
                                    <li><a href="/Nisi Ut Aliquip">Nisi Ut Aliquip</a></li>
                                    <li><a href="/Ex Ea Commodo">Ex Ea Commodo</a></li>
                                    <li><a href="/Duis Aute Irure">Duis Aute Irure</a></li>
                                    <li><a href="/Dolor In Repre">Dolor In Repre</a></li>
                                </ul>
                            </div>
                        </section>

                        {/* Gruppo 3 */}
                        <section className="services-section">
                            <h2 className="services-title">3- GUIDES ET MAGNA</h2>
                            <div className="services-subgrid">
                                <ul>
                                    <li><a href="/Voluptate Velit">Voluptate Velit</a></li>
                                    <li><a href="/Esse Cillum">Esse Cillum</a></li>
                                    <li><a href="/Eu Fugiat Nulla">Eu Fugiat Nulla</a></li>
                                    <li><a href="/xcepteur Sint<">Excepteur Sint</a></li>
                                </ul>
                                <ul>
                                    <li><a href="/Occaecat Cupid">Occaecat Cupid</a></li>
                                    <li><a href="/Non Proident">Non Proident</a></li>
                                    <li><a href="/Sunt In Culpa">Sunt In Culpa</a></li>
                                    <li><a href="/Qui Officia">Qui Officia</a></li>
                                </ul>
                            </div>
                        </section>

                        {/* Gruppo 4 */}
                        <section className="services-section">
                            <h2 className="services-title">4- SUPPLEMENTS LOREM</h2>
                            <div className="services-subgrid">
                                <ul>
                                    <li><a href="/Deserunt Mollit">Deserunt Mollit</a></li>
                                    <li><a href="/Anim Id Est">Anim Id Est</a></li>
                                    <li><a href="/Laborum Et Dol">Laborum Et Dol</a></li>
                                </ul>
                                <ul>
                                    <li><a href="/Harum Quidem">Harum Quidem</a></li>
                                    <li><a href="/Facilis Est Et">Facilis Est Et</a></li>
                                    <li><a href="/Expedita Dist">Expedita Dist</a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Services;