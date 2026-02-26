import { profile } from '../data/content';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.medium} target="_blank" rel="noopener noreferrer">Medium</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <p className="footer-copy">© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
