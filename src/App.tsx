import './App.css'
import ProductsPage from './pages/ProductsPage.tsx';
import {ThemeProvider} from 'styled-components';
import {Theme} from './styles/theme.ts';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <ProductsPage/>
        </ThemeProvider>
    )
}

export default App
