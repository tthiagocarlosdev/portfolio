// import "../Header/Header.css"
import "../../App.css";
import "./NavigationBar.css"

function Navigationbar() {
    return(
        <section className="sectionNavigatorBar display-flex-center-center"> 
            <nav className="container-nav page-width ">
                <a className="nav-links" href="#about-me-section">Sobre mim</a>
                <a className="nav-links" href="#section-tecnologias">Tecnologias</a>
                <a className="nav-links" href="#projects-section">Projetos</a>
                <a className="nav-links" href="#contact-section">Contatos</a>
            </nav>
        </section>
            
    );
};

export default Navigationbar;