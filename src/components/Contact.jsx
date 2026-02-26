import { profile } from '../data/content';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <span className="section-title">Get in touch</span>
        <h2>Contact</h2>
        <div className="contact-grid">
          <a href={`mailto:${profile.email}`} className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">{profile.email}</span>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-item">
            <span className="contact-label">Phone</span>
            <span className="contact-value">{profile.phone}</span>
          </a>
          <div className="contact-item">
            <span className="contact-label">Location</span>
            <span className="contact-value">{profile.location}</span>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/deepak22598</span>
          </a>
          <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">Medium</span>
            <span className="contact-value">@deepakkumar22598</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">deepak-kumar-389844110</span>
          </a>
        </div>
      </div>
    </section>
  );
}
