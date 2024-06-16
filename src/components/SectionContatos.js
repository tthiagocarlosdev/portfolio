import React from "react";
import "./SectionContatos.css";

import SubTituloDaSecao from './SubTituloDaSecao';
import LinhaComSeta from "./LinhaComSeta";

const SectionContatos = () => {
    const enderecoEmail = 'tthiagocarlos.dev@gmail.com';
    const numeroWhatsapp = '353831578001';
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
        <section id="sectionContatos" className="displayFlexCenterCenter">
            <div className="sectionContatos larguraDaPagina displayFlexCenterCenter">
                <SubTituloDaSecao titulo="Contatos" />
                <LinhaComSeta />
                <div className="containerLinksContatos displayFlexCenterCenter">
                    <a className="linksContatos displayFlexCenterCenter" target="blank" href={`https://api.whatsapp.com/send?phone=${numeroWhatsapp}`}>
                        <i className="fa-brands fa-whatsapp"></i>
                        <p>WhatsApp</p>
                    </a>
                    <a className="linksContatos displayFlexCenterCenter" onClick={handleCopiarEmail} href="#!">
                        <i className="fa-regular fa-envelope"></i>
                        <p>E-mail</p>
                    </a>
                    <a className="linksContatos displayFlexCenterCenter" target="blank" href={enderecoYoutube}>
                        <i className="fa-brands fa-youtube"></i>
                        <p>YouTube</p>
                    </a>
                    <a className="linksContatos displayFlexCenterCenter" target="blank" href={enderecoGithub}>
                        <i className="fa-brands fa-github"></i>
                        <p>GitHub</p>
                    </a>
                    <a className="linksContatos displayFlexCenterCenter" target="blank" href={enderecoLinkedin}>
                        <i className="fa-brands fa-linkedin"></i>
                        <p>Linkedin</p>
                    </a>
                    <a className="linksContatos displayFlexCenterCenter" target="blank" href={enderecoInstagram}>
                        <i className="fa-brands fa-instagram"></i>
                        <p>Instagram</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SectionContatos;
