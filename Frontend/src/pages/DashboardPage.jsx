import React from 'react';
import MainLayout from '../layouts/MainLayout';

function DashboardPage() {
    return (
        // Este conteúdo vai para o 'children' dentro do <main> do MainLayout
        <MainLayout>
            <section style={{ backgroundColor: 'rgb(94, 177, 177)' }}>
                {/* Aqui vai o conteúdo principal da sua dashboard (seções, cards, gráficos) */}
                <h1>USUARIO LOGADO</h1>
            </section>

            <article style={{ backgroundColor: 'rgb(28, 193, 25)' }}>
                
            </article>

            <aside style={{ backgroundColor: 'rgb(221, 84, 205)' }}>
                
            </aside>
        </MainLayout>
    );
}

export default DashboardPage;
