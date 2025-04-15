"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Modal_styles_1 = require("./Modal.styles");
var Modal = function (_a) {
    var onClose = _a.onClose, children = _a.children;
    return (<Modal_styles_1.ModalBackground onClick={onClose}>
            <Modal_styles_1.ModalContainer onClick={function (e) { return e.stopPropagation(); }}>
                <Modal_styles_1.CloseButton onClick={onClose} aria-label="Close modal">×</Modal_styles_1.CloseButton>
                {children}
            </Modal_styles_1.ModalContainer>
        </Modal_styles_1.ModalBackground>);
};
exports.default = Modal;
