import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Enterprise-grade e-commerce solution featuring secure payment processing, inventory management, and customer analytics. Built with modern tech stack and optimized for high-traffic environments.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative workspace with advanced task allocation, team coordination features, and comprehensive analytics. Enables seamless team productivity with intuitive UI/UX.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      image: '📋',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Weather Intelligence',
      description: 'Advanced weather forecasting application with real-time data visualization, severe weather alerts, and location-based predictions. Provides accurate meteorological insights with beautiful design.',
      technologies: ['React', 'APIs', 'Axios', 'D3.js'],
      image: '⛅',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent and featured projects</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image" style={{ background: project.gradient }}>
                <span className="project-icon">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <button className="project-btn">View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
