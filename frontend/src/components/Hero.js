import React from 'react';
import { Button } from './ui/button';
import { Linkedin, Github, Mail, Instagram, MessageCircle, Download } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ravibabukolla/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/kollaravibabu/' },
    { icon: Mail, label: 'Email', href: 'mailto:ravikolla65@gmail.com' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/?text=Hello%20Ravibabu' },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-greeting">
              Hi, I am <span className="animated-name">Ravibabu</span>
            </h2>
            <h1 className="hero-title">
              I'm a <span className="gradient-text">Full Stack Developer</span>
            </h1>
            <p className="hero-description">
              Crafting seamless digital experiences with modern web technologies
            </p>
            
            <div className="social-buttons">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="social-btn"
                  onClick={() => window.open(social.href, '_blank')}
                  title={social.label}
                >
                  <social.icon className="icon" />
                </Button>
              ))}
            </div>

            <Button
              className="resume-btn"
              onClick={() => window.open('https://drive.google.com/file/d/1SJWkWkbWIFriO3Vtz1wpz0jTg5ECz9XQ/view?usp=drive_link', '_blank', 'noopener,noreferrer')}
            >
              <Download className="icon-sm" />
              View Resume
            </Button>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src="https://res.cloudinary.com/dch3h5par/image/upload/v1760214980/Ravi_sprofile_lhbce7.jpg" 
                alt="Developer"
                className="hero-image"
              />
              <div className="hero-image-bg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-pattern"></div>
      {/* Decorative overlays/blobs (optional DOM elements) */}
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-blob-2" aria-hidden="true" />
      <div className="hero-blob-3" aria-hidden="true" />
    </section>
  );
};

export default Hero;