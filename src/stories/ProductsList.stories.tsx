import * as React from 'react';
import ProductsList from '../components/Products/ProductsList/ProductsList.tsx';
import { ProductsListProps, Product } from '../components/Products/ProductItem.types.ts';

type Story = {
    (args: ProductsListProps & { numberOfItems?: number }): React.ReactElement;
    args?: Partial<ProductsListProps & { numberOfItems?: number }>;
};

export default {
    title: 'Components/ProductsList',
    component: ProductsList,
    argTypes: {
        numberOfItems: {
            control: { type: 'number', min: 1, max: 10 },
            defaultValue: 4,
        },
    },
};

// Mock product list
const mockProducts: Product[] = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    description: `This is the description for product ${i + 1}.`,
    price: (10 + i) * 1.5,
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
    availability_status: i % 2 === 0,
}));

// Template using numberOfItems from args
const Template: Story = ({ numberOfItems = 4, onProductClick }) => {
    const productsToShow = mockProducts.slice(0, numberOfItems);

    return (
        <ProductsList
            products={productsToShow}
            onProductClick={onProductClick!}
        />
    );
};

// Default story
export const Default = Template.bind({});
Default.args = {
    numberOfItems: 4,
    onProductClick: (product: Product) => alert(`Clicked on ${product.title}`),
};

// Another example story
export const EightProducts = Template.bind({});
EightProducts.args = {
    numberOfItems: 8,
    onProductClick: (product: Product) => console.log('Clicked:', product),
};
