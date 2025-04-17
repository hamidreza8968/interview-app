import {ProductsListProps} from '../ProductItem.types.ts';
import ProductItem from '../ProductItem/ProductItem.tsx';
import { ProductsListGrid } from './ProductsList.styles.ts'
const ProductsList = ({ products, onProductClick }: ProductsListProps) => {
    return (
        <ProductsListGrid>
            {products.map((product, index) => (
                <ProductItem key={index} product={product} onClick={() => onProductClick(product)} />
            ))}
        </ProductsListGrid>
    );
};

export default ProductsList;