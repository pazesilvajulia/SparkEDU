// components/auth/RegisterModal.jsx

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; 
import '../../assets/styles/LoginForm.css';
import LogoSpark from '../../assets/images/logoSPARKEDU.png';

function RegisterModal({ show, onHide, onSwitchToLogin }) {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        const userData = {
            name: name,
            email: email,
            password: password 
        };

        try {
            // ===================================================================
            // ALTERAÇÃO PRINCIPAL AQUI: A URL completa do seu backend
            // ===================================================================
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Cadastro realizado com sucesso! Agora você pode fazer o login.');
                
                // ===================================================================
                // MELHORIA DE EXPERIÊNCIA: Troca para o modal de login
                // ===================================================================
                onSwitchToLogin(); // Chama a função para abrir o modal de login

            } else {
                // Mostra o erro vindo do backend (ex: "Este e-mail já está em uso.")
                alert(`Erro no cadastro: ${data.message}`);
            }

        } catch (error) {
            console.error('Falha ao conectar com o servidor:', error);
            alert('Não foi possível conectar ao servidor. Tente novamente mais tarde.');
        }
    };

    return (
        <Modal 
            show={show} 
            onHide={onHide} 
            centered
            dialogClassName="modalPersonalizado"
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <form className="login-form" onSubmit={handleSubmit}>
                    <img src={LogoSpark} alt="Logo SparkEDU" />
                    <h2>Crie sua conta</h2>

                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            placeholder="Nome Completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-primary">Cadastrar</button>
                    <div className="line"></div>

                    {/* Links para login social e etc. continuam aqui */}
                    <p className="register-link" style={{ textAlign: 'center' }}>
                         Já tem uma conta?{' '}
                        <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToLogin(); }}>
                            Faça login
                        </a>
                    </p>

                </form>
            </Modal.Body>
        </Modal>
    );
}

export default RegisterModal;