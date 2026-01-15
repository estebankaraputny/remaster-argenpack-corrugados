import ImgSliderOner from "../../assets/image/asesoria.jpg"
import ImgSliderTwo from "../../assets/image/cartonconpapel.png"
import ImgSliderThree from "../../assets/image/fabricagrupo.jpg"
import ImgProcess from "../../assets/image/process.png";
import Carrusel from "../../components/Carrusel/Carrusel";
import ThreeInfo from "../../components/ThreeInfo/ThreeInfo";
import TitlePage from "../../components/TitlePage/TitlePage";
import BoxMeasures from "../../components/BoxMeasures/BoxMeasures";
import FormContact from "../../components/FormContact/FormContact";
import "./Services.css"            

const Services = () => {

    return (
        <>
            <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Servicios que Impulsan su Negocio"
            description="LOGÍSTICA • DESARROLLO • GESTIÓN"
            />
        
        <TitlePage
            title="Soluciones de Packaging a su Medida"
            description="El aliado esencial para el e-commerce y la sustentabilidad. Nuestras soluciones en cartón corrugado protegen su producto y potencian su branding, transformando la logística en una verdadera experiencia de marca."
        />
        <section className="container-process" data-aos="zoom-in">
            <div className="process-send">
                <h3 className="process-title">Nos distinguimos por brindar soluciones de packaging integral, con un firme compromiso en el servicio al cliente, la innovación constante, la eficiencia operativa y una dedicación inquebrantable a la preservación del medio ambiente.</h3>
                <img src={ImgProcess} alt="" className="process-img" />
            </div>
        </section>
        <ThreeInfo 
            titleInfo="Nuestra Propuesta de Valor"
            descriptionInfo="Enfocados en la excelencia, nuestros servicios se construyen sobre pilares sólidos que garantizan resultados superiores para su empresa."
            
            titleInfoOne= "Diseño y Desarrollo"
            infoOne= "Ingeniería y diseño al servicio de tu marca. Elevamos el estándar de tu producto con envases de alto impacto. Gracias a nuestra tecnología de prototipado 2D/3D y asesoría experta, transformamos tus requerimientos en una solución estructuralmente perfecta y visualmente superior."
            titleInfoTwo= "Asesoria y ventas"
            infoTwo="Nuestro equipo de expertos te brinda una asesoría técnica real y personalizada para transformar tus necesidades en el envase ideal. ¿Hablamos? Contáctanos vía Chat, teléfono o email. Te garantizamos un acompañamiento profesional desde el diagnóstico inicial hasta la entrega final."
            
            titleInfoThree="Logística y Distribución"
            infoThree="Logística eficiente: su stock, justo a tiempo. Entendemos que el packaging no puede detener su línea de producción. Ofrecemos un servicio de logística integral y gestión de stock que asegura la entrega puntual de sus pedidos. Planificamos su abastecimiento de forma estratégica para que cuente con sus envases exactamente cuándo y dónde los necesita."
            />
            <BoxMeasures />
            <FormContact />
        

        </>
    );
}

export default Services;