import React, { useState } from 'react';
import styles from '../../assets/styles/InlineRegisterForm.module.css'; // Criaremos este arquivo de estilo a seguir

function InlineRegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { name, email, password };
        console.log("Dados para cadastro:", userData);

        // ===================================================================
        // A LÓGICA DE CONEXÃO COM O BACKEND VEM AQUI
        // (Exatamente como no modal que fizemos antes)
        // ===================================================================
        /*
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
                // Aqui você pode redirecionar o usuário ou atualizar a UI
                setName('');
                setEmail('');
                setPassword('');
            } else {
                const errorData = await response.json();
                alert(`Erro: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Falha na comunicação com o servidor:', error);
            alert('Não foi possível realizar o cadastro. Tente novamente.');
        }
        */
        // ===================================================================
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <h2>Cadastre-se. É grátis!</h2>
                <div className={styles.formGroup}>
                    <input 
                        type="text" 
                        placeholder="Nome completo" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                </div>
                <div className={styles.formGroup}>
                    <input 
                        type="email" 
                        placeholder="Seu e-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className={styles.formGroup}>
                    <input 
                        type="password" 
                        placeholder="Crie uma senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    Criar minha conta
                </button>
            </form>
        </div>
    );
}

export default InlineRegisterForm;