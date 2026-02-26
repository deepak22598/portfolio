import { skills } from '../data/content';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <span className="section-title">Tech</span>
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
