import React from 'react';
import './MainNews.css';

export default function MainNews() {
    return (
        <div className="main-article">
            {/* 1. TITOLO PRINCIPALE */}
            <article>
                <h1 className="main-title">
                    <span className="badge-live">LIVE</span>
                    <a href="/news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</a>
                </h1>

                {/* 2. SEZIONE CENTRALE (LIVE UPDATES + FOTO) */}
                <div className="article-middle">
                    {/* Lista notizie live a sinistra */}
                    <div className="live-updates">
                        <div className="update-item">
                            <span className="time">11:55</span>
                            <a href="/news-title">L'armée lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                        </div>
                        <div className="update-item">
                            <span className="time">11:42</span>
                            <a href="/news-title">L'Espagne lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                        </div>
                    </div>

                    {/* Grande foto a destra */}
                    <div className="main-photo-container">
                        <img src="https://placehold.co/300x200/888/fff?text=Main+Photo" alt="Main news photo" />
                        <div className="photo-caption">
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                </div>
            </article>

            <section>
                <h2 className="sr-only">Secondary News</h2>
                <div className="article-bottom">
                    <article className="bottom-card">
                        <a href="/bottom1" >
                            <img src="https://placehold.co/100x100/888/fff" alt="News 1" />
                            <p><img className="m-logo" alt="" aria-hidden="true"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod.</p>
                        </a>
                    </article>
                    <article className="bottom-card">
                        <a href="/bottom2" >
                            <img src="https://placehold.co/100x100/888/fff" alt="News 2" />
                            <p><img className="m-logo" alt="" aria-hidden="true"/> Nunc eget risus a sem fringilla accumsan. Quisque</p>
                        </a>
                    </article>
                </div>
                <div className="news-feed">
                    {/* Articolo Grande */}
                    <article className="feed-item-large">
                        <a href="/news-feed-large-1" >
                            <div className="feed-content">
                                <h3 className="feed-title"><img className="m-logo" alt="" aria-hidden="true"/> Nullam commodo ultricies purus sed.</h3>
                                <p className="feed-description">Quisque a tempus nisi. Duis et lectus mi. Sed imperdiet sodales felis nec egestas. Morbi.</p>
                            </div>
                            <img src="https://placehold.co/200x150/888/fff" alt="News 3" className="feed-img-large" />
                        </a>
                    </article>
                    {/* Articolo Piccolo */}
                    <article className="feed-item-small">
                        <a href="/news-feed-small-1" >
                            <img src="https://placehold.co/100x65/888/fff" alt="News 4" />
                            <p className="feed-title-small"><img className="m-logo" alt="" aria-hidden="true"/>Sed volutpat lobortis lectus sed sagittis. Integer maximus ligula in bibendum congue. Donec ornare consectetur quam, vel.</p>
                        </a>
                    </article>


                    {/* Ripeti Articolo Grande */}
                    <article className="feed-item-large">
                        <a href="/news-feed-large-2" >
                            <div className="feed-content">
                                <h3 className="feed-title"><img className="m-logo" alt="" aria-hidden="true"/> Praesent tristique diam non urna ornare, id imperdiet est.</h3>
                                <p className="feed-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <img src="https://placehold.co/200x150/888/fff" alt="News 5" className="feed-img-large" />
                        </a>
                    </article>

                    {/* Articolo Piccolo */}
                    <article className="feed-item-small">
                        <a href="/news-feed-small-2" >
                            <img src="https://placehold.co/100x65/888/fff" alt="News 6" />
                            <p className="feed-title-small"><img className="m-logo" alt="" aria-hidden="true"/>Quisque quis semper lacus, at convallis arcu. Aliquam erat volutpat. Suspendisse vestibulum.</p>
                        </a>
                    </article>
                </div>

                <div className="news-feed-v2">
                    <article  className="feed-item-large">
                        <a href="/news-feed-large-v2-1">
                            <div className="feed-content">
                                <h3 className="feed-title">Donec laoreet ante in urna pretium fringilla. Cras diam metus, tempor ac molestie a, tempus vel metus. Vestibulum.</h3>
                                <p className="feed-description">
                                    Sed faucibus, turpis sed luctus faucibus, mauris turpis viverra diam, vitae mattis augue erat vitae quam. Cras in quam augue. Curabitur suscipit nibh eget pulvinar.
                                </p>
                            </div>
                            <div className="feed-image">
                                <img src="https://placehold.co/500x400/888/fff" alt="News 7" />
                            </div>
                        </a>
                    </article>

                    <article className="feed-item-large">
                        <a href="/news-feed-large-v2-2" >
                            <div className="feed-content">
                                <h3 className="feed-title">
                                    Donec euismod commodo tincidunt. Donec elementum nulla pharetra, rhoncus orci vel, fermentum elit. Nulla quis.
                                </h3>
                                <p className="feed-description">
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque cursus porttitor est ut viverra. Nullam.
                                </p>
                            </div>
                            <div className="feed-image">
                                <img src="https://placehold.co/500x400/888/fff" alt="News 8" />
                            </div>
                        </a>
                    </article>

                    <article className="feed-item-small">
                        <a href="/news-feed-small-v2-1" >
                            <img src="https://placehold.co/100x65/888/fff" alt="News 9" />
                            <p className="feed-title-small">
                                <img className="m-logo" alt="" aria-hidden="true"/> Proin a pellentesque elit. Maecenas nibh ante, sodales id fermentum vel, fringilla et turpis. Sed egestas sollicitudin.
                            </p>
                        </a>
                    </article>
                </div>
            </section>

            <div className="article-block-divider"></div>

            <section className="opinion-grid">
                <h2 className="sr-only">Opinions et Analyses</h2>
                {/* RIGA 1 */}
                <article className="opinion-item">
                    <a href="/grid1" >
                        <span className="section-label">CHRONIQUE</span>
                        <h3 className="opinion-title underlined">
                            <img className="m-logo" alt="" aria-hidden="true"/> «Quisque lectus lorem, egestas vel placerat et, gravida..... »
                        </h3>
                        <div className="author-info">
                            <img src="https://placehold.co/40x40/888/fff" alt="author" className="author-img" />
                            <div>
                                <p className="author-name">Phasellus libero enim</p>
                                <p className="author-sub">Vestibulum nunc, correspondant</p>
                            </div>
                        </div>
                    </a>
                </article>

                <article className="opinion-item">
                    <a href="/grid2" >
                        <span className="section-label">ÉDITORIAL</span>
                        <h3 className="opinion-title">Fusce id mauris euismod, euismod est ut.</h3>
                    </a>
                </article>

                {/* RIGA 2 */}
                <article className="opinion-item ">
                    <a href="/grid3" >
                        <span className="section-label">TRIBUNE</span>
                        <h3 className="opinion-title">
                            <img className="m-logo" alt="" aria-hidden="true"/> « In gravida lectus eu tincidunt consectetur. Morbi ac accumsan... »
                        </h3>
                        <p className="author-name author-info">Orci Varius</p>
                    </a>
                </article>
                <article className="news-item-mini">
                    <a href="/grid4" >
                        <div className="mini-content">
                            <h3 className="mini-title">Orci varius natoque penatibus et magnis dis parturient montes...</h3>
                        </div>
                        <img src="https://placehold.co/100x100/888/fff" alt="grid news 4" />
                    </a>
                </article>

                {/* RIGA 3 */}
                <article className="news-item-mini">
                    <a href="/grid5" >
                        <div className="mini-content">
                            <h3 className="mini-title"><img className="m-logo" alt="" aria-hidden="true"/> Vivamus ut leo ullamcorper, aliquam lectus in.</h3>
                        </div>
                        <img src="https://placehold.co/100x100/888/fff" alt="grid news 5" />
                    </a>
                </article>
                <article className="news-item-mini">
                    <a href="/grid6" >
                        <div className="mini-content">
                            <h3 className="mini-title">Sed congue mauris sit amet nulla fermentum, sit amet euismod augue ullamcorper. Ut.</h3>
                        </div>
                        <img src="https://placehold.co/100x100/888/fff" alt="grid news 6" />
                    </a>
                </article>
            </section>
        </div>
    );
}
