// components/auth/LoginModal.jsx

import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; 
import '../../assets/styles/LoginForm.css';
import LogoSpark from '../../assets/images/logoSPARKEDU.png';

function LoginModal({ show, onHide }) {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // A "mágica" acontece aqui dentro!
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = { email, password };

        try {
            // 1. Faz a chamada para a sua API de login no backend
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            // 2. Verifica se a resposta foi bem-sucedida (status 200)
            if (response.ok) {
                alert('Login realizado com sucesso!');
                
                // 3. Guarda o "passe VIP" (token) no navegador
                localStorage.setItem('token', data.token);

                // 3. VERIFIQUE ESTA LINHA
                navigate('/dashboard'); 

                // 4. Fecha o modal
                onHide();

                

            } else {
                // Se o backend retornou um erro (ex: senha errada), mostra a mensagem
                alert(`Erro: ${data.message}`);
            }

        } catch (error) {
            // Se houve um erro de rede (ex: backend desligado)
            console.error('Falha na comunicação com o servidor:', error);
            alert('Não foi possível realizar o login. Verifique sua conexão e tente novamente.');
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
                    <h2>Bem-vindo de volta!</h2>

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

                    <button type="submit" className="btn-primary">Entrar</button>
                    <div className="line"></div>

                    <div className="socials">
                        {/* Seus botões de login social continuam aqui */}
                    </div>
                    <div className="line"></div>

                    <p className="register-link">
                        Não tem conta? <a href="/cadastro">Cadastre-se aqui</a>
                    </p>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;