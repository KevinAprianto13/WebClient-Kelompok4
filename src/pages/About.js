import { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const [activePanel, setActivePanel] = useState('mission');

  return (
    <main>
      <section className="about-hero">
        <div className="container">
          <span className="label-tag">Company Profile</span>
          <h1>Engineering the Future of Architectural Systems.</h1>
          <p>
            Founded on the principles of precision and structural integrity, ARCHI-TECH provides
            the framework for modern digital and physical infrastructures.
          </p>
        </div>
      </section>

      <section className="section mission-vision">
        <div className="container">
          <div className="mv-tabs">
            <button
              type="button"
              className={`mv-tab ${activePanel === 'mission' ? 'active' : ''}`}
              onClick={() => setActivePanel('mission')}
            >
              Our Mission
            </button>
            <button
              type="button"
              className={`mv-tab ${activePanel === 'vision' ? 'active' : ''}`}
              onClick={() => setActivePanel('vision')}
            >
              Our Vision
            </button>
          </div>
          <div className="mv-panels">
            <div className={`mv-panel ${activePanel === 'mission' ? 'active' : ''}`}>
              <p>
                To architect systems of enduring quality — combining engineering discipline with
                strategic clarity to deliver infrastructures that scale, adapt, and outlast
                the conditions that created them. We believe precision is not a constraint; it is
                the highest form of creativity.
              </p>
            </div>
            <div className={`mv-panel ${activePanel === 'vision' ? 'active' : ''}`}>
              <p>
                A world where every organization — regardless of size — has access to
                infrastructure built to the standards of the world's most demanding enterprises.
                ARCHI-TECH is building the backbone of the next generation of digital civilization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section history">
        <div className="container">
          <div className="history__header">
            <h2>Our History</h2>
            <div className="divider" />
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-item__year">2010</span>
              <h3>The Foundation</h3>
              <p>ARCHI-TECH was established with a singular mandate: build systems that hold.
                Starting from a small team in Los Angeles, the first enterprise contracts were
                in structural analysis and data architecture.
              </p>
            </article>

            <article className="timeline-item">
              <span className="timeline-item__year">2015</span>
              <h3>Global Expansion</h3>
              <p>Opening of offices in New York, London, and Tokyo marked ARCHI-TECH's
                transition into a globally-integrated firm. International contracts tripled
                within the first 18 months of expansion.
              </p>
            </article>

            <article className="timeline-item">
              <span className="timeline-item__year">2023</span>
              <h3>Digital Shift</h3>
              <p>A full pivot into cloud-native and AI-assisted infrastructure design.
                The Digital Shift initiative realigned all service offerings around
                microservices, automation, and zero-trust security frameworks.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section leadership">
        <div className="container">
          <div className="leadership__header">
            <h2>Leadership Team</h2>
            <div className="divider" style={{ marginInline: 'auto' }} />
          </div>
          <div className="team-grid">
            {[
              { name: 'Kevin Aprianto', role: 'Chief Architect' },
              { name: 'Muhammad Fadhli Akbar', role: 'Structural Lead' },
              { name: 'Muhammad Azhar Khaira', role: 'Operations Director' },
              { name: 'Muh. Awaluddin', role: 'Creative Strategist' },
              { name: 'Markus Dimas Bayunta', role: 'Engineering Lead' },
            ].map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-card__photo" />
                <div className="team-card__name">{member.name}</div>
                <div className="team-card__role">{member.role}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="join-cta">
        <div className="container">
          <h2>Join Our Structural Movement.</h2>
          <div className="join-cta__actions">
            <button type="button" className="btn btn-outline-white">View Openings</button>
            <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--color-white)', color: 'var(--color-black)', borderColor: 'var(--color-white)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;
