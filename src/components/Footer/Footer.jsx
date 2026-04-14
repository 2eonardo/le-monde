import React from 'react';
import './Footer.css';

export default function Footer() {
    const iconPlaceholder = "https://placehold.co/16x16/777/white?text=i";

    return (
        <footer className="main-footer" aria-label="Sitemap">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* COLONNA 1 */}
                    <section className="footer-column">
                        <h2 className="footer-title">LOREM IPSUM SERVICES</h2>
                        <ul className="footer-list">
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Sit amet consectetur</a></li>
                            <li><a href="#">Adipiscing elit sed</a></li>
                            <li><a href="#">Eiusmod tempor</a></li>
                            <li><a href="#">Incididunt ut labore</a></li>
                            <li><a href="#">Dolore magna aliqua</a></li>
                        </ul>
                        <h2 className="footer-title second-title">LOREM GUIDES</h2>
                        <ul className="footer-list">
                            <li><a href="#">Minim veniam quis</a></li>
                            <li><a href="#">Nostrud exercitation</a></li>
                            <li><a href="#">Ullamco laboris nisi</a></li>
                            <li><a href="#">Ut aliquip ex ea</a></li>
                            <li><a href="#">Commodo consequat</a></li>
                        </ul>
                    </section>

                    {/* COLONNA 2 */}
                    <section className="footer-column">
                        <h2 className="footer-title">LOREM INTERNATIONAL</h2>
                        <ul className="footer-list">
                            <li><a href="#">Duis aute irure</a></li>
                            <li><a href="#">Dolor in reprehenderit</a></li>
                            <li><a href="#">Voluptate velit esse</a></li>
                            <li><a href="#">Cillum dolore eu</a></li>
                            <li><a href="#">Fugiat nulla pariatur</a></li>
                            <li><a href="#">Excepteur sint</a></li>
                            <li><a href="#">Occaecat cupidatat</a></li>
                        </ul>
                        <h2 className="footer-title second-title">LOREM PARTNERS</h2>
                        <ul className="footer-list">
                            <li><a href="#">Non proident sunt</a></li>
                            <li><a href="#">Culpa qui officia</a></li>
                            <li><a href="#">Deserunt mollit</a></li>
                        </ul>
                    </section>

                    {/* COLONNA 3 */}
                    <section className="footer-column">
                        <h2 className="footer-title">LOREM GROUP SITES</h2>
                        <ul className="footer-list">
                            <li><a href="#">Anim id est laborum</a></li>
                            <li><a href="#">Sed ut perspiciatis</a></li>
                            <li><a href="#">Unde omnis iste</a></li>
                            <li><a href="#">Natus error sit</a></li>
                            <li><a href="#">Voluptatem accusantium</a></li>
                            <li><a href="#">Doloremque laudantium</a></li>
                            <li><a href="#">Totam rem aperiam</a></li>
                            <li><a href="#">Eaque ipsa quae</a></li>
                        </ul>
                    </section>

                    {/* COLONNA 4 */}
                    <section className="footer-column-special">
                        <div className="sub-section">
                            <h2 className="footer-title">LOREM NEWSLETTER</h2>
                            <div className="app-links">
                                <a href="#"><img src={iconPlaceholder} alt="" />Lorem ipsum newsletter</a>
                            </div>
                        </div>
                        <hr className="footer-sep" />
                        <div className="sub-section">
                            <h2 className="footer-title">LOREM MOBILE APPS</h2>
                            <div className="app-links">
                                <img src={iconPlaceholder} alt="" />
                                <a href="#">Lorem iOS</a>
                                <div className="divider"></div>
                                <a href="#">Lorem Android</a>
                            </div>
                        </div>
                        <hr className="footer-sep" />
                        <div className="sub-section">
                            <h2 className="footer-title">LOREM SUBSCRIPTION</h2>
                            <ul className="footer-list-icons">
                                <li> <a href="#"><img src={iconPlaceholder} alt="" />Lorem Archives</a></li>
                                <li> <a href="#"><img src={iconPlaceholder} alt="" />Lorem Subscribe</a></li>
                                <li> <a href="#"><img src={iconPlaceholder} alt="" />Lorem Connect</a></li>
                                <li> <a href="#"><img src={iconPlaceholder} alt="" />Lorem Journal</a></li>
                                <li><a href="#">Lorem Events</a></li>
                                <li><a href="#">Lorem Contact</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

                <hr className="footer-sep" />
                <div className="title-centered">
                    <span className="footer-title ">LOREM LEGAL INFO</span>
                    <ul className="legal-links">
                        <li><a href="#">Lorem Legal</a></li>
                        <li><a href="#">Privacy Lorem</a></li>
                        <li><a href="#">Cookie Lorem</a></li>
                        <li><a href="#">Terms Lorem</a></li>
                        <li><a href="#">Help FAQ</a></li>
                    </ul>
                </div>

                <hr className="footer-sep" />
                <div className="title-centered">
                    <span className="footer-title">FOLLOW LOREM</span>
                    <div className="social-links">
                         <a href="#"><img src={iconPlaceholder} alt="" />Facebook</a>
                         <a href="#"><img src={iconPlaceholder} alt="" />Youtube</a>
                         <a href="#"><img src={iconPlaceholder} alt="" />Instagram</a>
                         <a href="#"><img src={iconPlaceholder} alt="" />TikTok</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}