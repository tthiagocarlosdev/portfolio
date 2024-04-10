import React from "react";
import "./SectionSobreMim.css"
import SubTituloDaSecao from './SubTituloDaSecao';

import LinhaComSeta from "./LinhaComSeta";

const SectionSobreMim = () => {
    const fotoPerfil = "https://avatars.githubusercontent.com/u/76978748?v=4";

    return ( 
        <section id="sectionSobreMim">
            <div className="sectionSobreMim larguraDaPagina">
                <SubTituloDaSecao titulo="Sobre Mim" />
                <LinhaComSeta/>
                <div className="containerFotoETextoSobreMim">
                    <figure>
                        <img id="photo" src={fotoPerfil} alt="Foto do Github" title="Foto do perfil do Github"/>
                    </figure>
                    <div className="containerTextoSobreMim">
                        <p>Meu nome é Thiago Carlos, desenvolvedor Front-end com dois anos de experiência.</p>
                        <p>Minhas habilidades envolvem a criação da parte visual de um site, com botões, textos e imagens na tela, além de navegação do site.</p>
                        <p>Sites responsivos que possibilitam ao usuário um uso confortável em Desktops e dispositivos menores, como tablets, laptops e smartphones.</p>
                    </div>
                </div>
            </div>
        </section>
     );
};
 
export default SectionSobreMim;