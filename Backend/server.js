// server.js (Versão para MySQL)
// Cole todo este código no seu arquivo

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

// === MIDDLEWARE ===
// Permite que o servidor entenda JSON e que o frontend se comunique com ele
app.use(cors());
app.use(express.json());

// === CONEXÃO COM O BANCO DE DADOS (POOL) ===
// Cria um grupo de conexões prontas para serem usadas
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// === ROTAS DA API ===

// Rota de teste para ver se a API está no ar
app.get('/', (req, res) => {
    res.send('API está funcionando com MySQL!');
});

// Rota que recebe os dados do formulário de cadastro
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Validação simples
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    try {
        // Criptografa a senha
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Insere os dados no banco de dados
        const query = 'INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)';
        const values = [name, email, passwordHash];
        
        const [result] = await pool.execute(query, values);

        // Envia uma resposta de sucesso
        res.status(201).json({ 
            message: 'Usuário cadastrado com sucesso!',
            userId: result.insertId
        });

    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        
        // Verifica se o erro é de e-mail duplicado
        if (error.code === 'ER_DUP_ENTRY') { 
            return res.status(409).json({ message: 'Este e-mail já está em uso.' });
        }
        // Envia uma resposta de erro genérica
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});


// === INICIANDO O SERVIDOR ===
// Coloca o servidor para "ouvir" na porta especificada
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});