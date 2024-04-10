import React from "react";
import Teste from "./Teste";

import SubTituloDaSecao from './SubTituloDaSecao';
import LinhaComSeta from "./LinhaComSeta";

const SectionProjetos = () => {
    return ( 
        <section id="sectionProjetos">
            <SubTituloDaSecao titulo="Projetos" />
            <LinhaComSeta/>
            <Teste/>
        </section>
     );
}
 
export default SectionProjetos;