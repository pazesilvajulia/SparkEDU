import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  // 🚨 AQUI VOCÊ FAZ A VERIFICAÇÃO DE AUTENTICAÇÃO REAL.
  // Por enquanto, vamos simular que o usuário está logado.
  // Em um projeto real, você verificaria se há um token JWT no localStorage, por exemplo.
  const isUserAuthenticated = localStorage.getItem('authToken'); // Exemplo real

  return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;