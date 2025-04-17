import styled, { css } from 'styled-components';
import { StyledProps } from './Button.types';

const sizes = {
    small: '8px 16px',
    medium: '10px 20px',
    large: '12px 24px',
};

const fontSizes = {
    small: '14px',
    medium: '16px',
    large: '18px',
};

const variants = {
    solid: css<StyledProps>`
        background-color: ${({ color }) => color};
        color: white;
        border: none;
    `,
    outline: css<StyledProps>`
        background-color: transparent;
        color: ${({ color }) => color};
        border: 2px solid ${({ color }) => color};
    `,
    ghost: css<StyledProps>`
        background-color: transparent;
        color: ${({ color }) => color};
        border: none;
    `,
};

export const sharedStyles = css<StyledProps>`
    display: inline-block;
    padding: ${({ size }) => sizes[size]};
    font-size: ${({ size }) => fontSizes[size]};
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

    ${({ variant }) => variants[variant]}
`;

export const StyledButton = styled.button<StyledProps>`
    ${sharedStyles}
`;

export const StyledLink = styled.a<StyledProps>`
    ${sharedStyles}
`;
