import React, { useState } from 'react';
import '../../assets/styles/LoginForm.css';
import LogoPreta from '../../assets/images/logoPRETA.png';
// IMPORTAR CSS ESPECÍFICO AQUI

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //  A Lógica de Login vai aqui (chamada à API do Backend)
        console.log('Tentativa de Login:', { email, password });
        
        // Se for sucesso, o usuário seria redirecionado para o Dashboard
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>

            <img src={LogoPreta} alt="Logo SparkEDU branca" />            
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
                <a className="btn-socials">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="3vh" fill="black" class="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                    </svg>
                </a>

                <a className="btn-socials">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2w" height="3vh" fill="black" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a>
            </div>
            <div className="line"></div>

            

            <p className="register-link">
                Não tem conta? <a href="/cadastro">Cadastre-se aqui</a>
            </p>

            
        </form>
    );
}

export default LoginForm;