✨ SparkEDU
Plataforma web educacional construída com React e Node.js.
🎯 Sobre o Projeto
O SparkEDU é uma aplicação web completa, projetada para oferecer uma experiência educacional fluida e moderna. A arquitetura do projeto é dividida entre um frontend dinâmico e um backend robusto, comunicando-se através de uma API.

🚀 Início Rápido
Para colocar o projeto no ar, clone este repositório e siga os passos de configuração para o frontend e backend.

Pré-requisitos
Node.js (versão 18 ou superior)

npm (gerenciador de pacotes do Node.js)

Frontend
Navegue até o diretório do frontend:

Bash

cd Frontend
Instale todas as dependências do projeto:

Bash

npm install
Inicie o servidor de desenvolvimento:

Bash

npm run dev
O aplicativo estará disponível em http://localhost:5173 (ou outra porta, conforme o Vite informar).

Backend
Abra um novo terminal e navegue até o diretório do backend:

Bash

cd Backend
Instale as dependências da API:

Bash

npm install
Inicie o servidor da API:

Bash

npm start
🛠️ Tech Stack
Frontend: React, Vite, React Router

Backend: Node.js, Express (presumido)

Estilização: CSS 3

📂 Estrutura de Pastas
A organização do projeto é uma arquitetura modular, onde cada componente e funcionalidade tem seu próprio espaço.

SPARKEDU/
├── Backend/
│   ├── routes/             # Rotas da API
│   ├── src/                # Lógica de negócio e controllers
│   └── ...
│
└── Frontend/
    ├── public/             # Arquivos públicos (e.g., index.html, favicon)
    ├── src/
    │   ├── api/            # Funções para comunicação com a API
    │   ├── assets/         # Recursos estáticos (imagens, estilos globais)
    │   ├── components/     # Componentes reutilizáveis (botões, cards, formulários)
    │   ├── layouts/        # Estruturas de página (AuthLayout, MainLayout)
    │   ├── pages/          # Telas completas (e.g., LoginPage, DashboardPage)
    │   ├── routes/         # Componentes e lógica de roteamento
    │   └── App.jsx         # Componente principal
    └── ...
📜 Licença
Distribuído sob a Licença MIT. Veja LICENSE.md para mais informações.
