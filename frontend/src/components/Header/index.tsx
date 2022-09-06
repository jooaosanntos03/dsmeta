import logo from "../../assets/img/dsmeta-logo.svg";
import "./style.css";

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Imagem azul com computadores e monitores"/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://www.instagram.com/jooaosanntos" target="_blank">@jooaosanntos</a></p>
            </div>
        </header>
    )
}

export default Header;