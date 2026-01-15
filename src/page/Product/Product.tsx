import { useState, useEffect } from "react";
import ImgSliderOner from "../../assets/image/pilacartones.png"
import ImgSliderTwo from "../../assets/image/cajasproduccion.png"
import ImgSliderThree from "../../assets/image/materialescarton.jpg"
import Carrusel from "../../components/Carrusel/Carrusel";
import CategoryFilter from "../../components/ProductSection/CategoryFilter";
import SearchBar from "../../components/ProductSection/SearchBar";
import ProductList from "../../components/ProductSection/ProductList";
import ProductModal from "../../components/ProductSection/ProductModal";
import { type Product } from "../../components/ProductSection/types";
import ThreeInfo from "../../components/ThreeInfo/ThreeInfo";
import "./Product.css";
import FormContact from "../../components/FormContact/FormContact";

// Placeholder product data (Igual que antes)
const allProducts: Product[] = [
    { id: 1, name: "Caja de Cartón Simple", category: "Cajas", image: "https://www.argenpack.com/files/b0adde31c4d1b033db1401c2b21c38b2.png" },
    { id: 2, name: "Caja de Cartón Doble", category: "Cajas", image: "https://www.argenpack.com/files/c59387f044365b96558c45c1e4ae39e9.png" },
    { id: 3, name: "Separador de Cartón", category: "Accesorios", image: "https://www.argenpack.com/files/c59387f044365b96558c45c1e4ae39e9.png" },
    { id: 4, name: "Plancha de Cartón", category: "Planchas", image: "https://www.argenpack.com/files/2e47487961d23b7c820d553c5018f9d4.png" },
    { id: 5, name: "Caja para Archivo", category: "Cajas", image: "https://www.argenpack.com/files/4a5ebe27772bcb14f7944ed0b5f1e1b5.png" },
    { id: 6, name: "Cinta de Embalaje", category: "Accesorios", image: "https://www.argenpack.com/files/a9d209dbcf9c3586ede0f894a38343c4.png" },
    { id: 7, name: "Caja Agrícola", category: "Cajas", image: "https://www.argenpack.com/files/9bcb61dea1586a476b3777f57dd9191e.png" },
    { id: 8, name: "Plancha Doble-Doble", category: "Planchas", image: "https://www.argenpack.com/files/7c6ef7d4c1bf81fb27d4607acf0b8974.png" },
];

const allCategories = ["Todas", ...new Set(allProducts.map(p => p.category))];

const PRODUCTS_PER_PAGE = 6;

const Product = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProducts = allProducts.filter(product => {
        const matchesCategory = selectedCategory === "Todas" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory]);

    return (
        <section className="product-page-section">
            <Carrusel
            img1={ImgSliderOner}
            img2={ImgSliderTwo}
            img3={ImgSliderThree}
            titlePage="Productos elegidos por nuestros clientes"
            description="RESISTENCIA • DISEÑO • PROTECCIÓN"
            />
            <div className="container-products-and-filter">
                <div data-aos="fade-down-right">
                    <SearchBar initialSearchQuery={searchQuery} onSearch={setSearchQuery} />
                    <CategoryFilter
                            categories={allCategories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                    />
                </div>
                <div className="product-filters-container" data-aos="fade-down-left">
                    <ProductList products={paginatedProducts} onProductClick={handleProductClick} />
                    <div className="pagination-controls">
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>
                            Anterior
                        </button>
                        <span>Página {currentPage} de {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Siguiente
                        </button>
                    </div>

                    {selectedProduct && (
                        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
                    )}
                </div>
            </div>
            
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
        </section>
    );
}

export default Product;