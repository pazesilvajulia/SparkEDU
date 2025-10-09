// components/auth/RegisterModal.jsx

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; 
import '../../assets/styles/LoginForm.css';
import LogoSpark from '../../assets/images/logoSPARKEDU.png';

// Adicionei a prop onSwitchToLogin para permitir a troca para o modal de login
function RegisterModal({ show, onHide, onSwitchToLogin }) {
    
    // Estados para os campos do formulário de registro
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Validação Simples no Frontend
        // Verifica se as senhas digitadas são iguais
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return; // Interrompe a execução da função
        }

        // 2. Preparação dos Dados para Envio
        // Crie um objeto com os dados do usuário. 
        // Nunca envie a "confirmação de senha" para o backend.
        const userData = {
            // No banco de dados, você pode ter colunas como user_id (autoincremento), name, email, password_hash
            name: name,
            email: email,
            password: password 
        };

        console.log('Enviando dados de registro para o backend:', userData);

        // ===================================================================
        // 3. CONEXÃO COM O BANCO DE DADOS (VIA BACKEND API)
        // ===================================================================
        // A comunicação com o banco de dados NUNCA é feita diretamente do React.
        // O React (frontend) envia os dados para uma API (backend), e a API se comunica com o banco.
        
        try {
            // Use a função `fetch` ou uma biblioteca como `axios` para fazer a requisição.
            // Substitua '/api/register' pelo endpoint real da sua API.
            const response = await fetch('/api/register', {
                method: 'POST', // Método HTTP para criar um novo recurso (usuário)
                headers: {
                    'Content-Type': 'application/json', // Informa que estamos enviando dados em formato JSON
                },
                body: JSON.stringify(userData), // Converte o objeto JavaScript em uma string JSON
            });

            // Verifica se a requisição foi bem-sucedida (status 2xx)
            if (response.ok) {
                const result = await response.json(); // Pega a resposta do servidor (ex: { message: 'Usuário criado!' })
                console.log('Resposta do servidor:', result);
                alert('Cadastro realizado com sucesso!');
                onHide(); // Fecha o modal após o sucesso do cadastro
            } else {
                // Se o servidor retornar um erro (ex: email já existe), você pode tratar aqui
                const errorData = await response.json();
                console.error('Erro no cadastro:', errorData.message);
                alert(`Erro no cadastro: ${errorData.message}`);
            }

        } catch (error) {
            // Captura erros de rede ou falhas na comunicação com a API
            console.error('Falha ao conectar com o servidor:', error);
            alert('Não foi possível conectar ao servidor. Tente novamente mais tarde.');
        }
        // ===================================================================
        // FIM DA SEÇÃO DE CONEXÃO
        // ===================================================================
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
                    {/* Texto alterado para refletir o registro */}
                    <h2>Crie sua conta</h2>

                    {/* Novo campo: Nome */}
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
                    
                    {/* Novo campo: Confirmação de Senha */}
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

                    {/* Texto do botão alterado */}
                    <button type="submit" className="btn-primary">Cadastrar</button>
                    <div className="line"></div>

                    <div className="socials">
                        <a className="btn-socials">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="3vh" fill="black" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                            </svg>
                        </a>
                        <a className="btn-socials">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="3vh" fill="black" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </a>
                    </div>

                </form>
            </Modal.Body>
        </Modal>
    );
}

export default RegisterModal;