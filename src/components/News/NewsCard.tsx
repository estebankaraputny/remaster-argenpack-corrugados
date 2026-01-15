import React from 'react';
import { Link } from 'react-router-dom';
import type { News } from '../../data/news';
import './NewsCard.css';

interface NewsCardProps {
  newsItem: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem }) => {
  const { title, img, category, urlNew, type } = newsItem;

  const cardContent = (
    <article className="news-card">
      <img src={img} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <span className="news-card-category">{category}</span>
        <h3 className="news-card-title">{title}</h3>
      </div>
    </article>
  );

  if (type === 'internal') {
    return (
      <Link to={urlNew} className="news-card-link">
        {cardContent}
      </Link>
    );
  }

  return (
    <a href={urlNew} target="_blank" rel="noopener noreferrer" className="news-card-link">
      {cardContent}
    </a>
  );
};

export default NewsCard;
