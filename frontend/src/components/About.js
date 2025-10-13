import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Code, Database, Server } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, title: 'Frontend', count: '5+' },
    { icon: Server, title: 'Backend', count: '3+' },
    { icon: Database, title: 'Databases', count: '3+' },
  ];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="section-underline"></div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm studying Tech at <strong>MVR College of Engineering and Technology</strong>. 
              I'm a passionate Full Stack Developer skilled in creating web apps with clean UI 
              and powerful backend.
            </p>
            
            <p className="about-description">
              With expertise across the full development stack, I transform ideas into 
              functional, user-friendly applications that solve real-world problems.
            </p>

            <Button onClick={scrollToProjects} className="view-projects-btn">
              View Projects
            </Button>
          </div>

          <div className="about-cards">
            {highlights.map((item, index) => (
              <Card key={index} className="highlight-card">
                <div className="highlight-icon">
                  <item.icon className="icon" />
                </div>
                <h3 className="highlight-count">{item.count}</h3>
                <p className="highlight-title">{item.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;