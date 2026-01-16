import { useState } from "react"; // Ya no necesitas useEffect
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";
import { type Product } from "./types";
import "./ProductSection.css";



const ProductsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // --- CORRECCIÓN AQUÍ ---
    // No usamos useState ni useEffect. Filtramos directamente.
    // Esto se recalcula automáticamente cada vez que cambia searchQuery o selectedCategory.
    

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