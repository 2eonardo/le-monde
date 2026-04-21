import React from 'react';
import './SideArticle.css';

export default function SideArticle() {
    return (
        <div className="side-article">
            {/* 1. NOTIZIA SIDEBAR */}
            <div className="side-news-item">
                <h3 className="side-news-title">
                    <span className="m-logo">M</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                </h3>
                <img src="https://placehold.co/300x200/444/fff?text=Side+News+Photo" alt="News" className="side-main-img" />
            </div>

            {/* 2. BOX EVENTO (BLU) */}
            <div className="event-box">
                <span className="event-label">Événement</span>
                <h4 className="event-title">LOREM IPSUM DOLOR SIT AMET</h4>
                <p className="event-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rendez-vous le 22 juin per la seconda edizione di Lorem Ipsum.
                </p>
                <a href="#" className="event-link">Découvrir <span className="arrow">→</span></a>
            </div>

            {/* 3. PUBBLICITÀ VERTICALE */}
            <div className="side-ad-container">
                <p className="ad-notice">LA SUITE APRÈS CETTE PUBLICITÉ</p>
                <div className="vertical-ad">
                    {/* Placeholder color magenta per richiamare la foto */}
                    <img src="https://placehold.co/300x600/e30613/fff?text=Publicité+Enel" alt="Ad" />
                </div>
            </div>
        </div>
    );
}