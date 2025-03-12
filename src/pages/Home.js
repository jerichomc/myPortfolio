import React from "react";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p className="home-subtext">
       
      </p>

      <div className="home-cards-container">
        <div className="info-card">
          <img
            src="/cartoon.png"
            alt="Jericho McCullough"
            className="profile-image"
          />
          <h2>Jericho McCullough</h2>
          <p>
            <strong>Age:</strong> 24
          </p>
          <p>
            <strong>Location:</strong> Spokane, WA
          </p>

        </div>

        {/*Bio Card */}
        <div className="bio-card">
          <h2>About Me</h2>
          <p>
          I'm a software engineering student passionate about developing
           applications that deliver real-world value to users.
            I’m always seeking opportunities to enhance my skills
             and stay up to date with emerging technologies to create
              more effective and impactful solutions.
          </p>
          <p>
            I've always had an interest in tech, and for me, starting to code
            was a thrill. I enjoy solving real-world problems and creating fun/interactive applications.
            The ability to turn an idea into a fully functional application is what inspires me every day.
          </p>
          <p>
            Outside of coding, I enjoy watching movies, playing video games, and
            spending time with my cat.
          </p>
          <p>
            This portfolio highlights my projects and my journey in software
            development.
          </p>
        </div>

        <div className="tech-stack-card">
          <h2>Technologies I've Worked With</h2>
          <div className="tech-badges">
            <img
              src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
              alt="Python badge"
              className="tech-badge"
            />
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="JavaScript badge"
              className="tech-badge"
            />
            <img
              src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white"
              alt="Java badge"
              className="tech-badge"
            />
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5 badge"
              className="tech-badge"
            />
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS badge"
              className="tech-badge"
            />
            <img
              src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
              alt="React badge"
              className="tech-badge"
            />
            <img
              src="https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=sql&logoColor=white"
              alt="SQL badge"
              className="tech-badge"
            />
            <img
              src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node.js badge"
              className="tech-badge"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB badge"
              className="tech-badge"
            />
            <img
              src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
              alt="Git badge"
              className="tech-badge"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
