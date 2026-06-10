import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      title: 'Structural Systems Analysis',
      description: 'Advanced stress testing and integrity verification for large-scale digital infrastructures. We utilize mathematical modeling to ensure long-term stability across all architectural layers.',
      icon: (
        <svg viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: 'Cloud Frameworks',
      description: 'Deployment of high-availability cloud environments optimized for compute-heavy workloads. Multi-region failover, auto-scaling groups, and infrastructure-as-code pipelines.',
      icon: (
        <svg viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: 'Process Automation',
      description: 'Standardizing repetitive workflows through robotic process automation and custom script orchestration. Reduce operational overhead while increasing throughput and consistency.',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        </svg>
      ),
    },
    {
      title: 'Security Protocols',
      description: 'Zero-trust architecture implementation and rigorous cryptographic audit cycles. End-to-end encryption, identity access management, and continuous threat monitoring.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Legacy Modernization',
      description: 'Deconstruction and rebuilding of legacy monoliths into resilient microservice ecosystems. Phased migration strategies with zero downtime and full backward compatibility.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        </svg>
      ),
    },
  ];

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <span className="label-tag">Capabilities</span>
          <h1>Systemic Solutions for Modern Architectures</h1>
          <p>
            We provide end-to-end technical frameworks designed for scalability,
            performance, and industrial-grade reliability.
          </p>
        </div>
      </section>

      <section className="section services-list">
        <div className="container">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <div className="service-row__title-col">
                <div className="service-row__icon">{service.icon}</div>
                <div className="service-row__name">{service.title}</div>
              </div>
              <div className="service-row__desc-col">
                <p>{service.description}</p>
              </div>
              <div className="service-row__action">
                <Link to="/contact" className="learn-more-link">Learn More</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-cta">
        <div className="container">
          <h2>Ready for Integration?</h2>
          <p>Initiate a technical scoping session with our lead architects. We provide detailed specifications and fixed-cost estimations.</p>

          <div className="quote-badges">
            <span className="quote-badge">24H Response</span>
            <span className="quote-badge">Detailed Specs</span>
          </div>

          <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="sysType">System Type</label>
              <input id="sysType" type="text" className="form-control" placeholder="e.g. Enterprise CRM" />
            </div>
            <div className="form-group">
              <label htmlFor="workload">Workload Scale</label>
              <input id="workload" type="text" className="form-control" placeholder="10k+ Users" />
            </div>
            <div className="form-group full-width">
              <label htmlFor="reqOverview">Requirements Overview</label>
              <textarea id="reqOverview" className="form-control" placeholder="Describe the structural goals..." />
            </div>
            <div className="full-width">
              <button type="submit" className="btn btn-primary" style={{ background: 'var(--color-white)', color: 'var(--color-black)' }}>
                Request a Quote
              </button>
            </div>
          </form>
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

export default Services;
