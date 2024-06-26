import React from "react";
import "./SectionTecnologias.css"

import SubTituloDaSecao from './SubTituloDaSecao';
import LinhaComSeta from "./LinhaComSeta";

const SectionTecnologias = () => {
    return ( 
        <section id="sectionTecnologias" className="displayFlexCenterCenter">
            <div className="sectionTecnologias larguraDaPagina">
                <SubTituloDaSecao titulo="Tecnologias" />
                <LinhaComSeta/>
                <div className="containerCirculosDeTecnologias displayFlexCenterCenter">
                    <div className="circulosDeTecnologias displayFlexCenterCenter"> <i className="fa-brands fa-html5"></i> </div>
                    <div className="circulosDeTecnologias displayFlexCenterCenter"> <i className="fa-brands fa-css3-alt"></i> </div>
                    <div className="circulosDeTecnologias displayFlexCenterCenter"> <i className="fa-brands fa-js"></i> </div>
                    <div className="circulosDeTecnologias displayFlexCenterCenter"> <i className="fa-brands fa-react"></i> </div>
                    <div className="circulosDeTecnologias displayFlexCenterCenter"> <i className="fa-brands fa-git-alt"></i> </div>
                    <div className="circulosDeTecnologias displayFlexCenterCenter"> <i className="fa-brands fa-github"></i> </div>
                    <div className="circulosDeTecnologias displayFlexCenterCenter"> <i className="fa-brands fa-node-js"></i> </div>
                </div>
            </div>
        </section>
     );
}
 
export default SectionTecnologias;