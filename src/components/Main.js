import React from "react";
import "./Main.css"

import SectionSobreMim from "./SectionSobreMim";
import SectionTecnologias from "./SectionTecnologias";
import SectionProjetos from "./SectionProjetos";
import SectionContatos from "./SectionContatos";

const Main = () => {
    return ( 
        <main className="main">
            <SectionSobreMim/>
            <SectionTecnologias/>
            <SectionProjetos/>
            <SectionContatos/>
        </main>
     );
}
 
export default Main;