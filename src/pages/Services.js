import { Link } from 'react-router-dom';
import systemArchImg from '../system_arch.png';
import cloudFrameworkImg from '../cloud_framework.png';
import processAutomationImg from '../process_automation.png';
import securityProtocolsImg from '../security_protocols.png';
import legacyModernizationImg from '../legacy_modernization.png';


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
          <h1>SYSTEMIC SOLUTIONS FOR MODERN ARCHITECTURES</h1>
          <p>
            We provide end-to-end technical frameworks designed for scalability,
            performance, and industrial-grade reliability.
          </p>
        </div>
      </section>

      <section className="section services-grid-section">
        <div className="container services-grid-container">
          <div className="services-grid-row services-grid-row--1">
            {/* Row 1, Card 1: Wide Card (index 0) */}
            <article className="service-card service-card--wide">
              <div className="service-card__content">
                <div className="service-card__icon">{services[0].icon}</div>
                <h3>{services[0].title}</h3>
                <p>{services[0].description}</p>
                <Link to="/contact" className="learn-more-link">LEARN MORE</Link>
              </div>
              <img src={systemArchImg} alt="Structural Systems Analysis" className="service-card__image service-card__image--wide" />
            </article>

            {/* Row 1, Card 2: Tall Card (index 1) */}
            <article className="service-card service-card--tall">
              <img src={cloudFrameworkImg} alt="Cloud Frameworks" className="service-card__image service-card__image--square" />
              <div className="service-card__content">
                <div className="service-card__icon">{services[1].icon}</div>
                <h3>{services[1].title}</h3>
                <p>{services[1].description}</p>
                <Link to="/contact" className="learn-more-link">LEARN MORE</Link>
              </div>
            </article>
          </div>

          <div className="services-grid-row services-grid-row--2">
            {/* Row 2, Column 1: Tall Card (index 2) */}
            <article className="service-card service-card--tall-row2">
              <img src={processAutomationImg} alt="Process Automation" className="service-card__image service-card__image--square" />
              <div className="service-card__content">
                <div className="service-card__icon">{services[2].icon}</div>
                <h3>{services[2].title}</h3>
                <p>{services[2].description}</p>
                <Link to="/contact" className="learn-more-link">LEARN MORE</Link>
              </div>
            </article>

            {/* Row 2, Column 2: Tall Card (index 3) */}
            <article className="service-card service-card--tall-row2">
              <img src={securityProtocolsImg} alt="Security Protocols" className="service-card__image service-card__image--square" />
              <div className="service-card__content">
                <div className="service-card__icon">{services[3].icon}</div>
                <h3>{services[3].title}</h3>
                <p>{services[3].description}</p>
                <Link to="/contact" className="learn-more-link">LEARN MORE</Link>
              </div>
            </article>

            {/* Row 2, Column 3: Tall Card (index 4) */}
            <article className="service-card service-card--tall-row2">
              <img src={legacyModernizationImg} alt="Legacy Modernization" className="service-card__image service-card__image--square" />
              <div className="service-card__content">
                <div className="service-card__icon">{services[4].icon}</div>
                <h3>{services[4].title}</h3>
                <p>{services[4].description}</p>
                <Link to="/contact" className="learn-more-link">LEARN MORE</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="quote-cta">
        <div className="container quote-cta__grid">
          <div className="quote-cta__left">
            <h2>READY FOR INTEGRATION?</h2>
            <p>Initiate a technical scoping session with our lead architects. We provide detailed specifications and fixed-cost estimations.</p>
            <div className="quote-badges">
              <span className="quote-badge">
                <svg className="badge-check-icon" viewBox="0 0 24 24" width="14" height="14">
                  <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
                24H Response
              </span>
              <span className="quote-badge">
                <svg className="badge-check-icon" viewBox="0 0 24 24" width="14" height="14">
                  <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
                Detailed Specs
              </span>
            </div>
          </div>
          <div className="quote-cta__right">
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
                <button type="submit" className="btn btn-primary" style={{ background: 'var(--color-white)', color: 'var(--color-black)', borderColor: 'var(--color-white)' }}>
                  Request a Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Services;
