import React from 'react';

// Aceita o ícone, texto, link, e se deve estar ativo
function NavButton({ icon, text, link, isActive }) {
    // A classe 'active' é adicionada condicionalmente usando um Template Literal
    const classes = `nav-btn ${isActive ? 'active' : ''}`;
    
    return (
        <a className={classes} href={link}>
            {/* O 'icon' deve ser um elemento SVG ou outro componente */}
            {icon}
            <p>{text}</p>
        </a>
    );
}

export default NavButton;