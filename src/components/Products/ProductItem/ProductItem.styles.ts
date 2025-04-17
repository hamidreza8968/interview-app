import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
`;

export const ProductTextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex: 1;
`;

export const Title = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin: 0;
`;

export const Description = styled.p`
    font-size: 0.95rem;
    color: #666;
    margin: 0;
`;

export const Price = styled.p<{ available: boolean }>`
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.available ? '#2a9d8f' : '#e63946'};
    margin: 0;
`;

export const ProductImg = styled.img`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 0.75rem;
`;