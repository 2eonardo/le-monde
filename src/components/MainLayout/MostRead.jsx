import React from 'react';
import './MostRead.css';

export default function MostRead() {
    return (
        <div className="side-section most-read-container">
            <h2 className="most-read-header">LES PLUS LUS</h2>

            {/* CHECKBOX NASCOSTA PER L'HACK CSS (0 JS) */}
            <input type="checkbox" id="toggle-voir-plus" className="voir-plus-checkbox" />

            <div className="most-read-grid">
                {/* RIGA 1 */}
                <div className="most-read-item">
                    <span className="item-number">1</span>
                    <p className="item-text">EN DIRECT, guerre au Moyen-Orient : l’Iran ne prendra part à des négociations que lorsque les Etats-Unis « accepteront ses conditions » ; le cessez-le-feu expire mercredi soir</p>
                </div>
                <div className="most-read-item">
                    <span className="item-number">2</span>
                    <p className="item-text">« J’ai ruiné ma vie, c’est fini » : un adolescent jugé pour l’assassinat d’Agnès Lassalle, sa professeure d’espagnol</p>
                </div>
                <div className="most-read-item">
                    <span className="item-number">3</span>
                    <p className="item-text">En Russie, la « colère » contre Vladimir Poutine monte dans une partie de la population</p>
                </div>

                {/* RIGA 2 */}
                <div className="most-read-item">
                    <span className="item-number">4</span>
                    <p className="item-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="most-read-item">
                    <span className="item-number">5</span>
                    <p className="item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
                <div className="most-read-item">
                    <span className="item-number">6</span>
                    <p className="item-text">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
                </div>

                {/* RIGA 3 */}
                <div className="most-read-item">
                    <span className="item-number">7</span>
                    <p className="item-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                </div>
                <div className="most-read-item">
                    <span className="item-number">8</span>
                    <p className="item-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</p>
                </div>
                <div className="most-read-item">
                    <span className="item-number">9</span>
                    <p className="item-text">Aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p>
                </div>
            </div>

            {/* CONTENITORE LABEL (Funge da bottone) */}
            <div className="voir-plus-container">
                <label htmlFor="toggle-voir-plus" className="voir-plus-btn">
                    <span className="text-more">Voir plus</span>
                    <span className="text-less">Voir moins</span>
                    <span className="chevron"></span>
                </label>
            </div>
        </div>
    );
}