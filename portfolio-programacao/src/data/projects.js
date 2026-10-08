const projects = [
    {
        id: 1,
        title: "Atlas Finance",
        description:
            "Aplicação para organização e acompanhamento financeiro, com dashboard, transações e visualização de dados.",
        technologies: ["React", "JavaScript", "Supabase"],
        image: `${import.meta.env.BASE_URL}projects/atlas-finance.png`,
        github: "#",
        demo: "#",
    },

    {
        id: 2,
        title: "Gerenciador de Tarefas",
        description:
            "Aplicação para gerenciamento de tarefas com foco em organização, produtividade e experiência de uso.",
        technologies: ["React", "JavaScript", "CSS"],
        image: `${import.meta.env.BASE_URL}projects/task-manager.png`,
        github: "#",
        demo: "#",
    },

    {
        id: 3,
        title: "Gerenciador de Tarefas V2",
        description:
            "Evolução do gerenciador de tarefas com melhorias de interface, funcionalidades e estrutura do projeto.",
        technologies: ["React", "JavaScript", "CSS"],
        image: `${import.meta.env.BASE_URL}projects/task-manager-v2.png`,
        github: "#",
        demo: "#",
    },

    {
        id: 4,
        title: "Agente de IA",
        description:
            "Protótipo experimental de um agente baseado em inteligência artificial.",
        technologies: ["Python", "IA"],
        image: null,
        github: "#",
        demo: "#",
        inDevelopment: true,
    },

    {
        id: 5,
        title: "Pixel Player",
        description:
            "Projeto em desenvolvimento voltado para uma experiência de reprodução e interação com conteúdo.",
        technologies: ["React", "JavaScript"],
        image: `${import.meta.env.BASE_URL}projects/pixel-player.png`,
        github: "#",
        demo: "#",
    },
];

export default projects;