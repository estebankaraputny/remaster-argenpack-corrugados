import Carrusel from "../../components/Carrusel/Carrusel";
import ThreeInfo from "../../components/ThreeInfo/ThreeInfo";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/sliderOne.png"
import ImgSliderTwo from "../../assets/image/sliderTwo.png"
import ImgSliderThree from "../../assets/image/sliderThree.png"
import OneInfo from "../../components/OneInfo/OneInfo";
import TwoInfo from "../../components/TwoInfo/TwoInfo";
import ImgProcess from "../../assets/image/process.png"
import "./about.css";
import FormUnete from "../../components/FormUnete/FormUnete";
import BoxMeasures from "../../components/BoxMeasures/BoxMeasures";


const About = () => {
    return (
        <>
            <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Sobre Nosotros"
            description=""
        />
        <TitlePage
            title="¿Quiénes Somos?"
            description="Somos una empresa Argentina con mirada global que brinda soluciones integrales en Packaging. Construimos relaciones de largo plazo con nuestros clientes y proveedores, enfocándonos en el bienestar de las personas y el cuidado del medio ambiente. Desde nuestras 17 plantas de producción en la región, abastecemos a más de 3000 clientes con nuestros envases corrugados, envases flexibles, bolsas multipliego y papeles."
        />
        <OneInfo
            titleInfo="Un aliado estratégico para su negocio"
            info="Tenemos un fuerte compromiso con cada parte de la cadena productiva y atendemos permanentemente a los cambios de la industria para satisfacer las necesidades de nuestros clientes, proveedores, colaboradores y del medio ambiente."
            urlImg="https://sinpar.com.ar/app/uploads/2022/06/DA_L4288.jpg"
        />
        <TwoInfo
            titleInfo="Soluciones inteligentes para empresas líderes"
            info="Producimos y comercializamos el más amplio programa de hojas de sierra y cuchillas industriales, herramientas de corte y mecanizado, accesorios para máquinas de cinta sin fin, tornos CNC, centros de mecanizado y servicios de reparación y capacitación."
            urlImg="https://sinpar.com.ar/app/uploads/2022/09/DA_L4131-scaled.jpg"
        />
        <section className="container-process">
            <div className="process-send">
                <h3 className="process-title">Nos destacamos por ofrecer soluciones integradas de Packaging con especial énfasis en el servicio al cliente, la permanente innovación, la productividad y la preservación del ambiente.</h3>
                <img src={ImgProcess} alt="" className="process-img" />
            </div>
        </section>
        <ThreeInfo 
            titleInfo="Un nuevo ecosistema social y ambiental"
            descriptionInfo="Desarrollamos procesos cada vez más sustentables trabajando en línea con nuestro Sistema de Gestión"
            
            titleInfoOne= "Distinción ARGENPACK"
            infoOne= "Reconocemos a empresas, pymes y negocios que desarrollan proyectos comprometidos con el triple impacto, la innovación y la adopción de estrategias sustentables."
            
            titleInfoTwo= "Reporte de Sustentabilidad"
            infoTwo="Fomentamos prácticas sustentables en sus procesos productivos y compartimos los resultados en nuestro Reporte de Sustentabilidad."
            
            titleInfoThree="Pacto global de Naciones Unidas"
            infoThree="Presentamos el informe de Comunicación de Progreso (CoP) detallando los avances de la empresa sobre lo Principios del Pacto Global."
            
            />
            <FormUnete />
            <BoxMeasures />
        </>
    );
}

export default About;