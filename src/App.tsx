import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Home from "./page/Home/Home";
import About from './page/About/About';
import Product from './page/Product/Product';
import Services from './page/Services/Services';
import Sustentabilidad from './page/Susten/Susten';
import Notice from './page/Notice/Notice';
import NoticeDetail from './page/Notice/NoticeDetail';
import Contact from './page/Contact/Contact';
/**Animaciones scroll */
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,     // Si true, la animación solo ocurre una vez al bajar
        offset: 50,     // Desplazamiento (en px) desde el cual se activa
        });
    }, []);


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/productos" element={<Product />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/sustentabilidad" element={<Sustentabilidad />} />
        <Route path="/noticias" element={<Notice />} />
        <Route path="/noticias/:id" element={<NoticeDetail />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App;
