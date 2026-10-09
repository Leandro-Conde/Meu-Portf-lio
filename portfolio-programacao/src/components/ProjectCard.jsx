
import "../styles/components.css";

function ProjectCard({ project }) {
    const isAIProject = project.title === "Agente de IA";
    const isInDevelopment =
        project.status === "Em desenvolvimento" ||
        project.status === "Disponibilizado em breve";

    return (
        <article className="project-card">
            <div className="project-image">
                {isAIProject ? (
                    <div className="project-placeholder">
                        <h4>Imagem não disponível</h4>
                        <p>
                            Projeto em desenvolvimento.
                            Mais informações em breve.
                        </p>
                    </div>
              
                ) : isInDevelopment && project.title !== "Pixel Player" ? (
                    <div className="project-placeholder">
                        <h4>{project.status}</h4>
                        <p>{project.description}</p>
                    </div>
                ) : (
                    <img
                        src={project.image}
                        alt={`Preview do projeto ${project.title}`}
                    />
                )}
            </div>

            <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                    {project.technologies.map((technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="project-links">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver demonstração ↗
                        </a>
                    )}

                    {!project.demoUrl && (
                        <span className="project-link-disabled">
                            {project.status === "Disponibilizado em breve"
                                ? "Disponibilizado em breve"
                                : "Em desenvolvimento"}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;