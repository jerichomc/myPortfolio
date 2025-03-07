function Projects() {
    const projects = [
        {
            title: 'Movie Recommendation App 🎬',
            description: 'Web application that recommends movies based on user input.',
            tech: 'React, JavaScript, CSS, TMDb API',
            link: 'https://jerichomc.github.io/movieRecApp/',
        },
        {
            title: 'Task Manager ✅',
            description: 'Simple task manager web application using React.',
            tech: 'React, JavaScript, CSS, Local Storage',
            link: 'https://jerichomc.github.io/taskManager/',
        },
        {
            title: 'Yahtzee Game 🎲',
            description: 'Classic version of Yahtzee utilizing JavaScript and HTML/CSS.',
            tech: 'HTML, CSS, JavaScript',
            link: 'https://jerichomc.github.io/yahtzeeGame/',
        },
        {
            title: 'Digital Clock ⏰',
            description: 'Digital clock web application using JavaScript and HTML/CSS.',
            tech: 'HTML, CSS, JavaScript',
            link: 'https://jerichomc.github.io/digitalClock/',
        },

    ];

    return (
        <div>
            <h1>Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Projects;