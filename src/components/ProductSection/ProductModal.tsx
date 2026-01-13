import type { Product } from "./types";

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
    // Stop propagation to prevent closing the modal when clicking on the content
    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={handleModalContentClick}>
                <button className="modal-close-button" onClick={onClose}>&times;</button>
                <div className="modal-image-container">
                    <img src={product.image} alt={product.name} className="modal-image" />
                </div>
                <div className="modal-details">
                    <p className="modal-product-category">{product.category}</p>
                    <h3 className="modal-product-name">{product.name}</h3>
                    <p className="modal-product-description">
                        Este es un texto de descripción detallada para el producto. Aquí se puede incluir información sobre las dimensiones, materiales, usos recomendados y otras características importantes que ayuden al cliente a tomar una decisión informada.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
