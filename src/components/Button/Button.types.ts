export type Size = 'small' | 'medium' | 'large';
export type Variant = 'solid' | 'outline' | 'ghost';

export interface SharedProps {
    color?: string;
    size?: Size;
    variant?: Variant;
    disabled?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
    className?: string;
}

export type LinkProps = SharedProps & {
    href: string;
    onClick?: never;
};

export type ButtonProps = SharedProps & {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    href?: never;
};

export type ButtonComponentProps = LinkProps | ButtonProps;

export interface StyledProps {
    color: string;
    size: Size;
    variant: Variant;
    disabled?: boolean;
    fullWidth?: boolean;
}
