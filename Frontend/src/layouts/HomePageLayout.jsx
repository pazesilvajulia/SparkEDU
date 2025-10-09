import React, { useState } from 'react';
import styles from '../assets/styles/HomePage.module.css';
import LogoBranca from '../assets/images/logoBRANCA.png';
import mainImage from '../assets/images/mainImage.png';

// IMPORTAR CSS ESPECÍFICO AQUI


function HomePageLayout({ onLoginClick, children }) {
    return (
        <div className={styles.appContainer}>
            <header>
                <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
                    <div className="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img src={LogoBranca} alt="Logo SparkEDU" width="180vw" height="auto"/>
                            </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">O que é?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Como funciona?</a>
                                </li>
                                 <li className="nav-item">
                                    <button type="button" className="nav-link" onClick={onLoginClick}>
                                        Login
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="nav-link" >
                                        Cadastro
                                    </button>
                                </li>
                            </ul>
                            
                            
                        </div>
                    </div>
                </nav>
            </header>

            
            <main>  
                <article>
                    <section className={styles.section1}> 


                        <div className={styles.mainContent}>
                            <h1>Domine novas habilidades</h1>
                            <h2>Sem dinheiro, apenas conhecimento.</h2>
                            <p>Lorem ipsum dolor sit amet, magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href='#'>Começar já</a>
                        </div>
                        
                        <img src ={mainImage} alt='imagem legal'/>
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