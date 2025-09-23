import React from 'react';
import Sidebar from '../components/navigation/sidebar';

// O 'children' representa o conteúdo específico da página (ex: Dashboard, Configurações)
// O 'activePage' é usado para dizer à Sidebar qual botão deve ser destacado
function MainLayout({ children, activePage }) {
    return (
        <div className="app-container"> {/* Substitui a tag <body> para encapsular tudo */}
            
            {/* 1. Sidebar: Passamos qual é a página ativa */}
            <Sidebar currentPage={activePage} />

            {/* 2. Main: Recebe o conteúdo que será inserido (o 'children') */}
            <main>
                {children}
            </main>

            {/* 3. Footer: Seu footer */}
            <footer>
                {/* Conteúdo do footer se houver... */}
            </footer>
        </div>
    );
}

export default MainLayout;