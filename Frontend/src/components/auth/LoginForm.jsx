import React, { useState } from 'react';
import '../../assets/styles/LoginForm.css';
// IMPORTAR CSS ESPECÍFICO AQUI

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 🚨 A Lógica de Login vai aqui (chamada à API do Backend)
        console.log('Tentativa de Login:', { email, password });
        
        // Se for sucesso, o usuário seria redirecionado para o Dashboard
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
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
            
            <p className="register-link">
                Não tem conta? <a href="/cadastro">Cadastre-se aqui</a>
            </p>
        </form>
    );
}

export default LoginForm;