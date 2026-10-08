import "../styles/technologies.css";

const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Supabase",
    "Git",
    "GitHub",
    "Inteligência Artificial",
    "Agentes de IA",
];

function Technologies() {
    return (
        <section className="technologies-section">

            <div className="section-header">

                <p className="section-subtitle">
                    Tecnologias
                </p>

                <h2>
                    Ferramentas que utilizo
                </h2>

                <p>
                    Tecnologias que fazem parte dos meus estudos e projetos.
                </p>

            </div>

            <div className="technologies-grid">

                {technologies.map((technology) => (
                    <div
                        className="technology-card"
                        key={technology}
                    >
                        {technology}
                    </div>
                ))}

            </div>

        </section>
    );
}

export default Technologies;