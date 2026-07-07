function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">ARCHI-TECH</span>

        <div className="footer__links-group footer__links-group--primary">
          <a href="slides.html" target="_blank" rel="noopener noreferrer">Slides Presentasi</a>
          <button type="button">Privacy Policy</button>
          <button type="button">Terms of Service</button>
          <button type="button">Cookies</button>
          <button type="button">Sitemap</button>
        </div>

        <div className="footer__links-group footer__links-group--secondary">
          <button type="button">Twitter</button>
          <button type="button">LinkedIn</button>
        </div>

        <span className="footer__copy">© 2026 ARCHI-TECH GLOBAL SYSTEMS. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}

export default Footer;
