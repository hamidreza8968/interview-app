"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductItem = function (_a) {
    var product = _a.product, onClick = _a.onClick;
    return (<div onClick={onClick}>
            <p>{product === null || product === void 0 ? void 0 : product.title}</p>
            <img src={product === null || product === void 0 ? void 0 : product.image} alt={"".concat(product === null || product === void 0 ? void 0 : product.title, " image")} width={100} height={100}/>
            <p>{product === null || product === void 0 ? void 0 : product.description}</p>
            <p>{(product === null || product === void 0 ? void 0 : product.availability_status) ? "".concat(product === null || product === void 0 ? void 0 : product.price, "$") : "Sold Out"}</p>
        </div>);
};
exports.default = ProductItem;
