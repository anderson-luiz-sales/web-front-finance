import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FinancialMovement from './pages/FinancialMovement';
import Home from './pages/Home';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/financial-movement" element={<FinancialMovement />} />
            </Routes>
        </BrowserRouter>
    );
}