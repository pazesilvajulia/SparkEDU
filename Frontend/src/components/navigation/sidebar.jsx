import React from 'react';
// Importe aqui o link para o seu arquivo de logo
import LogoBranca from '../../assets/images/logoBRANCA.png'; 

// Esta função representa um item de botão da sua barra lateral
const NavButton = ({ icon, text, isActive, link }) => (
    // As classes 'nav-btn' e 'active' (se isActive for true)
    <a className={`nav-btn ${isActive ? 'active' : ''}`} href={link}>
        {/* O ícone SVG (ou um componente de ícone se estiver usando uma biblioteca) */}
        {icon}
        <p>{text}</p>
    </a>
);

// Componente principal da barra lateral
function Sidebar() {
    return (
        <nav className="sidebar">
            {/* O logo */}
            <a href="/"><img className="logo-nav" src={LogoBranca} alt="Logo SparkEDU" /></a>
            
            <div className="container-nav-btn">
                
                {/* 1. Início (ativo) */}
                <NavButton 
                    text="Início" 
                    link="/" 
                    isActive={true} 
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                        </svg>
                    }
                />
                
                {/* 2. Calendário (e os demais...) */}
                <NavButton 
                    text="Calendário" 
                    link="/calendario" 
                    isActive={false} 
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                    }
                />
                
                {/* ... continue com os outros itens ... */}

                <NavButton 
                    text="Configurações" 
                    link="/configuracoes" 
                    isActive={false} 
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                        </svg>
                    }
                />
            </div>
        </nav>
    );
}

export default Sidebar;