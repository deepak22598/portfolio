import { profile } from '../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner container">
        <p className="hero-label">Software Engineer</p>
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-primary">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary">
            LinkedIn
          </a>
          <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary">
            Medium
          </a>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
