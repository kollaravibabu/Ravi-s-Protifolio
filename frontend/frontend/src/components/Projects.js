import React from 'react';
import { Card } from './ui/card';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Woodworks Online Booking',
      description: 'A comprehensive booking system for woodwork services with real-time availability',
      image: 'https://res.cloudinary.com/dkwmrpolu/image/upload/v1760353982/woodworks_iwyyvf.png',
      tags: ['React', 'Node.js', 'MongoDB'],
      url: 'https://github.com/kollaravibabu/wood-works',
    },
    {
      title: 'Clothing E-commerce',
      description: 'Full-featured online clothing store with cart, payments, and order tracking',
      image: 'https://res.cloudinary.com/dkwmrpolu/image/upload/v1760353969/clothes_nujmcd.png',
      tags: ['React', 'Express', 'MySQL'],
      url: 'https://github.com/kollaravibabu/clothing-online',
    },
    {
      title: 'Deepfake Recognition',
      description: 'AI-powered system to detect deepfake content using machine learning algorithms',
      image: 'https://res.cloudinary.com/dkwmrpolu/image/upload/v1760353936/deepfake_fkt8fe.png',
      tags: ['Python', 'TensorFlow', 'React'],
      url: 'https://github.com/kollaravibabu/deepfake-recognation',
    },
    {
      title: 'Farm Product Booking',
      description: 'Platform connecting farmers directly with consumers for fresh produce',
      image: 'https://res.cloudinary.com/dkwmrpolu/image/upload/v1760353898/farms_kfd4ae.png',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Food Munch',
      description: 'Food ordering application with restaurant management and delivery tracking',
      image: 'https://res.cloudinary.com/dkwmrpolu/image/upload/v1760353904/food_munch_oupcop.png',
      tags: ['React', 'Express', 'MongoDB'],
      url: 'https://github.com/kollaravibabu/food-munch',
    },
    {
      title: 'College Complaint Management',
      description: 'Streamlined system for managing and tracking college complaints efficiently',
      image: 'https://res.cloudinary.com/dkwmrpolu/image/upload/v1760353883/collage_management_zszqdq.png',
      tags: ['React', 'Node.js', 'SQLite'],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="section-underline"></div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-overlay">
                    <ExternalLink className="icon" />
                  </a>
                ) : (
                  <div className="project-overlay">
                    <ExternalLink className="icon" />
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;