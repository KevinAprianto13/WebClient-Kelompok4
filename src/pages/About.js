import { Link } from 'react-router-dom';
import kevinPhoto from '../kevin.png';
import fadhliPhoto from '../fadhli.png';
import azharPhoto from '../azhar.png';
import awaluddinPhoto from '../awaluddin.png';
import dimasPhoto from '../dimas.png';
import aboutHeroImg from '../about_hero.png';


function About() {
  return (
    <main>
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__left">
            <span className="label-tag">COMPANY PROFILE</span>
            <h1>Engineering the future of architectural systems.</h1>
            <p>
              Founded on the principles of precision and structural integrity, ARCHI-TECH provides
              the framework for modern digital and physical infrastructures.
            </p>
          </div>
          <div className="about-hero__right">
            <img src={aboutHeroImg} alt="Engineering the future" className="about-hero__image" />
          </div>
        </div>
      </section>

      <section className="section mission-vision">
        <div className="container mission-vision__grid">
          <div className="mission-vision__column">
            <h2>Our Mission</h2>
            <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', fontSize: '15px' }}>
              To engineer highly resilient and scale-ready system architectures that empower global organizations to automate complex workflows, secure operations under a zero-trust model, and optimize performance.
            </p>
          </div>
          <div className="mission-vision__column">
            <h2>Our Vision</h2>
            <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', fontSize: '15px' }}>
              To establish the global benchmark for technical infrastructure engineering, defining modern standards for zero-trust cloud frameworks, modular design, and robust system automation.
            </p>
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
              <span className="timeline-item__year timeline-item__year--solid">2010</span>
              <h3>The Foundation</h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.5', fontSize: '13.5px', marginTop: 'var(--space-2)' }}>
                ARCHI-TECH was established in California with a core focus on structural systems design and systems engineering consultation.
              </p>
            </article>

            <article className="timeline-item">
              <span className="timeline-item__year timeline-item__year--outline">2015</span>
              <h3>Global Expansion</h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.5', fontSize: '13.5px', marginTop: 'var(--space-2)' }}>
                Opened offices in New York and London, expanding our engineering services to financial institutions and large-scale cloud ecosystems.
              </p>
            </article>

            <article className="timeline-item">
              <span className="timeline-item__year timeline-item__year--outline">2023</span>
              <h3>Digital Shift</h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.5', fontSize: '13.5px', marginTop: 'var(--space-2)' }}>
                Launched our automated integration suite and transitioned to offering specialized zero-trust cloud and protocol modernization solutions.
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
              { name: 'Kevin Aprianto', role: 'Chief Architect', photo: kevinPhoto },
              { name: 'Muhammad Fadhli Akbar', role: 'Structural Lead', photo: fadhliPhoto },
              { name: 'Muhammad Azhar Khaira', role: 'Operations Director', photo: azharPhoto },
              { name: 'Muh. Awaluddin', role: 'Creative Strategist', photo: awaluddinPhoto },
              { name: 'Markus Dimas Bayunta', role: 'Engineering Lead', photo: dimasPhoto },
            ].map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-card__photo has-photo">
                  <img src={member.photo} alt={member.name} />
                </div>
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
