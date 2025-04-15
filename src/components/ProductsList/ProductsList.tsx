import {ProductsListProps} from '../../types/types.ts';
import ProductItem from "../ProductItem/ProductItem.tsx";

const ProductsList = ({ products, onProductClick }: ProductsListProps) => {
    return (
        <ul>
            {products.map((product, index) => (
                <ProductItem key={index} product={product} onClick={() => onProductClick(product)} />
            ))}
        </ul>
    );
};

export default ProductsList;