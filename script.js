/* --- Reset e Configurações Gerais --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #2c3e50;
    background-color: #f4f7f6;
    transition: background-color 0.3s, color 0.3s;
}

/* --- Cabeçalho --- */
header {
    background: linear-gradient(135deg, #1e824c, #27ae60);
    color: white;
    text-align: center;
    padding: 60px 20px;
    position: relative;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
}

header p {
    font-size: 1.1rem;
    opacity: 0.9;
}

/* Botão de Tema */
.theme-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.2s;
}

.theme-btn:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

/* --- Conteúdo Principal --- */
main {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 5px 25px rgba(0,0,0,0.05);
    transition: background-color 0.3s;
}

.intro-text, .conclusion-text {
    font-size: 1.15rem;
    color: #34495e;
    margin-bottom: 25px;
    text-align: justify;
}

/* Citação */
.citacao {
    background-color: #e8f5e9;
    border-left: 5px solid #27ae60;
    padding: 20px;
    margin: 30px 0;
    font-style: italic;
    border-radius: 0 8px 8px 0;
}

.citacao p {
    color: #1b5e20;
    font-size: 1.1rem;
}

.citacao cite {
    font-size: 0.9rem;
    color: #555;
    display: block;
    margin-top: 10px;
    font-weight: bold;
}

/* Seção de Caixa de Ações */
.acoes-section {
    background-color: #fafafa;
    border: 1px solid #eaeaea;
    padding: 30px;
    border-radius: 8px;
    margin: 30px 0;
    transition: background-color 0.3s, border-color 0.3s;
}

.acoes-section h2 {
    color: #1e824c;
    font-size: 1.4rem;
    margin-bottom: 20px;
    border-bottom: 2px solid #27ae60;
    padding-bottom: 8px;
}

.lista-acoes {
    list-style: none;
}

.lista-acoes li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    font-size: 1.05rem;
}

.lista-acoes li::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0;
    color: #27ae60;
    font-weight: bold;
    font-size: 1.2rem;
}

/* --- Rodapé --- */
footer {
    text-align: center;
    padding: 30px 20px;
    color: #7f8c8d;
    font-size: 0.9rem;
    margin-top: 60px;
    border-top: 1px solid #e0e0e0;
}

/* --- ESTILOS DO MODO ESCURO (Acionados via JS) --- */
body.dark-mode {
    background-color: #121212;
    color: #e0e0e0;
}

body.dark-mode main {
    background-color: #1e1e1e;
    box-shadow: 0 5px 25px rgba(0,0,0,0.5);
}

body.dark-mode .intro-text, 
body.dark-mode .conclusion-text {
    color: #b0bec5;
}

body.dark-mode .citacao {
    background-color: #1b2e24;
    border-left-color: #2ecc71;
}

body.dark-mode .citacao p {
    color: #a9dfbf;
}

body.dark-mode .citacao cite {
    color: #95a5a6;
}

body.dark-mode .acoes-section {
    background-color: #252525;
    border-color: #333;
}

body.dark-mode .acoes-section h2 {
    color: #2ecc71;
    border-bottom-color: #2ecc71;
}

body.dark-mode .lista-acoes li::before {
    color: #2ecc71;
}

/* Responsividade */
@media (max-width: 768px) {
    main {
        margin: 20px;
        padding: 20px;
    }
    header h1 {
        font-size: 1.8rem;
    }
    .theme-btn {
        position: static;
        margin-top: 15px;
        display: inline-block;
    }
}