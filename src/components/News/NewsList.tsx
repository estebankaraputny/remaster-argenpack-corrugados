import React from 'react';
import type { News } from '../../data/news';
import NewsCard from './NewsCard';
import './NewsList.css';

interface NewsListProps {
  news: News[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className="news-grid" data-aos="zoom-in">
      {news.map((newsItem) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} />
      ))}
    </div>
  );
};

export default NewsList;
