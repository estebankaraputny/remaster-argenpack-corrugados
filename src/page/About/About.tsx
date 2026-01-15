import Carrusel from "../../components/Carrusel/Carrusel";
import ThreeInfo from "../../components/ThreeInfo/ThreeInfo";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/medioambiente1.jpg"
import ImgSliderTwo from "../../assets/image/carton.jpg"
import ImgSliderThree from "../../assets/image/fabrica1.jpg"
import OneInfo from "../../components/OneInfo/OneInfo";
import OneInfoImg from "../../assets/image/armandocaja.jpg";
import TwoInfo from "../../components/TwoInfo/TwoInfo";
import TwoInfoImg from "../../assets/image/carton.jpg"
import "./About.css";
import FormUnete from "../../components/FormUnete/FormUnete";
import MisionVision from "../../components/MisionVision/MisionVision";

const About = () => {
    return (
        <>
            <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Argenpack, Pioneros en Soluciones de Packaging Sostenible"
            description="TRAYECTORIA • COMPROMISO • EVOLUCIÓN"
            />
        <TitlePage
            title="Nuestra Historia y Compromiso con el Futuro"
            description="Somos Argenpack, Empresa argentina con visión global, líder en soluciones integrales de cartón corrugado. Impulsamos la innovación y la sostenibilidad en cada envase, construyendo alianzas duraderas basadas en la excelencia, la calidad certificada y el compromiso ambiental."
        />
        <OneInfo
            titleInfo="Un Aliado Estratégico del Embalaje"
            info="Soluciones integrales de embalaje que protegen su producto y optimizan su logística. Nos adaptamos a las dinámicas del mercado para ser el socio estratégico que su empresa necesita."
            urlImg={OneInfoImg}
        />
        <TwoInfo
            titleInfo="Soluciones de Packaging Inteligentes para Empresas Líderes"
            info="Diseñamos y fabricamos soluciones de packaging de alto rendimiento, desde cajas estándar hasta estructuras 'smart'. Utilizamos tecnología de vanguardia para garantizar máxima protección, eficiencia logística y sostenibilidad para empresas líderes."
            urlImg={TwoInfoImg}
        />
        <MisionVision />
        <ThreeInfo 
            titleInfo="Compromiso con un Ecosistema Social y Ambiental Sostenible"
            descriptionInfo="En Argenpack, la sostenibilidad es el corazón de nuestra operación. Desarrollamos procesos productivos cada vez más eficientes y respetuosos con el medio ambiente, trabajando en línea con un Sistema de Gestión Integrado que abarca desde la selección de materias primas hasta la entrega final."
            
            titleInfoOne= "Innovación Sostenible nuestra Distinción"
            infoOne= "Reconocemos y apoyamos a empresas, PYMES y proyectos que demuestran un compromiso genuino con el triple impacto (económico, social y ambiental), la innovación en sus procesos y la adopción de estrategias de producción y packaging sostenibles."
            
            titleInfoTwo= "Transparencia y Rendición de Cuentas"
            infoTwo="Fomentamos activamente prácticas de producción sostenible en todas nuestras operaciones y compartimos nuestros avances y logros a través de nuestro Reporte de Sustentabilidad anual. Este documento detalla nuestro desempeño en indicadores clave, reafirmando nuestro compromiso con la mejora continua y la transparencia."
            
            titleInfoThree="Nacidos para la Grandeza"
            infoThree="En Argenpack, entendemos que la primera impresión tangible que recibe el cliente y es un reflejo directo del valor del producto que lleva dentro. Por eso, para nosotros, la verdadera grandeza se define por una calidad intransigente y una búsqueda constante de mejora en nuestros procesos."
            
            />
            <FormUnete />
        </>
    );
}

export default About;