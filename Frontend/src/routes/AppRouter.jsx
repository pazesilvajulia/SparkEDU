// Frontend/src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes'; // 🚨 IMPORTAÇÃO

// Importe suas páginas
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
// ... outras páginas

const HomePagePublic = () => <h1>Bem-vindo ao SparkEDU! Faça Login!</h1>;

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                
                {/* ROTAS PÚBLICAS (Acessíveis a todos) */}
                <Route path="/" element={<HomePagePublic />} /> 
                <Route path="/login" element={<LoginPage />} />
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