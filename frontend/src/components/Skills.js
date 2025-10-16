import React, { useState, useRef } from 'react';
import { Card } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      ],
    },
  ];

  const [animating, setAnimating] = useState(null);
  const timeoutRef = useRef(null);

  const triggerAnimation = (skillName) => {
    // restart timeout if called repeatedly
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setAnimating(skillName);
    timeoutRef.current = setTimeout(() => {
      setAnimating(null);
      timeoutRef.current = null;
    }, 2000);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="section-underline"></div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => {
                  const logoClass =
                    skill.name === 'HTML' ? 'pop-left-html' :
                    skill.name === 'CSS' ? 'pop-right-css' :
                    skill.name === 'JavaScript' ? 'drift-js' :
                    skill.name === 'React' ? 'spinning-react' :
                    skill.name === 'Bootstrap' ? 'blink-bootstrap' :
                    skill.name === 'MySQL' ? 'mysql-fly' :
                    skill.name === 'Python' ? 'python-fade' : '';

                  return (
                    <Card key={skillIndex} className="skill-card">
                      <div
                        className={`skill-logo ${logoClass} ${animating === skill.name ? 'animate' : ''}`}
                        onMouseEnter={() => triggerAnimation(skill.name)}
                        onMouseMove={() => triggerAnimation(skill.name)}
                        onFocus={() => triggerAnimation(skill.name)}
                        onClick={() => triggerAnimation(skill.name)}
                        role="button"
                        tabIndex={0}
                      >
                        <img src={skill.logo} alt={skill.name} />
                      </div>
                      <p className="skill-name">{skill.name}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;