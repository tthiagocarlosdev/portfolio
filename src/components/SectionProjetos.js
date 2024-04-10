import React from "react";
import "./SectionProjetos.css";

import SubTituloDaSecao from './SubTituloDaSecao';
import LinhaComSeta from "./LinhaComSeta";
import CardProjeto from './CardProjeto';
import projetos from './projetos';

const SectionProjetos = () => {
    return ( 
        <section id="sectionProjetos" className="displayFlexCenterCenter">
            <div className="sectionProjetos larguraDaPagina">
                <SubTituloDaSecao titulo="Projetos" />
                <LinhaComSeta/>
                <div className="containerDeCardsDosProjetos">
                    {projetos.length > 0 ? (
                        projetos.map((projeto, index) => (
                            <CardProjeto
                                key={index}
                                imagem={projeto.imagem}
                                texto={projeto.texto}
                                enderecoProjeto={projeto.enderecoProjeto}
                            />
                        ))
                    ) : (
                        <p className="paragrafoNenhumProjeto displayFlexCenterCenter">Nenhum projeto disponível no momento.</p>
                    )}
                </div>
            </div>
        </section>
     );
};
 
export default SectionProjetos;
