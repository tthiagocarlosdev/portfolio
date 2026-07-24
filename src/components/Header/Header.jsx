import "../Header/Header.css"
import "../../App.css";

import Navigationbar from "../NavigationBar/NavigationBar";

function Header () {
    return (
        <header id="header" className="display-flex-center-center">
            <div className="container-title-text page-width display-flex-center-center">
                <h1>Olá! Meu nome é Thiago Carlos e</h1>
                <h2>Eu sou desenvolvedor front-end</h2>
            </div>
            
        </header>
    );
};

export default Header;