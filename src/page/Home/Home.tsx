import Carrusel from "../../components/Carrusel/Carrusel";
import Layout from "../../components/Layout/Layout";
import ThreeInfo from "../../components/ThreeInfo/ThreeInfo";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/sliderOne.png"
import ImgSliderTwo from "../../assets/image/sliderTwo.png"
import ImgSliderThree from "../../assets/image/sliderThree.png"
import VideoSection from "../../components/VideoSection/VideoSection";
import NewFeature from "../../components/NewFeature/NewFeature";


const Home = () => {
    return (
        <Layout>
            <Carrusel
                img1={ImgSliderOner}
                img2={ImgSliderTwo}
                img3={ImgSliderThree}
                titlePage="Soluciones integradas de packaging"
                description="Soluciones en carton corrugado"
            />
            <TitlePage
                title="Acerca de Argenpack"
                description="La evolución y adaptación permanentes, productos de clase mundial, tecnología de punta y equipos de trabajo enfocados al cliente, nos ubica como líderes en soluciones de Packaging. Gracias a nuestro enfoque estratégico de largo plazo que nos permite desarrollar productos de calidad, innovadores y sustentables, brindamos a nuestros clientes las más convenientes alternativas para el empaque, transporte, almacenaje y exhibición de productos."
            />
            <ThreeInfo 
                titleInfo="Nuestra mirada al futuro"
                descriptionInfo="Impulsamos el cambio cultural en organizaciones y personas para mejorar la competitividad."
                
                titleInfoOne= "Sistema de Gestión Integrado"
                infoOne= "Trabajamos con un Sistema Integrado de Gestión que incorpora el cuidado del medio ambiente y el entorno social como parte fundamental de nuestro modelo de negocio."
                
                titleInfoTwo= "Sustentabilidad"
                infoTwo="Elaboramos reportes de sustentabilidad que dan cuenta de nuestro desempeño económico, social y ambiental."
                
                titleInfoThree="Trayectoria"
                infoThree="Fundada en 1931, SIN PAR se ha posicionado como una de las empresas argentinas referentes en soluciones tecnológicas para procesos de corte y mecanizado."
                
               />
               <VideoSection />
               <NewFeature />
        </Layout>
    )
}

export default Home;