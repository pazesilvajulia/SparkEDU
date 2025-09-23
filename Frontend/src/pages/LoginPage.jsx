import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import LoginForm from '../components/auth/LoginForm';

function LoginPage() {
    return (
        // 1. Usamos o AuthLayout (sem sidebar)
        <AuthLayout>
            {/* 2. Inserimos o componente de formulário no miolo do Layout */}
            <LoginForm />
        </AuthLayout>
    );
}

export default LoginPage;