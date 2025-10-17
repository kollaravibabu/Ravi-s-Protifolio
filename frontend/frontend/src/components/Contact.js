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

    // ✅ Your deployed Google Apps Script Web App URL
    const endpoint = 'https://script.google.com/macros/s/AKfycbx_htUo3ERgGGtRX4Cq0QDanALu7selP436a71dHf2VYVEWXEDsBVvXqUaUUx8LQaOV/exec';

    // ✅ Use FormData (best for Apps Script + no-cors)
    const form = new FormData();
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors', // needed to bypass CORS restrictions
      body: form,
    })
      .then(() => {
        toast({
          title: 'Message Sent Successfully!',
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((err) => {
        console.error('Form submission error', err);
        toast({
          title: 'Submission failed',
          description: 'There was an error sending your message. Please try again later.',
          variant: 'destructive',
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-underline"></div>

        <div className="contact-wrapper">
          <Card className="contact-card">
            <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
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
