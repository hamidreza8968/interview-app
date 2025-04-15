export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    availability_status: boolean;
};

export type ProductItemProps = {
    product: Product | null;
    onClick?: () => void;
};

export type ProductsListProps = {
    products: Product[];
    onProductClick: (product: Product) => void;
};

export type ModalProps = {
    onClose: () => void;
    children: React.ReactNode;
};