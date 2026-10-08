import "../styles/components.css";

function ProjectCard({ project }) {
    return (
        <article className="project-card">

            <div className="project-image">
                <img
                    src={project.image}
                    alt={`Preview do projeto ${project.title}`}
                />
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

                    {project.github !== "#" && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    )}

                    {project.demo !== "#" && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                    )}

                </div>

            </div>

        </article>
    );
}

export default ProjectCard;