"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseButton = exports.ModalContainer = exports.ModalBackground = void 0;
var styled_components_1 = require("styled-components");
exports.ModalBackground = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.transparentBackground;
});
exports.ModalContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: ", ";\n    padding: 2rem;\n    border-radius: 12px;\n    max-width: 400px;\n    width: 100%;\n    position: relative;\n"], ["\n    background: ", ";\n    padding: 2rem;\n    border-radius: 12px;\n    max-width: 400px;\n    width: 100%;\n    position: relative;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modalBackground;
});
exports.CloseButton = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  color: ", ";\n  cursor: pointer;\n\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  color: ", ";\n  cursor: pointer;\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.regularWhite;
}, function (_a) {
    var theme = _a.theme;
    return theme.secondary;
});
var templateObject_1, templateObject_2, templateObject_3;
