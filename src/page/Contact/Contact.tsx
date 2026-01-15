import Carrusel from "../../components/Carrusel/Carrusel";
import FormContact from "../../components/FormContact/FormContact";
import TitlePage from "../../components/TitlePage/TitlePage";
import ImgSliderOner from "../../assets/image/soporte1.jpg"
import ImgSliderTwo from "../../assets/image/soporte2.jpg"
import ImgSliderThree from "../../assets/image/soporte3.jpg"
import Plantas from "../../components/Plantas/Plantas";

const Contact = () => {
    return (
            <>
                <Carrusel
                    img1={ImgSliderOner}
                    img2={ImgSliderTwo}
                    img3={ImgSliderThree}
                    titlePage="Contactanos, Tu packaging ideal comienza acá"
                    description="Expertos listos para ayudarte"
                />
                <TitlePage
                    title="Contacto"
                    description="¿Tiene dudas, sugerencias o le interesa llevar adelante algún proyecto? Contáctenos hoy mismo seleccionando un canal. Estaremos felices de responder a la brevedad."
                />
                <FormContact />
                <TitlePage
                    title="¿Dónde encontrarnos?"
                    description="Desde nuestras plantas abastecemos a todo el país."
                />
                <Plantas />
            </>
    );
}

export default Contact;