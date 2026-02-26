import { education } from '../data/content';
import './Education.css';

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <span className="section-title">Background</span>
        <h2>Education</h2>
        <div className="education-grid">
          {education.map((edu, i) => (
            <div key={i} className="education-card">
              <h3>{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-meta">{edu.period} · {edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
