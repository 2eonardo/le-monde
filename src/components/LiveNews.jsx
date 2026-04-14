import React from 'react';
import './LiveNews.css';
import './LiveNewsResponsive.css'

const newsData = [
    { time: '10:46', label: 'ALERTE', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique.' },
    { time: '09:50', label: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo nulla, hendrerit sit amet luctus.' },
    { time: '08:50', label: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { time: '08:33', label: '• LIVE EN COURSE', text: 'Lorem ipsum dolor sit amet.' },
    { time: '08:15', label: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida elit mattis fermentum mollis. Nunc lacinia quam vel massa rutrum.' },
];

export default function LiveNews() {
    return (
        <nav className="live-news" aria-label="News on real time">
            {newsData.map((item, index) => (
                <React.Fragment key={index}>
                    <article className="news">
                        <div>
                            <time className="news-time">{item.time}</time>
                            <span className="span-label">{item.label}</span>
                        </div>
                        <a href={`/news-${index}`}>
                            <span>{item.text}</span>
                        </a>
                    </article>
                    {index < newsData.length - 1 && <div className="divider" aria-hidden="true"></div>}
                </React.Fragment>
            ))}
            <div className="divider" aria-hidden="true"></div>
            <div className="button-div">
                <button className="live-news-button" aria-label="Other news">
                    <span>Voir plus ›</span>
                </button>
            </div>
        </nav>
    );
}