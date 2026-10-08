import "../styles/technologies.css";

const technologyGroups = [
    {
        title: "Front-end",
        technologies: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Vite",
            "Recharts",
        ],
    },

    {
        title: "Back-end & APIs",
        technologies: [
            "Python",
            "FastAPI",
            "APIs REST",
        ],
    },

    {
        title: "Dados",
        technologies: [
            "SQL",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Supabase",
        ],
    },

    {
        title: "Desenvolvimento",
        technologies: [
            "Git",
            "GitHub",
            "Postman",
            "Testes",
            "Integração de Sistemas",
            "Clean Code",
            "POO",
        ],
    },

    {
        title: "Inteligência Artificial",
        technologies: [
            "Inteligência Artificial",
            "Agentes de IA",
        ],
    },

    {
        title: "Outros",
        technologies: [
            "APIs",
            "Arquitetura de Software",
            "Lógica de Programação",
            "Revisão de Código",
            "Desenvolvimento Web",
        ],
    },
];

function Technologies() {
    return (
        <section className="technologies-section">

            <div className="section-header">

                <p className="section-subtitle">
                    Tecnologias
                </p>

                <h2>
                    Tecnologias e conhecimentos
                </h2>

                <p>
                    Tecnologias, ferramentas e conhecimentos que utilizo
                    no desenvolvimento de aplicações e soluções de software.
                </p>

            </div>

            <div className="technology-groups">

                {technologyGroups.map((group) => (
                    <div
                        className="technology-group"
                        key={group.title}
                    >

                        <h3>
                            {group.title}
                        </h3>

                        <div className="technologies-grid">

                            {group.technologies.map((technology) => (
                                <div
                                    className="technology-card"
                                    key={technology}
                                >
                                    {technology}
                                </div>
                            ))}

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Technologies;