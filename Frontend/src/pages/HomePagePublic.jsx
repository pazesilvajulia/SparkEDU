
import React, { useState } from 'react';
import HomePageLayout from '../layouts/HomePageLayout';
import LoginModal from '../components/auth/LoginModal'; // 1. Importamos o modal
import RegisterModal from '../components/auth/RegisterModal';

// Corrigi o nome da função para representar a Homepage
function HomePage() {
    // 2. Criamos o estado para controlar a visibilidade do modal
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    // 3. Funções para abrir e fechar o modal
    const handleShowLogin = () => setShowLoginModal(true);
    const handleCloseLogin = () => setShowLoginModal(false);
    const handleShowRegister = () => setShowRegisterModal(true);
    const handleCloseRegister = () => setShowRegisterModal(false);

    return (
        // Usamos um Fragment <>...</> para agrupar os elementos
        <>
            {/* 4. Passamos a função de abrir o modal para o Layout */}
            <HomePageLayout onLoginClick={handleShowLogin} onRegisterClick={handleShowRegister}>
                

            </HomePageLayout>

            {/* Renderizar o Modal e passar o estado para ele */}
            <LoginModal show={showLoginModal} onHide={handleCloseLogin} />
            <RegisterModal show={showRegisterModal} onHide={handleCloseRegister} />
        </>
    );
}

// Corrigi o export para exportar o componente da página
export default HomePage;