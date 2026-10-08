import "../styles/header.css";

function Header() {
    return (
        <header className="header">

            <a href="#inicio" className="logo">
                Leandro<span>.</span>
            </a>

            <nav className="nav">

                <a href="#inicio">
                    Início
                </a>

                <a href="#projetos">
                    Projetos
                </a>

                <a href="#sobre">
                    Sobre
                </a>

                <a href="#contato">
                    Contato
                </a>

            </nav>

        </header>
    );
}

export default Header;