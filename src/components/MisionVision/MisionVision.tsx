import CardMisionVision from "./CardMision";
import CarruselValores from "./CarruselValores";
import './MisionVision.css';

const MisionVision = () => {
    return(
        <section className="mision-vision-container" data-aos="zoom-in-up">
            <div className="mision-vision-section">
                <CardMisionVision 
                    title="Misión"
                    context="Dedicar su talento y tecnología a crear productos y servicios superiores que contribuyan a una mejor sociedad global."
                    description="Para lograrlo, Argenpack establece un alto valor en sus personas y tecnologías. Se compromete a cumplir con las leyes y las regulaciones locales, así como a aplicar un código de conducta estricto y global para todos los empleados."
                    />
                <CardMisionVision 
                    title="Visión"
                    context="Ser un líder en el mercado de packaging, inspirando al mundo con productos innovadores y sostenibles."
                    description="Argenpack busca convertirse en una de las empresas más éticas del mundo, capacitando a sus empleados y operando sistemas de monitoreo, mientras pone en práctica una gestión corporativa justa y transparente."
                />
                <CarruselValores />
            </div>
        </section>
    );
}

export default MisionVision;