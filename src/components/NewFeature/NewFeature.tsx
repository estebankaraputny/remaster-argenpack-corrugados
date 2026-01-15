import { newsData } from '../../data/news';
import NewsCard from '../News/NewsCard';
import './newfeature.css';

const NewFeature = () => {
    // Take only the first 4 news items for the feature section
    const featuredNews = newsData.slice(0, 3);

    return (
        <section className="news-section" data-aos="fade-up">
            <h2 className="news-main-title">Últimas Novedades</h2>
            <div className="newfeature-grid">
                {featuredNews.map((newsItem) => (
                    <NewsCard key={newsItem.id} newsItem={newsItem} />
                ))}
            </div>
        </section>
    );
}

export default NewFeature;