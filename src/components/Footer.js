function Footer() {
  const links = [
    'Privacy Policy',
    'Terms of Service',
    'Cookies',
    'Sitemap',
    'Twitter',
    'LinkedIn',
  ];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">ARCHI-TECH</span>
        <div className="footer__links">
          {links.map((label) => (
            <a key={label} href="#!">{label}</a>
          ))}
        </div>
        <span className="footer__copy">© 2024 ARCHI-TECH Global Systems. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
