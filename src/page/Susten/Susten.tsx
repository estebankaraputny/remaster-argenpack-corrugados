import Carrusel from '../../components/Carrusel/Carrusel';
import CounterStats from '../../components/CounterStats/CounterStats';
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/aceite.jpg"
import ImgSliderTwo from "../../assets/image/pexels-elevate-1267332.jpg"
import ImgSliderThree from "../../assets/image/pilacartones.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faBoxesStacked, faArrowTrendUp, faLeaf} from '@fortawesome/free-solid-svg-icons';
import './Susten.css';
import Plantas from '../../components/Plantas/Plantas';
import NewFeature from '../../components/NewFeature/NewFeature';
import OneInfo from '../../components/OneInfo/OneInfo';
import OneInfoImg from "../../assets/image/medioambiente2.jpg"

const Sustentabilidad = () => {
    return (
        <>
              <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Sustentabilidad: Nuestro Compromiso con el Planeta"
            description="Liderando el cambio hacia un futuro más verde a través de soluciones de packaging responsable."
        />
        
        <TitlePage
            title="Argenpack: Innovación Sostenible en Cada Fibra"
            description="En Argenpack, la sustentabilidad no es solo una opción, es el núcleo de nuestra operación. Reconocemos el rol vital del papel y el cartón en la economía circular y nos esforzamos por superar los estándares de la industria. Nuestra estrategia responde a la creciente demanda de envases reciclables y biodegradables, ofreciendo soluciones que minimizan el impacto ambiental y, a su vez, potencian la imagen de marca de nuestros clientes en un mercado consciente."
        />
        <OneInfo
            titleInfo="Un Compromiso Integral con el Medio Ambiente y la Sociedad"
            info="Compromiso sostenible en cada etapa. Asumimos un rol activo en la protección ambiental, alineando nuestras operaciones con las regulaciones más exigentes. Minimizamos nuestra huella ecológica mediante la optimización de recursos y la reducción de emisiones, fomentando una cultura de responsabilidad que agrega valor a su cadena de suministro."
            urlImg={OneInfoImg}
        />
            <div className="susten-page">
                
                <div className="counters-container">
                    <CounterStats finalNumber={1500} label="Toneladas de Material Reciclado Anualmente" symbol="+" icon={<FontAwesomeIcon icon={faRecycle} />} />
                    <CounterStats finalNumber={5000} label="Envases Producidos Diariamente con Conciencia" symbol="+" icon={<FontAwesomeIcon icon={faBoxesStacked} />} />
                    <CounterStats finalNumber={95} label="Tasa de Reciclabilidad de Nuestros Productos" symbol="%" icon={<FontAwesomeIcon icon={faArrowTrendUp} />}/>
                    <CounterStats finalNumber={120} label="Proyectos de Eco-Diseño Implementados"  icon={<FontAwesomeIcon icon={faLeaf} />}/>
                </div>
            </div>
            <Plantas />
            <NewFeature />
        </>
    );
}

export default Sustentabilidad;