import { publication } from '../data/content';
import './Publication.css';

export default function Publication() {
  return (
    <section className="publication" id="publication">
      <div className="container">
        <span className="section-title">Research</span>
        <h2>Publication</h2>
        <a
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="publication-card"
        >
          <h3>{publication.title}</h3>
          <p className="publication-venue">{publication.venue}</p>
          <span className="publication-link">View on ResearchGate →</span>
        </a>
      </div>
    </section>
  );
}
