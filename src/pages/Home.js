import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__bg-text">ARCH</div>
        <div className="container hero__content">
          <h1 className="hero__title">
            Architectural<br />
            Excellence<br />
            Through Precision<br />
            Engineering.
          </h1>
          <p className="hero__subtitle">
            Developing structural frameworks that prioritize utility and clarity.
            Our systems-first approach defines the future of digital and physical infrastructure.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn-primary">
              Explore Our Approach
            </Link>
          </div>
        </div>
      </section>

      <section className="section principles">
        <div className="container">
          <div className="principles__header">
            <span className="label-tag">Our Foundation</span>
            <h2>Core Principles</h2>
          </div>
          <div className="principles__grid">
            <article className="principle-card">
              <div className="principle-card__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>Structural Integrity</h3>
              <p>Building systems designed for resilience, ensuring every component withstands operational demand and temporal pressure.</p>
            </article>

            <article className="principle-card">
              <div className="principle-card__icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <h3>Modular Systems</h3>
              <p>Composable architecture that allows independent scaling, deployment, and replacement of discrete functional units.</p>
            </article>

            <article className="principle-card">
              <div className="principle-card__icon">
                <svg viewBox="0 0 24 24">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </div>
              <h3>Functional Utility</h3>
              <p>Every design decision rooted in operational purpose — eliminating decorative overhead while maximizing system clarity.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section capabilities">
        <div className="container">
          <div className="capabilities__header">
            <div>
              <span className="label-tag">Capabilities</span>
              <h2>Featured Services</h2>
            </div>
            <Link to="/services">View All Services</Link>
          </div>
          <div className="services-grid">
            <article className="service-card">
              <span className="service-card__tag">01 — Core</span>
              <h3>System Architecture Design</h3>
              <p>Comprehensive blueprints for scalable enterprise ecosystems. We map complexity into clarity.</p>
              <div className="service-card__tag-list">
                <span className="service-card__tag-item">Information Mapping</span>
                <span className="service-card__tag-item">Flow Optimization</span>
              </div>
            </article>

            <article className="service-card">
              <span className="service-card__tag">02 — Standards</span>
              <h3>Protocol Development</h3>
              <p>Establishing rigorous standards for operational consistency across all integration touchpoints.</p>
              <div className="service-card__tag-list">
                <span className="service-card__tag-item">Compliance</span>
                <span className="service-card__tag-item">Documentation</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section identity">
        <div className="container">
          <span className="label-tag">Our Identity</span>
          <h2 style={{ marginBottom: 'var(--space-6)' }}>
            About ARCHI-TECH<br />Global Systems
          </h2>
          <p style={{ marginBottom: 'var(--space-8)' }}>
            Founded on the principles of precision and structural integrity, ARCHI-TECH provides
            the framework for modern digital and physical infrastructures — from the ground up.
          </p>
          <Link to="/about" className="btn btn-outline">
            Learn Our History
          </Link>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Construct<br />Your Vision?</h2>
          <p>Contact our lead engineers to begin the architectural consultation phase for your project.</p>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--color-white)', color: 'var(--color-black)', borderColor: 'var(--color-white)' }}>
              Initiate Project
            </Link>
            <a href="/#" className="btn btn-outline-white">Download Credentials</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__logo">ARCHI-TECH</span>
          <div className="footer__links">
            <a href="/#">Privacy Policy</a>
            <a href="/#">Terms of Service</a>
            <a href="/#">Cookies</a>
            <a href="/#">Sitemap</a>
            <a href="/#">Twitter</a>
            <a href="/#">LinkedIn</a>
          </div>
          <span className="footer__copy">© 2024 ARCHI-TECH Global Systems. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}

export default Home;
