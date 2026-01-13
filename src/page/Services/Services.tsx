import Carrusel from "../../components/Carrusel/Carrusel";
import ThreeInfo from "../../components/ThreeInfo/ThreeInfo";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/sliderOne.png"
import ImgSliderTwo from "../../assets/image/sliderTwo.png"
import ImgSliderThree from "../../assets/image/sliderThree.png"
import FormContact from "../../components/FormContact/FormContact";


const Services = () => {
    return (
        <>
            <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Nuestros Servicios a tu medida"
            description="Soluciones en carton corrugado"
        />
        
        <TitlePage
            title="Lo mejor para nuestros clientes"
            description=""
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
            <FormContact />
        

        </>
    );
}

export default Services;