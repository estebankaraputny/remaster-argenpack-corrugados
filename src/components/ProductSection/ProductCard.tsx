import type { Product } from "./types"; // Import the type from the new types file

interface ProductCardProps {
    product: Product;
    onProductClick: (product: Product) => void;
}

const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
    return (
        <div className="product-card" onClick={() => onProductClick(product)}>
            <div className="product-card-image-container">
                <img src={product.image} alt={product.name} className="product-card-image" />
            </div>
            <div className="product-card-content">
                <p className="product-card-category">{product.category}</p>
                <h4 className="product-card-name">{product.name}</h4>
            </div>
        </div>
    );
};

export default ProductCard;
