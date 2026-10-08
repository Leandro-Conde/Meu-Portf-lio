import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

function Projects() {
    return (
        <section className="projects-section" id="projetos">

            <div className="section-header">

                <p className="section-subtitle">
                    Meu trabalho
                </p>

                <h2>
                    Projetos
                </h2>

                <p>
                    Alguns dos projetos que desenvolvi utilizando diferentes
                    tecnologias e abordagens.
                </p>

            </div>

            <div className="projects-grid">

                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}

            </div>

        </section>
    );
}

export default Projects;