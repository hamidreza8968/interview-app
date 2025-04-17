import { useState } from 'react';
import ProductsList from '../components/Products/ProductsList/ProductsList.tsx';
import products from '../assets/data/products.json';
import { Product } from '../components/Products/ProductItem.types.ts';
import Modal from '../components/Modal/Modal.tsx';
import IconList from '../assets/icons/iconList.ts';
import ProductItem from "../components/Products/ProductItem/ProductItem.tsx";

const ProductsPage = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const mappedProducts: Product[] = products.map((product) => ({
        ...product,
        image: IconList.products[product.image as keyof typeof IconList.products],
    }));

    return (
        <div>
            <ProductsList products={mappedProducts} onProductClick={setSelectedProduct} />
            {selectedProduct &&
                <Modal onClose={() => setSelectedProduct(null)}>
                    <ProductItem product={selectedProduct} />
                </Modal>
            }
        </div>
    );
};

export default ProductsPage;
