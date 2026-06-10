import { useState } from 'react';

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
        <div className="container">
          <span className="label-tag">Connect With Us</span>
          <h1>Get in Touch</h1>
          <p>
            Our architectural engineering team is ready to discuss your next project.
            Reach out through the form below or find our office locations on the map.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="contact-form__fields">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="email@archi-tech.com"
                    value={formData.email}
                    onChange={handleChange}
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
                />
              </div>
              <button type="submit" className="btn btn-primary">
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

            <div className="map-placeholder">
              <svg viewBox="0 0 24 24">
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" y1="3" x2="9" y2="18" />
                <line x1="15" y1="6" x2="15" y2="21" />
              </svg>
              <span>[ Map Placeholder ]</span>
              <span style={{ fontSize: '9px' }}>Los Angeles, California</span>
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
              <a href="/#" className="office-card__link">View on map</a>
            </article>
          ))}
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

export default Contact;
