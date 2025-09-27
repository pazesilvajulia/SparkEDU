import React, { useState } from 'react';
import styles from '../assets/styles/HomePage.module.css';
import LogoPreta from '../assets/images/logoPRETA.png';
// IMPORTAR CSS ESPECÍFICO AQUI


// O 'children' representa o conteúdo específico da página (ex: Dashboard, Configurações)

function HomePageLayout() {
    return (
        <div className={styles.appContainer}> {/* Substitui a tag <body> para encapsular tudo */}
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img src={LogoPreta} alt="Logo SparkEDU" width="180vw" height="auto"/>
                            </a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">O que é?</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Como funciona?</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Cadastro</a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </nav>
            </header>

            
            <main>  {/* Todo conteudo menos header e footer */}
                <article>
                    <section className={styles.section1}> {/* Secao de conteudo individual */}

                    </section>

                    <section className={styles.section2}>

                    </section>

                </article>
            </main>

            <footer>
                <nav>

                </nav>
            </footer>

        </div>
    );
}

export default HomePageLayout;