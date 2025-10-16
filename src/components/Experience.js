import React from 'react';
import { Card } from './ui/card';
import { Briefcase, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      role: 'Full Stack Developer',
      company: 'AB DIGITALS',
      type: 'Part-Time',
      description: 'Developing and maintaining web applications with modern tech stack',
      wide: true,
    },
    {
      icon: Users,
      role: 'Freelancer',
      company: 'Self-Employed',
      type: 'Freelance',
      description: 'Worked on multiple web application projects for various clients',
      wide: true,
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="section-underline"></div>

        {/* Short highlights under Experience header */}
        <div className="experience-highlights">
          <ul>
            <li>Led front-end development with React, boosting website performance by <strong>30%</strong></li>
            <li>Collaborated with a team of <strong>5+ developers</strong> to create engaging features and enhance user experience</li>
            <li>Contributed to backend development and API integration for smooth functionality</li>
            <li>Gained hands-on experience in full-stack development, debugging, and deployment</li>
          </ul>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <Card key={index} className={"experience-card " + (exp.wide ? 'wide-card' : '')}>
              <div className="experience-icon">
                <exp.icon className="icon" />
              </div>
              <div className="experience-content">
                <h3 className="experience-role">{exp.role}</h3>
                <div className="experience-meta">
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-type">{exp.type}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;