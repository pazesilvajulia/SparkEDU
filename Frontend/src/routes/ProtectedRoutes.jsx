// components/auth/ProtectedRoutes.jsx (ou onde você o salvou)

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  // 1. Verificamos se o token existe no localStorage.
  //    A chave deve ser 'token', a mesma que usamos no LoginModal.jsx.
  const token = localStorage.getItem('token'); 

  // 2. Se o token existir (não for nulo), o usuário é considerado autenticado.
  //    - O <Outlet /> é um placeholder que vai renderizar o componente da rota aninhada (no nosso caso, o Dashboard).
  //
  // 3. Se o token NÃO existir, o usuário é redirecionado para a página inicial ("/")
  //    para que possa fazer o login.
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;