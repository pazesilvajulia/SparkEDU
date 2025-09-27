
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
