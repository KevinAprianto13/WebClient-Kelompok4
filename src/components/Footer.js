function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">ARCHI-TECH</span>
        
        <div className="footer__links-group footer__links-group--primary">
          <a href="slides.html" target="_blank" rel="noopener noreferrer">Slides Presentasi</a>
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms of Service</a>
          <a href="#!">Cookies</a>
          <a href="#!">Sitemap</a>
        </div>
        
        <div className="footer__links-group footer__links-group--secondary">
          <a href="#!">Twitter</a>
          <a href="#!">LinkedIn</a>
        </div>
        
        <span className="footer__copy">© 2024 ARCHI-TECH GLOBAL SYSTEMS. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}

export default Footer;
