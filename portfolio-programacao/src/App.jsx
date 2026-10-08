import Header from "./components/Header";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Technologies from "./sections/Technologies";

import Footer from "./components/Footer";

import "./styles/global.css";
import "./styles/contact.css";

function App() {
    return (
        <div className="app">

            <Header />

            <main>

                {/* Hero */}
                <Hero />

                {/* Projetos */}
                <Projects />

                {/* Sobre mim */}
                <About />

                {/* Tecnologias */}
                <Technologies />

                {/* Contato */}
                <section id="contato" className="contact-section">

                    <div className="section-header">

                        <p className="section-subtitle">
                            Contato
                        </p>

                        <h2>
                            Vamos construir algo juntos.
                        </h2>

                        <p>
                            Estou aberto a oportunidades, projetos e conexões
                            profissionais na área de desenvolvimento e
                            Inteligência Artificial.
                        </p>

                    </div>

                    <div className="contact-links">

                        {/* Email */}
                        <a
                            href="mailto:leandro27conde@gmail.com"
                            className="contact-card"
                        >
                            <span className="contact-label">
                                Email
                            </span>

                            <span className="contact-value">
                                leandro27conde@gmail.com
                            </span>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/Leandro-Conde"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <span className="contact-label">
                                GitHub
                            </span>

                            <span className="contact-value">
                                Leandro-Conde
                            </span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/leandro-conde-78379637b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <span className="contact-label">
                                LinkedIn
                            </span>

                            <span className="contact-value">
                                /in/leandro-conde-78379637b
                            </span>
                        </a>

                    </div>

                </section>

            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default App;