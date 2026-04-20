import React from 'react';
import './Footer.css';
import './FooterResponsive.css';

export default function Footer() {
    const icon = "https://placehold.co/16x16/777/white?text=i";

    return (
        <footer className="main-footer" aria-label="Sitemap">
            <div className="footer-container">
                <div className="footer-grid">

                    {/* -- Services & Guides -- */}
                    <section className="footer-column">
                        <input type="checkbox" id="check-services" className="footer-toggle" aria-hidden="true" tabIndex="-1"/>
                        <h2 className="footer-title">
                            <label htmlFor="check-services" className="footer-label-trigger" role="button" tabIndex="0">LOREM IPSUM SERVICES</label>
                        </h2>
                        <ul className="footer-list">
                            <li><a href="/lorem-ipsum-dolor">Lorem ipsum dolor</a></li>
                            <li><a href="/sit-amet-consectetur">Sit amet consectetur</a></li>
                            <li><a href="/adipiscing-elit-sed">Adipiscing elit sed</a></li>
                            <li><a href="/eiusmod-tempor">Eiusmod tempor</a></li>
                            <li><a href="/incididunt-ut-labore">Incididunt ut labore</a></li>
                            <li><a href="/dolore-magna-aliqua">Dolore magna aliqua</a></li>
                        </ul>

                        <input type="checkbox" id="check-guides" className="footer-toggle" aria-hidden="true" tabIndex="-1"/>
                        <h2 className="footer-title second-title">
                            <label htmlFor="check-guides" className="footer-label-trigger" role="button" tabIndex="0">LOREM GUIDES</label>
                        </h2>
                        <ul className="footer-list">
                            <li><a href="/minim-veniam-quis">Minim veniam quis</a></li>
                            <li><a href="/nostrud-exercitation">Nostrud exercitation</a></li>
                            <li><a href="/ullamco-laboris-nisi">Ullamco laboris nisi</a></li>
                            <li><a href="/ut-aliquip-ex-ea">Ut aliquip ex ea</a></li>
                            <li><a href="/commodo-consequat">Commodo consequat</a></li>
                        </ul>
                    </section>

                    <section className="footer-column">
                        <input type="checkbox" id="check-internetional" className="footer-toggle" aria-hidden="true" tabIndex="-1"/>
                        <h2 className="footer-title">
                            <label htmlFor="check-internetional" className="footer-label-trigger" role="button" tabIndex="0">LOREM INTERNATIONAL</label>
                        </h2>
                        <ul className="footer-list">
                            <li><a href="/duis-aute-irure">Duis aute irure</a></li>
                            <li><a href="/dolor-in-reprehenderit">Dolor in reprehenderit</a></li>
                            <li><a href="/voluptate-velit-esse">Voluptate velit esse</a></li>
                            <li><a href="/cillum-dolore-eu">Cillum dolore eu</a></li>
                            <li><a href="/fugiat-nulla-pariatur">Fugiat nulla pariatur</a></li>
                            <li><a href="/excepteur-sint">Excepteur sint</a></li>
                            <li><a href="/occaecat-cupidatat">Occaecat cupidatat</a></li>
                        </ul>
                        <input type="checkbox" id="check-partners" className="footer-toggle" aria-hidden="true" tabIndex="-1"/>
                        <h2 className="footer-title second-title">
                            <label htmlFor="check-partners" className="footer-label-trigger" role="button" tabIndex="0">LOREM PARTNERS</label>
                        </h2>
                        <ul className="footer-list">
                            <li><a href="/non-proident-sunt">Non proident sunt</a></li>
                            <li><a href="/culpa-qui-officia">Culpa qui officia</a></li>
                            <li><a href="/deserunt-mollit">Deserunt mollit</a></li>
                        </ul>
                    </section>

                    {/* -- Group Sites -- */}
                    <section className="footer-column">
                        <input type="checkbox" id="check-sites" className="footer-toggle" aria-hidden="true" tabIndex="-1"/>
                        <h2 className="footer-title">
                            <label htmlFor="check-sites" className="footer-label-trigger" role="button" tabIndex="0">LOREM GROUP SITES</label>
                        </h2>
                        <ul className="footer-list">
                            <li><a href="/anim-id-est-laborum">Anim id est laborum</a></li>
                            <li><a href="/sed-ut-perspiciatis">Sed ut perspiciatis</a></li>
                            <li><a href="/unde-omnis-iste">Unde omnis iste</a></li>
                            <li><a href="/natus-error-sit">Natus error sit</a></li>
                            <li><a href="/voluptatem-accusantium">Voluptatem accusantium</a></li>
                            <li><a href="/doloremque-laudantium">Doloremque laudantium</a></li>
                            <li><a href="/totam-rem-aperiam">Totam rem aperiam</a></li>
                            <li><a href="/eaque-ipsa-quae">Eaque ipsa quae</a></li>
                        </ul>
                    </section>

                    <section className="footer-column-special">
                        <div className="footer-special">
                            <div>
                                <h2 className="footer-title">LOREM NEWSLETTER</h2>
                                <a href="/lorem-ipsum-newsletter" className="flex-link">
                                    <img src={icon} alt="" />
                                    Lorem ipsum newsletter
                                </a>
                            </div>

                            <hr className="footer-sep" aria-hidden="true" />

                            <div>
                                <h2 className="footer-title">LOREM MOBILE APPS</h2>
                                <div className="flex-link">
                                    <img src={icon} alt="" />
                                    <a href="/lorem-ios">Lorem iOS</a>
                                    <div className="divider" aria-hidden="true"></div>
                                    <a href="/lorem-android">Lorem Android</a>
                                </div>
                            </div>
                        </div>

                        <hr className="footer-sep" aria-hidden="true" />

                        <h2 className="footer-title">LOREM SUBSCRIPTION</h2>
                        <ul className="footer-list-icons">
                            <li><a href="/lorem-archives" className="flex-link"><img src={icon} alt="" />Lorem Archives</a></li>
                            <li><a href="/lorem-subscribe" className="flex-link"><img src={icon} alt="" />Lorem Subscribe</a></li>
                            <li><a href="/lorem-connect" className="flex-link"><img src={icon} alt="" />Lorem Connect</a></li>
                            <li><a href="/lorem-journal" className="flex-link"><img src={icon} alt="" />Lorem Journal</a></li>
                            <li><a href="/lorem-events">Lorem Events</a></li>
                            <li><a href="/lorem-contact">Lorem Contact</a></li>
                        </ul>
                    </section>
                </div>

                <hr className="footer-sep" aria-hidden="true" />

                <nav className="centered-section" aria-label="Legal info">
                    <span className="footer-title">LOREM LEGAL INFO</span>
                    <ul className="legal-links">
                        <li><a href="/lorem-legal">Lorem Legal</a></li>
                        <li><a href="/privacy-lorem">Privacy Lorem</a></li>
                        <li><a href="/cookie-lorem">Cookie Lorem</a></li>
                        <li><a href="/terms-lorem">Terms Lorem</a></li>
                        <li><a href="/help-faq">Help FAQ</a></li>
                    </ul>
                </nav>

                <hr className="footer-sep" aria-hidden="true" />

                <section className="centered-section" aria-label="Social">
                    <span className="footer-title">FOLLOW LOREM</span>
                    <div className="social-links">
                        <a href="/facebook" className="flex-link"><img src={icon} alt="" />Facebook</a>
                        <a href="/youtube" className="flex-link"><img src={icon} alt="" />Youtube</a>
                        <a href="/instagram" className="flex-link"><img src={icon} alt="" />Instagram</a>
                        <a href="/tiktok" className="flex-link"><img src={icon} alt="" />TikTok</a>
                    </div>
                </section>
            </div>
        </footer>
    );
}