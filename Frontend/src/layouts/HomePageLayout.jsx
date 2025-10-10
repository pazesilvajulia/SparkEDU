import React, { useState } from 'react';
import styles from '../assets/styles/HomePage.module.css';
import LogoSpark from '../assets/images/logoSPARKEDU.png';
import oque from '../assets/images/oque.jpg';
import como from '../assets/images/como.jpg';
import quem from '../assets/images/quem.jpg';

import InlineRegisterForm from '../components/auth/InlineRegisterForm.jsx';

// IMPORTAR CSS ESPECÍFICO AQUI


function HomePageLayout({ onLoginClick, onRegisterClick, children }) {
    return (
        <div className={styles.appContainer}>
            <header>
                <nav className="navbar navbar-expand-lg bg-white navbar-white">
                    <div className="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img src={LogoSpark} alt="Logo SparkEDU" width="180vw" height="auto"/>
                            </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse links" id="navbarSupportedContent">
                            <div class="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">O que é?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Como funciona?</a>
                                </li>
                                 
                            </ul>
                            

                                <button type="button" className="nav-link button1" onClick={onLoginClick}>
                                        Login
                                </button>

                                <button type="button" className="nav-link button2" onClick={onRegisterClick}>
                                        Cadastro gratuito
                                </button>
                            </div>
                            
                            
                        </div>
                    </div>
                </nav>
            </header>

            
            <main>  
                <article>
                    <section className={styles.section1}> 


                        <div className={styles.mainContent}>
                            <h1>Aprenda novas <br/>habilidades<br/>sem sair de casa.</h1>
                            <h2>Sem dinheiro, apenas conhecimento.</h2>
                            <a href='#'>Começar já</a>
                        </div>
                        
                        <InlineRegisterForm />
                    </section>

                    <section className={styles.section2}>

                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <img src={oque} alt="pessoa confusa" height="280vh"/>
                                
                                
                                <h1>O que é?</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                            

                            <div className={styles.card}>
                                <img src={como} alt="pessoa tirando selfie" height="280vh"/>
                                <h1>Como funciona?</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>

                            <div className={styles.card}>
                                <img src={quem} alt="grupo" height="280vh"/>
                                <h1>Quem pode usar?</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>

                        </div>

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