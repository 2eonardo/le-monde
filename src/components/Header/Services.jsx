import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <>
            {/* Input per il toggle: collegato via label-text all'header per WAVE */}
            <input type="checkbox" id="services-toggle" className="services-checkbox" aria-labelledby="services-button-label"/>

            {/* Nav semantica con ruoli per screen reader */}
            <nav className="services-overlay" role="dialog" aria-modal="true" aria-labelledby="services-button-label">
                <div className="services-container">

                    {/* Tasto Chiudi: rimosso aria-hidden e aggiunto role button per accessibilità */}
                    <div className="services-close-row">
                        <label htmlFor="services-toggle" className="services-close-label" role="button" tabIndex="0">
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
                                    <li><a href="#link">Lorem Ipsum</a></li>
                                    <li><a href="#link">Dolor Sit Amet</a></li>
                                    <li><a href="#link">Consectetur</a></li>
                                    <li><a href="#link">Adipiscing Elit</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#link">Sed Do Eiusmod</a></li>
                                    <li><a href="#link">Tempor Incidid</a></li>
                                    <li><a href="#link">Ut Labore Et</a></li>
                                    <li><a href="#link">Dolore Magna</a></li>
                                </ul>
                            </div>
                        </section>

                        {/* Gruppo 2 */}
                        <section className="services-section">
                            <h2 className="services-title">2- CONSECTETUR ADIPIS</h2>
                            <div className="services-subgrid">
                                <ul>
                                    <li><a href="#link">Minim Veniam</a></li>
                                    <li><a href="#link">Quis Nostrud</a></li>
                                    <li><a href="#link">Exercitation</a></li>
                                    <li><a href="#link">Ullamco Laboris</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#link">Nisi Ut Aliquip</a></li>
                                    <li><a href="#link">Ex Ea Commodo</a></li>
                                    <li><a href="#link">Duis Aute Irure</a></li>
                                    <li><a href="#link">Dolor In Repre</a></li>
                                </ul>
                            </div>
                        </section>

                        {/* Gruppo 3 */}
                        <section className="services-section">
                            <h2 className="services-title">3- GUIDES ET MAGNA</h2>
                            <div className="services-subgrid">
                                <ul>
                                    <li><a href="#link">Voluptate Velit</a></li>
                                    <li><a href="#link">Esse Cillum</a></li>
                                    <li><a href="#link">Eu Fugiat Nulla</a></li>
                                    <li><a href="#link">Excepteur Sint</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#link">Occaecat Cupid</a></li>
                                    <li><a href="#link">Non Proident</a></li>
                                    <li><a href="#link">Sunt In Culpa</a></li>
                                    <li><a href="#link">Qui Officia</a></li>
                                </ul>
                            </div>
                        </section>

                        {/* Gruppo 4 */}
                        <section className="services-section">
                            <h2 className="services-title">4- SUPPLEMENTS LOREM</h2>
                            <div className="services-subgrid">
                                <ul>
                                    <li><a href="#link">Deserunt Mollit</a></li>
                                    <li><a href="#link">Anim Id Est</a></li>
                                    <li><a href="#link">Laborum Et Dol</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#link">Harum Quidem</a></li>
                                    <li><a href="#link">Facilis Est Et</a></li>
                                    <li><a href="#link">Expedita Dist</a></li>
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