import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      image: "🛒"
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio with animations",
      tech: ["React", "CSS3", "JavaScript"],
      image: "💼"
    },
    {
      title: "Task Management App",
      description: "Real-time collaboration tool for teams",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      image: "✅"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather forecast application",
      tech: ["React", "API", "Charts.js"],
      image: "🌤️"
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 70 }
  ];

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="red-orb" style={{
          left: `${mousePosition.x * 0.02}px`,
          top: `${mousePosition.y * 0.02}px`
        }}></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-bracket">{"<"}</span>
          PORTFOLIO
          <span className="logo-bracket">{"/>"}</span>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setActiveSection('home')} 
             className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" onClick={() => setActiveSection('about')}
             className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#projects" onClick={() => setActiveSection('projects')}
             className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#skills" onClick={() => setActiveSection('skills')}
             className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#contact" onClick={() => setActiveSection('contact')}
             className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          {/* PROFILE PICTURE - Change the src to your image URL */}
          <div className="hero-profile">
            <img 
             src="/src/assets/profile.jpg"
              alt="Profile" 
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="profile-placeholder">👨‍💻</div>
          </div>

          <div className="glitch" data-text="HELLO">HELLO</div>
          <h1 className="hero-title">
            I'm a <span className="gradient-text">Full Stack Developer</span>
          </h1>
          <p className="hero-subtitle">Creating beautiful and functional web experiences</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">01.</span> About Me
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer who loves creating innovative web solutions. 
                With years of experience in full-stack development, I specialize in building 
                responsive and user-friendly applications.
              </p>
              <p>
                My journey in web development started with curiosity and has evolved into 
                a career dedicated to crafting exceptional digital experiences. I'm constantly 
                learning new technologies and best practices to stay at the forefront of the industry.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>30+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-frame">
                {/* SECOND PROFILE PICTURE - Change the src to your image URL */}
                <img 
                  src="https://i.imgur.com/placeholder.jpg"
                  alt="Profile" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-placeholder" style={{ display: 'none' }}>👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">02.</span> Featured Projects
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-icon">{project.image}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <button className="project-link">View Project →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">03.</span> Skills & Expertise
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">04.</span> Get In Touch
          </h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>your.email@example.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+63 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>Philippines</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
          <p className="footer-text">© 2024 Portfolio. Designed & Built by You</p>
        </div>
      </footer>
    </div>
  );
}

export default App;