import Carrusel from "../../components/Carrusel/Carrusel";
import ThreeInfo from "../../components/ThreeInfo/ThreeInfo";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/sliderOne.png"
import ImgSliderTwo from "../../assets/image/sliderTwo.png"
import ImgSliderThree from "../../assets/image/sliderThree.png"
import VideoSection from "../../components/VideoSection/VideoSection";
import NewFeature from "../../components/NewFeature/NewFeature";


const Home = () => {
    return (
       <>
        <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Somos Argenpack: Vanguardia en Cartón Corrugado"
            description="Liderando el futuro del embalaje con soluciones sostenibles, inteligentes y personalizadas para la era del e-commerce."
        />
        <TitlePage
            title="Innovación en Packaging de Cartón Corrugado"
            description="En Argenpack, transformamos el cartón corrugado en soluciones de packaging que impulsan el éxito de nuestros clientes. Combinamos tecnología de punta, un compromiso inquebrantable con la sostenibilidad y un enfoque centrado en el cliente para ofrecer productos que no solo protegen, sino que también potencian la imagen de su marca. Desde el diseño estructural hasta la impresión digital de alta calidad, somos su socio estratégico para el empaque, transporte, almacenaje y exhibición de productos en un mercado en constante evolución."
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