import React from 'react';
import './MostRead.css';

export default function MostRead() {
    return (
        <section className="most-read-container">
            <h2 className="most-read-header">LES PLUS LUS</h2>

            <input type="checkbox" id="toggle-voir-plus" className="voir-plus-checkbox" aria-label="Plus articles"/>

            <div className="most-read-grid">
                {/* RIGA 1 */}
                <article className="most-read-item">
                    <span className="item-number">1</span>
                    <a href="/1" className="item-text">LOREM IPSUM, dolor sit amet : consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ; ut enim ad minim veniam quis nostrud</a>
                </article>
                <article className="most-read-item">
                    <span className="item-number">2</span>
                    <a href="/2" className="item-text">« Ut enim ad minim » : quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor</a>
                </article>
                <article className="most-read-item">
                    <span className="item-number">3</span>
                    <a href="/3" className="item-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</a>
                </article>

                {/* RIGA 2 */}
                <article className="most-read-item">
                    <span className="item-number">4</span>
                    <a href="/4" className="item-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
                </article>
                <article className="most-read-item">
                    <span className="item-number">5</span>
                    <a href="/5" className="item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</a>
                </article>
                <article className="most-read-item">
                    <span className="item-number">6</span>
                    <a href="/6" className="item-text">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</a>
                </article>

                {/* RIGA 3 */}
                <article className="most-read-item">
                    <span className="item-number">7</span>
                    <a href="/7" className="item-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</a>
                </article>
                <article className="most-read-item">
                    <span className="item-number">8</span>
                    <a href="/8" className="item-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</a>
                </article>
                <article className="most-read-item">
                    <span className="item-number">9</span>
                    <a href="/9" className="item-text">Aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</a>
                </article>
            </div>

            {/* CONTENITORE LABEL (Funge da bottone) */}
            <div className="voir-plus-container">
                <label htmlFor="toggle-voir-plus" className="voir-plus-btn" role="button">
                    <span className="text-more">Voir plus</span>
                    <span className="text-less">Voir moins</span>
                    <svg className="chevron" width="6" height="6" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </label>
            </div>
        </section>
    );
}