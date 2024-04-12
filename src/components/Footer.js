import React from "react";
import "./Footer.css"

const Footer = () => {

    return ( 
        <footer className="rodape displayFlexCenterCenter">
            <div className="containerLarguraDoRodape displayFlexCenterCenter larguraDaPagina">
                <p className="textoRodape displayFlexCenterCenter">Desenvolvido por <a href="#cabecalho"> tthiagocarlosdev</a> </p>
                <a className="setaRodape displayFlexCenterCenter" href="#cabecalho"> <i className="fa-solid fa-circle-arrow-up"></i></a>
            </div>
        </footer>
     );
}
 
export default Footer;