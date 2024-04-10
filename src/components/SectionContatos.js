import React from "react";
import "./SectionContatos.css";

import SubTituloDaSecao from './SubTituloDaSecao';
import LinhaComSeta from "./LinhaComSeta";

const SectionContatos = () => {
    const enderecoEmail = 'tthiagocarlos.dev@gmail.com';
    const numeroWhatsapp = '5581988358179';
    const enderecoYoutube = 'https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw';
    const enderecoGithub = 'https://github.com/tthiagocarlosdev';
    const enderecoLinkedin = 'https://www.linkedin.com/in/thiago-carlos-80a480244/';
    const enderecoInstagram = 'https://www.instagram.com/tthiagocarlos.dev/';

    const handleCopiarEmail = () => {
        navigator.clipboard.writeText(enderecoEmail)
            .then(() => {
                console.log('Email copiado para a área de transferência:', enderecoEmail);
                alert('Email copiado para a área de transferência: ' + enderecoEmail);
            })
            .catch(error => {
                console.error('Erro ao copiar email para a área de transferência:', error);
                alert('Erro ao copiar email para a área de transferência. Por favor, tente novamente.');
            });
    };

    return (
        <section id="sectionContatos">
            <div className="sectionContatos larguraDaPagina">
                <SubTituloDaSecao titulo="Contatos" />
                <LinhaComSeta />
                <div className="containerLinksContatos">
                    <a className="linksContatos" target="blank" href={`https://api.whatsapp.com/send?phone=${numeroWhatsapp}`}>
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a className="linksContatos" onClick={handleCopiarEmail} href="#!">
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                    <a className="linksContatos" target="blank" href={enderecoYoutube}>
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a className="linksContatos" target="blank" href={enderecoGithub}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a className="linksContatos" target="blank" href={enderecoLinkedin}>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a className="linksContatos" target="blank" href={enderecoInstagram}>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SectionContatos;
