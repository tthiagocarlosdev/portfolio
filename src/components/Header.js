import React from "react";
import "./Header.css"
import "../App.css";

const Header = () => {
    return (
        <header id="cabecalho">
            <nav className="larguraDaPagina">
                <a className="linksCabecalho" href="#sobreMim">Sobre mim</a>
                <a className="linksCabecalho" href="#tecnologias">Tecnologias</a>
                <a className="linksCabecalho" href="#projetos">Projetos</a>
                <a className="linksCabecalho" href="#contatos">Contatos</a>
            </nav>
            <div className="textoDoTitulo larguraDaPagina">
                <h1>Olá! Meu nome é Thiago Carlos e</h1>
                <h2>Eu sou desenvolvedor front-end</h2>
            </div>
            
        </header>
    )
};

export default Header;