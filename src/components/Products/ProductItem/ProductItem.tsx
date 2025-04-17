import { ProductItemProps } from '../ProductItem.types.ts';
import Button from '../../Button/Button.tsx';
import { ProductContainer, ProductTextBox, Title, Description, Price, ProductImg } from './ProductItem.styles.ts';

const ProductItem = ({ product, onClick }: ProductItemProps) => {
    return (
        <ProductContainer onClick={onClick}>
            <ProductTextBox>
                <Title>{product?.title}</Title>
                <Description>{product?.description}</Description>
                <Price available={!!product?.availability_status}>
                    {product?.availability_status ? `${product?.price}$` : "Sold Out"}
                </Price>
                {product?.availability_status && <Button onClick={() => console.log("is clicked")}>Add</Button>}
            </ProductTextBox>
            <ProductImg src={product?.image} alt={`${product?.title} image`} />
        </ProductContainer>
    );
};

export default ProductItem;
