import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FinancialMovement from './pages/FinancialMovement';
import Home from './pages/Home';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/financial" element={<FinancialMovement />} />
        </Routes>
    );
}