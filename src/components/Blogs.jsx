import { blogs, profile } from '../data/content';
import './Blogs.css';

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <span className="section-title">Writing</span>
        <h2>Blogs on Medium</h2>
        <p className="blogs-intro">
          I write about Java, concurrency, and software practices. Read more on{' '}
          <a href={profile.medium} target="_blank" rel="noopener noreferrer">Medium</a>.
        </p>
        <div className="blogs-grid">
          {blogs.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              <span className="blog-date">{post.date}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <span className="blog-link">Read on Medium →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
