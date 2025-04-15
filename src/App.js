"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var ProductsPage_1 = require("./pages/ProductsPage");
var styled_components_1 = require("styled-components");
var theme_ts_1 = require("./styles/theme.ts");
function App() {
    return (<styled_components_1.ThemeProvider theme={theme_ts_1.Theme}>
            <ProductsPage_1.default />
        </styled_components_1.ThemeProvider>);
}
exports.default = App;
