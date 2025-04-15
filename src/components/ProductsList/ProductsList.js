"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductItem_tsx_1 = require("../ProductItem/ProductItem.tsx");
var ProductsList = function (_a) {
    var products = _a.products, onProductClick = _a.onProductClick;
    return (<ul>
            {products.map(function (product, index) { return (<ProductItem_tsx_1.default key={index} product={product} onClick={function () { return onProductClick(product); }}/>); })}
        </ul>);
};
exports.default = ProductsList;
