import React from "react";
import "./Footer.css"

const Footer = () => {

    return ( 
        <footer className="rodape">
            <div className="larguraDaPagina">
                <p className="textoRodape">Desenvolvido por <a href="#cabecalho"> tthiagocarlosdev</a> </p>
                <a className="setaRodape" href="#cabecalho"> <i className="fa-solid fa-circle-arrow-up"></i></a>
            </div>
        </footer>
     );
}
 
export default Footer;