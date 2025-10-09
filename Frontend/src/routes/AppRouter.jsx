// Frontend/src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes'; // 🚨 IMPORTAÇÃO

// Importe suas páginas
import DashboardPage from '../pages/DashboardPage';
import HomePagePublic from '../pages/HomePagePublic';
// ... outras páginas



function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                
                {/* ROTAS PÚBLICAS (Acessíveis a todos) */}
                <Route path="/" element={<HomePagePublic />} /> 
                <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />

                {/* 🚨 ROTAS PROTEGIDAS (Apenas para usuários logados) */}
                <Route element={<ProtectedRoutes />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    {/* Exemplo: outras rotas protegidas */}
                    {/* <Route path="/calendario" element={<CalendarioPage />} /> */}
                    {/* <Route path="/perfil" element={<ProfilePage />} /> */}
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;