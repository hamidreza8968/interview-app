import { ButtonComponentProps, StyledProps } from './Button.types';
import { StyledButton, StyledLink } from './Button.styles';
import { Theme } from '../../styles/theme.ts'

const Button = ({
                                                    children,
                                                    href,
                                                    onClick,
                                                    color = Theme.primary,
                                                    size = 'medium',
                                                    variant = 'solid',
                                                    disabled = false,
                                                    fullWidth = false,
                                                    className,
                                                    ...rest
                                                } : ButtonComponentProps) => {
    const sharedProps: StyledProps = { color, size, variant, disabled, fullWidth };

    if (href) {
        return (
            <StyledLink href={href} {...sharedProps} className={className} {...rest}>
                {children}
            </StyledLink>
        );
    }

    return (
        <StyledButton onClick={onClick} {...sharedProps} className={className} {...rest}>
            {children}
        </StyledButton>
    );
};

export default Button;
