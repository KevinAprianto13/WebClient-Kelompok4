import { useState } from 'react';
import mapImg from '../map.png';
import contactHeroImg from '../contact_hero.png';


function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', subject: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Message submitted. Thank you!');
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <main>
      <section className="contact-hero">
        <div className="container contact-hero__grid">
          <div className="contact-hero__left">
            <span className="label-tag">CONNECT WITH US</span>
            <h1>Get in Touch</h1>
            <div className="divider" />
            <p>
              Our architectural engineering team is ready to discuss your next project.
              Reach out through the form below or find our office locations on the map.
            </p>
          </div>
          <div className="contact-hero__right">
            <img src={contactHeroImg} alt="Office blueprint layout" className="contact-hero__image" />
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="contact-form__fields">
              <div className="row mb-3">
                <div className="col-md-6 form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="email@archi-tech.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-control"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Describe your architectural requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary-black">
                Send Message
              </button>
            </form>
          </div>

          <aside className="office-panel">
            <div>
              <h3 className="office-panel__title">Office Details</h3>
            </div>
            <div className="office-detail-item">
              <div className="office-detail-item__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="office-detail-item__label">Headquarters</div>
                <div className="office-detail-item__value">1200 Architecture Way,<br />Design District, CA 90210</div>
              </div>
            </div>

            <div className="office-detail-item">
              <div className="office-detail-item__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.62a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <div className="office-detail-item__label">Phone</div>
                <div className="office-detail-item__value">+1 (555) 000-8888</div>
              </div>
            </div>

            <div className="office-detail-item">
              <div className="office-detail-item__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="office-detail-item__label">Inquiries</div>
                <div className="office-detail-item__value">contact@archi-tech.global</div>
              </div>
            </div>

            <div className="office-detail-item">
              <div className="office-detail-item__icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="office-detail-item__label">Business Hours</div>
                <div className="office-detail-item__value">Mon – Fri: 9:00 AM – 6:00 PM</div>
              </div>
            </div>

            <div className="map-placeholder-wireframe">
              <img src={mapImg} alt="Los Angeles Headquarters Map" className="map-image" />
              <div className="map-placeholder-content">
                <span>[ OFFICE LOCATION ]</span>
                <span className="map-location">Los Angeles, California</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section offices-section">
        <div className="container offices-grid">
          {[{
            title: 'New York Office',
            address: '5th Ave, Suite 400<br />NY 10001'
          }, {
            title: 'London Hub',
            address: '30 St Mary Axe<br />London EC3A 8EP'
          }, {
            title: 'Tokyo Studio',
            address: '1-1-1 Minato-ku<br />Tokyo 105-0001'
          }].map((office) => (
            <article className="office-card" key={office.title}>
              <div className="office-card__title">{office.title}</div>
              <div className="office-card__address" dangerouslySetInnerHTML={{ __html: office.address }} />
              <button type="button" className="office-card__link">View on map</button>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Contact;
