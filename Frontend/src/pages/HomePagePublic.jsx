
import React, { useState } from 'react';
import HomePageLayout from '../layouts/HomePageLayout';
import LoginModal from '../components/auth/LoginModal'; // 1. Importamos o modal

// Corrigi o nome da função para representar a Homepage
function HomePage() {
    // 2. Criamos o estado para controlar a visibilidade do modal
    const [showLoginModal, setShowLoginModal] = useState(false);

    // 3. Funções para abrir e fechar o modal
    const handleShowLogin = () => setShowLoginModal(true);
    const handleCloseLogin = () => setShowLoginModal(false);

    return (
        // Usamos um Fragment <>...</> para agrupar os elementos
        <>
            {/* 4. Passamos a função de abrir o modal para o Layout */}
            <HomePageLayout onLoginClick={handleShowLogin}>
                

            </HomePageLayout>

            {/* Renderizar o Modal e passar o estado para ele */}
            <LoginModal show={showLoginModal} onHide={handleCloseLogin} />
        </>
    );
}

// Corrigi o export para exportar o componente da página
export default HomePage;