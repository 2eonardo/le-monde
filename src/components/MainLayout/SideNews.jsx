import React from 'react';
import './SideNews.css';

export default function SideNews() {
    return (
        <aside className="side-article">
            {/* 1. NOTIZIA SIDEBAR */}
            <article className="side-news-item">
                <a href="/Side-Article" >
                    <h3 className="side-news-title">
                        <img className="m-logo" alt="Logo Le Monde"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                    </h3>
                    <img src="https://placehold.co/300x200/888/fff?text=Side+News+Photo" alt="News" className="side-main-img" />
                </a>
            </article>
            <article className="event-box">
                {/* 2. BOX EVENTO (BLU) */}
                <a href="/Lorem Ipsum" >
                    <span className="event-label">Événement</span>
                    <h4 className="event-title">Lorem ipsum dolor sit amet</h4>
                    <p className="event-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rendez-vous le 22 juin per la seconda edizione di Lorem Ipsum.
                    </p>
                    <p className="event-link">Découvrir <span className="arrow">→</span></p>
                </a>
            </article>

            {/* 3. PUBBLICITÀ VERTICALE */}
            <div className="side-ad-container">
                <a href="/publicitè" >
                    <p className="ad-notice">La suite après cette publicité</p>
                    <div className="vertical-ad">
                        {/* Placeholder color magenta per richiamare la foto */}
                        <img src="https://placehold.co/300x600/e30613/fff?text=Publicité" alt="Ad" />
                    </div>
                </a>
            </div>
        </aside>
    );
}