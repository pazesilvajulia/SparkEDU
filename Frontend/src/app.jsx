 /* // src/App.jsx
import DashboardPage from './pages/DashboardPage';

function App() {
  // Por enquanto, mostre apenas a primeira página logada
  // Quando adicionar o roteamento (React Router), este App.jsx fará a troca entre as páginas
  return (
    <DashboardPage />
  );
}

export default App; */

// Frontend/src/App.jsx

import React from 'react';
import AppRouter from './routes/AppRouter'; // Importa o roteador

function App() {
  return (
    // Agora o App apenas renderiza o Roteador, que decide qual página mostrar
    <AppRouter />
  );
}

export default App;
