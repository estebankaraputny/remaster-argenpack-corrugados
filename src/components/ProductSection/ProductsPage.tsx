import { useState } from "react"; // Ya no necesitas useEffect
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";
import { type Product } from "./types";
import "./ProductSection.css";

// Placeholder product data (Igual que antes)
const allProducts: Product[] = [
    { id: 1, name: "Caja de Cartón Simple", category: "Cajas", image: "https://via.placeholder.com/300x200.png?text=Caja+Simple" },
    { id: 2, name: "Caja de Cartón Doble", category: "Cajas", image: "https://via.placeholder.com/300x200.png?text=Caja+Doble" },
    { id: 3, name: "Separador de Cartón", category: "Accesorios", image: "https://via.placeholder.com/300x200.png?text=Separador" },
    { id: 4, name: "Plancha de Cartón", category: "Planchas", image: "https://via.placeholder.com/300x200.png?text=Plancha" },
    { id: 5, name: "Caja para Archivo", category: "Cajas", image: "https://via.placeholder.com/300x200.png?text=Caja+Archivo" },
    { id: 6, name: "Cinta de Embalaje", category: "Accesorios", image: "https://via.placeholder.com/300x200.png?text=Cinta" },
    { id: 7, name: "Caja Agrícola", category: "Cajas", image: "https://via.placeholder.com/300x200.png?text=Caja+Agro" },
    { id: 8, name: "Plancha Doble-Doble", category: "Planchas", image: "https://via.placeholder.com/300x200.png?text=Plancha+Doble" },
];

const allCategories = ["Todas", ...new Set(allProducts.map(p => p.category))];

const ProductsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // --- CORRECCIÓN AQUÍ ---
    // No usamos useState ni useEffect. Filtramos directamente.
    // Esto se recalcula automáticamente cada vez que cambia searchQuery o selectedCategory.
    const filteredProducts = allProducts.filter(product => {
        const matchesCategory = selectedCategory === "Todas" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="product-page-section">
            <div className="product-page-header">
                <h2>Nuestros Productos</h2>
                <p>Explorá nuestro catálogo de soluciones en cartón corrugado.</p>
            </div>
            
            <div className="product-filters-container">
                <SearchBar initialSearchQuery={searchQuery} onSearch={setSearchQuery} />
                <CategoryFilter
                    categories={allCategories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>
            
            {/* Pasamos la variable calculada directamente */}
            <ProductList products={filteredProducts} onProductClick={handleProductClick} />

            {selectedProduct && (
                <ProductModal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </section>
    );
};

export default ProductsPage;