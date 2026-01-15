import Carrusel from "../../components/Carrusel/Carrusel";
import ThreeInfo from "../../components/ThreeInfo/ThreeInfo";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/sliderOne.png"
import ImgSliderTwo from "../../assets/image/sliderTwo.png"
import ImgSliderThree from "../../assets/image/sliderThree.png"
import OneInfo from "../../components/OneInfo/OneInfo";
import TwoInfo from "../../components/TwoInfo/TwoInfo";
import "./about.css";
import FormUnete from "../../components/FormUnete/FormUnete";
import MisionVision from "../../components/MisionVision/MisionVision";

const About = () => {
    return (
        <>
            <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Argenpack: Pioneros en Soluciones de Packaging Sostenible"
            description="Liderando la industria del cartón corrugado con innovación y responsabilidad."
        />
        <TitlePage
            title="Nuestra Historia y Compromiso con el Futuro"
            description="Somos Argenpack, una empresa argentina con visión global, dedicada a ofrecer soluciones integrales en packaging de cartón corrugado. Desde nuestras modernas instalaciones, impulsamos la innovación, la sostenibilidad y la excelencia en cada producto. Construimos relaciones sólidas y duraderas con clientes y proveedores, con un firme compromiso con el bienestar de las personas y la protección del medio ambiente. Nuestra red de producción abastece a una vasta clientela, brindando envases corrugados que cumplen con los más altos estándares de calidad y eficiencia."
        />
        <OneInfo
            titleInfo="Un Aliado Estratégico del Embalaje"
            info="En Argenpack, nos dedicamos a comprender las dinámicas cambiantes de la industria para anticipar y satisfacer las necesidades de embalaje de nuestros clientes. Nuestro compromiso se extiende a cada eslabón de la cadena productiva, asegurando soluciones que no solo protegen sus productos, sino que también optimizan su logística y refuerzan su imagen de marca. Somos un socio que evoluciona con usted, adaptándonos a las nuevas exigencias del mercado y las regulaciones ambientales."
            urlImg="https://sinpar.com.ar/app/uploads/2022/06/DA_L4288.jpg"
        />
        <TwoInfo
            titleInfo="Soluciones de Packaging Inteligentes para Empresas Líderes"
            info="Diseñamos, producimos y comercializamos una amplia gama de soluciones de packaging de cartón corrugado, desde cajas estándar hasta diseños estructurales complejos y empaques 'smart'. Nuestras soluciones están pensadas para empresas líderes que buscan eficiencia, protección superior y un impacto ambiental reducido. Implementamos tecnologías de vanguardia en procesos de corte y mecanizado, garantizando productos de la más alta calidad y un rendimiento excepcional en la cadena de suministro."
            urlImg="https://sinpar.com.ar/app/uploads/2022/09/DA_L4131-scaled.jpg"
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