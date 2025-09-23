import React from 'react';
// Não importar sidebar

// Estilo e estrutura de Login e Cadastro
function AuthLayout({ children }) {
    return (
        <div className="auth-container">
            {/* Opcional:  colocar aqui um logo grande ou um footer específico */}
            
            <section>
                
            </section>
            <main className="auth-content">
                {/* conteúdo da página de Login ou Cadastro */}
                {children}
            </main>
            
            {/* ADICIONAR?: Footer de autenticação */}

           
        </div>
    );
}

export default AuthLayout;

// (Lembre-se de adicionar classes como .auth-container e .auth-content ao seu CSS global.)