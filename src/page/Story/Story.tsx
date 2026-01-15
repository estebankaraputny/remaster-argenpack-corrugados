import Carrusel from "../../components/Carrusel/Carrusel";
import ThreeInfo from "../../components/ThreeInfo/ThreeInfo";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/sliderOne.png"
import ImgSliderTwo from "../../assets/image/sliderTwo.png"
import ImgSliderThree from "../../assets/image/sliderThree.png"


const Story = () => {
    return (
        <>
            <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Argenpack: Más de un Siglo de Innovación en Packaging"
            description="Desde nuestros orígenes, construyendo el futuro del embalaje con visión y compromiso."
        />
        
        <TitlePage
            title="Nuestra Trayectoria: Un Legado de Excelencia y Adaptación"
            description="La historia de Argenpack es la de una constante evolución, marcada por la capacidad de adaptación y la búsqueda incesante de la excelencia. A lo largo de los años, hemos crecido de la mano con la industria, transformando el cartón corrugado en soluciones de packaging de clase mundial. Nuestra trayectoria es un testimonio de la visión estratégica, la inversión en tecnología de punta y el compromiso de un equipo de trabajo enfocado en las necesidades de nuestros clientes y el cuidado del medio ambiente."
        />
        
        <ThreeInfo 
            titleInfo="Hitos que Definen Nuestro Camino"
            descriptionInfo="Desde nuestra fundación, hemos marcado hitos importantes en la industria del packaging, consolidando nuestro liderazgo a través de la innovación y la responsabilidad."
            
            titleInfoOne= "Pioneros en Soluciones Sostenibles"
            infoOne= "Desde los primeros días, hemos integrado prácticas de gestión que priorizan el cuidado del medio ambiente y el entorno social. Hoy, nuestro Sistema Integrado de Gestión es un referente en la industria, impulsando la economía circular y el uso eficiente de recursos."
            
            titleInfoTwo= "Evolución Tecnológica y Expansión"
            infoTwo="Nuestra constante inversión en maquinaria de última generación y la expansión de nuestras capacidades de producción nos han permitido ofrecer una gama cada vez más amplia de soluciones innovadoras. Hemos pasado de ser proveedores locales a un actor clave con presencia regional, adaptándonos a las demandas de un mercado globalizado."
            
            titleInfoThree="Alianzas Estratégicas y Reconocimiento"
            infoThree="A lo largo de nuestra historia, hemos forjado alianzas estratégicas con líderes tecnológicos y organizaciones de impacto. Este camino nos ha posicionado como referentes en soluciones tecnológicas para procesos de corte, mecanizado y, fundamentalmente, en el desarrollo de embalajes que responden a los desafíos del siglo XXI."
            
            />

        </>
    );
}

export default Story;