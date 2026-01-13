import "./newfeature.css";

const newsJson = [
    {
        id: 1,
        img: "https://media.licdn.com/dms/image/v2/D4D22AQFVdlEjO8SQMw/feedshare-shrink_1280/B4DZliwVerGgAs-/0/1758298475834?e=1769644800&v=beta&t=q_1WqUEOlU9TOkGfOgYutrAHflcLLOnHl2jvfRbZvk8",
        title: "Expo Envase 2025",
        description: "...",
        category: "Eventos",
        date: "23/10/2025",
        urlNew:"https://www.linkedin.com/posts/argenpack-corrugados-s-a-_%C3%BAltimo-d%C3%ADa-presentes-en-expo-envase-2025-activity-7374838346193375232-DeJ_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEUYWABnAw2LSO9Zp9Z8pO9-DhUnX5TbHg"
    },
    {
        id: 2,
        img: "https://berazategui.gob.ar/wp-content/uploads/2021/06/2350.jpg",
        title: "Argenpack, una empresa que no deja de reinventarse",
        description: "",
        category: "PyMes",
        date: "23/07/2020",
        urlNew: "https://berazategui.gob.ar/noticias/daniel-arroyo-visito-una-empresa-de-berazategui-que-fabrica-mobiliario-de-carton-corrugado/"
    },
    {
        id: 3,
        img: "https://argenpackcorrugadossa.netlify.app/assent/image/visitar-arg-min.jpg",
        title: "Los grupos de jóvenes que están cursando el Programa #TuEmpleo visitaron empresas de la red.",
        description: "",
        category: "Social",
        date: "12/03/2021",
        urlNew: "https://www.argenpack.com/"
    },
    {
        id: 4,
        img: "https://argenpackcorrugadossa.netlify.app/assent/image/evemto-ig.jpg",
        title: "Envase 2023, en simultáneo con ETIF2023, la empresa Argenpack Corrugados",
        description: "",
        category: "Eventos",
        date: "03/10/2023",
        urlNew: "https://www.instagram.com/p/CyEMJB1L-RU/?igshid=MTc4MmM1YmI2Ng%3D%3D"
    }
];

const NewFeature = () => {
    return (
        <section className="news-section">
            <h2 className="news-main-title">Últimas Novedades</h2>
            <div className="news-grid">
                {newsJson.map((newsItem) => (
                    <a key={newsItem.id} href={newsItem.urlNew} target="_blank" rel="noopener noreferrer" className="news-card-link">
                        <article className="news-card">
                            <img src={newsItem.img} alt={newsItem.title} className="news-card-image" />
                            <div className="news-card-content">
                                <span className="news-card-category">{newsItem.category}</span>
                                <h3 className="news-card-title">{newsItem.title}</h3>
                            </div>
                        </article>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default NewFeature;