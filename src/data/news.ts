export interface News {
    id: number;
    img: string;
    title: string;
    description: string;
    category: string;
    date: string;
    urlNew: string;
    type: 'internal' | 'external';
    content?: string;
}

export const newsData: News[] = [
    {
        id: 1,
        img: "https://media.licdn.com/dms/image/v2/D4D22AQFVdlEjO8SQMw/feedshare-shrink_1280/B4DZliwVerGgAs-/0/1758298475834?e=1769644800&v=beta&t=q_1WqUEOlU9TOkGfOgYutrAHflcLLOnHl2jvfRbZvk8",
        title: "Expo Envase 2025",
        description: "Estaremos presentes en la Expo Envase 2025, no te pierdas nuestro stand!",
        category: "Eventos",
        date: "23/10/2025",
        urlNew:"/notice/1",
        type: 'internal',
        content: `
            <h2>Argenpack en la Expo Envase 2025</h2>
            <p>Este año, Argenpack Corrugados se enorgullece en anunciar su participación en la Expo Envase 2025, el evento más importante de la industria del packaging en Latinoamérica. Estaremos presentando nuestras últimas innovaciones en soluciones de cartón corrugado, diseñadas para optimizar la cadena de suministro y promover la sustentabilidad.</p>
            <p>Visítanos en el stand 3B para descubrir cómo nuestras soluciones pueden ayudar a tu negocio a crecer de manera sostenible. Contaremos con demostraciones en vivo, charlas con nuestros expertos y mucho más.</p>
            <h3>Detalles del evento:</h3>
            <ul>
                <li><strong>Fecha:</strong> 23 al 26 de Octubre de 2025</li>
                <li><strong>Lugar:</strong> Centro Costa Salguero, Buenos Aires</li>
                <li><strong>Stand:</strong> 3B</li>
            </ul>
            <p>¡No te pierdas la oportunidad de conectar con nosotros y descubrir el futuro del packaging!</p>
        `
    },
    {
        id: 2,
        img: "https://berazategui.gob.ar/wp-content/uploads/2021/06/2350.jpg",
        title: "Argenpack, una empresa que no deja de reinventarse",
        description: "Una nota sobre nuestra capacidad de innovación y adaptación.",
        category: "PyMes",
        date: "23/07/2020",
        urlNew: "https://berazategui.gob.ar/noticias/daniel-arroyo-visito-una-empresa-de-berazategui-que-fabrica-mobiliario-de-carton-corrugado/",
        type: 'external'
    },
    {
        id: 3,
        img: "https://argenpackcorrugadossa.netlify.app/assent/image/visitar-arg-min.jpg",
        title: "Jóvenes del Programa #TuEmpleo nos visitaron",
        description: "Recibimos a un grupo de jóvenes para mostrarles nuestro trabajo.",
        category: "Social",
        date: "12/03/2021",
        urlNew: "https://www.argenpack.com/",
        type: 'external'
    },
    {
        id: 4,
        img: "https://argenpackcorrugadossa.netlify.app/assent/image/evemto-ig.jpg",
        title: "Nuestra participación en Envase 2023",
        description: "Un resumen de nuestra exitosa participación en la feria Envase 2023.",
        category: "Eventos",
        date: "03/10/2023",
        urlNew: "https://www.instagram.com/p/CyEMJB1L-RU/?igshid=MTc4MmM1YmI2Ng%3D%3D",
        type: 'external'
    },
    {
        id: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGXZFAhAONAsNuRiRLWx1EpXYKLZwfXbAdg&s",
        title: "Innovación en Packaging Sustentable",
        description: "Presentamos nuestra nueva línea de productos 100% reciclables.",
        category: "Sustentabilidad",
        date: "15/06/2024",
        urlNew:"/noticias/5",
        type: 'internal',
        content: `
            <h2>Compromiso con el Planeta</h2>
            <p>En Argenpack, la sustentabilidad es un pilar fundamental. Nuestra nueva línea de packaging está desarrollada con materiales 100% reciclados y es completamente reciclable, minimizando el impacto ambiental.</p>
        `
    },
    {
        id: 6,
        img: "https://www.argenpack.com/images/frontend/slider21.jpg",
        title: "Ampliamos nuestra planta de producción",
        description: "Inauguramos un nuevo sector en nuestra planta para aumentar la capacidad.",
        category: "Inversiones",
        date: "01/02/2024",
        urlNew:"/noticias/6",
        type: 'internal',
        content: `
            <h2>Crecimiento y Expansión</h2>
            <p>Con una inversión significativa, hemos ampliado nuestras instalaciones para responder a la creciente demanda del mercado y mejorar nuestros tiempos de entrega.</p>
        `
    },
    {
        id: 7,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbUGh6ptOqQg50p9FTYxx7zu4ue5J84Ri7A&s",
        title: "Capacitación a nuevos talentos",
        description: "Lanzamos un programa de capacitación para jóvenes profesionales.",
        category: "Social",
        date: "20/11/2023",
        urlNew:"/noticias/7",
        type: 'internal',
        content: "<h2>Formando el Futuro</h2><p>Creemos en el talento joven. Nuestro nuevo programa de capacitación busca formar a la próxima generación de líderes en la industria del packaging.</p>"
    },
    {
        id: 8,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF94pmGEBMJL05BfNzjlfZIg3WfJKkWvg1hw&s",
        title: "Certificación ISO 14001",
        description: "Obtuvimos la certificación ISO 14001 de gestión ambiental.",
        category: "Sustentabilidad",
        date: "10/08/2023",
        urlNew:"/noticias/8",
        type: 'internal',
        content: "<h2>Calidad y Medio Ambiente</h2><p>Este logro reafirma nuestro compromiso con la gestión ambiental responsable y la mejora continua de nuestros procesos.</p>"
    },
    {
        id: 9,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9ZN-u7euBOrN548UvjqPUcYYwjgmUKXIfw&s",
        title: "Alianza estratégica con Pack Group",
        description: "Nos unimos a Pack Group para fortalecer nuestra presencia en la región.",
        category: "Inversiones",
        date: "05/05/2023",
        urlNew:"/noticias/9",
        type: 'internal',
        content: "<h2>Nuevos Horizontes</h2><p>Esta alianza nos permitirá expandir nuestra oferta de productos y llegar a nuevos mercados en Latinoamérica.</p>"
    },
    {
        id: 10,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpUtnB6jFVMpPFhwqRHAcG114xbIASzSs0w&s",
        title: "Participación en la Feria del Libro",
        description: "Donamos cajas de cartón para el transporte de libros en la feria.",
        category: "Social",
        date: "28/04/2023",
        urlNew:"/noticias/10",
        type: 'internal',
        content: "<h2>Apoyo a la Cultura</h2><p>Como parte de nuestro compromiso social, colaboramos con la Feria del Libro para facilitar la logística y el cuidado de los libros.</p>"
    },
    {
        id: 11,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrSgNRq4onMbknOzFAdbThBdswa6jEhnmQA&s",
        title: "Desarrollo de packaging inteligente",
        description: "Estamos investigando el uso de tecnología NFC en nuestros empaques.",
        category: "Innovación",
        date: "15/01/2023",
        urlNew:"/noticias/11",
        type: 'internal',
        content: "<h2>El Futuro es Hoy</h2><p>La integración de tecnología NFC en nuestros productos abrirá nuevas posibilidades de interacción y trazabilidad para nuestros clientes.</p>"
    },
    {
        id: 12,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SORdfDjIjD2wUu6XqBWwSNrYMHQ9D2kLpg&s",
        title: "Nuevo récord de producción",
        description: "Alcanzamos un nuevo récord de producción mensual en nuestra planta.",
        category: "Inversiones",
        date: "30/11/2022",
        urlNew:"/noticias/12",
        type: 'internal',
        content: "<h2>Superando Metas</h2><p>Gracias al esfuerzo de nuestro equipo y la optimización de procesos, hemos logrado un hito histórico en nuestra capacidad de producción.</p>"
    }
];
