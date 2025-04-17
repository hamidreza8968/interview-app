import {ModalProps} from "./Modal.types.ts";
import {ModalBackground, ModalContainer, CloseButton} from './Modal.styles.ts';


const Modal = ({onClose, children}: ModalProps) => {
    return (
        <ModalBackground onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose} aria-label="Close modal">×</CloseButton>
                {children}
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
