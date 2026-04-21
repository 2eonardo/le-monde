import React from 'react';
import './MainBody.css';
import MainArticle from './MainArticle';
import SideArticle from './SideArticle';
import AboveArticle from './AboveArticle';

export default function MainBody() {
    return (
        <main className="main-body">
            {/* Pubblicità */}
            <div className="advertising">
                <img src='https://placehold.co/800x200/444444/ffffff?text=800x200' alt="Pub"/>
            </div>

            <div className="main-section">
                {/* --- COLONNA SINISTRA (MAIN ARTICLE) --- */}
                <MainArticle />

                {/* --- COLONNA DESTRA (SIDE ARTICLE) --- */}
                <SideArticle />
            </div>

            {/* --- PARTE INFERIORE ALLE 2 COLONNE --- */}
            <AboveArticle />
        </main>
    );
}