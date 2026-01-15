import { useState } from 'react';
import NewsList from '../../components/News/NewsList';
import { newsData } from '../../data/news';
import Carrusel from "../../components/Carrusel/Carrusel";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/fabricagrupo.jpg"
import ImgSliderTwo from "../../assets/image/medioambiente1.jpg"
import ImgSliderThree from "../../assets/image/argennoche.png"
import FormContact from '../../components/FormContact/FormContact';
import './Notice.css';

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
            description="ACTUALIDAD • TENDENCIAS • MERCADO"
            />
            <TitlePage
            title="Novedades"
            description="Argenpack en Movimiento. Nuestra búsqueda de la excelencia es constante. Aquí encontrará las últimas actualizaciones sobre nuestras inversiones en tecnología, participación en eventos y mejoras de procesos. Un recorrido por los hitos que nos permiten seguir elevando el estándar de calidad para nuestros clientes."
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
            <FormContact />
        </>
        
    );
}

export default Notice;