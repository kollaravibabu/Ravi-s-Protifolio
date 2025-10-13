import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Send } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const useBackend = process.env.REACT_APP_USE_BACKEND === 'true';

    if (useBackend) {
      // Send JSON to backend /api/contact
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(async (res) => {
          const data = await res.json().catch(() => null);
          if (!res.ok) throw new Error(data?.detail || 'Network response was not ok');
          toast({ title: 'Message Sent Successfully!', description: "Thank you for reaching out. I'll get back to you soon." });
          setFormData({ name: '', email: '', phone: '', message: '' });
        })
        .catch((err) => {
          console.error('Form submission error', err);
          toast({ title: 'Submission failed', description: 'There was an error sending your message. Please try again later.', variant: 'destructive' });
        })
        .finally(() => setIsSubmitting(false));
    } else {
      // Default: POST to Google Apps Script endpoint.
      // Use JSON + CORS (preferred) and fall back to form-encoded if needed.
      const endpoint = 'https://script.google.com/macros/s/AKfycbx1snbIikxJpxdOnFN8WapNDA57U5HDM3DyM5mrm0qlIqFrvcJci1b2cVhMcGBIdBsrMg/exec';

      // Try JSON + CORS first. Many Apps Script deployments accept JSON if doPost parses it.
      fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(async (res) => {
          // If the response is opaque (no-cors or CORS blocked), res.ok may be false and status 0.
          if (res.type === 'opaque' || res.status === 0) {
            // Fallback to form-encoded POST (no-cors) for older Apps Script endpoints
            const params = new URLSearchParams();
            Object.keys(formData).forEach((key) => params.append(key, formData[key]));
            return fetch(endpoint, {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
              body: params.toString(),
            });
          }
          if (!res.ok) throw new Error('Network response was not ok');
          return res.text();
        })
        .then(() => {
          toast({ title: 'Message Sent Successfully!', description: "Thank you for reaching out. I'll get back to you soon." });
          setFormData({ name: '', email: '', phone: '', message: '' });
        })
        .catch((err) => {
          console.error('Form submission error', err);
          toast({ title: 'Submission failed', description: 'There was an error sending your message. Please try again later.', variant: 'destructive' });
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-underline"></div>

        <div className="contact-wrapper">
          <Card className="contact-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send className="icon-sm" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;