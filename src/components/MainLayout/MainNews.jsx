import React from 'react';
import './MainNews.css';

export default function MainNews() {
    return (
        <div className="main-article">
            {/* 1. TITOLO PRINCIPALE */}
            <h1 className="main-title">
                <span className="badge-live">LIVE</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
            </h1>

            {/* 2. SEZIONE CENTRALE (LIVE UPDATES + FOTO) */}
            <div className="article-middle">
                {/* Lista notizie live a sinistra */}
                <div className="live-updates">
                    <div className="update-item">
                        <span className="time">11:55</span>
                        <p>L'armée lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="update-item">
                        <span className="time">11:42</span>
                        <p>L'Espagne lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                {/* Grande foto a destra */}
                <div className="main-photo-container">
                    <img src="https://placehold.co/300x200/888/fff?text=Main+Photo" alt="News" />
                    <div className="photo-caption">
                        <span>Lorem ipsum dolor sit amet</span>
                    </div>
                </div>
            </div>

            {/* 3. SEZIONE IN BASSO (DUE COLONNE PICCOLE) */}
            <div className="article-bottom">
                <div className="bottom-card">
                    <img src="https://placehold.co/100x100/555/fff" alt="thumb" />
                    <p><strong>M</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bottom-card">
                    <img src="https://placehold.co/100x100/555/fff" alt="thumb" />
                    <p><strong>M</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className="news-feed">
                {/* Articolo Grande */}
                <div className="feed-item-large">
                    <div className="feed-content">
                        <h2 className="feed-title"><span className="m-logo">M</span> Lorem ipsum dolor sit amet</h2>
                        <p className="feed-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <img src="https://placehold.co/200x130/777/fff?text=Feed+Photo" alt="news" className="feed-img-large" />
                </div>

                {/* Articolo Piccolo */}
                <div className="feed-item-small">
                    <img src="https://placehold.co/100x65/555/fff" alt="thumb" />
                    <p className="feed-title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                </div>

                {/* Ripeti Articolo Grande */}
                <div className="feed-item-large">
                    <div className="feed-content">
                        <h2 className="feed-title"><span className="m-logo">M</span> Lorem ipsum dolor sit amet</h2>
                        <p className="feed-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <img src="https://placehold.co/200x130/777/fff?text=Feed+Photo" alt="news" className="feed-img-large" />
                </div>

                {/* Articolo Piccolo */}
                <div className="feed-item-small">
                    <img src="https://placehold.co/100x65/555/fff" alt="thumb" />
                    <p className="feed-title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                </div>
            </div>
            <div className="article-block-divider"></div>

            <div className="ukraine-section">
                {/* Titolo Live */}
                <h2 className="main-title">
                    <span className="badge-live">LIVE</span>
                    Le point sur la guerre en Ukraine : les dernières informations
                </h2>

                {/* Sezione Centrale: Live Updates + Foto */}
                <div className="article-middle">
                    <div className="live-updates">
                        <div className="update-item">
                            <span className="time">15:05</span>
                            <p>La guerre en Iran provoque des retards dans les livraisons d’armes américaines à l’Estonie, mais cela n’affectera pas l’aide militaire du pays à l’Ukraine</p>
                        </div>
                        <div className="update-item">
                            <span className="time">14:20</span>
                            <p>Bruxelles prévoit de verser les premières tranches du prêt européen de 90 milliards d’euros destiné à l’Ukraine « dès fin mai, ou début juin »</p>
                        </div>
                    </div>
                    <div className="main-photo-container">
                        <img src="https://placehold.co/400x260/555/fff?text=Guerre+en+Ukraine" alt="Ukraine" />
                    </div>
                </div>

                {/* Notizia piccola sotto il blocco live */}
                <div className="feed-item-small border-none">
                    <img src="https://placehold.co/100x65/333/fff" alt="thumb" />
                    <p className="feed-title-small">
                        <span className="m-logo">M</span> Escalade verbale entre l’Ukraine et la Biélorussie sur fond de militarisation de leur frontière
                    </p>
                </div>
            </div>
            <div className="article-block-divider"></div>

            <div className="news-feed-v2">
                {/* Articolo Grande 1 (Hongrie) */}
                <div className="feed-item-large">
                    <div className="feed-content">
                        <h2 className="feed-title">La Hongrie viole le droit européen avec sa loi stigmatisant et marginalisant les personnes LGBTQIA+, selon la Cour de justice de l’UE</h2>
                        <p className="feed-description">
                            La Commission européenne a salué un arrêt « historique » et demandé au nouveau gouvernement hongrois « d’appliquer cette décision ».
                        </p>
                    </div>
                    <div className="feed-image">
                        <img src="https://placehold.co/400x250/666/fff?text=LGBTQIA+News" alt="Hongrie" />
                    </div>
                </div>

                {/* Articolo Grande 2 (Boris Vallaud) */}
                <div className="feed-item-large">
                    <div className="feed-content">
                        <h2 className="feed-title">
                            <span className="m-logo">M</span> Avec son concept de « démarchandisation », Boris Vallaud tente de peser dans le débat d’idées avant la présidentielle de 2027
                        </h2>
                        <p className="feed-description">
                            Alors que le PS a choisi de structurer son ébauche de programme présidentiel autour de l'idée de « liberté », le chef des députés socialistes esquisse, dans un livre à paraître vendredi, un projet sociétal et politique pour la gauche.
                        </p>
                    </div>
                    <div className="feed-image">
                        <img src="https://placehold.co/400x250/777/fff?text=Boris+Vallaud" alt="Politique" />
                    </div>
                </div>

                {/* Articolo Piccolo (PS) */}
                <div className="feed-item-small">
                    <img src="https://placehold.co/100x100/444/fff" alt="thumb" className="feed-thumb-square" />
                    <p className="feed-title-small">
                        <span className="m-logo">M</span> Le PS publie une ébauche de projet pour 2027 qui provoque déjà des divisions internes
                    </p>
                </div>
            </div>
            <div className="article-block-divider"></div>

            <div className="opinion-grid">
                {/* RIGA 1 */}
                <div className="opinion-item border-right">
                    <span className="section-label">CHRONIQUE</span>
                    <h3 className="opinion-title underlined">
                        <span className="m-logo">M</span> « Les maîtres de l’IA saranno haïs pour leur fortune... »
                    </h3>
                    <div className="author-info">
                        <img src="https://placehold.co/40x40/333/fff" alt="author" className="author-img" />
                        <div>
                            <p className="author-name">Par Arnaud Leparmentier</p>
                            <p className="author-sub">San Francisco, correspondant</p>
                        </div>
                    </div>
                </div>
                <div className="opinion-item">
                    <span className="section-label">ÉDITORIAL</span>
                    <h3 className="opinion-title">Le délitement de la presse locale, enjeu démocratique</h3>
                </div>

                {/* RIGA 2 */}
                <div className="opinion-item border-right">
                    <span className="section-label">TRIBUNE</span>
                    <h3 className="opinion-title">
                        <span className="m-logo">M</span> « L’attention humaine n’est pas une ressource industrielle... »
                    </h3>
                    <p className="author-name" style={{marginTop: '10px'}}>Par Collectif</p>
                </div>
                <div className="news-item-mini">
                    <div className="mini-content">
                        <h3 className="mini-title"><span className="m-logo">M</span> Tim Cook passe la main à la tête d’Apple...</h3>
                    </div>
                    <img src="https://placehold.co/100x65/444/fff" alt="thumb" />
                </div>

                {/* RIGA 3 */}
                <div className="news-item-mini border-right">
                    <div className="mini-content">
                        <h3 className="mini-title"><span className="m-logo">M</span> 1er-Mai : le patronat pousse pour élargir la liste...</h3>
                    </div>
                    <img src="https://placehold.co/100x65/555/fff" alt="thumb" />
                </div>
                <div className="news-item-mini">
                    <div className="mini-content">
                        <h3 className="mini-title">En Haute-Loire, un homme de 65 ans tire à la carabine...</h3>
                    </div>
                    <img src="https://placehold.co/100x65/666/fff" alt="thumb" />
                </div>
            </div>
        </div>
    );
}

