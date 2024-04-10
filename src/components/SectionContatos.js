import React from "react";
import Teste from "./Teste";

import SubTituloDaSecao from './SubTituloDaSecao';
import LinhaComSeta from "./LinhaComSeta";

const SectionContatos = () => {
    return ( 
        <section id="sectionContatos">
            <SubTituloDaSecao titulo="Contatos" />
            <LinhaComSeta/>
            <Teste/>
        </section>
     );
}
 
export default SectionContatos;