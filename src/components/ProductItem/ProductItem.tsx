import { ProductItemProps } from '../../types/types.ts';

const ProductItem = ({ product, onClick }: ProductItemProps) => {
    return (
        <div onClick={onClick}>
            <p>{product?.title}</p>
            <img src={product?.image} alt={`${product?.title} image`}  width={100} height={100}/>
            <p>{product?.description}</p>
            <p>{product?.availability_status ? `${product?.price}$` : "Sold Out"}</p>
        </div>
    );
};
export default ProductItem;