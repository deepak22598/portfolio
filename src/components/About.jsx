import { profile } from '../data/content';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <span className="section-title">About</span>
        <h2>Summary</h2>
        <p className="about-text">{profile.summary}</p>
      </div>
    </section>
  );
}
