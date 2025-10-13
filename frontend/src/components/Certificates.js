import React from 'react';
import { Button } from './ui/button';

const Certificates = () => {
  const certificates = [
    {
      title: 'SQL Intermediate',
      issuer: 'HackerRank',
      image: 'https://res.cloudinary.com/dkwmrpolu/image/upload/v1760360288/sql_im_pllnpx.png',
      link: 'https://www.hackerrank.com/certificates/iframe/071c4deff3dd',
    },
    {
      title: 'Python (Basic)',
      issuer: 'HackerRank',
      image: 'https://res.cloudinary.com/dkwmrpolu/image/upload/v1760360260/python_basic_dubket.png',
      link: 'https://www.hackerrank.com/certificates/iframe/afd728e0b499',
    },
    {
      title: 'Html and css static',
      issuer: 'Nextwave',
      image: 'https://res.cloudinary.com/dkwmrpolu/image/upload/v1760360922/static_wrizne.png',
      link: 'https://certificates.ccbp.in/intensive/static-website?id=RKNGHGMPVQ',
    },
    {
      title: 'SQL (Basic)',
      issuer: 'HackerRank',
      image: 'https://res.cloudinary.com/dkwmrpolu/image/upload/v1760360279/sql_basic_mkgqwz.png',
      link: 'https://www.hackerrank.com/certificates/iframe/af1b23e723ad',
    },
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-container">
        <h2 className="section-title">Certificates</h2>
        <div className="section-underline"></div>

        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="cert-overlay">
                  <div className="cert-meta">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    {cert.link && (
                      <Button
                        className="cert-btn"
                        onClick={() => window.open(cert.link, '_blank', 'noopener,noreferrer')}
                      >
                        View Certificate
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;