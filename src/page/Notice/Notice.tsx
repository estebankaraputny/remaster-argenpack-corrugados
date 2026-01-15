import { useState } from 'react';
import NewsList from '../../components/News/NewsList';
import { newsData } from '../../data/news';
import Carrusel from "../../components/Carrusel/Carrusel";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/sliderOne.png"
import ImgSliderTwo from "../../assets/image/sliderTwo.png"
import ImgSliderThree from "../../assets/image/sliderThree.png"
import './notice.css';

const NEWS_PER_PAGE = 6;

const Notice = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const paginatedNews = newsData.slice(
        (currentPage - 1) * NEWS_PER_PAGE,
        currentPage * NEWS_PER_PAGE
    );

    const totalPages = Math.ceil(newsData.length / NEWS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Enterate de nuestras novedades"
            description="Entender nuestro crecimiento tambien es compartir cada paso con vos. Conoce más sobre nuestro proyecto en las siguientes notas"
            />
            <TitlePage
            title="Novedades"
            description="La evolución y adaptación permanentes, productos de clase mundial, tecnología de punta y equipos de trabajo enfocados al cliente, nos ubica como líderes en soluciones de Packaging. Gracias a nuestro enfoque estratégico de largo plazo que nos permite desarrollar productos de calidad, innovadores y sustentables, brindamos a nuestros clientes las más convenientes alternativas para el empaque, transporte, almacenaje y exhibición de productos."
            />
            <div className='content-noticias'>
                <NewsList news={paginatedNews} />
                <div className="pagination-controls">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Anterior
                    </button>
                    <span>Página {currentPage} de {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Siguiente
                    </button>
                </div>
            </div>
        </>
        
    );
}

export default Notice;