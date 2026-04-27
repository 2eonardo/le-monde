import React from 'react';
import './MainLayout.css';
import MainNews from './MainNews.jsx';
import SideNews from './SideNews.jsx';
import MostRead from './MostRead.jsx';

export default function MainLayout() {
    return (
        <main className="main-body">
            {/* Pubblicità */}
            <div className="advertising">
                <img src='https://placehold.co/800x200/888/ffffff?text=1000x200' alt="Pub"/>
            </div>

            <div className="main-section">
                {/* --- COLONNA SINISTRA (MAIN ARTICLE) --- */}
                <MainNews />

                {/* --- COLONNA DESTRA (SIDE ARTICLE) --- */}
                <SideNews />
            </div>

            {/* --- PARTE INFERIORE ALLE 2 COLONNE --- */}
            <MostRead />
        </main>
    );
}