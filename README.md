# ✨ SparkEDU

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)  [![Node.js](https://img.shields.io/badge/Node.js-v18+-green)](https://nodejs.org/)  [![React](https://img.shields.io/badge/React-v18-blue)](https://reactjs.org/)  

Plataforma web educacional construída com **React** e **Node.js**, projetada para oferecer uma experiência educacional fluida e moderna.

---

## 🎯 Sobre o Projeto

O SparkEDU é uma aplicação web completa, com **frontend dinâmico** e **backend robusto**, comunicando-se através de uma API.  
O objetivo é fornecer uma experiência de aprendizado online moderna e intuitiva.

---

## 🚀 Início Rápido

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)  
- npm (gerenciador de pacotes do Node.js)

---

### 🔹 Frontend

1. Navegue até o diretório do frontend:

```bash
cd Frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em http://localhost:5173

### 🔹 Backend

1. Abra um novo terminal e vá para o diretório do backend:

```bash
cd Backend
```


2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor da API:

```bash
npm start
```

### 🛠️ Tech Stack

Frontend: React, Vite, React Router

Backend: Node.js, Express (presumido)

Estilização: CSS 3

### 📂 Estrutura de Pastas

```bash
SPARKEDU/
├── Backend/
│   ├── routes/             # Rotas da API
│   ├── src/                # Lógica de negócio e controllers
│   └── ...
│
└── Frontend/
    ├── public/             # Arquivos públicos (index.html, favicon, etc.)
    ├── src/
    │   ├── api/            # Funções para comunicação com a API
    │   ├── assets/         # Recursos estáticos (imagens, estilos globais)
    │   ├── components/     # Componentes reutilizáveis
    │   ├── layouts/        # Estruturas de página (AuthLayout, MainLayout)
    │   ├── pages/          # Telas completas (LoginPage, DashboardPage)
    │   ├── routes/         # Componentes e lógica de roteamento
    │   └── App.jsx         # Componente principal
    └── ...
```

### 📜 Licença

Distribuído sob a Licença MIT. Veja LICENSE.md para mais informações.
