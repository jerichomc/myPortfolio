import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'Movie Recommendation App 🎬',
            description: 'Web application that recommends movies based on user input.',
            tech: ['React', 'JavaScript', 'CSS', 'TMDb API'],
            link: 'https://jerichomc.github.io/movieRecApp/',
        },
        {
            title: 'Task Manager ✅',
            description: 'Simple task manager web application using React.',
            tech: ['React', 'JavaScript', 'CSS', 'Local Storage'],
            link: 'https://jerichomc.github.io/taskManager/',
        },
        {
            title: 'Yahtzee Game 🎲',
            description: 'Classic version of Yahtzee utilizing JavaScript and HTML/CSS.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://jerichomc.github.io/yahtzeeGame/',
        },
        {
            title: 'Weather Dashboard ⛅',
            description: 'Weather dashboard that displays current weather for given city.',
            tech: ['React', 'CSS', 'JavaScript', 'OpenWeather API'],
            link: 'https://jerichomc.github.io/weatherApi/',
        },
    ];

    //Function to map tech stack to badge URLs
    const getBadgeUrl = (tech) => {
        const badges = {
            React: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black',
            JavaScript: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
            CSS: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
            'TMDb API': 'https://img.shields.io/badge/TMDb%20API-000000?style=for-the-badge&logo=tmdb&logoColor=white',
            'Local Storage': 'https://img.shields.io/badge/Local%20Storage-F7B731?style=for-the-badge&logo=html5&logoColor=black',
            HTML: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
            'OpenWeather API': 'https://img.shields.io/badge/OpenWeather%20API-00A9FF?style=for-the-badge&logo=openweathermap&logoColor=white',
        };
        return badges[tech];
    };

    return (
        <div className="projects-page">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <p><strong>Tech Stack:</strong></p>
                            <div className="tech-stack">
                                {project.tech.map((tech, techIndex) => (
                                    <img
                                        key={techIndex}
                                        src={getBadgeUrl(tech)}
                                        alt={`${tech} badge`}
                                        className="tech-badge"
                                    />
                                ))}
                            </div>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
