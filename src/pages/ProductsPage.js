"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ProductsList_tsx_1 = require("../components/ProductsList/ProductsList.tsx");
var products_json_1 = require("../assets/data/products.json");
var Modal_tsx_1 = require("../components/Modal/Modal.tsx");
var iconList_ts_1 = require("../assets/icons/iconList.ts");
var ProductItem_tsx_1 = require("../components/ProductItem/ProductItem.tsx");
var ProductsPage = function () {
    var _a = (0, react_1.useState)(null), selectedProduct = _a[0], setSelectedProduct = _a[1];
    var mappedProducts = products_json_1.default.map(function (product) { return (__assign(__assign({}, product), { image: iconList_ts_1.default.products[product.image] })); });
    return (<div>
            <ProductsList_tsx_1.default products={mappedProducts} onProductClick={setSelectedProduct}/>
            {selectedProduct &&
            <Modal_tsx_1.default onClose={function () { return setSelectedProduct(null); }}>
                    <ProductItem_tsx_1.default product={selectedProduct}/>
                </Modal_tsx_1.default>}
        </div>);
};
exports.default = ProductsPage;
