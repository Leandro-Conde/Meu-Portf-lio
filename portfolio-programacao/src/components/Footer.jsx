import "../styles/footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">
                    <h3>
                        Leandro<span>.</span>
                    </h3>

                    <p>
                        Desenvolvedor Full Stack com foco em
                        Inteligência Artificial.
                    </p>
                </div>

                <div className="footer-links">

                    <a
                        href="https://github.com/Leandro-Conde"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/leandro-conde-78379637b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="mailto:leandro27conde@gmail.com">
                        Email
                    </a>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © {currentYear} Leandro. Todos os direitos reservados.
                </p>

            </div>

        </footer>
    );
}

export default Footer;