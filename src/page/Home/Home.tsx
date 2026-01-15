import Carrusel from "../../components/Carrusel/Carrusel";
import ThreeInfo from "../../components/ThreeInfo/ThreeInfo";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/sliderOne.png"
import ImgSliderTwo from "../../assets/image/sliderTwo.png"
import ImgSliderThree from "../../assets/image/fabrica1.jpg"
import VideoSection from "../../components/VideoSection/VideoSection";
import NewFeature from "../../components/NewFeature/NewFeature";


const Home = () => {
    return (
       <>
        <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Somos Argenpack Vanguardia en Cartón Corrugado"
            description="Soluciones que impulsan tu negocio."
        />
        <TitlePage
            title="Innovación en Packaging de Cartón Corrugado"
            description="En Argenpack,  Transformamos cartón en soluciones estratégicas que impulsan su éxito. Con tecnología de punta y compromiso sostenible, diseñamos envases que protegen su producto y potencian su marca, desde el diseño hasta la exhibición."
        />    

        <ThreeInfo 
            titleInfo="Los Pilares de Nuestro Compromiso"
            descriptionInfo="Nuestra estrategia se basa en tres pilares fundamentales que garantizan la excelencia y la relevancia en la industria del packaging."
            
            titleInfoOne= "Economía Circular y Sostenibilidad"
            infoOne= "Elaboramos nuestros productos con un alto porcentaje de material reciclado, promoviendo un ciclo de vida sostenible. Nuestro sistema de gestión ambiental (certificación ISO 14001) asegura la minimización de residuos y la optimización de recursos."
            
            titleInfoTwo= "Tecnología e Innovación Constante"
            infoTwo="Invertimos en la última tecnología de fabricación y diseño para crear embalajes más ligeros, resistentes y eficientes. Desarrollamos soluciones 'smart packaging' y diseños estructurales avanzados."

            titleInfoThree="Foco en el Cliente y Personalización"
            infoThree="Entendemos que cada producto es único. Por eso, ofrecemos soluciones de packaging 100% personalizadas. Mediante la impresión digital de vanguardia, convertimos cada caja en una poderosa herramienta de marketing, mejorando la experiencia del consumidor y fortaleciendo la identidad de su marca."
            
            />
            <VideoSection />
            <NewFeature />
       </>
        
    )
}

export default Home;