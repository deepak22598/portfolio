import { experience } from '../data/content';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <span className="section-title">Career</span>
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((job, i) => (
            <article key={i} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{job.role}</h3>
                  <span className="timeline-company">{job.company}</span>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
