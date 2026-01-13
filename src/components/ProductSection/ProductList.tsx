import ProductCard from "./ProductCard";
import type { Product } from "./types";

interface ProductListProps {
    products: Product[];
    onProductClick: (product: Product) => void;
}


const ProductList = ({ products, onProductClick }: ProductListProps) => {
    return (
        <div className="product-list-container">
            {products.length > 0 ? (
                products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onProductClick={onProductClick}
                    />
                ))
            ) : (
                <p className="no-products-message">
                    No se encontraron productos que coincidan con su búsqueda.
                </p>
            )}
        </div>
    );
};

export default ProductList;
