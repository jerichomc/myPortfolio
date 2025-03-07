function Home() {
    return (
      <div className="home-container">
        <h1>Welcome to My Portfolio</h1>

        <div className="home-cards-container">
          {/* Card 1: personal info */}
          <div className="info-card">
          <img src='/percy.jpg' alt="Jericho McCullough" className="profile-image" />
          <h2>Jericho McCullough</h2>
          <p>A software engineering student with a passion for software development. Currently pursuing my bachelor’s degree in software engineering.</p>
          </div>

          <div className="bio-card">
            <h2>About Me</h2>
            <p>
            I'm a software engineering student currently pursuing my bachelor's degree. 
            I have a passion for software development, with a focus on building efficient, user-friendly applications. 
            I'm continuously expanding my skills in web development, problem-solving, and software design.
            </p>
            <p>This portfolio showcases some of the projects I've worked on, highlighting my growth as a developer.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  