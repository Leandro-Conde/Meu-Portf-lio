import "../styles/hero.css";

function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-content">
                <div className="hero-photo-container">
                    <img
                        src={`${import.meta.env.BASE_URL}images/perfil.jpg`}
                        alt="Foto de perfil de Leandro"
                        className="hero-photo"
                    />
                </div>

                <div className="hero-info">
                    <p className="hero-subtitle">
                        Olá, eu sou
                    </p>

                    <h1>Leandro</h1>

                    <h2>Desenvolvedor Full Stack</h2>

                    <p className="hero-specialization">
                        Especialização em Inteligência Artificial
                    </p>

                    <p className="hero-description">
                        Desenvolvedor Full Stack focado na criação de
                        aplicações web modernas e soluções inteligentes,
                        unindo front-end, back-end, bancos de dados e
                        Inteligência Artificial.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projetos" className="primary-button">
                            Ver projetos
                        </a>

                        <a href="#contato" className="secondary-button">
                            Entre em contato
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;