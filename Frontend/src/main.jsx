// Frontend/src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx'; // Use o nome do arquivo que funcionou (minúsculo ou maiúsculo)
import { BrowserRouter } from 'react-router-dom';

// 🚨 O ERRO PODE ESTAR AQUI: Se o caminho de um arquivo CSS ou a sintaxe estiver errado,
// o aplicativo não inicializa.
import './assets/styles/reset.css'; 
import './assets/styles/style.css'; 

//  ID '#root' tem que corresponder ao index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>,
);