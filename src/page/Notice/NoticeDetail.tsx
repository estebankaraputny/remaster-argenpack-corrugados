import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../../data/news';
import './NoticeDetail.css';

const NoticeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const newsItem = newsData.find(item => item.id === parseInt(id || ''));

    if (!newsItem) {
        return (
            <div className="notice-detail-page">
                <div className="not-found">
                    <h2>Noticia no encontrada</h2>
                    <Link to="/notice">Volver a Noticias</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="notice-detail-page">
            <div className="notice-header">
                <img src={newsItem.img} alt={newsItem.title} className="notice-detail-image" />
                <h1 className="notice-detail-title">{newsItem.title}</h1>
                <div className="notice-meta">
                    <span className="notice-detail-category">{newsItem.category}</span>
                    <span className="notice-detail-date">{newsItem.date}</span>
                </div>
            </div>
            <div className="notice-content" dangerouslySetInnerHTML={{ __html: newsItem.content || '' }} />
            <Link to="/noticias" className="back-link">Volver a Noticias</Link>
        </main>
    );
}

export default NoticeDetail;
