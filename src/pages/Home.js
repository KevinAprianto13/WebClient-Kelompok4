import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import systemArchImg from '../system_arch.png';
import cloudFrameworkImg from '../cloud_framework.png';
import securityProtocolsImg from '../security_protocols.png';
import processAutomationImg from '../process_automation.png';
import identityImg from '../identity.png';
import heroArchitectureImg from '../hero_architecture.png';


function Home() {
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setInsight({ quote: data.quote, author: data.author });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching insight:', err);
        // Fallback quote
        setInsight({
          quote: "Simplicity is the ultimate sophistication.",
          author: "Leonardo da Vinci"
        });
        setLoading(false);
      });
  }, []);

  return (

    <main>
      <section className="hero">
        <img src={heroArchitectureImg} alt="" className="hero__bg-image" />
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
              <span className="label-tag">CAPABILITIES</span>
              <h2>Featured Services</h2>
            </div>
            <Link to="/services" className="capabilities__view-all">View All Services</Link>
          </div>
          <div className="services-grid">
            <article className="service-card service-card--wide">
              <div className="service-card__content">
                <h3>System Architecture Design</h3>
                <p>
                  Designing scalable, secure, and future-ready system architectures that
                  align technology infrastructure with business objectives while ensuring
                  long-term reliability and performance.
                </p>
              </div>
              <img
                src={systemArchImg}
                alt="System Architecture Design"
                className="service-card__image service-card__image--wide"
              />
            </article>

            <article className="service-card service-card--tall">
              <img
                src={cloudFrameworkImg}
                alt="Information Mapping"
                className="service-card__image service-card__image--square"
              />
              <div className="service-card__content">
                <h3>Information Mapping</h3>
                <p>
                  Organizing complex information structures into intuitive data models,
                  enabling efficient workflows, better collaboration, and informed
                  decision-making across the organization.
                </p>
              </div>
            </article>

            <article className="service-card service-card--wide">
              <div className="service-card__content">
                <h3>Protocol Development</h3>
                <p>
                  Developing standardized operational protocols and technical guidelines
                  that improve consistency, strengthen security, and support seamless
                  integration between systems.
                </p>
              </div>
              <img
                src={securityProtocolsImg}
                alt="Protocol Development"
                className="service-card__image service-card__image--wide"
              />
            </article>

            <article className="service-card service-card--tall">
              <img
                src={processAutomationImg}
                alt="Flow Optimization"
                className="service-card__image service-card__image--square"
              />
              <div className="service-card__content">
                <h3>Flow Optimization</h3>
                <p>
                  Optimizing operational processes through intelligent workflow design,
                  reducing bottlenecks, improving efficiency, and maximizing overall
                  system productivity.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section identity">
        <div className="container identity__grid">
          <div className="identity__left">
            <img src={identityImg} alt="Our Identity" className="identity__image" />
          </div>
          <div className="identity__right">
            <span className="label-tag">OUR IDENTITY</span>
            <h2>About ARCHI-TECH Global Systems</h2>
            <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', fontSize: '15px' }}>
              ARCHI-TECH Global Systems is a leading engineering and design firm specializing in resilient digital and physical infrastructures. We develop advanced system frameworks, automate enterprise pipelines, and secure cloud environments to power modern global enterprises. Our systems-first methodology guarantees that every layer of structure is built to scale and withstand the pressure of high-performance operations.
            </p>
            <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', fontSize: '15px', marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
              With a dedicated team of systems architects and structural engineers, we deliver state-of-the-art architectures that optimize data flow and system integration. We bridge the gap between complex requirements and clear, maintainable implementations.
            </p>
            <Link to="/about" className="btn btn-outline-black-box">
              Learn Our History
            </Link>
          </div>
        </div>
      </section>
      {/* Dynamic API Section: Daily Architectural Insight */}
      <section className="section dynamic-insights" style={{ background: '#0b0f19', color: '#ffffff', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBlock: '60px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', marginInline: 'auto' }}>
          <span className="label-tag" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '16px' }}>
            Daily System Insight (Public API)
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px' }}>Inspirational Quote of the Day</h2>
          {loading ? (
            <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>Loading dynamic insights from external cloud services...</p>
          ) : (
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '30px 40px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
              <blockquote style={{ fontSize: '18px', color: '#f3f4f6', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '16px', position: 'relative' }}>
                "{insight.quote}"
              </blockquote>
              <cite style={{ fontSize: '14px', color: '#3b82f6', fontWeight: '600', fontStyle: 'normal' }}>
                — {insight.author}
              </cite>
            </div>
          )}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__content">
          <h2>Ready to construct your vision?</h2>
          <p>Contact our lead engineers to begin the architectural consultation phase for your project.</p>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--color-white)', color: 'var(--color-black)', borderColor: 'var(--color-white)' }}>
              Initiate Project
            </Link>
            <a href="/#" className="btn btn-outline-white">Download Credentials</a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;

