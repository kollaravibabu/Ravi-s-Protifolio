import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Linkedin, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Karthik Wood Works',
      description: 'Successfully launched a comprehensive booking and representation website for woodwork services',
      icon: TrendingUp,
      url: 'https://www.karthikwoodworks.com/',
    },
    {
      title: 'suddhifarms',
      description: 'Developed and deployed a farm product selling platform connecting farmers with customers',
      icon: TrendingUp,
      url: 'https://www.suddhifarms.com/',
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
        <div className="section-underline"></div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <Card key={index} className="achievement-card">
              <div className="achievement-icon">
                <achievement.icon className="icon" />
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                <Button 
                  className="linkedin-btn"
                  onClick={() => window.open(achievement.url, '_blank')}
                >
                  <Linkedin className="icon-sm" />
                  Visit Website
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;