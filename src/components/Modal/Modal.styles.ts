import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.transparentBackground};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    background: ${({ theme }) => theme.modalBackground};
    padding: 2rem;
    border-radius: 12px;
    max-width: 400px;
    width: 100%;
    position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.regularWhite};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;