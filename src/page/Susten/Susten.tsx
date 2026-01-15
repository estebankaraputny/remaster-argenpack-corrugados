import Carrusel from '../../components/Carrusel/Carrusel';
import CounterStats from '../../components/CounterStats/CounterStats';
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/sliderOne.png"
import ImgSliderTwo from "../../assets/image/sliderTwo.png"
import ImgSliderThree from "../../assets/image/sliderThree.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faBoxesStacked, faArrowTrendUp, faLeaf} from '@fortawesome/free-solid-svg-icons';
import './Susten.css';
import Plantas from '../../components/Plantas/Plantas';
import NewFeature from '../../components/NewFeature/NewFeature';
import OneInfo from '../../components/OneInfo/OneInfo';

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
            info="Como actor clave en la cadena de valor del packaging, asumimos un fuerte compromiso con el desarrollo sostenible. Estamos en constante vigilancia de las tendencias y regulaciones ambientales para asegurar que nuestras prácticas y productos contribuyan positivamente a la salud del planeta y al bienestar de la sociedad. Esto incluye la optimización de recursos, la reducción de emisiones y el fomento de una cultura de respeto ambiental en toda nuestra operación y con nuestros colaboradores."
            urlImg="https://sinpar.com.ar/app/uploads/2022/06/DA_L4288.jpg"
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